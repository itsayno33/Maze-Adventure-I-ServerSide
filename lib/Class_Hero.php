<?php
    declare(strict_types=1);

    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");

    // 利用クラス等の読み込み
    require_once 'lib/Class_DspMessage.php'; // 画面メッセージの表示用クラス
    require_once 'lib/Class_PointSet.php';   // 位置情報のクラス
    require_once 'lib/Class_Direct.php';     // 方向(東西南北)のクラス

    class Hero {
        protected string  $name;
        protected Point3D $cur_pos;
        protected Direct  $cur_dir;
        public    function __construct(array $a = null) {
            $this->cur_pos = new Point3D(0, 0, 0);
            $this->cur_dir = new Direct(Direct::N);

            $this->__init_pos($a);
        } 
        protected function __init_pos(array $a = null) {
            if (!is_null($a) && is_array($a)) {
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
            }
        }
        public function get_pos(): Point3D {
            return $this->cur_pos;
        }
        public function set_pos(Point3D $p): void {
            $this->cur_pos = $p;
        }
        public function get_dir(): Direct {
            return $this->cur_dir;
        }
        public function set_dir(Direct $d): void {
            $this->cur_dir = $d;
        }
        public function encode(): array {
            $e = [];
            $e['point']  = $this->cur_pos->encode();
            $e['direct'] = $this->cur_dir->encode();
            return $e;
        }
        public function decode(array $a) {
            if (!is_null($a) && is_array($a)) {
                if (array_key_exists('point', $a) && (is_array($a['point']))) {
                    $this->cur_pos = Point3D::decode($a['point']);
                }
                if (array_key_exists('direct', $a) && (is_array($a['direct']))) {
                    $this->cur_dir = Direct::decode($a['direct']);
                }
            }
        }
    }

?>
