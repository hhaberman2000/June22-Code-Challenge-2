document.addEventListener("DOMContentLoaded", function() {
  window.QuestionMarks("bcc?7??ccc?3t")
});

function  QuestionMarks(str){

  var qcount=0;
  var y = 0;
  var strIsValid = false;
  for (var i=0; i <str.length;) {
      if ( isNaN(str.charAt(i)) && str.charAt(i) != "?") {
        var x = str.charAt(i);
        i++;
      }
        else if (str.charAt(i) === "?" ) {
            var q = str.charAt(i);
            qcount = qcount + 1;
            i++;
        }
        else {
          x = str.charAt(i);
          var integer = parseInt(x ,10);
          i++;
          if ( integer > 0) {
            y = y + integer;
          }
        }
        if ( y == 10 && qcount == 3){
          y = 0;
          qcount = 0;
          return strIsValid = true;
          break; //condition for true has been reached.
        }
        if (y == 0 ) {
          qcount = 0;
        }
      }
}
