


// var str ="arrb6???4xxbl5???eee5";
// qcount=0
// y = 0;

function  QuestionMarks(str){
  var str ="arrb6???4xxbl5???eee5";
  qcount=0
  y = 0;
  for (var i=0; i <str.length;) {
      if ( isNaN(str.charAt(i)) && str.charAt(i) != "?") {
        x = str.charAt(i);
        console.log("not a number" + x);
        i++;
      }
        else if (str.charAt(i) === "?" ) {
            q = str.charAt(i);
            qcount = qcount + 1;
            i++;
            console.log(q + qcount);
        }
        else {
          x = str.charAt(i);
          var integer = parseInt(x ,10);
          console.log(integer);
          i++;
          if ( integer > 0) {
            y = y + integer;
          }
        }
        if ( y == 10 && qcount == 3){
          console.log("true");
          return true;
        }
          else if (i == str.length - 1){
           console.log("false");
           return false;
          }
      }
}
document.addEventListener("DOMContentLoaded", function() {
  window.gQuestionMarks = new QuestionMarks();
});
