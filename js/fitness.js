function openExercise(
exercise,
sets,
reps
){

document.getElementById(
"exerciseName"
).innerText =
exercise;

document.getElementById(
"targetInfo"
).innerText =
`${sets} x ${reps}`;

document.getElementById(
"exercisePanel"
).style.display =
"block";

}