function calculateDate() {

  var month = parseInt(document.getElementById("monthInput").value);
  var day = parseInt(document.getElementById("dayInput").value);
  var year = parseInt(document.getElementById("yearInput").value);
  var overlap = day + 2;
  var days = NumberOfDaysInMonth(month, day, year);

  if ((month < 1 || month > 12 || isNaN(month)) || (day < 1 || day > 31 || isNaN(day) || days === 0) || (year < 1815 || year > 2050 || isNaN(year))) {
    alert("Error! try to input a valid date");
    return;
  } else if (days === 29) {
    if (overlap > 29) {
      month += 1;
      day = overlap - 29;
    } else {
      day = overlap;
    }
  } else if (days === 28) {
    if (overlap > 28) {
      month++;
      day = overlap - 28;
    } else {
      day = overlap;
    }

  } else if (days === 30) {
    if (overlap > 30) {
      month++;
      day = overlap - 30;
    } else {
      day = overlap;
    }
  } else if (days === 31) {
    if (overlap > 31) {
      if (month === 12) {
        if (year === 2050) {
          alert("Sorry reached Maximum date");
          return;
        } else {
          year++;
          month = 1
          day = overlap - 31;
        }
      } else {
        month++;
        day = overlap - 31;
      }
    } else {
      day = overlap;
    }

  }
  document.getElementById("answerBox").innerHTML = month + "/" + day + "/" + year;
  document.getElementById("showAnswer").style.display = "block";
  
}

function isLeapYear(yr) {
  if ((yr % 4 === 0 && yr != 100) || yr % 400 === 0) {
    return true;

  } else {
    return false;
  }
}

function NumberOfDaysInMonth(month, day, year) {
  if (month === 2 && isLeapYear(year) && day <= 29) {
    return 29;
  } else if (month === 2 && !isLeapYear(year) && day <= 28) {
    return 28;
  } else if (((month < 7 && month % 2 === 0) || (month > 7 && month % 2 != 0)) && day <= 30 && month != 2) {
    return 30;
  } else if (((month < 8 && month % 2 != 0) || (month > 7 && month % 2 === 0)) && day <= 31 && month != 2) {
    return 31;
  } else {
    return 0;
  }
}

// function inputErrorCheck(mon,dy,yr){
//
// }

document.getElementById("answerButton").addEventListener("click", function() {
  calculateDate();

});
