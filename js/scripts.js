// BACKEND LOGIC





// USER INTERFACE LOGIC
$(document).ready(function() {
  $("#quiz-form").submit(function(event) {
    event.preventDefault();

    let selectedMeal = parseInt($("input:radio[name=meal]:checked").val());
    let selectedLocation = parseInt($("input:radio[name=location]:checked").val());
    let selectedOccupation = parseInt($("input:radio[name=occupation]:checked").val());
    let selectedAnimal = parseInt($("input:radio[name=animal]:checked").val());
    let selectedMusicGroup = parseInt($("input:radio[name=music-group]:checked").val());
    let selectedSalary = parseInt($("input:radio[name=salary]:checked").val());
    let selectedCelebrity = parseInt($("input:radio[name=celebrity]:checked").val());
    let selectedActivity = parseInt($("input:radio[name=activity]:checked").val());


  });
});