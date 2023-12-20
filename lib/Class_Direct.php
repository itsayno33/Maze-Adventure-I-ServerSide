<?php
    // 方向を表すクラス
    class Direct {
        public const N = 0;
        public const E = 1;
        public const S = 2;
        public const W = 3;
        public const Unknown = 99;
        public const MAX = 3;
        protected int $direction;
        public function __construct(int $direction = Direct::Unknown)
        {
            $this->set($direction);
        }
        public function get(): int {
            return $this->direction;
        }
        public function set(int $direction) {
            switch ($direction) {
                case Direct::N:
                case Direct::E:
                case Direct::S:
                case Direct::W:
                    $this->direction = $direction; 
                    break;
                default:
                    $this->direction = Direct::Unknown;
                    break;
            }
        }
        public function encode(): array {
            return ['d' => $this->direction];
        }
        public static function decode(array $a): Direct {
            if (!is_null($a) && is_array($a)) {
                if(array_key_exists('d', $a) && (is_numeric($a['d']))) {
                    return new Direct($a['d']);
                }
            }
        }
    }
?>