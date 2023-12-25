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
        protected int     $id = 0;
        protected string  $name;
        protected Point3D $cur_pos;
        protected Direct  $cur_dir;
        protected array   $heroes;

        public    function __construct(array $a = null) {
            $this->cur_pos = new Point3D(0, 0, 0);
            $this->cur_dir = new Direct(Direct::N);
            $this->name    = 'New Team';
            $this->heroes   = [];

            $this->__init($a);
        } 
        protected function __init(array $a = null) {
            if (!is_null($a) && is_array($a)) {
                if (array_key_exists('name', $a) && ($a['name'] !== '')) {
                    $this->name = $a['name'];
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
        public function encode(): array {
            $e = [];
            $e['id']     = strval($this->id);
            $e['name']   = $this->name;
            $e['point']  = $this->cur_pos->encode();
            $e['direct'] = $this->cur_dir->encode();
            $e['heroes'] = Hero::encode_heroes($this->heroes);
            return $e;
        }
        public function decode(array $a) {
            if (!is_null($a) && is_array($a)) {
                if (array_key_exists('id', $a) && (is_numeric($a['id']))) {
                    $this->id      = intval($a['id']);
                }
                if (array_key_exists('name', $a) && ($a['name'] !== '')) {
                    $this->name    = $a['name'];
                }
                if (array_key_exists('point', $a) && (is_array($a['point']))) {
                    $this->cur_pos = Point3D::decode($a['point']);
                }
                if (array_key_exists('direct', $a) && (is_array($a['direct']))) {
                    $this->cur_dir = Direct::decode($a['direct']);
                }
                if (array_key_exists('heroes', $a) && (is_array($a['heroes']))) {
                    $this->heroes  = Hero::decode_heroes($a['heroes']);
                }
            }
        }
    }

?>
