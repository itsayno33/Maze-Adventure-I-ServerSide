<?php
    declare(strict_types=1);

    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");

    // 利用クラス等の読み込み
    require_once 'Class_DspMessage.php'; // 画面メッセージの表示用クラス
    require_once 'Class_PointSet.php';   // 位置情報のクラス
    require_once 'Class_Direct.php';     // 方向(東西南北)のクラス
    require_once 'Class_Hero.php';       // Hero(チームメンバー)のクラス

    class Team {
        protected int     $id      = 0;
        protected int     $save_id = 0;
        protected string  $name;
        protected string  $maze_name;
        protected string  $guld_name;
        protected int     $gold    = 0;
        protected bool    $is_hero;
        protected Point3D $cur_pos;
        protected Direct  $cur_dir;
        protected array   $heroes;

        public    function __construct(array $a = null) {
            $this->cur_pos   = new Point3D(0, 0, 0);
            $this->cur_dir   = new Direct(Direct::N);
            $this->name      = 'New Team';
            $this->maze_name = 'New Maze';
            $this->guld_name = 'New Guld';
            $this->gold      = 0;
            $this->is_hero   = true;
            $this->heroes    = [];

            $this->__init($a);
        } 
        protected function __init(array $a = null) {
            if (!is_null($a) && is_array($a)) {
                if (array_key_exists('name', $a) && ($a['name'] !== '')) {
                    $this->name = $a['name'];
                }
                if (array_key_exists('maze_name', $a) && ($a['maze_name'] !== '')) {
                    $this->name = $a['maze_name'];
                }
                if (array_key_exists('guld_name', $a) && ($a['guld_name'] !== '')) {
                    $this->name = $a['guld_name'];
                }
                if (array_key_exists('gold', $a) && (is_numeric($a['gold']))) {
                    $this->gold = intval($a['gold']);
                }
                if (array_key_exists('is_hero', $a) && (is_numeric($a['is_hero']))) {
                    if ($a['is_hero'] != '0') $this->is_hero = true; else $this->is_hero = false;
                }
                if (array_key_exists('Point3D', $a) && ($a['Point3D'] instanceof Point3D)) {
                    $this->cur_pos = $a['Point3D'];
                }
                if (
                    array_key_exists('x', $a) && (is_numeric($a['x']) && $a['x'] >  0)
                &&  array_key_exists('y', $a) && (is_numeric($a['y']) && $a['y'] >  0)
                &&  array_key_exists('z', $a) && (is_numeric($a['z']) && $a['z'] >= 0)
                ) {
                    $this->cur_pos = new Point3D($a['x'], $a['y'], $a['z']);
                }
                if (array_key_exists('Direct', $a) && ($a['Direct'] instanceof Direct)) {
                    $this->cur_dir = $a['Direct'];
                }
                if (array_key_exists('d', $a) && (is_numeric($a['d']))) {
                    $this->cur_dir = new Direct($a['d']);
                }
                if (array_key_exists('Hero', $a) && ($a['Hero'] instanceof Hero)) {
                    $this->append_hero($a['Hero']);
                }
                if (array_key_exists('Heroes', $a) && is_array($a['Heroes'])) {
                    foreach ($a['Heroes'] as $hero) {
                        if ($hero instanceof Hero) $this->append_hero($hero);
                    }
                }
            }
        }
        public function set_prp(array $a = null): void {
            $this->__init($a);
        }
        public function get_id()  : int    {return $this->id;}
        public function get_name(): string {return $this->name;}
        
        public function get_pos(): Point3D {
            return $this->cur_pos; 
        }
        public function set_pos(Point3D $p): void {
            $this->cur_pos = $p;
        }
        public function get_z(): int {
            return $this->cur_pos->z;
        }
        public function set_z(int $z): void {
            $this->cur_pos->z = $z;
        }
        public function get_dir(): Direct {
            return $this->cur_dir;
        }
        public function set_dir(Direct $d): void {
            $this->cur_dir = $d;
        }
        public function get_number_of_heroes(): int {
            return count($this->heroes);
        }
        public function get_hero(int $num): Hero|null {
            if ($num < 0 || $num >= count($this->heroes)) return null;
            return $this->heroes[$num];
        }
        public function append_hero(Hero $hero): void {
            array_push($this->heroes, $hero);
        }
        public function remove_hero(Hero $hero): void {
            for ($i = 0; $i < count($this->heroes); $i++) {
                if ($hero == $this->heroes[$i]) {
                    array_splice($this->heroes, $i, 1);
                    return;
                }
            }
        }


        public static function get_from_odb_all(PDO $db_mai, DspMessage $mes, int $save_id): array {
            [$rslt0, $team_array] = self::get_from_tbl_all($db_mai, $mes, $save_id);
            if (!$rslt0 || $mes->is_err()) {
                return [false, []];
            }
            foreach ($team_array as $team) {
                [$rslt1, $hres_array] = Hero::get_from_odb_all($db_mai, $mes, $save_id, $team->id);
                if (!$rslt1 || $mes->is_err()) {
                    return [false, []];
                }
                $team->heroes = $hres_array;
            }
            return [true, $team_array];
        }


        public function set_to_odb(PDO $db_mai, DspMessage $mes, int $save_id): bool {
            [$rslt0, $team_id] = $this->add_tbl($db_mai, $mes, $save_id);
            if (!$rslt0 || $mes->is_err()) {
                return false;
            }
            foreach ($this->heroes as $hero) {
                $rslt1 = $hero->set_to_odb($db_mai, $mes, $save_id, $team_id);
                if (!$rslt1 || $mes->is_err()) {
                    return false;
                }
            }
            return true;
        }

        
        public static function del_to_odb(PDO $db_mai, DspMessage $mes, int $save_id): bool {
            $rslt = self::del_tbl($db_mai, $mes, $save_id);
            if (!$rslt || $mes->is_err()) {
                return false;
            }
            return true;
        }



        // DB処理。save_idで指定されたteamレコードセットを読み込み
        // Teamクラスの配列にセットする
        // 
        protected static function get_from_tbl_all(
            PDO $db_mai, 
            DspMessage $mes, 
            int $save_id
        ): array {
            $get_team_SQL =<<<GET_TEAM01
                SELECT 	id,    save_id, name,  maze_name, guld_name,  
                        pos_x, pos_y,   pos_z, pos_d,
                        gold,  is_hero 
                FROM tbl_team
                WHERE   save_id = :save_id
        GET_TEAM01;
            try {
                $get_team_stmt = $db_mai->prepare($get_team_SQL);
                $get_team_stmt->bindValue(':save_id',  $save_id);
                $get_team_stmt->execute();
                $resultRecordSet = $get_team_stmt->fetchAll();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 37: {$get_team_SQL}");
                return [false, []];
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 38: {$get_team_SQL}");
                return [false, []];
            } 
        
            if (count($resultRecordSet) < 1) {
                $mes->set_err_message("データが有りません 39: {$get_team_SQL}");
                return [false, []];
            }
            $team_array = [];
            foreach ($resultRecordSet as $resultRecord) {
                array_push($team_array,  (new Team())->decode($resultRecord));
            }
            return [true, $team_array];
        }
        

        // DB処理。teamテーブルに自身のデータを追加(insert)して
        // そのID(id)を返す
        // 
        protected function add_tbl(
            PDO $db_mai, 
            DspMessage $mes, 
            int $save_id
        ): array {

            $insert_team_SQL =<<<INSERT_TEAM01
                INSERT INTO tbl_team (
                    save_id, name,  maze_name, guld_name, 
                    pos_x,   pos_y, pos_z, pos_d, 
                    gold,    is_hero
                )
                VALUES ( 
                    :save_id, :name,  :maze_name, :guld_name, 
                    :pos_x,   :pos_y, :pos_z, :pos_d,
                    :gold,    :is_hero
                )
INSERT_TEAM01;
            if ($this->is_hero) $is_hero = 1; else $is_hero = 0;
            try {
                $insert_team_stmt = $db_mai->prepare($insert_team_SQL);
                $insert_team_stmt->bindValue(':save_id',   $save_id);  
                $insert_team_stmt->bindValue(':name',      $this->name); 
                $insert_team_stmt->bindValue(':maze_name', $this->maze_name); 
                $insert_team_stmt->bindValue(':guld_name', $this->guld_name); 
                $insert_team_stmt->bindValue(':pos_x',     $this->cur_pos->x); 
                $insert_team_stmt->bindValue(':pos_y',     $this->cur_pos->y); 
                $insert_team_stmt->bindValue(':pos_z',     $this->cur_pos->z); 
                $insert_team_stmt->bindValue(':pos_d',     $this->cur_dir->get()); 
                $insert_team_stmt->bindValue(':gold',      $this->gold);  
                $insert_team_stmt->bindValue(':is_hero',   $is_hero); 
                $insert_team_stmt->execute();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 6: {$insert_team_SQL}");
                return [false, -1];
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 7: {$insert_team_SQL}");
                return [false, -1];
            } 
            $this->id = intval($db_mai->lastInsertId());
            return [true, $this->id];
        }
        
        // DB処理(クラス・メソッド)。Teamクラスの配列を受け取って、
        // 指定されたsave_idで　teamテーブルに追加(insert)して
        // そのID(id)の配列を返す
        // 
        protected static function add_tbl_all(
            PDO $db_mai, 
            DspMessage $mes, 
            array $team_array, 
            int $save_id
        ): array 
        {
            if(!is_null($team_array) && is_array($team_array)) {
                $team_id_set = [];
                foreach ($team_array as $team) {
                    [$rslt, $team_id] = $team->add_tbl($db_mai, $mes, $save_id);
                    if (!$rslt) return [false, []];
                    array_push($team_id_set, $team_id);
                }
                return [true, $team_id_set];
            }
            return [false, -1];
        }

        // DB処理。save_idで指定されたレコード(複数)を削除(delete)する
        // 
        protected static function del_tbl(PDO $db_mai, DspMessage $mes, int $save_id): bool {
            $delete_team_SQL =<<<DELETE_TEAM01
                DELETE FROM tbl_team 
                WHERE  save_id = :save_id
DELETE_TEAM01;
            try {
                $delete_team_stmt = $db_mai->prepare($delete_team_SQL);
                $delete_team_stmt->bindValue(':save_id', $save_id);
                $delete_team_stmt->execute();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 15: {$delete_team_SQL}");
                return false;
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 16: {$delete_team_SQL}");
                return false;
            } 
            return true;
        }
    
        public function encode(): array {
            $e = [];
            $e['id']        = strval($this->id);
            $e['save_id']   = strval($this->save_id);
            $e['name']      = $this->name;
            $e['maze_name'] = $this->maze_name;
            $e['guld_name'] = $this->guld_name;
            $e['point']     = $this->cur_pos->encode();
            $e['direct']    = $this->cur_dir->encode();
            $e['gold']      = strval($this->gold);
            $e['heroes']    = Hero::encode_heroes($this->heroes);

            if ($this->is_hero) $e['is_hero'] = '1'; else $e['is_hero'] = '0';

            return $e;
        }
        public function decode(array $a): Team {
            if (!is_null($a) && is_array($a)) {
                if (array_key_exists('id', $a) && (is_numeric($a['id']))) {
                    $this->id         = intval($a['id']);
                }
                if (array_key_exists('save_id', $a) && (is_numeric($a['save_id']))) {
                    $this->save_id    = intval($a['save_id']);
                }
                if (array_key_exists('name', $a) && ($a['name'] !== '')) {
                    $this->name       = $a['name'];
                }
                if (array_key_exists('maze_name', $a) && ($a['maze_name'] !== '')) {
                    $this->maze_name = $a['maze_name'];
                }
                if (array_key_exists('guld_name', $a) && ($a['guld_name'] !== '')) {
                    $this->guld_name = $a['guld_name'];
                }
                if (array_key_exists('gold', $a) && (is_numeric($a['gold']))) {
                    $this->gold       = intval($a['gold']);
                }
                if (array_key_exists('is_hero', $a) && (is_numeric($a['is_hero']))) {
                    if ($a['is_hero'] != '0') $this->is_hero = true; else $this->is_hero = false;
                }
                if (array_key_exists('point', $a) && (is_array($a['point']))) {
                    $this->cur_pos->decode($a['point']);
                }
                if (array_key_exists('direct', $a) && (is_array($a['direct']))) {
                    $this->cur_dir->decode($a['direct']);
                }
                if (array_key_exists('heroes', $a) && (is_array($a['heroes']))) {
                    $this->heroes     = Hero::decode_heroes($a['heroes']);
                }
            }
            return $this;
        }
        public static function encode_all(array $a): array {
            $all_team_data = [];
            if (!is_null($a) && is_array($a)) {
                foreach ($a as $team) {
                    array_push($all_team_data, $team->encode());
                }
            }
            return $all_team_data;
        }
        public static function decode_all(array $a): array {
            $all_team = [];
            if (!is_null($a) && is_array($a)) {
                foreach ($a as $team_data) {
                    array_push($all_team, (new Team())->decode($team_data));
                }
            }
            return $all_team;
        }
    }

?>
