<?php 
    declare(strict_types=1);

// 本番環境はURLの先頭を書き換える
    $db_host = '127.0.0.1';

    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");

    // 利用クラス等の読み込み
    require_once 'lib/Class_DspMessage.php'; // 画面メッセージの表示用クラス


    // ダンジョンマップのセルの種類を表す列挙型
    require_once 'lib/Enum_MzKind.php';

    // 方向を表すクラス
    require_once 'lib/Class_Direct.php';

    // 位置・経路を表すクラス全般
    require_once 'lib/Class_PointSet.php';

    // MAZE関係クラス全般
    require_once 'lib/Class_Maze.php';

/*******************************************************************************/
/*                                                                             */
/*                                 主　処　理                                   */
/*                                                                             */
/*******************************************************************************/

    init();
    $ga->mode = 'new'; // 暫定
    switch ($ga->mode) {
        case 'new':
            $gv->maze->create_maze();
            break;
        default:
            break;
    }


/*******************************************************************************/
/*                                                                             */
/*                             画　面　表　示　関　連                            */
/*                                                                             */
/*******************************************************************************/



    function display_maze(): void {
        global $gv;

        echo "<pre>\n";
        echo  $gv->maze->to_string() . PHP_EOL;
        echo "</pre>\n";

        return;
    }

    function display_cntl(): void {
        global $gv,$ga;
        return;
    }


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
        public DspMessage $mes;
        public string $script_path;
        public string $cgi_base;
        public string $cgi_home;

        public string $icon_home;

        public PDO    $mmd_db;

        public const    Maze_size_x = 21;
        public const    Maze_size_y = 21;
        public const    Limit_of_room    = 5;
        public const    Max_size_of_room = 3;
        public Maze     $maze;

        public function __construct() {
            global $db_host;

            $this->mes = new DspMessage( /* isHTML = */ true);
            $this->script_path = $_SERVER['SCRIPT_NAME'];
            $this->cgi_base    = pathinfo($this->script_path, PATHINFO_DIRNAME);
            $this->cgi_home    = dirname ($this->cgi_base);
            $this->icon_home   = "{$this->cgi_home}/icon-img/kkrn_icon_home_3.png";

            $this->mmd_db      = PDO_db_open($db_host, 'db_mai'); 

//            $this->maze        = new Maze(MzKind::Empty);
            $this->maze        = new Maze([
                                    'fill_kind'  => MzKind::Empty,
                                    'size_x'     => GlobalVar::Maze_size_x,
                                    'size_y'     => GlobalVar::Maze_size_y,
                                    'limit_room' => GlobalVar::Limit_of_room,
                                    'room_size'  => GlobalVar::Max_size_of_room,
                                ]);
        }

        public function is_error (): bool {
            return $this->mes->is_err();
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
                    $this->mode     = 'view';
                } 
            }
            $gv->mes->set_nor_message("MODE = [{$this->mode}]");
        }
    }
 
    

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

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta charset="utf-8" />
    <title>Random List of MMD VIDEO Page</title>
    <link rel="stylesheet" href="css.php?time=<?php echo date("Y-m-d_H:i:s"); ?>&file=Maze_adventure_1" />
    <script type="module" src="./js/bundle.js"></script>
</head>
<body>
    <h1 class='h1'>ダンジョンアドベンチャーⅠ</h1>
    <section class='main'>
        <article class='Maze_view2D' id='Maze_view2D_pane'>
            <pre id='Maze_view2D_pre'></pre>
            <?php /* display_maze(); */ ?>
        </article>
        <article class='Maze_view3D' id='Maze_view3D_pane'>
            <h2>ダンジョン探索</h2>
            <!-- canvas id='Maze_view3D_canvas' width='800' height='480'></canvas -->
            <p id='Maze_view3D_message'></p>
        </article>
        <article class='Maze_cntl' id='Maze_cntl_pane'>
            <dev id ='ctl_panel'>
                <button id='u_arrow' type='button' name='u_arrow' value='U'>↑</button>
                <button id='d_arrow' type='button' name='d_arrow' value='D'>↓</button>
                <button id='r_arrow' type='button' name='r_arrow' value='R'>→</button>
                <button id='l_arrow' type='button' name='l_arrow' value='L'>←</button>
            </dev>
            <?php /* display_cntl(); */ ?>
        </article>
        <article class='message_pane' id='message_pane'>
            <div id='client_message'></div>
            <?php 
                $gv->mes->display_err_message(); 
                $gv->mes->display_nor_message(); 
            ?>
        </article>
    </section>
</body>
<?php
    // 大域変数の開放
    $gv  = null;
    // POST引数の解放
    $ga  = null;
?>
</html>

