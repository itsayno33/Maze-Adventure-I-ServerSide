<?php 
    declare(strict_types=1);

// 本番環境はURLの先頭を書き換える
    $db_host = '127.0.0.1';

    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");

    // 利用クラス等の読み込み

    // ダンジョンマップのセルの種類を表す列挙型
    require_once './lib/Enum_MzKind.php';

    // 方向を表すクラス
    require_once './lib/Class_Direct.php';

    // 位置・経路を表すクラス全般
    require_once './lib/Class_PointSet.php';

    require_once './lib/Class_Location.php'; 

    // MAZE関係クラス全般
    require_once './lib/Class_Maze.php';

    // パーティークラス全般
    require_once './lib/Class_Team.php';

    // セーブデータ(クライアントとの連携)全般
    require_once './lib/Class_SaveData.php';

/*******************************************************************************/
/*                                                                             */
/*                                 主　処　理                                   */
/*                                                                             */
/*******************************************************************************/

    $gv = new GlobalVar();
    $ga = new GlobalArguments();

    init();

    $ret_JSON = '';
    switch ($ga->mode) {
        case 'new_maze':
            $new_maze = create_maze(); 
            $new_team = create_team($new_maze);
            $save     = new_save($maze, $team);

            $ret_JSON = save_encode(0,  $save);
            break;
        default:
            $gv->mes->set_err_message('Unknwn Mode was requested.');
            $ret_JSON = err_encode(999);
            break;
    }

    header("Content-type: application/json");
    echo $ret_JSON;
    free();
 
//////////////////////////////////////////////
///   サブルーチン
//////////////////////////////////////////////

function all_encode(int $code, array $data): string {
    global $gv, $ga;

    $ret_assoc = [];

    $ret_assoc['ecode'] = $code;
    if ($code !== 0 || $gv->mes->is_err()) {
        $ret_assoc['emsg'] = implode("\n", $gv->mes->get_err_messages());
    } else {
        $ret_assoc['emsg'] = 'Status OK';
        $ret_assoc['data'] = $data;
    }

    $ret_JSON = json_encode(
                    $ret_assoc, 
                    JSON_NUMERIC_CHECK     | 
                    JSON_PRETTY_PRINT      | 
                    JSON_UNESCAPED_UNICODE |
                    JSON_PARTIAL_OUTPUT_ON_ERROR
                );
    return $ret_JSON;
}

function err_encode(int $code): string {
    global $gv, $ga;

    if ($code == 0 && $gv->mes->is_err()) $code = 888;

    $ret_assoc = [];
    $ret_assoc['ecode'] = $code;
    $ret_assoc['emsg'] = implode("\n", $gv->mes->get_err_messages());

    $ret_JSON = json_encode(
                    $ret_assoc, 
                    JSON_NUMERIC_CHECK     | 
                    JSON_PRETTY_PRINT      | 
                    JSON_UNESCAPED_UNICODE |
                    JSON_PARTIAL_OUTPUT_ON_ERROR
                );
    return $ret_JSON;
}

function save_encode(int $code, SaveData $save): string {
    global $gv, $ga;

    $ret_assoc = [];

    $ret_assoc['ecode'] = $code;
    if ($code !== 0 || $gv->mes->is_err()) {
        $ret_assoc['emsg'] = implode("\n", $gv->mes->get_err_messages());
    } else {
        $ret_assoc['emsg'] = 'Status OK';
        $ret_assoc['save'] = $save->encode();
    }

    $ret_JSON = json_encode(
                    $ret_assoc, 
                    JSON_NUMERIC_CHECK     | 
                    JSON_PRETTY_PRINT      | 
                    JSON_UNESCAPED_UNICODE |
                    JSON_PARTIAL_OUTPUT_ON_ERROR
                );
    return $ret_JSON;
}


function new_save(Maze $maze, Team $team): SaveData {
    return new SaveData([
        'auto_mode' => '0',
        'is_active' => '1',
        'is_delete' => '0',

        'all_maze'  => [$maze->encode()],
        'all_guld'  => [], 
        'all_team'  => [$team->encode()],

        'team_uid'  => $team->uid(), 
    ]);
}

function create_maze(): Maze {
    $maze = new Maze([
        'title' => '始まりの迷宮', 
        'size_x' => 21, 
        'size_y' => 21, 
        'size_z' => GlobalVar::Max_of_Maze_Floor
    ]);
    for ($i = 0; $i < GlobalVar::Max_of_Maze_Floor; $i++) {
        $maze->create_maze($i);
    }
    for ($i = 0; $i < GlobalVar::Max_of_Maze_Floor - 1; $i++) {
        $maze->create_stair($i);
    }
    return $maze;
}

function create_team(Maze $maze): Team {
    $x = 2 * random_int(0, (($maze->get_size_x() - 1) / 2) - 1) + 1;
    $y = 2 * random_int(0, (($maze->get_size_y() - 1) / 2) - 1) + 1;
    $z = 0;  //    $z = 1 * random_int(0,  ($gv->maze->get_size_z() - 1));

    $d = random_int(0, Direct::MAX);

    $loc  = new Location();
    $loc->decode([
        'kind' => 'Maze',
        'name' => $maze->get_name(),
        'uid'  => $maze->uid(),
        'x'    => $x,
        'y'    => $y,
        'z'    => $z,
        'd'    => $d,
    ]);

    $team = new Team();

    $team->set_name('ひよこさんチーム');
    $team->set_loc($loc);
    for ($i = 0; $i <= 3; $i++) {
        $team->append_hero((new Hero())->random_make());
    }

    return $team;
}


/*******************************************************************************/
/*                                                                             */
/*                                初　期　設　定                                */
/*                                                                             */
/*******************************************************************************/

    function init(): void {
        global $gv,$ga;
    
        return;
    }

//////////////////////////////////////////////
/////
/////     クラス宣言
/////
//////////////////////////////////////////////

    // 大域変数の設定
    class GlobalVar {
        public DspMessage $mes;

        public string $script_path;
        public string $cgi_base;
        public string $cgi_home;

        public string $icon_home;

        public PDO    $db_mai;

        public const  Maze_size_x = 21;
        public const  Maze_size_y = 21;
        public const  Limit_of_room     = 5;
        public const  Max_size_of_room  = 3;
        public const  Max_of_Maze_Floor = 3;

        public array  $maze_assoc = [];
        public Maze   $maze;
        public array  $team_assoc = [];
        public Team   $team;
        public array  $heroes = [];

        public function __construct() {
            global $db_host;

            $this->mes = new DspMessage( /* isHTML = */ false);

            $this->script_path = $_SERVER['SCRIPT_NAME'];
            $this->cgi_base    = pathinfo($this->script_path, PATHINFO_DIRNAME);
            $this->cgi_home    = dirname ($this->cgi_base);
            $this->icon_home   = "{$this->cgi_home}/icon-img/kkrn_icon_home_3.png";

//            $this->db_mai      = PDO_db_open($db_host, 'db_mai'); 

            $this->maze        = new Maze([
                'fill_kind'    => MzKind::Empty,
                'size_x'       => GlobalVar::Maze_size_x,
                'size_y'       => GlobalVar::Maze_size_y,
                'size_z'       => GlobalVar::Max_of_Maze_Floor, 
                'limit_room'   => GlobalVar::Limit_of_room,
                'room_size'    => GlobalVar::Max_size_of_room,
            ]);
            $this->team        =  new Team(['name' => 'New Team', 'x'=>1, 'y'=>1, 'z'=>1, 'd'=>Direct::N]);
        }
    }
    
    
    // POST引数の設定
    class GlobalArguments {
        public string $mode;
        public string $maze_JSON   = '';
        public string $team_JSON   = '';

        public int    $pid         =  1;

        public function __construct() {
            global $gv;

            if ( array_key_exists('mode', $_GET) && $_GET['mode'] != '') {
                $this->mode         = $_GET ['mode'];
            } else {
                if ( array_key_exists('mode', $_POST) &&  $_POST['mode'] != '') {
                    $this->mode     = $_POST['mode'];
                } else {
                    $this->mode     = 'unknown';
                } 
            }
            if ( array_key_exists('pid', $_GET) && is_numeric($_GET['pid'])) {
                $this->pid          = intval($_GET ['pid']);
            } else {
                if ( array_key_exists('pid', $_POST) &&  is_numeric($_POST['pid'])) {
                    $this->pid      = intval($_POST['pid']);
                } else {
                    $this->pid      = 1;
                } 
            }
            if ( array_key_exists('maze', $_POST) &&  $_POST['maze'] != '') {
                $this->maze_JSON    = $_POST['maze'];
            } 
            if ( array_key_exists('team', $_POST) &&  $_POST['team'] != '') {
                $this->team_JSON    = $_POST['team'];
            } 
        }
    }

    function free(): void{
        global $gv, $ga;
        // 大域変数の開放
        $gv  = null;
        // POST引数の解放
        $ga  = null;
    }
?>

