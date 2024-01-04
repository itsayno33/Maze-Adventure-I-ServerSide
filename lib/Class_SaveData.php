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
        public int      $id;
        public int      $player_id; 
        public string   $title;
        public string   $detail;
        public Point3D  $point;
        public bool     $auto_mode;
        public bool     $is_active;
        public bool     $is_delete;
        public DateTime $save_time;

        public array    $all_maze; // その時点で挑戦した迷宮一式 Maze[]
        public array    $all_team; // 同、迷宮探検中のチーム一式 Team[]
        public array    $all_guld; // 同、ギルド等で待機しているキャラ一式 Hero[] <- ここはギルドクラス(Guild。略称guld)を作ってそのインスタンスを持つべきか

        public function __construct(array $a) {
            $this->id = -1;
            $this->player_id = 1; 
            $this->title = '';
            $this->detail = '';
            $this->point = new Point3D(0, 0, 0);
            $this->auto_mode = false;
            $this->is_active = true;
            $this->is_delete = false;
            $this->save_time = new DateTime('now');

            $this->all_maze  = [];
            $this->all_team  = [];
            $this->all_guld  = []; 
            
            if (!is_null($a) && is_array($a)) $this->decode($a);
        }
        public function encode(): array {
            $a = [];
            $a['save_id']    = strval($this->id);
            $a['player_id']  = strval($this->player_id);
            $a['title']      = $this->title;
            $a['detail']     = $this->detail;
            $a['point']      = $this->point->encode();
            if ($this->auto_mode) $a['auto_mode'] = 'Y'; else $a['auto_mode'] = 'N';
            if ($this->is_active) $a['is_active'] = 'Y'; else $a['is_active'] = 'N';
            if ($this->is_delete) $a['is_delete'] = 'Y'; else $a['is_delete'] = 'N';

            $a['save_time']  = $this->save_time->format('Y-m-d H:i:s:u O');

            $a['all_maze']  = Maze ::encode_all_maze($this->all_maze);
            $a['all_team']  = Team ::encode_all_team($this->all_team);
            $a['all_guld']  = Guild::encode_all_guld($this->all_guld);

            return $a;
        }
        public function decode(array $a): SaveData {
            if (is_null($a) || !is_array($a)) return $this;

            if (array_key_exists('save_id', $a) && is_numeric($a['save_id'])) {
                $this->id         = intval($a['save_id']);
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
            if(array_key_exists('point', $a) && is_array($a['point'])) {
                if (array_key_exists('x', $a['point']) && is_numeric($a['point']['x'])
                 && array_key_exists('y', $a['point']) && is_numeric($a['point']['y'])
                 && array_key_exists('z', $a['point']) && is_numeric($a['point']['z'])
                ) {
                    $this->point->decode($a['point']['x'], $a['point']['y'], $a['point']['z']);
                }
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