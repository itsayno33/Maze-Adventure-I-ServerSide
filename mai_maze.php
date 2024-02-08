<?php 
    declare(strict_types=1);

// 本番環境はURLの先頭を書き換える
    $db_host = '127.0.0.1';

    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");

    // 利用クラス等の読み込み
    require_once './lib/Class_DspMessage.php'; // 画面メッセージの表示用クラス


    // ダンジョンマップのセルの種類を表す列挙型
    require_once './lib/Enum_MzKind.php';

    // 方向を表すクラス
    require_once './lib/Class_Direct.php';

    // 位置・経路を表すクラス全般
    require_once './lib/Class_PointSet.php';

    // MAZE関係クラス全般
    require_once './lib/Class_Maze.php';

    // パーティークラス全般
    require_once './lib/Class_Team.php';

/*******************************************************************************/
/*                                                                             */
/*                                 主　処　理                                   */
/*                                                                             */
/*******************************************************************************/

    init();
//    $ga->mode = 'new'; // 暫定
    switch ($ga->mode) {
        case 'new':
//            $gv->maze->create_maze(0);
//            $gv->team = new_team();
            break;
        default:
            break;
    }

//////////////////////////////////////////////
///   サブルーチン
//////////////////////////////////////////////

function new_team(): Team {
    global $gv;
    $x = 2 * random_int(0, (($gv->maze->get_size_x() - 1) / 2) - 1) + 1;
    $y = 2 * random_int(0, (($gv->maze->get_size_y() - 1) / 2) - 1) + 1;
    $z = 2 * random_int(0,  ($gv->maze->get_size_z() - 1));
    $d = random_int(0, Direct::MAX);
    return new Team(['x' => $x, 'y' => $y, 'z' => $z, 'd' => $d]);
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
        public const    Maze_size_z =  1;
        public const    Limit_of_room    = 5;
        public const    Max_size_of_room = 3;
        public Maze     $maze;
        public Team     $team;

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
                                    'size_z'     => GlobalVar::Maze_size_z,
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
        public int    $pid = 1;
        public string $opt = '';

        public function __construct() {
            global $gv;

            if ( array_key_exists('mode', $_GET) && $_GET['mode'] != '') {
                $this->mode         = $_GET ['mode'];
            } else {
                if ( array_key_exists('mode', $_POST) &&  $_POST['mode'] != '') {
                    $this->mode     = $_POST['mode'];
                } else {
                    $this->mode     = 'new';
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
            if ( array_key_exists('opt', $_GET) && is_string($_GET['opt'])) {
                $this->opt          = $_GET ['opt'];
            } else {
                if ( array_key_exists('opt', $_POST) &&  is_string($_POST['opt'])) {
                    $this->opt      = $_POST['opt'];
                } else {
                    $this->opt      = '';
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0 ,user-scalable=0, shrink-to-fit=no, viewport-fit=cover">
    <title>Maze Adventure I</title>
    <link rel="stylesheet" href="css.php?time=<?php echo date("Y-m-d_H:i:s"); ?>&file=mai_maze" />
    <script src="./js/mai_maze.js?time=<?php echo date("Y-m-d_H:i:s"); ?>"></script>
</head>
<body id='body'>
    <header id='pane_header'>
        <h1 class='h1'>ダンジョンアドベンチャーⅠ</h1>
    </header>
    <article id='pane_maze_vw3D'>
        <canvas id='maze_view3D_canvas' width='320' height='200'></canvas>
        <p id='maze_view3D_direction_info'></p>
    </article>
    <article id='pane_maze_vw2D'>
        <pre id='maze_view2D_pre'></pre>
    </article>
    <article id='pane_camp_list'>
        <ul id='camp_list'>
            <li id='camp_load'>冒険の復活
                <p>以前保存した冒険を再開できます</p></li>
            <li id='camp_save'>冒険の記録
                <p>直前までの冒険を保存できます</p></li>
            <li id='camp_mvpt'>街への帰還
                <p>街(冒険者ギルド)へジャンプします</p></li>
        </ul>
    </article>
    <article id='pane_load_list'>
        <form id='load_data_form'>
            <input id='load_data_id' for='load_data_form' type='hidden' name='load_data_id' value='-1' />
        </form>
        <ul id='load_data_list'></ul>
    </article>
    <article id='pane_load_data'>
        <fieldset id='load_data_fields'>
            <legend>セーブ情報</legend>
            <ul id='load_data_detail'>
                <li>
                    <label for='load_data_time'>保存日時:</label>
                    <p id='load_data_time'></p>
                </li>
                <li>
                    <label for='load_data_point'>保存場所:</label>
                    <p id='load_data_point'></p>
                </li>
                <li>
                    <label for='load_data_detail'>詳細:</label>
                    <textarea id='load_data_detail' for='load_data_form' type='text' name='detail' minlength='0' maxlength='99' cols='30' rows='5' placeholder='(任意)' readonly></textarea>
                </li>
            </ul>
        </fieldset>
    </article>
    <article id='pane_save_list'>
        <form id='save_data_form'>
            <input id='save_data_id' for='save_data_form' type='hidden' name='save_data_id' value='-1' />
        </form>
        <ul id='save_data_list'></ul>
    </article>
    <article id='pane_save_data'>
        <fieldset id='save_data_fields'>
            <legend>セーブ情報を入力して下さい</legend>
            <ul id='save_data_detail'>
                <li>
                    <label for='save_data_time'>保存日時:</label>
                    <p id='save_data_time'></p>
                </li>
                <li>
                    <label for='save_data_point'>保存場所:</label>
                    <p id='save_data_point'></p>
                </li>
                <li>
                    <label for='save_data_detail'>詳細(任意):</label>
                    <textarea id='save_data_detail' for='save_data_form' type='text' name='detail' minlength='0' maxlength='99' cols='30' rows='5' placeholder='(任意)'></textarea>
                </li>
            </ul>
        </fieldset>
    </article>
    <article id='pane_camp_mesg'>
        <button id='r_cp1' type='button' name='r_cp1' value='R'>戻る（Ｒ）</button>
        <p id='camp_mesg'></p>
        <button id='n_cp1' type='button' name='n_cp1' value='N'>いいえ</button>
        <button id='y_cp1' type='button' name='y_cp1' value='Y'>はい</button>
        <button id='s_cp1' type='button' name='s_cp1' value='S'>切替</button>
    </article>
    <article id='pane_maze_mesg'>
        <p id='maze_mesg'></p>
    </article>
    <article id ='pane_ctls_boad'> 
        <div>
        <div id='ctls_boad'>
            <button id='debug_mode' type='button' name='debug_mode_button' value='false'>通常</button>
            <button id='u_arr' type='button' name='u_arr' value='U'>↑</button>
            <button id='d_arr' type='button' name='d_arr' value='D'>↓</button>
            <button id='l_arr' type='button' name='l_arr' value='L'>←</button>
            <button id='r_arr' type='button' name='r_arr' value='R'>→</button>
            <button id='y_btn' type='button' name='y_btn' value='U'>〇</button>
            <button id='n_btn' type='button' name='n_btn' value='N'>✖</button>
            <button id='s_btn' type='button' name='s_btn' value='S'>選</button>
            <button id='r_btn' type='button' name='r_btn' value='T'>戻</button>
            <button id='c_btn' type='button' name='c_btn' value='C'>キャンプ（Ｃ）</button>
        </div>
        </div>
    </article>
    <article id ='pane_sytm_logs'>
        <!-- div id='client_message'></div -->
        <?php 
            $gv->mes->display_err_message(); 
            $gv->mes->display_nor_message(); 
        ?>
    </article>
    <footer id='pane_footer'>
        <a href='../md/'><img src='./icon-img/kkrn_icon_home_3.png' /></a>
        <p class='foot_print'>Maze Adventure Ⅰ.</p>
    </footer>
    <script id='ts_caller'>
        window.tsCall.start_game(
            '<?php echo $ga->mode; ?>', 
            '<?php echo $gv->script_path; ?>', 
             <?php echo $ga->pid; ?>, 
            '<?php echo $ga->opt; ?>', 
        );
    </script>
</body>
<?php
    // 大域変数の開放
    $gv  = null;
    // POST引数の解放
    $ga  = null;
?>
</html>

