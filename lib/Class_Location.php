<?php
    declare(strict_types=1);

    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");

    // 利用クラス等の読み込み
    require_once 'Class_DspMessage.php'; // 画面メッセージの表示用クラス
    require_once 'Class_PointSet.php'; 
    require_once 'Class_Direct.php'; 

    interface I_Locate {
        public function uid(): string;

        public function get_lckd(): string;
        public function get_name(): string;
        public function get_pos(): Point3D;
        public function get_dir(): Direct;
    }

    class Location {
        protected string  $loc_kind;
        protected string  $loc_uid;
        protected string  $loc_name;
        protected int $x;
        protected int $y;
        protected int $z;
        protected int $d;
        public function __construct(array $a = null)
        {
            $this->loc_kind = '';
            $this->loc_uid  = '';
            $this->loc_name = '';
            $this->x  = 0;
            $this->y  = 0;
            $this->z  = 0;
            $this->d  = 0;
            if (!is_null($a)) $this->decode($a);
        }

        public function set(I_Locate $loc): self {
            $this->loc_uid   = $loc->uid();
            $this->loc_kind  = $loc->get_lckd();
            $this->loc_name  = $loc->get_name();

            $pos = $loc->get_pos();
            $this->x  = $pos->x;
            $this->y  = $pos->y;
            $this->z  = $pos->z;
            $this->d  = $loc->get_dir()->get();
            return $this;
        }        

        public function get_uid(): string {
            return $this->loc_uid;
        }
        public function get_lckd(): string {
            return $this->loc_kind;
        }
        public function get_name(): string {
            return $this->loc_name;
        }
        public function get_pos(): Point3D {
            return new Point3D($this->x, $this->y, $this->z);
        }
        public function get_dir(): Direct {
            return new Direct($this->d);
        }

        public function from_JSON(string $j): self {
            $this->decode(self::from_JSON_to_array($j));
            return $this;
        }
        public static function from_JSON_to_array(string $j): array {
            return  json_decode(
                $j, true, 512, 
                JSON_BIGINT_AS_STRING  | 
                JSON_OBJECT_AS_ARRAY   | 
                JSON_UNESCAPED_UNICODE |
                JSON_PARTIAL_OUTPUT_ON_ERROR
            );
        }
        public function to_JSON(): string {
            return self::from_array_to_JSON($this->encode());
        }
        public static function from_array_to_JSON(array $a): string {
            return json_encode( 
                    $a, 
                    JSON_NUMERIC_CHECK     | 
                    JSON_PRETTY_PRINT      | 
                    JSON_UNESCAPED_UNICODE |
                    JSON_PARTIAL_OUTPUT_ON_ERROR
                );
        }

        public function encode(): array {
            $a = [];
            $a['kind'] = $this->loc_kind;
            $a['name'] = $this->loc_name;
            $a['uid']  = $this->loc_uid;

            switch ($this->loc_kind) {
                case 'Maze':
                    $a['x']    = $this->x;
                    $a['y']    = $this->y;
                    $a['z']    = $this->z;
                    $a['d']    = $this->d;
                    break;
            }

            return $a;
        }
        public function decode(array $a): Location {
            if (is_null($a)) return $this;
            if (is_string($a)) $a = self::from_JSON_to_array($a);

            if (array_key_exists('kind', $a) && is_string($a['kind'])) {
                $this->loc_kind = $a['kind'];
            }
            if (array_key_exists('uid', $a)  && is_string($a['uid'])) {
                $this->loc_uid  = $a['uid'];
            }
            if (array_key_exists('name', $a)  && is_string($a['name'])) {
                $this->loc_name = $a['name'];
            }

            if (
                array_key_exists('x', $a) && (is_numeric($a['x']) && $a['x'] >  0)
            &&  array_key_exists('y', $a) && (is_numeric($a['y']) && $a['y'] >  0)
            &&  array_key_exists('z', $a) && (is_numeric($a['z']) && $a['z'] >= 0)
            ) {
                $this->x = $a['x'];
                $this->y = $a['y'];
                $this->z = $a['z'];
            }
            if (
                array_key_exists('d', $a) 
                && (is_numeric($a['d'])) 
                && $a['d']  >=  0 
                && $a['d']  <=  3
            ) {
                $this->d = $a['d'];
            }
            return $this;
        }
    }
?>


