$(function(){

TargetIDB = 'meow_button';//---------------------------ニャーボタンID
TargetID = 'meow_counter';//---------------------------HTMLで指定したカウンターを表示するIDを指定

$("#"+'meow_button_setsumei').hide();

/*
$("#"+TargetID).click(function(){
	$("#"+'meow_button_setsumei').toggle();
});
*/

$("#"+TargetID).hover(function(){
	$("#"+'meow_button_setsumei').empty();
	rndcat = Math.floor(Math.random()*10+1);
	rndtxt = "";
	if (rndcat <= 1) {
		rndtxt = " World is Nyandaful!";
	}else if (rndcat <= 2) {
		rndtxt = " Please do not rapid push!";
	} else if (rndcat <=3){
		rndtxt = " I am hungry!";
	}else if (rndcat <=4) {
		rndtxt = " Are you hacker?";
	}else if (rndcat <=5) {
		rndtxt = " Tips: If you reload, perhaps cat voice will change.";
	}else if (rndcat <=6) {
		rndtxt = " Don't worry, we are cats!";
	}else if (rndcat <=7) {
		rndtxt = " This is a cat, I am a cat, you are a cat too!";
	}else if (rndcat <=8) {
		rndtxt = " Cats are made by some water, Adobe Animate and more.";
	}else if (rndcat <=9) {
		rndtxt = " Cats loves all, all, all, all!";
	} else if (rndcat <=10) {
		rndtxt = " Are you human? It's joke.";
	} else {
		rndtxt = "<- World Meow Record!"
	}
	$("#"+'meow_button_setsumei').text(rndtxt);
	$("#"+'meow_button_setsumei').fadeIn("fast");
}, function(){
	$("#"+'meow_button_setsumei').fadeOut("fast");
});

$("#"+TargetIDB).click(function(){

	$(this).prop('disabled',true);//ボタンを無効化して連打を防ぐニャン
	$.ajax({
	    url:'./counter_meowbutton_submit.php', //-----読み込むPHPファイルのパスを指定
	    success: function(data){
	    	$("#"+TargetID).empty();
	        $("#"+TargetID).prepend(data);
	        $("#"+TargetIDB).prop('disabled',false);//成功したらボタンを有効化するニャン
	    },
	    error: function( data ) {
	        $("#"+TargetIDB).text('Meow Button is dead!');//--エラーの場合の表記
	    },
	    timeout: 10000
	});

});

});