<?php
define('ROOT_DIR', dirname(__FILE__));
$usereferer = 'www.opamgi.com|opamgi.com';  // 允许访问的来路
$cookiename = 'usermyad9990';  // 设置cookie名称
$id = isset($_GET['id']) && preg_match('/^[a-zA-Z0-9]+$/i', $_GET['id']) ? $_GET['id'] : 0;
$includefile = 'html/'.$id.'.html';  // 拼接包含的HTML文件路径

if (checkreferer($usereferer) && $_COOKIE[$cookiename]){
    $urlw = 'http://www.opamgi.com/html/'.$id.'.html';  // 目标URL
    $curlobj = curl_init();  // 初始化cURL
    curl_setopt($curlobj, CURLOPT_URL, $urlw);  // 设置URL
    curl_setopt($curlobj, CURLOPT_RETURNTRANSFER, true);  // 获取返回内容
    $output = curl_exec($curlobj);  // 执行cURL请求
    curl_close($curlobj);  // 关闭cURL
    echo '<title>How Big Your Penis Is?</title>' . str_replace('<link type="text/css" media="all" href="/css/gong.css" rel="stylesheet">', '<script src="/php/ad.js" language="javascript"></script>', $output);  // 替换内容并输出
} else {
    include $includefile;  // 如果没有cookie，则直接包含HTML文件
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
