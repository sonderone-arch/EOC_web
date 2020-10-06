$(function (){  //即時関数で囲んでグローバル変数を消すため、この行はこのままで

var getDevice = (function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        return 'sp';
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        return 'tab';
    }else{
        return 'other';
    }
})();

if(getDevice == 'sp') {

  //var spCookie = getCookie('sp_alert_x');

  //if(spCookie != 'true') {

  // スマホのときはなんかする？
  var alertHtml = $('<div></div>');
  alertHtml.css({
    'text-align':'center',
    'background-color':'#9DCA96',
    'font-size':'small'
  });
  var alertHtmlX = $('<div></div>');
  alertHtmlX.css({
    'color':'#3000E8',
    'cursor':'pointer',
    'font-size':'normal'
  });
  alertHtmlX.append(' [X]');
  var ttt = "This page is not recommended for a smart phone. If you feel slower, please display on a pc or <a href='https://twitter.com/motions_cat/media'>twitter</a>. ^._.^";
  alertHtml.append(ttt);
  alertHtml.append(alertHtmlX);
  $('.meow').prepend(alertHtml);
  alertHtmlX[0].addEventListener('click', function(){
    alertHtml.css({
      'display': 'none'
    });
  });

}

});