var Links = {
  setColor : function(color){
/*    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i <alist.length){
      alist[i].style.color = color;
      i++;
    } */
    $('a').css('color', color); //웹페이지의 모든 a태그를 JQuery를 이용해서 제어함
    //위의 반복문을 JQuery 한줄로 대체함
      }
}
var Body = {
  setColor : function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor : function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}
function NightDayHandler(self){
  if(self.value==='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';
    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night';
    Links.setColor('blue');
    }
  }
