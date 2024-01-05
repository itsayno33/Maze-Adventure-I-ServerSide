<?php
    declare(strict_types=1);

    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");

    // 利用クラス等の読み込み
    require_once 'Class_DspMessage.php'; // 画面メッセージの表示用クラス

    class HeroAbility {
        protected int $xp  =  0;  // p:HP、m:MP

        protected int $atk =  0;  // 攻撃値
        protected int $def =  0;  // 防御値
        protected int $quc =  0;  // 瞬発力
        protected int $cnc =  0;  // 機運値(チャンス)
    
        protected int $str =  0;  // 根性。攻撃/防御力にも影響。HP/MP回復やアイテムの最大所持重量にボーナス
        protected int $pwr =  0;  // 基本的強さ。攻撃力に影響
        protected int $vit =  0;  // 耐久力。HP/MPの最大値や防御力に影響を与える
        protected int $dex =  0;  // 器用さ。命中率に影響を与える。飛び道具や長距離魔法では特に影響。罠解除にも影響
        protected int $agi =  0;  // 素早さ。行動速度や回避率に影響を与える。命中率にも影響
        protected int $tec =  0;  // 技術力。経験で向上して能力値(quc/cnc)にボーナスを与える
        protected int $luk =  0;  // 幸運値。cncに大きく影響する

        public function __construct(array $a = null) {
            $this->xp  =  0;  // p:HP、m:MP

            $this->atk =  0;  // 攻撃値
            $this->def =  0;  // 防御値
            $this->quc =  0;  // 瞬発力
            $this->cnc =  0;  // 機運値(チャンス)
        
            $this->str =  0;  // 根性。攻撃/防御力にも影響。HP/MP回復やアイテムの最大所持重量にボーナス
            $this->pwr =  0;  // 基本的強さ。攻撃力に影響
            $this->vit =  0;  // 耐久力。HP/MPの最大値や防御力に影響を与える
            $this->dex =  0;  // 器用さ。命中率に影響を与える。飛び道具や長距離魔法では特に影響。罠解除にも影響
            $this->agi =  0;  // 素早さ。行動速度や回避率に影響を与える。命中率にも影響
            $this->tec =  0;  // 技術力。経験で向上して能力値(quc/cnc)にボーナスを与える
            $this->luk =  0;  // 幸運値。cncに大きく影響する

            if(!is_null(($a)) && is_array($a)) $this->decode($a);
        }

        public function from_JSON(string $j): HeroAbility {
            $this->decode(HeroAbility::from_JSON_to_array($j));
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
            return HeroAbility::from_array_to_JSON($this->encode());
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
            $a['xp']  = $this->xp;

            $a['atk'] = $this->atk;
            $a['def'] = $this->def;
            $a['quc'] = $this->quc;
            $a['cnc'] = $this->cnc;

            $a['str'] = $this->str;
            $a['pwr'] = $this->pwr;
            $a['vit'] = $this->vit;
            $a['dex'] = $this->dex;
            $a['agi'] = $this->agi;
            $a['tec'] = $this->tec;
            $a['luk'] = $this->luk;
            return $a;
        }

        public function decode(array $a = null): HeroAbility {
            if (!is_null($a) && is_array($a)) {
                if (array_key_exists('xp',  $a) && (is_numeric($a['xp' ]))) {
                    $this->xp      = intval($a['xp']);
                }

                if (array_key_exists('atk', $a) && (is_numeric($a['atk']))) {
                    $this->atk     = intval($a['atk']);
                }
                if (array_key_exists('def', $a) && (is_numeric($a['def']))) {
                    $this->def     = intval($a['def']);
                }
                if (array_key_exists('quc', $a) && (is_numeric($a['quc']))) {
                    $this->quc     = intval($a['quc']);
                }
                if (array_key_exists('cnc', $a) && (is_numeric($a['cnc']))) {
                    $this->cnc     = intval($a['cnc']);
                }

                if (array_key_exists('str', $a) && (is_numeric($a['str']))) {
                    $this->str     = intval($a['str']);
                }
                if (array_key_exists('pwr', $a) && (is_numeric($a['pwr']))) {
                    $this->pwr     = intval($a['pwr']);
                }
                if (array_key_exists('vit', $a) && (is_numeric($a['vit']))) {
                    $this->vit     = intval($a['vit']);
                }
                if (array_key_exists('dex', $a) && (is_numeric($a['dex']))) {
                    $this->dex     = intval($a['dex']);
                }
                if (array_key_exists('agi', $a) && (is_numeric($a['agi']))) {
                    $this->agi     = intval($a['agi']);
                }
                if (array_key_exists('tec', $a) && (is_numeric($a['tec']))) {
                    $this->tec     = intval($a['tec']);
                }
                if (array_key_exists('luk', $a) && (is_numeric($a['luk']))) {
                    $this->luk     = intval($a['luk']);
                }
            }
            return $this;
        }
    }

?>
