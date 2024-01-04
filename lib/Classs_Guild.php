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
            $id      = -1;
            $save_id = -1;
            $team_id = -1;
            $name    = '';
            $heroes  = [];
    
            if (!is_null($a) && is_array($a)) $this->decode($a);
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
                if (array_key_exists('heroes', $a) && (is_numeric($a['heroes']))) {
                    $this->heroes  = Hero::decode_heroes($a['heroes']);
                }
            }
            return $this;
        }
        public static function encode_all_guld(array $a): array {
            $all_guld_data = [];
            if (!is_null($a) && is_array($a)) {
                foreach ($a as $guld) {
                    array_push($all_guld_data, $guld->encode());
                }
            }
            return $all_guld_data;
        }
        public static function decode_all_guld(array $a): array {
            $all_guld = [];
            if (!is_null($a) && is_array($a)) {
                foreach ($a as $all_guld_data) {
                    $guld = new Guild();
                    $guld->decode($all_guld_data);
                    array_push($all_guld, $guld);
                }
            }
            return $all_guld;
        }
    }

?>
