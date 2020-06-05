// backend logic
let addUserPoints = function(mealPoints, locationPoints, occupationPoints, animalPoints, musicGroupPoints, salaryPoints, celebrityPoints, activityPoints) {
  let pointTotal = mealPoints + locationPoints + occupationPoints + animalPoints + musicGroupPoints + salaryPoints + celebrityPoints + activityPoints;
  let language;

  if (pointTotal >= 0 && pointTotal < 5) {
    language = "python";
  } else if (pointTotal >= 5 && pointTotal < 9) {
    language = "ruby";
  } else if (pointTotal >= 9 && pointTotal < 13) {
    language = "swift";
  } else {
    language = "csharp";
  }

  return [language, pointTotal];
};

// user interface logic
$(document).ready(function() {
  $("#quiz-form").submit(function(event) {
    event.preventDefault();

    let userFirstName = $("#first-name").val();
    let selectedMeal = parseInt($("input:radio[name=meal]:checked").val());
    let selectedLocation = parseInt($("input:radio[name=location]:checked").val());
    let selectedOccupation = parseInt($("input:radio[name=occupation]:checked").val());
    let selectedAnimal = parseInt($("input:radio[name=animal]:checked").val());
    let selectedMusicGroup = parseInt($("input:radio[name=music-group]:checked").val());
    let selectedSalary = parseInt($("input:radio[name=salary]:checked").val());
    let selectedCelebrity = parseInt($("input:radio[name=celebrity]:checked").val());
    let selectedActivity = parseInt($("input:radio[name=activity]:checked").val());

    let result = addUserPoints(selectedMeal, selectedLocation, selectedOccupation, selectedAnimal, selectedMusicGroup, selectedSalary, selectedCelebrity, selectedActivity);

    $("div#results > div").hide();
    $("span.user-name").text(userFirstName);
    $("span.score").text(result[1]);
    $("div#results").show();
    $("." + result[0]).fadeToggle();

  });
});