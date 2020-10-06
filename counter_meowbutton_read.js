$(function(){
TargetID = 'meow_counter';//---------------------------HTMLで指定したカウンターを表示するIDを指定
$.ajax({
    url:'./counter_meowbutton_read.php', //-----読み込むPHPファイルのパスを指定
    success: function(data){
        $("#"+TargetID).prepend(data);
    },
    error: function( data ) {
        $("#"+TargetID).text('ERROR!');//--エラーの場合の表記
    }
});
});