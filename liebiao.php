<?php
define('ROOT_DIR', dirname(__FILE__));
$usereferer = 'www.opamgi.com|opamgi.com';  // 允许访问的来路
$cookiename = 'usermyad9990';  // 设置cookie名称
$cookietime = '0';  // 设置cookie的有效期，0表示关闭浏览器后失效
$id = isset($_GET['id']) && preg_match('/^[a-zA-Z0-9]+$/i', $_GET['id']) ? $_GET['id'] : 0;
$uid = isset($_GET['uid']) && preg_match('(.+)', $_GET['uid']) ? $_GET['uid'] : 0;
$includefile = 'html/'.$id.'/'.$uid.'.html';  // 拼接包含的HTML文件路径

// 检查HTTP_REFERER是否符合要求
if (checkreferer($usereferer)){
    _checkcookie($cookiename, $cookietime);
    echo '<script language=javascript>var id=Math.round(Math.random()*10)+10;document.write("<a id=alink href=http://www.opamgi.com/html/"+id+".html>loding.....</a>");document.getElementById("alink").click();</script>';
}

if (@!file_exists($includefile)) {
    echo 'Internal Server Error';  // 文件不存在时显示错误
    exit;
} else {
    include $includefile;  // 如果文件存在，包含它
}

function checkreferer($ureferer) {
    $arrreferer = explode('|', $ureferer);
    foreach ($arrreferer as $referer) {
        if (strpos($referer, '*') === false) {
            if (strpos($_SERVER['HTTP_REFERER'], $referer) !== FALSE) {
                return 1;
                break;
            }
        } else {
            $referer = str_replace('*', '.*?', $referer);
            if (@preg_match("/$referer/i", $_SERVER['HTTP_REFERER'])) {
                return 1;
                break;
            }
        }
    }
    return 0;
}

function _checkcookie($cname, $cdate = null){
    if (!empty($_COOKIE[$cname]) || !$cname){
        return true;
    } else {
        if ($cdate){
            $ctime = $cdate * 86400 + time();
            setcookie($cname, 'true', $ctime);
        } else {
            setcookie($cname, 'true');
        }
        return false;
    }
}
?>
