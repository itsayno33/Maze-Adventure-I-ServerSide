<?php
    // MAZE関係クラス全般

    declare(strict_types=1);

    // 本番環境はURLの先頭を書き換える
    $db_host = '127.0.0.1';
    
    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");
    
    // 利用クラス等の読み込み
    require_once 'lib/Class_DspMessage.php'; // 画面メッセージの表示用クラス
    
    // ダンジョンマップのセルの種類を表す列挙型
    // MzKind::NoDef: 未定義・不明
    // MzKind::Floor: 床
    // MzKind::Unexp: 未踏地
    // MzKind::Stone: 石壁
    // MzKind::Empty: 初期状態・何もなし
    // 
    // function to_int(MzKind):      int        列挙型に対応する値(整数値)を返す
    // function from_int(int):       MzKind     整数値に対応する列挙型を返す(クラスメソッド)
    // function to_letter(MzKind):   string     列挙型に対応する文字を返す(ダンジョンの2D表示用)
    // function from_letter(string): MzKind     文字に対応する列挙型を返す(クラスメソッド)
    require_once 'lib/Enum_MzKind.php';

    // 方向を表すクラス
    require_once 'lib/Class_Direct.php';

    // 位置・経路を表すクラス全般
    require_once 'lib/Class_PointSet.php';


    class MazeCell {
        public    MzKind   $cell;

        public function __construct(MzKind $kind = MzKind::Empty) {
            $this->cell = $kind;
        }

        public function get_cell(): MzKind {
            return $this->cell;
        }

        public function set_cell(MzKind $kind): bool {
            $this->cell = $kind;
            return true;
        }

        public function set_cell_from_int(int $kind_id): bool {
            global $gv;

            $k = MzKind::tryFrom($kind_id);
            if (is_null($k)) {
                $gv->mes->set_err_message("ダンジョンに不正なセルを代入しようとしてます。(3)");
                $gv->mes->set_err_message("Value = 『{$kind_id}』");

                $this->cell =  MzKind::NoDef;
                return false;
            }
            $this->cell = $k;
            return true;
        }

        public function to_letter(): string {
            global $gv;
            return $this->cell->to_letter();
        }

        public function from_letter(string $s): void {
            global $gv;
            $this->cell->from_letter($s);
        }

        public function encode(): string {
            return sprintf('%02x',$this->cell->value);
        }

        public function decode(string $s): void {
            $num = intval($s, 16);
            $this->set_cell_from_int($num);
            return;
        }
    }


    class Maze {
        protected int   $maze_id;
        protected int   $maze_floor;

        protected int   $size_x;  /* 外壁も含めたセルの数(横) */ 
        protected int   $size_y; /* 外壁も含めたセルの数(縦) */
        protected int   $limit_of_room; /* ランダム生成の際の部屋の数の最大数 */
        protected int   $max_size_of_room; /* ランダム生成の際の部屋の大きさ */
        protected array $cells;

        protected const Max_x    = 21;
        protected const Max_y    = 21;
        protected const Limit_of_room =  5;
        protected const Max_size_of_room =  3;

        public function __construct(?array $pp = null) {
            global $gv;

            $this->maze_id    = 0;
            $this->maze_floor = 1;

            $fill_kind              = MzKind::Empty;
            $this->size_x           = Maze::Max_x;
            $this->size_y           = Maze::Max_y;
            $this->limit_of_room    = Maze::Limit_of_room;
            $this->max_size_of_room = Maze::Max_size_of_room;

            if (!is_null($pp) && is_array($pp)) {
                if(array_key_exists('fill_kind', $pp) && ($pp['fill_kind'] instanceof MzKind)) {
                    $fill_kind = $pp['fill_kind'];
                }
                if(array_key_exists('size_x', $pp) && is_numeric($pp['size_x']) && $pp['size_x'] > 3) {
                    $this->size_x     = $pp['size_x'];
                }
                if(array_key_exists('size_y', $pp) && is_numeric($pp['size_y']) && $pp['size_y'] > 3) {
                    $this->size_y     = $pp['size_y'];
                }
                if(array_key_exists('limit_room', $pp) && is_numeric($pp['limit_room']) && $pp['limit_room'] > 0) {
                    $this->limit_of_room = $pp['limit_room'];
                }
                if(array_key_exists('room_size', $pp) && is_numeric($pp['room_size']) && $pp['room_size'] >= 3) {
                    $this->max_size_of_room = $pp['room_size'];
                }
            }

            $this->cells = [];
            for ($i = 0; $i < $this->size_y; $i++) {
                $this->cells[$i] = [];
                for ($j = 0; $j < $this->size_x; $j++) {
                    array_push($this->cells[$i], new MazeCell($fill_kind));
                }
            }
        }

        public function get_size_x(): int {return $this->size_x;}
        public function get_size_y(): int {return $this->size_y;}

        public function get_cell(int $pos_x, int $pos_y): int {
            return $this->cells[$pos_y][$pos_x]->get_cell();
        }

        public function set_cell(int $pos_x, int $pos_y, MzKind $kind): bool {
            return $this->cells[$pos_y][$pos_x]->set_cell($kind);
        }

        public function fill_cell(MzKind $kind): void {
            for ($h = 0; $h < $this->size_y; $h++)
                for ($w = 0; $w < $this->size_x; $w++)
                    $this->set_cell($w, $h, $kind);
            return;
        }

        public function set_box(MzKind $kind, int $top_x, int $top_y, int $size_x, int $size_y): void {
            if ($top_x + $size_x > $this->size_x) $size_x = $this->size_x  - $top_x + 1; 
            if ($top_y + $size_y > $this->size_y) $size_y = $this->size_y - $top_y + 1;
            
            $top = $top_y;
            $btm = $top    + $size_y - 1;
            $lft = $top_x;
            $rgt = $lft    + $size_x - 1;
            
            // 北側(上)と南側(下)を石壁に
            for ($x = 0; $x < $size_x; $x++) {
                $this->set_cell($x, $top, $kind);
                $this->set_cell($x, $btm, $kind);
            }
            // 東側(右)と西側(左)を石壁に
            for ($y = 0; $y < $size_y; $y++) {
                $this->set_cell($lft, $y, $kind);
                $this->set_cell($rgt, $y, $kind);
            }
            return;
        }

        public function create_maze(): void {
            $size_x       = $this->size_x;
            $size_y       = $this->size_y;
    
    
            // ダンジョン全体を未踏地とする
            $this->fill_cell(MzKind::Unexp);
    
            // ダンジョンの輪郭を石壁にする
            $this->set_box(MzKind::Stone, 0, 0, $size_x, $size_y);
    
            // 通路に一つ置きに壁が成長するポイントを設定する
            // ポイントから壁を伸ばす方向をランダムに決める
            $points = new PointSet();
            for ($h = 2; $h < $size_y - 2; $h += 2){
                for ($w = 2; $w < $size_x - 2; $w += 2){
                    $di = random_int(0, Direct::MAX);
                    $points->push(new PointLink($w, $h, $di));
                }
            }
    
            // 乱数でいくつか部屋を作る
            $rooms_array = [];
            $num_of_room = random_int(0, $this->limit_of_room);
            for ($cnt = 0; $cnt < $num_of_room; $cnt++) {
                $leng_x = random_int(1, $this->max_size_of_room) * 2 + 1;
                $leng_y = random_int(1, $this->max_size_of_room) * 2 + 1;
                $room_x = random_int(0, ($size_x - $size_x) / 2) * 2;
                $room_y = random_int(0, ($size_y - $size_y) / 2) * 2;
                array_push($rooms_array, ['tx' => $room_x, 'ty' => $room_y, 'sx' => $leng_x, 'sy' => $leng_y]);
            }
    
            // 部屋の中のポイントを削除する
            foreach ($rooms_array as $room) {
                for ($ii = 0; $ii < count($points->set); $ii++) {
                    $p = $points->set[$ii];
                    if (is_null($p)) continue;
    
                    if (    ($p->x >= $room['tx']) 
                        &&  ($p->x <= $room['tx'] + $room['sx'])
                        &&  ($p->y >= $room['ty'])
                        &&  ($p->y <= $room['ty'] + $room['sy'])) {
                            $points->remove($p);
                        }
                }
            }
    
    
            // ポイントから壁を成長させて迷路を作る
            foreach ($points->set as $p) {
                if (is_null($p)) continue;
                
                // ポイントの位置に石壁を置く
                $this->set_cell($p->x, $p->y, MzKind::Stone);
                // 柱の東西南北のいずれかにも石壁を置く
                $direction = [0, 0, 0, 0];
                switch ($p->di) {
                    case Direct::N: 
                        $direction[Direct::N] = 1; // 北
                        break;
                    case Direct::E: 
                        $direction[Direct::E] = 1; // 東
                        break;
                    case Direct::S: 
                        $direction[Direct::S] = 1; // 南
                        break;
                    case Direct::W: 
                        $direction[Direct::W] = 1; // 西
                        break;
                }
    
                $this->set_cell(
                    $p->x - $direction[Direct::W] + $direction[Direct::E], 
                    $p->y - $direction[Direct::N] + $direction[Direct::S], 
                    MzKind::Stone);
                
            }

            // 閉鎖空間が出来ていたら出口を作る
            // ポイントをトレースして、既出のポイントに繋がっていたら閉鎖空間
            foreach ($points->set as $set) {
                if (is_null($set)) continue;

                [$yn, $trace_set] = $this->check_close($set->x, $set->y, $points, new PointSet());
                if ($yn) {
                    $this->open_exit($trace_set, MzKind::Unexp);
                    foreach ($trace_set->set as $t) $points->remove($t);
                }
            }
            return;
        }
    
        protected function check_close(int $x, int $y, PointSet $point_set, PointSet $trace_set): array {
            if ($x < 2 || $y < 2 || $x > $this->size_x - 2 || $y > $this->size_y - 2) 
                return [false, []];
            if ($point_set->is_exist($x, $y) == false) return [false, []];
            if ($trace_set->is_exist($x, $y) == true)  return [true,  $trace_set];

            $p = $point_set->get_point($x, $y);
            $trace_set->push(new PointLink($x, $y, $p->di));
            switch ($p->di) {
                case Direct::N:  // 北
                    $next_x = $x;
                    $next_y = $y - 2;
                    break;
                case Direct::E:  // 東
                    $next_x = $x + 2;
                    $next_y = $y;
                    break;
                case Direct::S:  // 南
                    $next_x = $x;
                    $next_y = $y + 2;
                    break;
                case Direct::W:  // 西
                    $next_x = $x - 2;
                    $next_y = $y;
                    break;
                }
                return $this->check_close($next_x, $next_y, $point_set, $trace_set);
        }

        protected function open_exit(PointSet $p, MzKind $kind): void {
            $cnt = random_int(0,count($p->set) - 1);
            $pp  = $p->set[$cnt];

            $direction = [0, 0, 0, 0];
            switch ($pp->di) {
                case Direct::N: 
                    $direction[Direct::N] = 1; // 北
                    break;
                case Direct::E: 
                    $direction[Direct::E] = 1; // 東
                    break;
                case Direct::S: 
                    $direction[Direct::S] = 1; // 南
                    break;
                case Direct::W: 
                    $direction[Direct::W] = 1; // 西
                    break;
            }

            $this->set_cell(
                $pp->x - $direction[Direct::W] + $direction[Direct::E], 
                $pp->y - $direction[Direct::N] + $direction[Direct::S], 
                $kind);
            return;
        }

        public function to_string(): string {
            $ret_str = '';
            for ($h = 0; $h < count($this->cells); $h++) {
                for ($w = 0; $w < count($this->cells[$h]); $w++) {
                    $ret_str .= $this->cells[$h][$w]->to_letter();
                }
                $ret_str .= "\n";
            }
            return $ret_str;
        }

        public function from_string(string $s): Maze {
            $maze_raws = mb_split("\n", $s);

            $size_y    = min($this->size_y, count($maze_raws));
            for ($h = 0; $h < $size_y; $h++) {
                $cells = preg_split('//u', $maze_raws[$h], -1, PREG_SPLIT_NO_EMPTY);
                
                $size_x    = min($this->size_x, count($cells));
                for ($w = 0; $w < $this->size_x; $w++) {
                    $this->set_cell($w, $h, MzKind::from_letter($cells[$w]));
                    $w++;
                }
            }
            return $this;
        }

        public function encode(): string {
            $raw_array = [];
            for ($h = 0; $h < count($this->cells); $h++) {
                $col_array = [];
                for ($w = 0; $w < count($this->cells[$h]); $w++) {
                    array_push($col_array, $this->cells[$h][$w]->encode());
                }
                array_push($raw_array, implode(':', $col_array));
            }
            return implode('&', $raw_array);
        }

        public function decode(string $str): void {
            for ($h = 0; $h < $this->size_y; $h++) 
                for ($w = 0; $w < $this->size_x; $w++) 
                    $this->set_cell($w, $h, MzKind::Empty);
            
            $raw_array = explode('&', $str);
            $size_y    = min($this->size_y, count($raw_array));
            for ($h = 0; $h < $size_y; $h++) {
                $col_array = explode(':', $raw_array[$h]);
                $size_x    = min($this->size_x, count($col_array));
                for ($w = 0; $w < $size_x; $w++) {
                    $this->cells[$h][$w]->decode($col_array[$w]);;
                }
            }
            return;
        }
    }

?>