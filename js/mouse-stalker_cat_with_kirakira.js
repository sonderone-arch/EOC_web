(function (){  //即時関数で囲んでグローバル変数を消すため、この行はこのままで

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

  // スマホのときはなんかする？

} else if (getDevice =='tab') {
  // タブレットのときはなんかする？
} else {

  // PCっぽいときは猫ときらきらを出す
  var mga="../images/loading_roll.gif";  //★画像指定
  var cat_t_x = 0;
  var cat_t_y = 0;
  var cat_hx=10;           //★表示位置 x座標。マウスと画像の横位置。マイナス値で左側
  var cat_hy=20;           //★表示位置 y座標。マウスと画像の縦位置。マイナス値で上側
  var cat_l = 80;//半径
  var cat_r = 0;// 角度
  var cat_r_spd = 2;//回転速度
  var cat_img_r = 16;//画像の中心までの長さ
  var cat_spd=10;          //★原本10。マウスと画像の速度。小さいほど速い
  var cat_st=50;     　　　//★原本20。マウスと画像の追いつき変化速度。小さいほど変化が小さい(離れにくい)
  var cat_ix=0,cat_iy=0,cat_mx=-200, cat_my=-200;
  document.write("<img src="+mga+" id='Mo' style='position:absolute; pointer-events:none; z-index:99999'>");

  function Run() {
    cat_r += cat_r_spd;
    if (cat_r > 360*100) {cat_r = 0}; //なんか∞に増え続けるとイケナイ気がする
    var w=window.innerWidth-Mo.offsetWidth-18;//無限落下防止
    var h=window.pageYOffset+window.innerHeight-Mo.offsetHeight-18;//無限落下防止
    var cat_ob=document.getElementById("Mo").style;
    cat_t_x = cat_mx + Math.cos(cat_r/180*Math.PI)*cat_l;
    cat_t_y = cat_my + Math.sin(cat_r/180*Math.PI)*cat_l;
    cat_ix+=(cat_t_x-cat_ix)/cat_st;
    cat_iy+=(cat_t_y-cat_iy)/cat_st;
    cat_ob.left=Math.min(w,cat_ix)+"px";
    cat_ob.top=Math.min(h,cat_iy)+"px";
    setTimeout(Run,cat_spd);
  }
  Run();

  //in addition to "random" can be set to any valid colour eg "#f0f" or "red"
  var colour="random";//★左記の"random"の項目に色名を記述すると記述した１色になる。このままでは虹色
  var sparkles=50;    //★原本50。キラキラ星の数
  /****************************
  *  Tinkerbell Magic Sparkle *
  *(c)2005-13 mf2fm web-design*
  *  http://www.mf2fm.com/rv  *
  * DON'T EDIT BELOW THIS BOX *
  ****************************/
  var x=ox=400;
  var y=oy=300;
  var swide=window.innerWidth, shigh=window.innerHeight;
  var sleft=sdown=0;
  var tiny=[], star=[], starv=[], starx=[], stary=[], tinyx=[], tinyy=[], tinyv=[];

  addEvent(window,"load",function() {
    var i, rats, rlef, rdow;
      for (var i=0; i<sparkles; i++) {
        var rats=createDiv(3, 3);
        rats.style.visibility="hidden";
        document.body.appendChild(tiny[i]=rats);
        starv[i]=0;
        tinyv[i]=0;
        var rats=createDiv(5, 5);
        rats.style.backgroundColor="transparent";
        rats.style.visibility="hidden";
        var rlef=createDiv(1, 5);
        var rdow=createDiv(5, 1);
        rats.appendChild(rlef);
        rats.appendChild(rdow);
        rlef.style.top="2px";
        rlef.style.left="0px";
        rdow.style.top="0px";
        rdow.style.left="2px";
        document.body.appendChild(star[i]=rats);
      }
      sparkle();
    }
  );
  
  function sparkle() {
    var c;
    if (x!=ox || y!=oy) {
      ox=x;
      oy=y;
      for (c=0; c<sparkles; c++) if (!starv[c]) {
        star[c].style.left=(starx[c]=x)+"px";
        star[c].style.top=(stary[c]=y)+"px";
        star[c].style.clip="rect(0px, 5px, 5px, 0px)";
        star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;//■2013年版追加
        star[c].style.visibility="visible";
        starv[c]=50;
        break;
      }
    }
    for (c=0; c<sparkles; c++) {
      if (starv[c]) update_star(c);
      if (tinyv[c]) update_tiny(c);
    }
    setTimeout(sparkle, 40);
  }
  function update_star(i) {
    if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
    if (starv[i]) {
      stary[i]+=1+Math.random()*3;
      if (stary[i]<shigh+sdown) {
        star[i].style.top=stary[i]+"px";
        starx[i]+=(i%5-2)/5;
        star[i].style.left=starx[i]+"px";
      }
      else { star[i].style.visibility="hidden"; starv[i]=0; return;}
    }
    else {
      tinyv[i]=50;
      tiny[i].style.top=(tinyy[i]=stary[i])+"px";
      tiny[i].style.left=(tinyx[i]=starx[i])+"px";
      tiny[i].style.width="2px";
      tiny[i].style.height="2px";
      tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;//■2013年版追加
      star[i].style.visibility="hidden";
      tiny[i].style.visibility="visible"
    }
  }
  function update_tiny(i) {
    if (--tinyv[i]==25) {
      tiny[i].style.width="1px";
      tiny[i].style.height="1px";
    }
    if (tinyv[i]) {
      tinyy[i]+=1+Math.random()*3;
      if (tinyy[i]<shigh+sdown) {
        tiny[i].style.top=tinyy[i]+"px";
        tinyx[i]+=(i%5-2)/5;
        tiny[i].style.left=tinyx[i]+"px";
      }
      else { tiny[i].style.visibility="hidden"; tinyv[i]=0; return;}
    }
    else tiny[i].style.visibility="hidden";
  }
  document.onmousemove=function (e){

    //cat_mx=e.pageX+cat_hx;
    //cat_my=e.pageY+cat_hy;
    cat_mx=e.pageX-cat_img_r;
    cat_my=e.pageY-cat_img_r;
    y=e.pageY;
    x=e.pageX;
    sdown=window.pageYOffset;
    sleft=window.pageXOffset;

  }
  function createDiv(height, width) {
    var div=document.createElement("div");
    div.style.position="absolute";
    div.style.height=height+"px";
    div.style.width=width+"px";
    div.style.overflow="hidden";
    div.style.pointerEvents="none";
    div.style.zIndex="99999";
  /*■2005年分削除  div.style.backgroundColor=color;*/
    return (div);
  }
  function newColour() {   /*■2013年版追加*/
    var c=new Array();
    c[0]=255;
    c[1]=Math.floor(Math.random()*256);
    c[2]=Math.floor(Math.random()*(256-c[1]/2));
    c.sort(function(){return (0.5 - Math.random());});
    return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
  }
}
}());//即時関数終了