$(document).ready(function () {

  $("#get-grade").on("click",function(event) {
    event.preventDefault();

  var grade = $("#grade-input").val();

  function letterGrade(grade) {

    if ( grade > 100 || grade < 0 ) {
      return 'INVALID grade';
    }

    if ( grade >= 90 ) {
      if ( grade <= 92 ) {
        return 'A-';
      } else if ( grade >= 98 ) {
        return 'A+';
      } else {
        return 'A';
      }
    } else if ( grade >= 80 ) {
        if ( grade <= 82 ) {
          return 'B-';
        } else if ( grade >= 88 ) {
          return 'B+';
        } else {
          return 'B';
        }
    } else if ( grade >= 70 ) {
        if ( grade <= 72 ) {
          return 'C-';
        } else if ( grade >= 78 ) {
          return 'C+';
        } else {
          return 'C';
        }
    } else if ( grade >= 60 ) {
        if ( grade <= 62 ) {
          return 'D-';
        } else if ( grade >= 68 ) {
          return 'D+';
        } else {
          return 'D';
        }
    } else {
        return 'out of range';
    }

  }

  var output = letterGrade(grade);
  alert("Grade: " + output);

});

$(".skip").click(function() {
  $("#main").focus();
  $("#main").css({"color": "red", "font-size": "40px"});
});

$( "<h1>" ).replaceWith( ".learn" );

});
