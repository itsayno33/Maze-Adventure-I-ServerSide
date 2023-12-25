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

    
    // パーティークラス全般
    require_once 'lib/Class_Team.php';

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
        case 'new':
            new_maze();
            new_team();
            $ret_JSON = all_encode(0);
            break;
        case 'instant_save':
            $gv->maze_assoc = json_decode($ga->maze_JSON, true);
            $gv->maze->decode($gv->maze_assoc);

            $gv->team_assoc = json_decode($ga->team_JSON, true);
            $gv->team->decode($gv->team_assoc);
            $result = do_i_save();

            if ($result) $code = 0; else $code = 100;
            if ($gv->mes->is_err()) $code = 200;
            $ret_JSON = all_encode($code);
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
 
//////////////////////////////////////////////
///   サブルーチン
//////////////////////////////////////////////

function all_encode(int $code): string {
    global $gv;

    $ret_assoc = [];

    $ret_assoc['ecode'] = $code;
    if ($gv->mes->is_err()) {
        $ret_assoc['emsg'] = implode("\n", $gv->mes->get_err_messages());
    }
    $ret_assoc['maze'] = $gv->maze->encode();
    $ret_assoc['team'] = $gv->team->encode();

    $ret_JSON = json_encode($ret_assoc,  
                JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    return $ret_JSON;
}
function new_maze(): void {
    global $gv;
    for ($i = 0; $i < GlobalVar::Max_of_Maze_Floor; $i++) {
        $gv->maze->create_maze($i);
    }
    for ($i = 0; $i < GlobalVar::Max_of_Maze_Floor - 1; $i++) {
        $gv->maze->create_stair($i);
    }
}

function new_team(): void {
    global $gv;
    $x = 2 * random_int(0, (($gv->maze->get_size_x() - 1) / 2) - 1) + 1;
    $y = 2 * random_int(0, (($gv->maze->get_size_y() - 1) / 2) - 1) + 1;
    $z = 0;  //    $z = 1 * random_int(0,  ($gv->maze->get_size_z() - 1));
    $d = random_int(0, Direct::MAX);

    $heroes = [];
    for ($i = 0; $i <= 3; $i++) {
        array_push($heroes, new Hero());
    }
    $gv->team->set_prp(['x' => $x, 'y' => $y, 'z' => $z, 'd' => $d, 'Heroes' => $heroes]);
}

function do_i_save(): bool {
    return do_save(1, '__InstantSaveData__', true);
}

function do_save(int $player_id, string $title, bool $is_instant): bool {
    global $gv;
    $db_mai = $gv->db_mai;

    tr_begin($db_mai);

    $save_id = get_save_id($db_mai, $player_id, $title);
    if ($save_id === false) {
        tr_rollback($db_mai);
        return false;
    }

    $result = del_hero($db_mai, $save_id);
    if ($result === false) {
        tr_rollback($db_mai);
        return false;
    }

    $result = del_team($db_mai, $save_id);
    if ($result === false) {
        tr_rollback($db_mai);
        return false;
    }

    $result = del_maze($db_mai, $save_id);
    if ($result === false) {
        tr_rollback($db_mai);
        return false;
    }

    $result = del_save($db_mai, $save_id);
    if ($result === false) {
        tr_rollback($db_mai);
        return false;
    }

    $result = add_save($db_mai, 1, $save_id, $title, $is_instant);
    if ($result === false) {
        tr_rollback($db_mai);
        return false;
    } 

    $result = add_maze($db_mai, $save_id);
    if ($result === false) {
        tr_rollback($db_mai);
        return false;
    }

    $team_id = add_team($db_mai, $save_id);
    if ($team_id  === false) {
        tr_rollback($db_mai);
        return false;
    }

    $result = add_hero($db_mai, $save_id, $team_id);
    if ($result  === false) {
        tr_rollback($db_mai);
        return false;
    }

    return tr_commit($db_mai);
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

            $this->db_mai      = PDO_db_open($db_host, 'db_mai'); 

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
        public string $maze_JSON  = '';
        public string $team_JSON  = '';

        public int    $save_id    = -1;
        public string $save_title = ''; 

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
            if ( array_key_exists('maze', $_POST) &&  $_POST['maze'] != '') {
                $this->maze_JSON    = $_POST['maze'];
            } 
            if ( array_key_exists('team', $_POST) &&  $_POST['team'] != '') {
                $this->team_JSON    = $_POST['team'];
            } 
            if ( array_key_exists('save_id', $_POST) &&  is_numeric($_POST['save_id'])) {
                $this->save_id      = intval($_POST['save_id']);
            } 
            if ( array_key_exists('save_title', $_POST) &&  $_POST['save_title'] != '') {
                $this->save_title    = $_POST['save_title'];
            } 
        }
    }

///////////////////////////////////////////////
///   データベース関係 
///////////////////////////////////////////////   


function tr_begin(PDO $db_mai): bool {
    try {
        $db_mai->beginTransaction();
    } catch (PDOException $e) {
        pdo_error1($e, "トランザクションの開始失敗");
        return false;
    } catch (Throwable $ee) {
        pdo_error2($ee, "トランザクション開始の致命的失敗");
        return false;
    } 
    return true;
}

function tr_commit(PDO $db_mai): bool {
    try {
        $db_mai->commit();
    } catch (PDOException $e) {
        pdo_error1($e, "トランザクションのコミット失敗");
        return false;
    } catch (Throwable $ee) {
        pdo_error2($ee, "トランザクション・コミットの致命的失敗");
        return false;
    } 
    return true;
}

function tr_rollback(PDO $db_mai): bool {
    try {
        $db_mai->rollback();
    } catch (PDOException $e) {
        pdo_error1($e, "トランザクションのロールバック失敗");
        return false;
    } catch (Throwable $ee) {
        pdo_error2($ee, "トランザクション・ロールバックの致命的失敗");
        return false;
    } 
    return true;
}

function get_save_id(PDO $db_mai, int $player_id, string $title): int | false {
    $seek_save_SQL =<<<SEEK_SAVE01
        SELECT id FROM tbl_save
        WHERE  player_id = :player_id AND title = :title
SEEK_SAVE01;
try {
    $seek_save_stmt = $db_mai->prepare($seek_save_SQL);
    $seek_save_stmt->bindValue(':player_id', $player_id);
    $seek_save_stmt->bindValue(':title',     $title);
    $seek_save_stmt->execute();
    $resultRecordSet = $seek_save_stmt->fetchAll();
} catch (PDOException $e) {
    pdo_error1($e, "SQLエラー 20: {$seek_save_SQL}");
    return false;
} catch (Throwable $ee) {
    pdo_error2($ee, "SQLの致命的エラー 21: {$seek_save_SQL}");
    return false;
} 
    if (count($resultRecordSet) < 1) return false;
    return intval($resultRecordSet[0]['id']);
}

function add_save(PDO $db_mai, int $player_id, int $save_id, string $title, bool $is_instant): int | bool {
    $insert_save_SQL =<<<INSERT_SAVE01
        INSERT INTO tbl_save (player_id, id, title, auto_mode, is_active, is_delete)
        VALUES ( :player_id, :id, :title, :auto_mode, true, false)
INSERT_SAVE01;
    try {
        $insert_save_stmt = $db_mai->prepare($insert_save_SQL);
        $insert_save_stmt->bindValue(':player_id', $player_id);
        $insert_save_stmt->bindValue(':id',        $save_id);
        $insert_save_stmt->bindValue(':title',     $title);
        $insert_save_stmt->bindValue(':auto_mode', $is_instant);
        $insert_save_stmt->execute();
    } catch (PDOException $e) {
        pdo_error1($e, "SQLエラー 1: {$insert_save_SQL}");
        return false;
    } catch (Throwable $ee) {
        pdo_error2($ee, "SQLの致命的エラー 2: {$insert_save_SQL}");
        return false;
    } 
//    return intval($db_mai->lastInsertId());
    return true;
}

function add_maze(PDO $db_mai, int $save_id): int | bool {
    global $gv;
    $a = $gv->maze->encode();

    $insert_maze_SQL =<<<INSERT_MAZE01
        INSERT INTO tbl_maze (save_id, title, size_x, size_y, size_z, maps, mask)
        VALUES ( :save_id , :title , :size_x , :size_y , :size_z , :maps , :mask )
INSERT_MAZE01;
    try {
        $insert_maze_stmt = $db_mai->prepare($insert_maze_SQL);
        $insert_maze_stmt->bindValue(':save_id', $save_id); 
        $insert_maze_stmt->bindValue(':title',   $a['title']); 
        $insert_maze_stmt->bindValue(':size_x',  $a['size_x']); 
        $insert_maze_stmt->bindValue(':size_y',  $a['size_y']); 
        $insert_maze_stmt->bindValue(':size_z',  $a['size_z']); 
        $insert_maze_stmt->bindValue(':maps',    $a['maze']); 
        $insert_maze_stmt->bindValue(':mask',    $a['mask']); 
        $insert_maze_stmt->execute();
    } catch (PDOException $e) {
        pdo_error1($e, "SQLエラー 3: {$insert_maze_SQL}");
        return false;
    } catch (Throwable $ee) {
        pdo_error2($ee, "SQLの致命的エラー 5: {$insert_maze_SQL}");
        return false;
    } 
//    return intval($db_mai->lastInsertId());
    return true;
}

function add_team(PDO $db_mai, int $save_id): int | bool {
    global $gv;
    $a = $gv->team->encode();

    $insert_team_SQL =<<<INSERT_TEAM01
        INSERT INTO tbl_team (save_id, name, pos_x, pos_y, pos_z, pos_d)
        VALUES ( :save_id , :name , :pos_x , :pos_y , :pos_z , :pos_d )
INSERT_TEAM01;
    try {
        $insert_team_stmt = $db_mai->prepare($insert_team_SQL);
        $insert_team_stmt->bindValue(':save_id', $save_id);  
        $insert_team_stmt->bindValue(':name',    $a['name']); 
        $insert_team_stmt->bindValue(':pos_x',   $a['point']['x']); 
        $insert_team_stmt->bindValue(':pos_y',   $a['point']['y']); 
        $insert_team_stmt->bindValue(':pos_z',   $a['point']['z']); 
        $insert_team_stmt->bindValue(':pos_d',   $a['direct']['d']); 
        $insert_team_stmt->execute();
    } catch (PDOException $e) {
        pdo_error1($e, "SQLエラー 6: {$insert_team_SQL}");
        return false;
    } catch (Throwable $ee) {
        pdo_error2($ee, "SQLの致命的エラー 7: {$insert_team_SQL}");
        return false;
    } 
    return intval($db_mai->lastInsertId());
//    return true;
}

function add_hero(PDO $db_mai, int $save_id, int $team_id): int | bool {
    global $gv;

    $insert_hero_SQL =<<<INSERT_HERO01
        INSERT INTO tbl_hero (save_id, team_id, name, is_hero, is_alive)
        VALUES ( :save_id , :team_id , :name , :is_hero , :is_alive )
INSERT_HERO01;
    try {
        $insert_hero_stmt = $db_mai->prepare($insert_hero_SQL);
        $heroes = ($gv->team->encode())['heroes'];
        foreach ($heroes as $hero) {
            $insert_hero_stmt->bindValue(':save_id',   $save_id); 
            $insert_hero_stmt->bindValue(':team_id',   $team_id); 
            $insert_hero_stmt->bindValue(':name',      $hero['name']);
            $insert_hero_stmt->bindValue(':is_hero',   true);
            $insert_hero_stmt->bindValue(':is_alive',  true);
            $insert_hero_stmt->execute();
        }
    } catch (PDOException $e) {
        pdo_error1($e, "SQLエラー 8: {$insert_hero_SQL}");
        return false;
    } catch (Throwable $ee) {
        pdo_error2($ee, "SQLの致命的エラー 9: {$insert_hero_SQL}");
        return false;
    } 
//    return intval($db_mai->lastInsertId());
    return true;
}

function del_save(PDO $db_mai, int $save_id): bool {
    global $ga;

    $delete_save_SQL =<<<DELETE_SAVE01
        DELETE FROM tbl_save 
        WHERE  id = :save_id
DELETE_SAVE01;
    try {
        $delete_save_stmt = $db_mai->prepare($delete_save_SQL);
        $delete_save_stmt->bindValue(':save_id', $save_id);
        $delete_save_stmt->execute();
    } catch (PDOException $e) {
        pdo_error1($e, "SQLエラー 10: {$delete_save_SQL}");
        return false;
    } catch (Throwable $ee) {
        pdo_error2($ee, "SQLの致命的エラー 11: {$delete_save_SQL}");
        return false;
    } 
    return true;
}

function del_maze(PDO $db_mai, int $save_id): bool {
    global $ga;

    $delete_maze_SQL =<<<DELETE_MAZE01
        DELETE FROM tbl_maze 
        WHERE  save_id = :save_id
DELETE_MAZE01;
    try {
        $delete_maze_stmt = $db_mai->prepare($delete_maze_SQL);
        $delete_maze_stmt->bindValue(':save_id', $save_id);
        $delete_maze_stmt->execute();
    } catch (PDOException $e) {
        pdo_error1($e, "SQLエラー 12: {$delete_maze_SQL}");
        return false;
    } catch (Throwable $ee) {
        pdo_error2($ee, "SQLの致命的エラー 13: {$delete_maze_SQL}");
        return false;
    } 
    return true;
}

function del_team(PDO $db_mai, int $save_id): bool {
    global $ga;

    $delete_team_SQL =<<<DELETE_TEAM01
        DELETE FROM tbl_team 
        WHERE  save_id = :save_id
DELETE_TEAM01;
    try {
        $delete_team_stmt = $db_mai->prepare($delete_team_SQL);
        $delete_team_stmt->bindValue(':save_id', $save_id);
        $delete_team_stmt->execute();
    } catch (PDOException $e) {
        pdo_error1($e, "SQLエラー 15: {$delete_team_SQL}");
        return false;
    } catch (Throwable $ee) {
        pdo_error2($ee, "SQLの致命的エラー 16: {$delete_team_SQL}");
        return false;
    } 
    return true;
}

function del_hero(PDO $db_mai, int $save_id): bool {
    global $ga;

    $delete_hero_SQL =<<<DELETE_HERO01
        DELETE FROM tbl_hero 
        WHERE  save_id = :save_id
DELETE_HERO01;
    try {
        $delete_hero_stmt = $db_mai->prepare($delete_hero_SQL);
        $delete_hero_stmt->bindValue(':save_id', $save_id);
        $delete_hero_stmt->execute();
    } catch (PDOException $e) {
        pdo_error1($e, "SQLエラー 17: {$delete_hero_SQL}");
        return false;
    } catch (Throwable $ee) {
        pdo_error2($ee, "SQLの致命的エラー 18: {$delete_hero_SQL}");
        return false;
    } 
    return true;
}





    function pdo_error1(PDOException $e, string $errmsg): void {
        global $gv;
        $gv->mes->set_err_message($errmsg);
        $gv->mes->set_err_message("code: {$e->getCode()}");
        $gv->mes->set_err_message("message: {$e->getMessage()}");
        return;
    }

    function pdo_error2(Throwable $e, string $errmsg): void {
        global $gv;
        $gv->mes->set_err_message($errmsg);
        $gv->mes->set_err_message("code: {$e->getCode()}");
        $gv->mes->set_err_message("message: {$e->getMessage()}");
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

