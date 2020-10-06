/*
 * main.js
 */

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

// Audio 用の buffer を読み込む
var getAudioBuffer = function(url, fn) {
  var req = new XMLHttpRequest();
  // array buffer を指定
  req.responseType = 'arraybuffer';

  req.onreadystatechange = function() {
    if (req.readyState === 4) {
      if (req.status === 0 || req.status === 200) {
        // array buffer を audio buffer に変換
        context.decodeAudioData(req.response, function(buffer) {
          // コールバックを実行
          fn(buffer);
        });
      }
    }
  };

  req.open('GET', url, true);
  req.send('');
};

// サウンドを再生
var playSound = function(buffer) {
  // source を作成
  var source = context.createBufferSource();
  // buffer をセット
  source.buffer = buffer;
  // context に connect
  source.connect(context.destination);
  // 再生
  source.start(0);
};

// main
addEvent(window,"load",function(){
  // サウンドを読み込む（おみくじ）
  var omkj = Math.floor(Math.random()*6+1 );
  var srcurl = '';
  if(omkj==1){
    srcurl = './meow/catvoice.mp3';
  }else if(omkj==2){
    srcurl = './meow/cat2.mp3';
  }else if(omkj==3){
    srcurl = './meow/cat3.mp3';
  }else if(omkj==4){
    srcurl = './meow/cat4.mp3';
  }else if(omkj==5){
    srcurl = './meow/cat6.mp3';
  }else{
    srcurl = './meow/cat7.mp3';
  }
  console.log('meow button ready!');
  console.log('voice source -> https://pocket-se.info');

  getAudioBuffer(srcurl, function(buffer) {
    // 読み込み完了後にボタンにクリックイベントを登録
    var btn = document.getElementById('meow_button');
    btn.onclick = function() {
      // サウンドを再生
      playSound(buffer);
      console.log('thx your meow');
    };
  });
});