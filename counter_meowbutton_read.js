$(function(){
TargetID = 'meow_counter';//---------------------------HTML�Ŏw�肵���J�E���^�[��\������ID���w��
$.ajax({
    url:'./counter_meowbutton_read.php', //-----�ǂݍ���PHP�t�@�C���̃p�X���w��
    success: function(data){
        $("#"+TargetID).prepend(data);
    },
    error: function( data ) {
        $("#"+TargetID).text('ERROR!');//--�G���[�̏ꍇ�̕\�L
    }
});
});