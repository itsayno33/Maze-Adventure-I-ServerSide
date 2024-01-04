<?php
    // MAZE関係クラス全般

    declare(strict_types=1);

    // 本番環境はURLの先頭を書き換える
    $db_host = '127.0.0.1';
    
    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");
    
    // 利用クラス等の読み込み
    require_once 'Class_DspMessage.php'; // 画面メッセージの表示用クラス
 
    class SaveData {
        public int      $save_id;
        public int      $player_id; 
        public string   $title;
        public string   $detail;
        public string   $point;
        public bool     $auto_mode;
        public bool     $is_active;
        public bool     $is_delete;
        public DateTime $save_time;

        public array    $all_maze; // その時点で挑戦した迷宮一式 Maze[]
        public array    $all_team; // 同、迷宮探検中のチーム一式 Team[]
        public array    $all_guld; // 同、ギルド等で待機しているキャラ一式 Hero[] <- ここはギルドクラス(Guild。略称guld)を作ってそのインスタンスを持つべきか

        public function __construct(array $a) {
            $this->save_id   = -1;
            $this->player_id = 1; 
            $this->title     = '';
            $this->detail    = '';
            $this->point     = '';
            $this->auto_mode = false;
            $this->is_active = true;
            $this->is_delete = false;
            $this->save_time = new DateTime('now');

            $this->all_maze  = [];
            $this->all_team  = [];
            $this->all_guld  = []; 
            
            if (!is_null($a) && is_array($a)) $this->decode($a);
        }


        public function get_sid(): int {
            return $this->save_id;
        }

        public function set_sid(int $save_id): void {
            $this->save_id = $save_id;
        }

                
        // DB処理。player_dに該当するセーブデータをDBから読み込み
        // SaveData[]の配列を返す
        // 非活性データや削除済データはスキップする
        // 
        public static function get_list_by_pid(PDO $db_mai, DspMessage $mes, int $player_id): array {
            $get_save_SQL =<<<GET_SAVE_INFO01
                SELECT save_id, player_id, title, detail, point, 
                       auto_mode, is_active, is_delete, 
                       DATE_FORMAT(save_time,'%Y-%c-%e %H:%i:%s:%f') AS save_time
                FROM   tbl_save
                WHERE  player_id = :player_id 
                ORDER  BY title COLLATE utf8mb4_unicode_ci ASC
GET_SAVE_INFO01;
            try {
                $get_save_stmt = $db_mai->prepare($get_save_SQL);
                $get_save_stmt->bindValue(':player_id', $player_id);
                $get_save_stmt->execute();
                $resultRecordSet = $get_save_stmt->fetchAll();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 50: {$get_save_SQL}");
                return [];
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 51: {$get_save_SQL}");
                return [];
            } 

            if (count($resultRecordSet) < 1) return [];

            $save_data_set = [];
            foreach ($resultRecordSet as $resultRecord) {
                if ($resultRecord['is_active'] == '0') continue;
                if ($resultRecord['is_delete'] != '0') continue;

                array_push(
                    $save_data_set, 
                    (new SaveData([]))->decode($resultRecord)
                );
            }
            return $save_data_set;
        }

        // DB処理。タイトルからsave_idを得る。該当するレコードが無ければ第一戻り値でfalseを返す
        // 
        public function get_save_id_at_tbl(PDO $db_mai, DspMessage $mes): array {
            $this->save_id = -1;
            $seek_save_SQL =<<<SEEK_SAVE01
                SELECT save_id FROM tbl_save
                WHERE  player_id = :player_id AND title = :title
        SEEK_SAVE01;
            try {
                $seek_save_stmt = $db_mai->prepare($seek_save_SQL);
                $seek_save_stmt->bindValue(':player_id', $this->player_id);
                $seek_save_stmt->bindValue(':title',     $this->title);
                $seek_save_stmt->execute();
                $resultRecordSet = $seek_save_stmt->fetchAll();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 20: {$seek_save_SQL}");
                return [false, -1];
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 21: {$seek_save_SQL}");
                return [false, -1];
            } 
            if (count($resultRecordSet) < 1) {
                return [false, -1];
            }

            $this->save_id = intval($resultRecordSet[0]['save_id']);
            return [true, $this->save_id];
        }

        // DB処理。save_idで指定されたsaveレコードを読み込み
        // 自身のプロパティにセットする
        // 
        protected function get_tbl_by_sid(PDO $db_mai, DspMessage $mes, int $save_id): array {
            $get_save_SQL =<<<GET_SAVE01
                SELECT save_id, player_id, title, detail, point, 
                       auto_mode, is_active, is_delete, 
                       DATE_FORMAT(save_time,'%Y-%c-%e %H:%i:%s:%f') AS save_time
                FROM   tbl_save
                WHERE  save_id = :save_id
GET_SAVE01;
            try {
                $get_save_stmt = $db_mai->prepare($get_save_SQL);
                $get_save_stmt->bindValue(':save_id', $save_id);
                $get_save_stmt->execute();
                $resultRecordSet = $get_save_stmt->fetchAll();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 30: {$get_save_SQL}");
                return [false, null];
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 31: {$get_save_SQL}");
                return [false, null];
            } 
        
            if (count($resultRecordSet) < 1) {
                $mes->set_err_message("データが有りません 32: {$get_save_SQL}");
                return [false, null];
            }
            $this->decode($resultRecordSet[0]);
            return [true, $this];
        }

        // DB処理。saveテーブルに自身のデータを追加(insert)して
        // そのID(save_id)を返す
        // 
        protected function add_tbl(PDO $db_mai, DspMessage $mes): array {
            if ($this->auto_mode) $auto_mode = '1'; else $auto_mode = '0';
            if ($this->is_active) $is_active = '1'; else $is_active = '0';
            if ($this->is_delete) $is_delete = '1'; else $is_delete = '0';

            $insert_save_SQL =<<<NEW_SAVE01
                INSERT INTO tbl_save (
                        player_id, title, detail, point, 
                        auto_mode, is_active, is_delete, save_time
                    )
                VALUES ( 
                        :player_id, :title, :detail, :point, 
                        :auto_mode, :is_active, :is_delete, :save_time)
NEW_SAVE01;
            try {
                $insert_save_stmt = $db_mai->prepare($insert_save_SQL);
                $insert_save_stmt->bindValue(':player_id', $this->player_id);
                $insert_save_stmt->bindValue(':title',     $this->title);
                $insert_save_stmt->bindValue(':detail',    $this->detail);
                $insert_save_stmt->bindValue(':point',     $this->point);
                $insert_save_stmt->bindValue(':auto_mode', $auto_mode);
                $insert_save_stmt->bindValue(':is_active', $is_active);
                $insert_save_stmt->bindValue(':is_delete', $is_delete);
                $insert_save_stmt->bindValue(':save_time', $this->save_time->format('Y-m-d H:i:s:u'));
                $insert_save_stmt->execute();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 0: {$insert_save_SQL}");
                return [false, -1];
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 00: {$insert_save_SQL}");
                return [false, -1];
            } 
            return [true, intval($db_mai->lastInsertId())];
        }

        // DB処理。save_idで指定されたレコードを削除(delete)する
        // 
        protected function del_tbl_by_sid(PDO $db_mai, DspMessage $mes, int $save_id): bool {
            $delete_save_SQL =<<<DELETE_SAVE01
                DELETE FROM tbl_save 
                WHERE  save_id = :save_id
        DELETE_SAVE01;
            try {
                $delete_save_stmt = $db_mai->prepare($delete_save_SQL);
                $delete_save_stmt->bindValue(':save_id', $save_id);
                $delete_save_stmt->execute();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 10: {$delete_save_SQL}");
                return false;
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 11: {$delete_save_SQL}");
                return false;
            } 
            return true;
        }

        
        public function encode(): array {
            $a = [];
            $a['save_id']    = strval($this->save_id);
            $a['player_id']  = strval($this->player_id);
            $a['title']      = $this->title;
            $a['detail']     = $this->detail;
            $a['point']      = $this->point;
            if ($this->auto_mode) $a['auto_mode'] = 'Y'; else $a['auto_mode'] = 'N';
            if ($this->is_active) $a['is_active'] = 'Y'; else $a['is_active'] = 'N';
            if ($this->is_delete) $a['is_delete'] = 'Y'; else $a['is_delete'] = 'N';

            $a['save_time']  = $this->save_time->format('Y-m-d H:i:s:u');

            $a['all_maze']  = Maze ::encode_all_maze($this->all_maze);
            $a['all_team']  = Team ::encode_all_team($this->all_team);
            $a['all_guld']  = Guild::encode_all_guld($this->all_guld);

            return $a;
        }
        public function decode(array $a): SaveData {
            if (is_null($a) || !is_array($a)) return $this;

            if (array_key_exists('save_id', $a) && is_numeric($a['save_id'])) {
                $this->save_id    = intval($a['save_id']);
            }
            if (array_key_exists('player_id', $a) && is_numeric($a['player_id'])) {
                $this->player_id  = intval($a['player_id']);
            }
            if (array_key_exists('title', $a) && $a['title'] != '') {
                $this->title      = $a['title'];
            }
            if (array_key_exists('detail', $a) && $a['detail'] != '') {
                $this->detail     = $a['detail'];
            }
            if(array_key_exists('point', $a) && $a['point'] != '') {
                $this->point      = $a['point'];
            }
            if (array_key_exists('auto_mode', $a)) {
                if ($a['auto_mode'] != 'N') $this->auto_mode = true; else $this->auto_mode = false; 
            }
            if (array_key_exists('is_active', $a)) {
                if ($a['is_active'] != 'N') $this->is_active = true; else $this->is_active  = false; 
            }
            if (array_key_exists('is_delete', $a)) {
                if ($a['is_delete'] != 'N') $this->is_delete = true; else $this->is_delete = false; 
            }
            if (array_key_exists('save_time', $a)) {
                $this->save_time = date_create($a['save_time'], new DateTimeZone('Asia/Tokyo')); 
            }
            if (array_key_exists('all_maze', $a) && is_array($a['all_maze'])) {
                $this->all_maze  = Maze::decode_all_maze($a['all_maze']);
            }
            if (array_key_exists('all_team', $a) && is_array($a['all_team'])) {
                $this->all_team  = Team::decode_all_team($a['all_team']);
            }
            if (array_key_exists('all_guld', $a) && is_array($a['all_guld'])) {
                $this->all_guld  = Guild::decode_all_guld($a['all_guld']);
            }
            return $this;
        }
    }

?>