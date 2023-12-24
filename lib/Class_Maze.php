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
        protected int    $maze_id;
        protected int    $maze_floor;
        protected string $title;

        protected int    $size_x;  /* 外壁も含めたセルの数(横) */ 
        protected int    $size_y;  /* 外壁も含めたセルの数(縦) */
        protected int    $size_z;  /* Mazeの階層の数 */
        protected int    $limit_of_room; /* ランダム生成の際の部屋の数の最大数 */
        protected int    $max_size_of_room; /* ランダム生成の際の部屋の大きさ */
        protected array  $cells;
        protected array  $masks;

        protected const  Max_x    = 21;
        protected const  Max_y    = 21;
        protected const  Max_z    =  1;
        protected const  Limit_of_room =  5;
        protected const  Max_size_of_room =  3;

        public function __construct(?array $pp = null) {
            global $gv;

            $this->maze_id    = 0;
            $this->maze_floor = 0;
            $this->title      = 'NewMaze_'. sprintf("%03x",$this->maze_id);


            $this->size_x           = Maze::Max_x;
            $this->size_y           = Maze::Max_y;
            $this->size_z           = Maze::Max_z;
            $this->limit_of_room    = Maze::Limit_of_room;
            $this->max_size_of_room = Maze::Max_size_of_room;

            $this->cells = [];
            $this->masks = [];

            $this->set_maze($pp);
        }

        public function set_maze(?array $pp = null) {

            $fill_kind              = MzKind::Empty;
            if (!is_null($pp) && is_array($pp)) {
                if(array_key_exists('fill_kind', $pp) && ($pp['fill_kind'] instanceof MzKind)) {
                    $fill_kind = $pp['fill_kind'];
                }
                if(array_key_exists('id', $pp) && (is_numeric($pp['id']))) {
                    $this->maze_id    = $pp['id'];
                }
                if(array_key_exists('floor', $pp) && (is_numeric($pp['floor']) && $pp['floor'] > 0)) {
                    $this->maze_floor = $pp['floor'];
                }
                if(array_key_exists('title', $pp) && ($pp['title'] != '')) {
                    $this->title      = $pp['title'];
                } else {
                    $this->title      = 'NewMaze_'. sprintf("%x03",$this->maze_id);
                }
                if(array_key_exists('size_x', $pp) && is_numeric($pp['size_x']) && $pp['size_x'] > 3) {
                    $this->size_x     = $pp['size_x'];
                }
                if(array_key_exists('size_y', $pp) && is_numeric($pp['size_y']) && $pp['size_y'] > 3) {
                    $this->size_y     = $pp['size_y'];
                }
                if(array_key_exists('size_z', $pp) && is_numeric($pp['size_z']) && $pp['size_z'] >= 0) {
                    $this->size_z     = $pp['size_z'];
                }
                if(array_key_exists('limit_room', $pp) && is_numeric($pp['limit_room']) && $pp['limit_room'] > 0) {
                    $this->limit_of_room = $pp['limit_room'];
                }
                if(array_key_exists('room_size', $pp) && is_numeric($pp['room_size']) && $pp['room_size'] >= 3) {
                    $this->max_size_of_room = $pp['room_size'];
                }
            }
            $this->cells = [];
            $this->masks = [];
            for ($z = 0; $z < $this->size_z; $z++) {
                $this->cells[$z] = [];
                $this->masks[$z] = [];
                for ($y = 0; $y < $this->size_y; $y++) {
                    $this->cells[$z][$y] = [];
                    $this->masks[$z][$y] = [];
                    for ($x = 0; $x < $this->size_x; $x++) {
                        array_push($this->cells[$z][$y], new MazeCell($fill_kind));
                        array_push($this->masks[$z][$y], true);
                    }
                }
            }
        }

        public function get_size_x(): int {return $this->size_x;}
        public function get_size_y(): int {return $this->size_y;}
        public function get_size_z(): int {return $this->size_z;}

        public function get_cell(int $pos_x, int $pos_y, int $pos_z): MzKind {
            return $this->cells[$pos_z][$pos_y][$pos_x]->get_cell();
        }

        public function set_cell(MzKind $kind, int $pos_x, int $pos_y, int $pos_z = 0): bool {
                return $this->cells[$pos_z][$pos_y][$pos_x]->set_cell($kind);
        }

        public function fill_cell(MzKind $kind, int $floor = 0): void {
            for ($h = 0; $h < $this->size_y; $h++)
            for ($w = 0; $w < $this->size_x; $w++)
                $this->set_cell($kind, $w, $h, $floor);
            return;
        }

        public function set_box(MzKind $kind, int $top_x, int $top_y, int $size_x, int $size_y, int $floor = 0): void {
            if ($top_x + $size_x > $this->size_x) $size_x = $this->size_x - $top_x + 1; 
            if ($top_y + $size_y > $this->size_y) $size_y = $this->size_y - $top_y + 1;
            
            $top = $top_y;
            $btm = $top    + $size_y - 1;
            $lft = $top_x;
            $rgt = $lft    + $size_x - 1;
            
            // 北側(上)と南側(下)を石壁に
            for ($x = 0; $x < $size_x; $x++) {
                $this->set_cell($kind, $x, $top, $floor);
                $this->set_cell($kind, $x, $btm, $floor);
            }
            // 東側(右)と西側(左)を石壁に
            for ($y = 0; $y < $size_y; $y++) {
                $this->set_cell($kind, $lft, $y, $floor);
                $this->set_cell($kind, $rgt, $y, $floor);
            }
            return;
        }

        // 階上と階下に階段を設置する
        public function create_stair(int $floor): void {
            $H_size_x       = ($this->size_x - 1) / 2;
            $H_size_y       = ($this->size_y - 1) / 2;
            $pos_x = 2 * random_int(0, $H_size_x - 1) + 1;
            $pos_y = 2 * random_int(0, $H_size_y - 1) + 1;

            // 乱数で得た座標に階段を置く
            if ($this->get_cell($pos_x, $pos_y, $floor) !== MzKind::StrUp) {
                $this->set_cell(MzKind::StrDn, $pos_x, $pos_y, $floor);
            } else {
                $this->set_cell(MzKind::StrUD, $pos_x, $pos_y, $floor);
            }
            if ($this->get_cell($pos_x, $pos_y, $floor + 1) !== MzKind::StrDn) {
                $this->set_cell(MzKind::StrUp, $pos_x, $pos_y, $floor + 1);
            } else {
                $this->set_cell(MzKind::StrUD, $pos_x, $pos_y, $floor + 1);
            }
        }

        public function create_maze(int $floor = 0): void {
            $size_x       = $this->size_x;
            $size_y       = $this->size_y;
    
    
            // ダンジョンで$floorで指定された階を未踏地にする 
            $this->fill_cell(MzKind::Unexp, $floor);
    
            // ダンジョンの輪郭を石壁にする
            $this->set_box(MzKind::Stone, 0, 0, $size_x, $size_y, $floor);
    
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
                $leng_x = random_int(1,  $this->max_size_of_room) * 2 + 1;
                $leng_y = random_int(1,  $this->max_size_of_room) * 2 + 1;
                $room_x = random_int(0, ($size_x - $leng_x) / 2) * 2;
                $room_y = random_int(0, ($size_y - $leng_y) / 2) * 2;
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
                $this->set_cell(MzKind::Stone, $p->x, $p->y, $floor);
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
                    MzKind::Stone,
                    $p->x - $direction[Direct::W] + $direction[Direct::E], 
                    $p->y - $direction[Direct::N] + $direction[Direct::S], 
                    $floor
                    );
                
            }

            // 閉鎖空間が出来ていたら出口を作る
            // ポイントをトレースして、既出のポイントに繋がっていたら閉鎖空間
            foreach ($points->set as $set) {
                if (is_null($set)) continue;

                [$yn, $trace_set] = $this->check_close($set->x, $set->y, $points, new PointSet());
                if ($yn) {
                    $this->open_exit($trace_set, MzKind::Unexp, $floor);
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

        protected function open_exit(PointSet $p, MzKind $kind, int $floor = 0): void {
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
                $kind, 
                $pp->x - $direction[Direct::W] + $direction[Direct::E], 
                $pp->y - $direction[Direct::N] + $direction[Direct::S], 
                $floor
            );
            return;
        }

        public function to_string(int $floor = 0): string {
            $ret_str = '';
            for ($h = 0; $h < count($this->cells[$floor]); $h++) {
                for ($w = 0; $w < count($this->cells[$floor][$h]); $w++) {
                    $ret_str .= $this->cells[$floor][$h][$w]->to_letter();
                }
                $ret_str .= "\n";
            }
            return $ret_str;
        }

        public function from_string(string $s, int $floor = 0): Maze {
            $maze_raws = mb_split("\n", $s);

            $size_y    = min($this->size_y, count($maze_raws));
            for ($h = 0; $h < $size_y; $h++) {
                $cells = preg_split('//u', $maze_raws[$h], -1, PREG_SPLIT_NO_EMPTY);
                
                $size_x    = min($this->size_x, count($cells));
                for ($w = 0; $w < $this->size_x; $w++) {
                    $this->set_cell(MzKind::from_letter($cells[$w]), $w, $h, $floor);
                    $w++;
                }
            }
            return $this;
        }

        public function encode(): array {
            // MAZEの文字列化
            $flr_array = [];
            for ($d = 0; $d < count($this->cells); $d++) {
                $raw_array = [];
                for ($h = 0; $h < count($this->cells[$d]); $h++) {
                    $col_array = [];
                    for ($w = 0; $w < count($this->cells[$d][$h]); $w++) {
                        array_push($col_array, $this->cells[$d][$h][$w]->encode());
                    }
                    array_push($raw_array, implode('X', $col_array));
                }
                array_push($flr_array, implode('Y', $raw_array));
            }
            $maze_str = implode('Z', $flr_array);

            // MASKの文字列化
            $flr_array = [];
            for ($d = 0; $d < count($this->masks); $d++) {
                $raw_array = [];
                for ($h = 0; $h < count($this->masks[$d]); $h++) {
                    $col_array = [];
                    for ($w = 0; $w < count($this->masks[$d][$h]); $w++) {
                        if ($this->masks[$d][$h][$w]) {
                            array_push($col_array, '1');
                        } else {
                            array_push($col_array, '0');
                        }
                    }
                    array_push($raw_array, implode('X', $col_array));
                }
                array_push($flr_array, implode('Y', $raw_array));
            }
            $mask_str = implode('Z', $flr_array);

            $ret = [    
                'id'      => $this->maze_id,
                'floor'   => $this->maze_floor,
                'title'   => $this->title,
                'size_x'  => $this->size_x,
                'size_y'  => $this->size_y,
                'size_z'  => $this->size_z,
                'maze'    => $maze_str,
                'mask'    => $mask_str,
            ];
            return $ret;

        }

        public function decode(array $d): void {

            if(array_key_exists('maze_id', $d) && is_numeric($d['maze_id'])) {
                $this->maze_id    = $d['maze_id'];
            }
            if(array_key_exists('floor', $d) && is_numeric($d['floor'])) {
                $this->maze_floor = $d['floor'];
            }
            if(array_key_exists('title', $d) && $d['title'] != '') {
                $this->title      = $d['title'];
            }
            if(array_key_exists('size_x', $d) && is_numeric($d['size_x'])) {
                $this->size_x     = $d['size_x'];
            }
            if(array_key_exists('size_y', $d) && is_numeric($d['size_y'])) {
                $this->size_y     = $d['size_y'];
            }
            if(array_key_exists('size_z', $d) && is_numeric($d['size_z'])) {
                $this->size_z     = $d['size_z'];
            }

            // MAZEの復元
            if(array_key_exists('maze', $d) && $d['maze'] != '') {
                $maze_str         = $d['maze'];

                for ($d = 0; $d < $this->size_z; $d++) 
                    for ($h = 0; $h < $this->size_y; $h++) 
                        for ($w = 0; $w < $this->size_x; $w++) 
                            $this->set_cell(MzKind::Empty, $w, $h, $d);
            
                $flr_array = explode('Z', $maze_str);
                $size_z    = min($this->size_z, count($flr_array));
                for ($d = 0; $d < $size_z; $d++) { 
                    $raw_array = explode('Y', $flr_array[$d]);
                    $size_y    = min($this->size_y, count($raw_array));
                    for ($h = 0; $h < $size_y; $h++) {
                        $col_array = explode('X', $raw_array[$h]);
                        $size_x    = min($this->size_x, count($col_array));
                        for ($w = 0; $w < $size_x; $w++) {
                            $this->cells[$d][$h][$w]->decode($col_array[$w]);
                        }
                    }
                }
            }

            // MASKの復元
            if(array_key_exists('mask', $d) && $d['mask'] != '') {
                $mask_str         = $d['mask'];
                $flr_array = explode('Z', $mask_str);
                $size_z    = min($this->size_z, count($flr_array));
                for ($d = 0; $d < $size_z; $d++) { 
                    $raw_array = explode('Y', $flr_array[$d]);
                    $size_y    = min($this->size_y, count($raw_array));
                    for ($h = 0; $h < $size_y; $h++) {
                        $col_array = explode('X', $raw_array[$h]);
                        $size_x    = min($this->size_x, count($col_array));
                        for ($w = 0; $w < $size_x; $w++) {
                            if ($col_array[$w] == '1') {
                                $this->masks[$d][$h][$w] = true;
                            } else {
                                $this->masks[$d][$h][$w] = false;
                            }
                        }
                    }
                }
            }

            return;
        }
    }

?>