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

    class Guild {
        public int    $id      = -1;
        public int    $save_id = -1;
        public int    $team_id = -1;
        public string $name    = '';
        public array  $heroes  = [];

        public function __construct(array $a = null) {
            $this->id      = -1;
            $this->save_id = -1;
            $this->team_id = -1;
            $this->name    = '';
            $this->heroes  = [];
    
            if (!is_null($a) && is_array($a)) $this->decode($a);
        } 


        public static function get_from_odb_all(PDO $db_mai, DspMessage $mes, int $save_id): array {
            [$rslt0, $guld_array] = self::get_from_tbl_all($db_mai, $mes, $save_id);
            if (!$rslt0 || $mes->is_err()) {
                return [false, []];
            }
            foreach ($guld_array as $guld) {
                [$rslt1, $hres_array] = Hero::get_from_odb_all($db_mai, $mes, $save_id, $guld->team_id);
                if (!$rslt1 || $mes->is_err()) {
                    return [false, []];
                }
                $guld->heroes = $hres_array;
            }
            return [true, $guld_array];
        }


        public function set_to_odb(PDO $db_mai, DspMessage $mes, int $save_id): bool {
            [$rslt0, $team_id] = $this->add_tbl_team($db_mai, $mes, $save_id);
            if (!$rslt0 || $mes->is_err()) {
                return false;
            }
            [$rslt1, $guld_id] = $this->add_tbl($db_mai, $mes, $save_id, $team_id);
            if (!$rslt1 || $mes->is_err()) {
                return false;
            }
            foreach ($this->heroes as $hero) {
                $rslt2 = $hero->set_to_odb($db_mai, $mes, $save_id, $team_id);
                if (!$rslt2 || $mes->is_err()) {
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



        // DB処理。save_idで指定されたguldレコードセットを読み込み
        // Guildクラスの配列にセットする
        // 
        protected static function get_from_tbl_all(
            PDO $db_mai, 
            DspMessage $mes, 
            int $save_id
        ): array {
            $get_guld_SQL =<<<GET_GULD01
                SELECT 	id, save_id, team_id, name 
                FROM tbl_guld
                WHERE   save_id = :save_id
GET_GULD01;
            try {
                $get_guld_stmt = $db_mai->prepare($get_guld_SQL);
                $get_guld_stmt->bindValue(':save_id',  $save_id);
                $get_guld_stmt->execute();
                $resultRecordSet = $get_guld_stmt->fetchAll();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 67: {$get_guld_SQL}");
                return [false, []];
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 68: {$get_guld_SQL}");
                return [false, []];
            } 
        
            if (count($resultRecordSet) < 1) {
                return [true,  []];
            }
            $guld_array = [];
            foreach ($resultRecordSet as $resultRecord) {
                array_push($guld_array,  (new Guild())->decode($resultRecord));
            }
            return [true, $guld_array];
        }
        
        // DB処理。guldテーブルに自身のデータを追加(insert)して
        // そのID(id)を返す
        // 
        protected function add_tbl(
            PDO $db_mai, 
            DspMessage $mes, 
            int $save_id,
            int $team_id
        ): array {

            $insert_guld_SQL =<<<INSERT_GULD02
                INSERT INTO tbl_guld ( save_id, team_id, name )
                VALUES ( :save_id, :team_id, :name )
INSERT_GULD02;
            try {
                $insert_guld_stmt = $db_mai->prepare($insert_guld_SQL);
                $insert_guld_stmt->bindValue(':save_id', $save_id);  
                $insert_guld_stmt->bindValue(':team_id', $team_id);  
                $insert_guld_stmt->bindValue(':name',    $this->name); 
                $insert_guld_stmt->execute();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 61: {$insert_guld_SQL}");
                return [false, -1];
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 62: {$insert_guld_SQL}");
                return [false, -1];
            } 
            $this->id = intval($db_mai->lastInsertId());
            return [true, $this->id];
        }
        
        // DB処理(クラス・メソッド)。Guildクラスの配列を受け取って、
        // 指定されたsave_idで　guldテーブルに追加(insert)して
        // そのID(id)の配列を返す
        // 
        protected static function add_tbl_all(
            PDO $db_mai, 
            DspMessage $mes, 
            array $guld_array, 
            int $save_id
        ): array 
        {
            if(!is_null($guld_array) && is_array($guld_array)) {
                $guld_id_set = [];
                foreach ($guld_array as $guld) {
                    [$rslt, $guld_id] = $guld->add_tbl($db_mai, $mes, $save_id);
                    if (!$rslt) return [false, []];
                    array_push($guld_id_set, $guld_id);
                }
                return [true, $guld_id_set];
            }
            return [false, -1];
        }

        
        // DB処理。teamテーブルに自身の『ダミー』データを追加(insert)して
        // そのID(id)を返す
        // 
        protected function add_tbl_team(
            PDO $db_mai, 
            DspMessage $mes, 
            int $save_id
        ): array {

            $insert_team_SQL =<<<INSERT_TEAM03
                INSERT INTO tbl_team (
                    save_id, name,  maze_name, guld_name, 
                    pos_x,   pos_y, pos_z, pos_d, 
                    gold,  is_hero
                )
                VALUES ( 
                    :save_id, :name,  :maze_name, :guld_name, 
                    :pos_x,   :pos_y, :pos_z, :pos_d,
                    :gold, :is_hero
                )
INSERT_TEAM03;
            try {
                $insert_team_stmt = $db_mai->prepare($insert_team_SQL);
                $insert_team_stmt->bindValue(':save_id',   $save_id);  
                $insert_team_stmt->bindValue(':name',      $this->name); 
                $insert_team_stmt->bindValue(':maze_name', ' '); 
                $insert_team_stmt->bindValue(':guld_name', $this->name); 
                $insert_team_stmt->bindValue(':pos_x',   0); 
                $insert_team_stmt->bindValue(':pos_y',   0); 
                $insert_team_stmt->bindValue(':pos_z',   0); 
                $insert_team_stmt->bindValue(':pos_d',   0); 
                $insert_team_stmt->bindValue(':gold',    0);  
                $insert_team_stmt->bindValue(':is_hero', 0); 
                $insert_team_stmt->execute();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 63: {$insert_team_SQL}");
                return [false, -1];
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 65: {$insert_team_SQL}");
                return [false, -1];
            } 
            $this->team_id = intval($db_mai->lastInsertId());
            return [true, $this->team_id];
        }


        // DB処理。save_idで指定されたレコード(複数)を削除(delete)する
        // 
        protected static function del_tbl(PDO $db_mai, DspMessage $mes, int $save_id): bool {
            $delete_guld_SQL =<<<DELETE_GULD01
                DELETE FROM tbl_guld 
                WHERE  save_id = :save_id
DELETE_GULD01;
            try {
                $delete_guld_stmt = $db_mai->prepare($delete_guld_SQL);
                $delete_guld_stmt->bindValue(':save_id', $save_id);
                $delete_guld_stmt->execute();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 68: {$delete_guld_SQL}");
                return false;
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 69: {$delete_guld_SQL}");
                return false;
            } 
            return true;
        }


        public function encode(): array {
            $e = [];
            $e['id']      = strval($this->id);
            $e['save_id'] = strval($this->save_id);
            $e['team_id'] = strval($this->team_id);
            $e['name']    = $this->name;
            $e['heroes']  = Hero::encode_heroes($this->heroes);
            return $e;
        }
        public function decode(array $a): Guild {
            if (!is_null($a) && is_array($a)) {
                if (array_key_exists('id', $a) && (is_numeric($a['id']))) {
                    $this->id      = intval($a['id']);
                }
                if (array_key_exists('save_id', $a) && (is_numeric($a['save_id']))) {
                    $this->save_id = intval($a['save_id']);
                }
                if (array_key_exists('team_id', $a) && (is_numeric($a['team_id']))) {
                    $this->team_id = intval($a['team_id']);
                }
                if (array_key_exists('name', $a) && ($a['name'] != '')) {
                    $this->team_id = $a['name'];
                }
                if (array_key_exists('heroes', $a) && (is_array($a['heroes']))) {
                    $this->heroes  = Hero::decode_heroes($a['heroes']);
                }
            }
            return $this;
        }
        public static function encode_all(array $a): array {
            $all_guld_data = [];
            if (!is_null($a) && is_array($a)) {
                foreach ($a as $guld) {
                    array_push($all_guld_data, $guld->encode());
                }
            }
            return $all_guld_data;
        }
        public static function decode_all(array $a): array {
            $all_guld = [];
            if (!is_null($a) && is_array($a)) {
                foreach ($a as $guld_data) {
                    array_push($all_guld, (new Guild())->decode($guld_data));
                }
            }
            return $all_guld;
        }
    }

?>
