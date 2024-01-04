<?php
    declare(strict_types=1);

    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");

    // 利用クラス等の読み込み
    require_once 'Class_DspMessage.php'; // 画面メッセージの表示用クラス

    class Hero {
        protected static  $max_id  = 0;
        protected int     $id       = 0;
        protected int     $save_id  = 0;
        protected int     $team_id  = 0;
        protected string  $name     = '';
        protected bool    $is_hero  = true;
        protected bool    $is_alive = true;

        public function __construct() {
            $this->id   = --Hero::$max_id;
            $this->name = 'New Hero #' . sprintf('%03d', -1 * $this->id);
        }
        public function get_id():   int    {return $this->id;}
        public function get_name(): string {return $this->name;}
        public function encode(): array {
            $a = [];
            $a['id']        = $this->id;
            $a['save_id']   = $this->save_id;
            $a['team_id']   = $this->team_id;
            $a['name']      = $this->name;
            if ($this->is_hero)  $a['is_hero']  = 'Y'; else $a['is_hero']  = 'N';
            if ($this->is_alive) $a['is_alive'] = 'Y'; else $a['is_alive'] = 'N';
            return $a;
        }
        public function decode($a): Hero {
            if (!is_null($a) && is_array($a)) {
                if (array_key_exists('id', $a) && (is_numeric($a['id']))) {
                    $this->id      = intval($a['id']);
                }
                if (array_key_exists('save_id', $a) && (is_numeric($a['save_id']))) {
                    $this->save_id = intval($a['save_id']);
                }
                if (array_key_exists('team_id', $a) && (is_numeric($a['team_id']))) {
                    $this->save_id = intval($a['team_id']);
                }
                if (array_key_exists('name', $a) && ($a['name'] !== '')) {
                    $this->name    = $a['name'];
                }
                if (array_key_exists('is_hero', $a)) {
                    if ($a['is_hero'] !== 'N') $this->is_hero = true; else $this->is_hero = false;
                }
                if (array_key_exists('is_alive', $a)) {
                    if ($a['is_alive'] !== 'N') $this->is_alive = true; else $this->is_alive = false;
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
