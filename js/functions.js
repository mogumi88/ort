$(function () {
  setTimeout('rect()'); //アニメーションを実行
});

function rect() {
  $('#rect').animate({
    marginTop: '-=20px'
  }, 2500).animate({
    marginTop: '+=20px'
  }, 2500);
  setTimeout('rect()', 5000); //アニメーションを繰り返す間隔
}

