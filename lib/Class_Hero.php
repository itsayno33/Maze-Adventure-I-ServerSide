<?php
    declare(strict_types=1);

    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");

    // 利用クラス等の読み込み
    require_once 'lib/Class_DspMessage.php'; // 画面メッセージの表示用クラス

    class Hero {
        protected static  $max_id = 0;
        protected int     $id = 0;
        protected string  $name = '';

        public function __construct() {
            $this->id   = --Hero::$max_id;
            $this->name = 'New Hero #' . sprintf('%03d', -1 * $this->id);
        }
        public function encode(): array {
            $a = [];
            $a['id']   = $this->id;
            $a['name'] = $this->name;
            return $a;
        }
        public function decode($a): void {
            if (!is_null($a) && is_array($a)) {
                if (array_key_exists('id', $a) && (is_numeric($a['id']))) {
                    $this->id      = intval($a['id']);
                }
                if (array_key_exists('name', $a) && ($a['name'] !== '')) {
                    $this->name    = $a['name'];
                }
            }
        }
        public static function encode_heroes($a): array {
            $heroes_data = [];
            if (!is_null($a) && is_array($a)) {
                foreach ($a as $hero) {
                    array_push($heroes_data, $hero->encode());
                }
            }
            return $heroes_data;
        }
        public static function decode_heroes($a): array {
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
