<?php
    declare(strict_types=1);

    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");

    // 利用クラス等の読み込み
    require_once 'Class_DspMessage.php'; // 画面メッセージの表示用クラス
    require_once 'Class_HeroAbility.php'; 

    class Hero {
        protected static  $max_id   = 0;
        protected int     $id       = 0;
        protected int     $save_id  = 0;
        protected int     $team_id  = 0;
        protected string  $name     = '';
        protected bool    $is_alive = true;

        protected int     $sex      = 0; 
        protected int     $age      = 0; 
        protected int     $gold     = 0; 
        protected int     $state    = 0; 
        protected int     $lv       = 0; 
        protected array   $val      = [];
        protected array   $abi_p    = [];
        protected array   $abi_m    = [];
    

        public function __construct(array $a = null) {
            $this->id    = 0; // --Hero::$max_id;
            $this->name  = 'New Hero #' . sprintf('%03d', -1 * $this->id);
            $this->sex   = 0; 
            $this->age   = 0; 
            $this->gold  = 0; 
            $this->state = 0; 
            $this->lv    = 0; 
            $this->val   = [
                'skp' => ['ttl' => 0, 'now' => 0], 
                'exp' => ['ttl' => 0, 'now' => 0],
                'nxe' => 0
            ];
            $this->abi_p   = [
                'bsc' =>  new HeroAbility()
            ];
            $this->abi_m   = [
                'bsc' =>  new HeroAbility()
            ];

            if(!is_null(($a)) && is_array($a)) $this->decode($a);
        }


        public static function get_from_odb_all(
            PDO $db_mai, 
            DspMessage $mes, 
            int $save_id,
            int $team_id): array 
        {
            [$rslt, $hres_array] = Hero::get_from_tbl_all($db_mai, $mes, $save_id, $team_id);
            if (!$rslt || $mes->is_err()) {
                return [false, []];
            }
            return [$rslt, $hres_array];
        }


        public function set_to_odb(
            PDO $db_mai, 
            DspMessage $mes, 
            int $save_id,
            int $team_id): bool 
        { 
            [$rslt, $hero_id] = $this->add_tbl($db_mai, $mes, $save_id, $team_id);
            if (!$rslt || $mes->is_err()) {
                return false;
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

        

        // DB処理。idで指定されたheroレコードセット(単数)を読み込み
        // Heroクラスの配列にセットする
        // 
        protected function get_from_tbl(
            PDO $db_mai, 
            DspMessage $mes, 
            int $id
        ): array {
            $get_heroes_SQL =<<<GET_HEROES01
                SELECT 	id, save_id, team_id, name, sex, age, gold, state, lv,  
                        skp_ttl, skp_now, exp_ttl, exp_now, nxe, 
                        abi_p, abi_m, is_alive 
                FROM    tbl_hero
                WHERE   id = :id
GET_HEROES01;
            try {
                $get_heroes_stmt = $db_mai->prepare($get_heroes_SQL);
                $get_heroes_stmt->bindValue(':id',  $id);
                $get_heroes_stmt->execute();
                $resultRecordSet = $get_heroes_stmt->fetchAll();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 37: {$get_heroes_SQL}");
                return [false, []];
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 38: {$get_heroes_SQL}");
                return [false, []];
            } 

            if (count($resultRecordSet) < 1) {
                $mes->set_err_message("データが有りません 39: {$get_heroes_SQL}");
                return [false, []];
            }
            $hero_data = $resultRecordSet[0];
            $a = [];
            $a['id']        = $hero_data['id'];
            $a['save_id']   = $hero_data['save_id'];
            $a['team_id']   = $hero_data['team_id'];
            $a['name']      = $hero_data['name'];
            if ($hero_data['is_alive'] !='0') $a['is_alive'] = '1'; else $a['is_alive'] = '0';
            $a['sex']       = $hero_data['sex']; 
            $a['age']       = $hero_data['age']; 
            $a['gold']      = $hero_data['gold']; 
            $a['state']     = $hero_data['state']; 
            $a['lv']        = $hero_data['lv']; 
            $a['val']       = [
                'skp' => ['ttl' => $hero_data['skp_ttl'], 'now' => $hero_data['skp_now']], 
                'exp' => ['ttl' => $hero_data['exp_ttl'], 'now' => $hero_data['exp_now']],
                'nxe' => $hero_data['nxe']
            ];
            $a['abi_p']     = [  
                'bsc'   => HeroAbility::from_JSON_to_array($hero_data['abi_p']), 
            ];
            $a['abi_m']     = [  
                'bsc'   => HeroAbility::from_JSON_to_array($hero_data['abi_m']), 
            ];

            $this->decode($a);
            return [true, $this];
        }


        // DB処理。save_idとteam_idで指定されたheroレコードセット(複数)を読み込み
        // Heroクラスの配列にセットする
        // 
        protected static function get_from_tbl_all(
            PDO $db_mai, 
            DspMessage $mes, 
            int $save_id,
            int $team_id
        ): array {
            $get_heroes_SQL =<<<GET_HEROES01
                SELECT 	id, save_id, team_id, name, sex, age, gold, state, lv,  
                        skp_ttl, skp_now, exp_ttl, exp_now, nxe, 
                        abi_p, abi_m, is_alive 
                FROM    tbl_hero
                WHERE   save_id = :save_id AND team_id = :team_id
GET_HEROES01;
            try {
                $get_heroes_stmt = $db_mai->prepare($get_heroes_SQL);
                $get_heroes_stmt->bindValue(':save_id',  $save_id);
                $get_heroes_stmt->bindValue(':team_id',  $team_id);
                $get_heroes_stmt->execute();
                $resultRecordSet = $get_heroes_stmt->fetchAll();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 37: {$get_heroes_SQL}");
                return [false, []];
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 38: {$get_heroes_SQL}");
                return [false, []];
            } 

            if (count($resultRecordSet) < 1) {
                $mes->set_err_message("データが有りません 39: {$get_heroes_SQL}");
                return [false, []];
            }
            $hres_array = [];
            foreach ($resultRecordSet as $hero_data) {
                $a = [];
                $a['id']        = $hero_data['id'];
                $a['save_id']   = $hero_data['save_id'];
                $a['team_id']   = $hero_data['team_id'];
                $a['name']      = $hero_data['name'];
                if ($hero_data['is_alive'] !='0') $a['is_alive'] = '1'; else $a['is_alive'] = '0';
                $a['sex']       = $hero_data['sex']; 
                $a['age']       = $hero_data['age']; 
                $a['gold']      = $hero_data['gold']; 
                $a['state']     = $hero_data['state']; 
                $a['lv']        = $hero_data['lv']; 
                $a['val']       = [
                    'skp' => ['ttl' => $hero_data['skp_ttl'], 'now' => $hero_data['skp_now']], 
                    'exp' => ['ttl' => $hero_data['exp_ttl'], 'now' => $hero_data['exp_now']],
                    'nxe' => $hero_data['nxe']
                ];
                $a['abi_p']       = [
                    'bsc'   => HeroAbility::from_JSON_to_array($hero_data['abi_p']), 
                ];
                $a['abi_m']       = [
                    'bsc'   => HeroAbility::from_JSON_to_array($hero_data['abi_m']), 
                ];
                array_push($hres_array, (new Hero())->decode($a));
            }
            return [true, $hres_array];
        }


        // DB処理。teamテーブルに自身のデータを追加(insert)して
        // そのID(id)を返す
        // 
        protected function add_tbl(
            PDO $db_mai, 
            DspMessage $mes, 
            int $save_id,
            int $team_id
        ): array {

            $insert_hero_SQL =<<<INSERT_HERO01
            INSERT INTO tbl_hero (
                save_id, team_id, name, sex, age, gold, state, lv, 
                skp_ttl, skp_now, exp_ttl, exp_now, nxe,
                abi_p, abi_m, is_alive 
            )
            VALUES ( 
                :save_id, :team_id, :name, :sex, :age, :gold, :state, :lv, 
                :skp_ttl, :skp_now, :exp_ttl, :exp_now, :nxe,
                :abi_p, :abi_m, :is_alive 
            )
INSERT_HERO01;
            try {
                if ($this->is_alive) $is_alive = '1'; else $is_alive = '0';
                $insert_hero_stmt = $db_mai->prepare($insert_hero_SQL);
                $insert_hero_stmt->bindValue(':save_id',   $save_id); 
                $insert_hero_stmt->bindValue(':team_id',   $team_id); 
                $insert_hero_stmt->bindValue(':name',      $this->name);
                $insert_hero_stmt->bindValue(':sex',       $this->sex);
                $insert_hero_stmt->bindValue(':age',       $this->age);
                $insert_hero_stmt->bindValue(':gold',      $this->gold);
                $insert_hero_stmt->bindValue(':state',     $this->state);
                $insert_hero_stmt->bindValue(':lv',        $this->lv);
                $insert_hero_stmt->bindValue(':skp_ttl',   $this->val['skp']['ttl']);
                $insert_hero_stmt->bindValue(':skp_now',   $this->val['skp']['now']);
                $insert_hero_stmt->bindValue(':exp_ttl',   $this->val['exp']['ttl']);
                $insert_hero_stmt->bindValue(':exp_now',   $this->val['exp']['now']);
                $insert_hero_stmt->bindValue(':nxe',       $this->val['nxe']);
                $insert_hero_stmt->bindValue(':abi_bsc_p', $this->abi_p['bsc']->to_JSON());
                $insert_hero_stmt->bindValue(':abi_bsc_m', $this->abi_m['bsc']->to_JSON());
                $insert_hero_stmt->bindValue(':is_alive',  $is_alive);
                $insert_hero_stmt->execute();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 8: {$insert_hero_SQL}");
                return [false, -1];
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 9: {$insert_hero_SQL}");
                return [false, -1];
            } 
            $this->id = intval($db_mai->lastInsertId());
            return [true, $this->id];
        }
        

        // DB処理(クラス・メソッド)。Mazeクラスの配列を受け取って、
        // 指定されたsave_idで　heroテーブルに追加(insert)して
        // そのID(id)の配列を返す
        // 
        protected static function add_tbl_all(
            PDO $db_mai, 
            DspMessage $mes, 
            array $hero_array, 
            int $save_id
        ): array 
        {
            if(!is_null($hero_array) && is_array($hero_array)) {
                $hero_id_set = [];
                foreach ($hero_array as $hero) {
                    [$rslt, $hero_id] = $hero->add_tbl($db_mai, $mes, $save_id);
                    if (!$rslt) return [false, []];
                    array_push($hero_id_set, $hero_id);
                }
                return [true, $hero_id_set];
            }
            return [false, -1];
        }

        
        // DB処理。save_idで指定されたレコード(複数)を削除(delete)する
        // 
        protected static function del_tbl(PDO $db_mai, DspMessage $mes, int $save_id): bool {
            $delete_hero_SQL =<<<DELETE_HERO01
                DELETE FROM tbl_hero 
                WHERE  save_id = :save_id
DELETE_HERO01;
            try {
                $delete_hero_stmt = $db_mai->prepare($delete_hero_SQL);
                $delete_hero_stmt->bindValue(':save_id', $save_id);
                $delete_hero_stmt->execute();
            } catch (PDOException $e) {
                $mes->pdo_error($e, "SQLエラー 17: {$delete_hero_SQL}");
                return false;
            } catch (Throwable $ee) {
                $mes->pdo_error($ee, "SQLの致命的エラー 18: {$delete_hero_SQL}");
                return false;
            } 
            return true;
        }
                        
        public function encode(): array {
            $a = [];
            $a['id']        = $this->id;
            $a['save_id']   = $this->save_id;
            $a['team_id']   = $this->team_id;
            $a['name']      = $this->name;
            if ($this->is_alive) $a['is_alive'] = '1'; else $a['is_alive'] = '0';
            $a['sex']       = $this->sex; 
            $a['age']       = $this->age; 
            $a['gold']      = $this->gold; 
            $a['state']     = $this->state; 
            $a['lv']        = $this->lv; 
            $a['val']       = [
                'skp' => ['ttl' => $this->val['skp']['ttl'], 'now' => $this->val['skp']['now']], 
                'exp' => ['ttl' => $this->val['exp']['ttl'], 'now' => $this->val['exp']['now']],
                'nxe' => $this->val['nxe']
            ];
            $a['abi_p']       = [ 
                'bsc' => $this->abi_p['bsc']->encode(), 
            ];
            $a['abi_m']       = [ 
                'bsc' => $this->abi_m['bsc']->encode(), 
            ];
            return $a;
        }
        public function decode(array $a = null): Hero {
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
                if (array_key_exists('name', $a) && ($a['name'] !== '')) {
                    $this->name    = $a['name'];
                }
                if (array_key_exists('is_alive', $a) && (is_numeric($a['is_alive']))) {
                    if ($a['is_alive'] !== '0') $this->is_alive = true; else $this->is_alive = false;
                }
                if (array_key_exists('sex', $a) && (is_numeric($a['sex']))) {
                    $this->sex     = intval($a['sex']);
                }
                if (array_key_exists('age', $a) && (is_numeric($a['age']))) {
                    $this->age     = intval($a['age']);
                }
                if (array_key_exists('gold', $a) && (is_numeric($a['gold']))) {
                    $this->gold    = intval($a['gold']);
                }
                if (array_key_exists('state', $a) && (is_numeric($a['state']))) {
                    $this->state   = intval($a['state']);
                }
                if (array_key_exists('lv', $a) && (is_numeric($a['lv']))) {
                    $this->lv      = intval($a['lv']);
                }
                if (array_key_exists('val', $a) && (is_array($a['val']))) {
                    $val = $a['val'];
                    if (array_key_exists('skp', $val) && (is_array($val['skp']))) {
                        if (array_key_exists('ttl', $val['skp']) && (is_numeric($val['skp']['ttl']))) {
                            $this->val['skp']['ttl']  = intval($val['skp']['ttl']); 
                        }
                        if (array_key_exists('now', $val['skp']) && (is_numeric($val['skp']['now']))) {
                            $this->val['skp']['now']  = intval($val['skp']['now']); 
                        }
                    }
                    if (array_key_exists('exp', $val) && (is_array($val['exp']))) {
                        if (array_key_exists('ttl', $val['exp']) && (is_numeric($val['exp']['ttl']))) {
                            $this->val['exp']['ttl']  = intval($val['exp']['ttl']); 
                        }
                        if (array_key_exists('now', $val['exp']) && (is_numeric($val['exp']['now']))) {
                            $this->val['exp']['now']  = intval($val['exp']['now']); 
                        }
                    }
                    if (array_key_exists('nxe', $val) && (is_array($val['nxe']))) {
                        $this->val['nxe']  = intval($val['nxe']); 
                    }
                }
                if (array_key_exists('abi_p', $a) && (is_array($a['abi_p']))) {
                    if (array_key_exists('bsc', $a['abi_p']) && (is_array($a['abi_p']['bsc']))) {
                        $this->abi_p['bsc']->decode($a['abi_p']['bsc']);
                    }
                }
                if (array_key_exists('abi_m', $a) && (is_array($a['abi_m']))) {
                    if (array_key_exists('bsc', $a['abi_m']) && (is_array($a['abi_m']['bsc']))) {
                        $this->abi_m['bsc']->decode($a['abi_m']['bsc']);
                    }
                }
            }
            return $this;
        }
        public static function encode_heroes(array $a): array {
            $heroes_data = [];
            if (!is_null($a) && is_array($a)) {
                foreach ($a as $hero) {
                    array_push($heroes_data, $hero->encode());
                }
            }
            return $heroes_data;
        }
        public static function decode_heroes(array $a): array {
            $heroes = [];
            if (!is_null($a) && is_array($a)) {
                foreach ($a as $heroes_data) {
                    $hero = new Hero();
                    $hero->decode($heroes_data);
                    array_push($heroes, $hero);
                }
            }
            return $heroes;
        }
    }
?>
