<?php 
    declare(strict_types=1);

// 本番環境はURLの先頭を書き換える
    $db_host = '127.0.0.1';

    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");

    // 利用クラス等の読み込み

    // ダンジョンマップのセルの種類を表す列挙型
    require_once 'lib/Enum_MzKind.php';

    // 方向を表すクラス
    require_once 'lib/Class_Direct.php';

    // 位置・経路を表すクラス全般
    require_once 'lib/Class_PointSet.php';

    // MAZE関係クラス全般
    require_once 'lib/Class_Maze.php';

    
    // 主人公クラス全般
    require_once 'lib/Class_Hero.php';

/*******************************************************************************/
/*                                                                             */
/*                                 主　処　理                                   */
/*                                                                             */
/*******************************************************************************/

    init();

    $ret_JSON = '';
    switch ($ga->mode) {
        case 'new':
            for ($i = 0; $i < GlobalVar::Max_of_Maze_Floor; $i++) {
                $gv->maze->create_maze($i);
            }
            for ($i = 0; $i < GlobalVar::Max_of_Maze_Floor - 1; $i++) {
                $gv->maze->create_stair($i);
            }
            $ret_maze = $gv->maze->encode();
            $gv->hero = new_hero();
            $ret_hero = $gv->hero->encode();

            $ret_JSON = json_encode(['maze' => $ret_maze, 'hero' => $ret_hero],  
                        JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
            break;
        default:
            $ret = [
                'maze_id' => -1,
                'floor'   => -1,
                'title'   => 'No Title',
                'size_x'  =>  0,
                'size_y'  =>  0,
                'size_z'  =>  0,
                'maze'    => '',
                'mask'    => $ga->mode,
            ];
            $ret_JSON = json_encode(['maze' => $ret],  JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
            break;
    }

    header("Content-type: application/json");
    echo $ret_JSON;
    free();

/*******************************************************************************/
/*                                                                             */
/*                                初　期　設　定                                */
/*                                                                             */
/*******************************************************************************/

    function init(): void {
        global $gv,$ga;
        $gv = new GlobalVar();
        $ga = new GlobalArguments();
    
        return;
    }

//////////////////////////////////////////////
/////
/////     クラス宣言
/////
//////////////////////////////////////////////

    // 大域変数の設定
    class GlobalVar {
        public string $script_path;
        public string $cgi_base;
        public string $cgi_home;

        public string $icon_home;

        public PDO    $mmd_db;

        public const  Maze_size_x = 21;
        public const  Maze_size_y = 21;
        public const  Limit_of_room     = 5;
        public const  Max_size_of_room  = 3;
        public const  Max_of_Maze_Floor = 3;
        public Maze   $maze;
        public Hero   $hero;

        public function __construct() {
            global $db_host;

            $this->script_path = $_SERVER['SCRIPT_NAME'];
            $this->cgi_base    = pathinfo($this->script_path, PATHINFO_DIRNAME);
            $this->cgi_home    = dirname ($this->cgi_base);
            $this->icon_home   = "{$this->cgi_home}/icon-img/kkrn_icon_home_3.png";

            $this->mmd_db      = PDO_db_open($db_host, 'db_mai'); 

            $this->maze        = new Maze([
                'fill_kind'    => MzKind::Empty,
                'size_x'       => GlobalVar::Maze_size_x,
                'size_y'       => GlobalVar::Maze_size_y,
                'size_z'       => GlobalVar::Max_of_Maze_Floor, 
                'limit_room'   => GlobalVar::Limit_of_room,
                'room_size'    => GlobalVar::Max_size_of_room,
            ]);
        }
    }
    
    
    // POST引数の設定
    class GlobalArguments {
        public string $mode;

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
        }
    }
 
//////////////////////////////////////////////
///   サブルーチン
//////////////////////////////////////////////

function new_hero(): Hero {
    global $gv;
    $x = 2 * random_int(0, (($gv->maze->get_size_x() - 1) / 2) - 1) + 1;
    $y = 2 * random_int(0, (($gv->maze->get_size_y() - 1) / 2) - 1) + 1;
    $z = 1 * random_int(0,  ($gv->maze->get_size_z() - 1));
    $d = random_int(0, Direct::MAX);
    return new Hero(['x' => $x, 'y' => $y, 'z' => $z, 'd' => $d]);
}


///////////////////////////////////////////////
///   データベース関係 
///////////////////////////////////////////////   

    function pdo_error1(PDOException $e, string $errmsg): void {
        global $gv;
        $gv->mes->set_err_message($errmsg);
        $gv->mes->set_err_message("{$e->getCode()}");
        $gv->mes->set_err_message("{$e->getMessage()}");
        return;
    }

    function pdo_error2(Error $e, string $errmsg): void {
        global $gv;
        $gv->mes->set_err_message($errmsg);
        $gv->mes->set_err_message("{$e->getCode()}");
        $gv->mes->set_err_message("{$e->getMessage()}");
        return;
    }
    

    function PDO_db_open(string $db_host, string $db_name): PDO {

        // データベース関連定数
        $db_user = "namwons33";
        $db_passwd = "PE333833";
        $db_options =  array(
            // SQL実行失敗時には例外をスローしてくれる
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            // カラム名をキーとする連想配列で取得する．これが一番ポピュラーな設定
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            // ページ終了時に終わらない持続的な接続を使う 
            // PDO::ATTR_PERSISTENT => true,
            // バッファードクエリを使う(一度に結果セットをすべて取得し、サーバー負荷を軽減)
            // SELECTで得た結果に対してもrowCountメソッドを使えるようにする
            // PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true,
        );

        $dsn = "mysql:dbname={$db_name};host={$db_host};charset=utf8mb4";
        try {
            $dbh = new PDO($dsn,$db_user,$db_passwd,$db_options);
        } catch (PDOException $e) {
            pdo_error1($e, "データベース接続エラー: {$dsn}");
        }
        return $dbh;
    }

    function free(): void{
        global $gv, $ga;
        // 大域変数の開放
        $gv  = null;
        // POST引数の解放
        $ga  = null;
    }
?>

