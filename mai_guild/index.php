<?php 
    declare(strict_types=1);

// 本番環境はURLの先頭を書き換える
    $db_host = '127.0.0.1';

    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");

    // 利用クラス等の読み込み
    require_once '../lib/Class_DspMessage.php'; // 画面メッセージの表示用クラス


    // ダンジョンマップのセルの種類を表す列挙型
    require_once '../lib/Enum_MzKind.php';

    // 方向を表すクラス
    require_once '../lib/Class_Direct.php';

    // 位置・経路を表すクラス全般
    require_once '../lib/Class_PointSet.php';

    // MAZE関係クラス全般
    require_once '../lib/Class_Maze.php';

    // パーティークラス全般
    require_once '../lib/Class_Team.php';

/*******************************************************************************/
/*                                                                             */
/*                                 主　処　理                                   */
/*                                                                             */
/*******************************************************************************/

    init();
    $ga->mode = 'new'; // 暫定
    switch ($ga->mode) {
        case 'view':
            $gv->maze->create_maze(0);
            $gv->team = new_team();
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
            if ( array_key_exists('pid', $_GET) && is_numeric($_GET['pid'])) {
                $this->pid          = intval($_GET ['pid']);
            } else {
                if ( array_key_exists('pid', $_POST) &&  is_numeric($_POST['pid'])) {
                    $this->pid      = intval($_POST['pid']);
                } else {
                    $this->pid      = 1;
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
    <link rel="stylesheet" href="css.php?time=<?php echo date("Y-m-d_H:i:s"); ?>&file=mai_guild" />
    <script src="./js/bundle.js?time=<?php echo date("Y-m-d_H:i:s"); ?>"></script>
</head>
<body id='body'>
    <h1 class='h1'>ダンジョンアドベンチャーⅠ【ギルド】</h1>
    <article class='gld_view_pane' id='gld_view_pane'>
        <button id='debug_mode' name='debug_mode' value='false' class='normal'>通常モード中</button>
        <div id='gld_view_switch'>
            <div id='gld_view_switch_guild'>
                <h2>ギルド窓口</h2>
                <ul id='guild_list'>
                    <li id='guild_hres'>冒険者情報
                        <p>　冒険者情報を見ることができます(未実装)</p></li>
                    <li id='guild_edit'>冒険者編集
                        <p>　既存キャラクターを編集出来ます(デバッグモードのみ)</p></li>
                    <li id='guild_appd'>冒険者募集
                        <p>　新しいキャラクターを募集出来ます(未実装)</p></li>
                    <li id='guild_load'>冒険者呼び出し
                        <p>　冒険情報をロードできます(未実装)</p></li>
                    <li id='guild_save'>冒険者登録
                        <p>　冒険情報をセーブできます(未実装)</p></li>
                    <li id='guild_to_maze'>冒険出発
                        <p>　ダンジョンに出発します(未実装)</p></li>
                </dl>
            </div>
            <div id='gld_view_switch_hres'>
                <h2>冒険者情報の一覧</h2>
                <ul id='hres_list'></ul>
                <fieldset id='hres_hero_fields'>
                    <legend>冒険者の詳細情報</legend>
                    <ul id='hres_hero_info'></ul>
                </fieldset>
            </div>
            <div id='gld_view_switch_edit'>
                <h2>冒険者情報の編集</h2>
                <ul id='edit_list'></ul>
                <fieldset id='edit_hero_fields'>
                    <legend>冒険者の情報</legend>
                    <ul id='edit_hero_info'></ul>
                </fieldset>
            </div>
            <div id='gld_view_switch_appd'>
                <h2>冒険者の募集票</h2>
                <ul id='appd_list'></ul>
                <fieldset id='appd_hero_fields'>
                    <legend>冒険者の情報</legend>
                    <ul id='appd_hero_info'></ul>
                </fieldset>
            </div>
            <div id='gld_view_switch_load'>
            </div>
            <div id='gld_view_switch_save'>
            </div>
        </div>
        <div id='gld_view_message_div'><p id='gld_view_message'></p></div>
    </article>
    <article class='gld_ctl' id='gld_ctl_pane'>
        <div id ='ctl_view'><div id='ctl_panel'>
            <button id='u_arrow' type='button' name='u_arrow' value='U'>↑</button>
            <button id='d_arrow' type='button' name='d_arrow' value='D'>↓</button>
            <button id='l_arrow' type='button' name='l_arrow' value='L'>←</button>
            <button id='r_arrow' type='button' name='r_arrow' value='R'>→</button>
            <button id='y_btn'   type='button' name='y_btn'   value='U'>〇</button>
            <button id='n_btn'   type='button' name='n_btn'   value='N'>✖</button>
            <button id='c_btn'   type='button' name='c_btn'   value='C'>キャンプ（Ｃ）</button>
        </div></div>
    </article>
    <article class='message_pane' id='message_pane'>
        <div id='client_message'></div>
        <?php 
            $gv->mes->display_err_message(); 
            $gv->mes->display_nor_message(); 
        ?>
    </article>
    <footer id='footer_pane'>
        <a href='../../md/'><img src='../icon-img/kkrn_icon_home_3.png' /></a>
        <p class='foot_print'>Guild in Maze Adventure I.</p>
    </footer>
    <script>
        window.tsCall.get_init_data('<?php echo $gv->cgi_base; ?>', <?php echo $ga->pid; ?>);
    </script>
</body>
<?php
    // 大域変数の開放
    $gv  = null;
    // POST引数の解放
    $ga  = null;
?>
</html>

