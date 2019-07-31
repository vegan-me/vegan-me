
function showCucumber () {
  document.getElementById('cucumber').innerHTML = '<strong>' + 'Two' + '</strong>' + ' medium sized cucumbers, cut into 1/4-inch slices.<br>Cucumber Nutrition Information (2 cucumbers):<br>Calories: 48.2<br>Protein: 2.4 g<br>Fat: 0.6 g<br>Calcium: 56.2 mg<br>Iron: 0.8 mg<br>Vitamin A: 290 IU<br>Vitamin B12: 0 mcg<br>Vitamin C: 12.8 mg<br>Vitamin D: 0 IU<br>Vitamin K: 29 mcg<br>';
}

function hideCucumber () {
  document.getElementById('cucumber').innerHTML = '<strong>' + 'Two' + '</strong>' + ' medium sized cucumbers, cut into 1/4-inch slices.';
}

function showOliveOil () {
  document.getElementById('olive_oil').innerHTML = '<strong>' + '1/4 cup' + '</strong>' + ' olive oil.<br>Olive Oil Nutrition Information (1/4 cup):<br>Calories: 477.5<br>Protein: 0 g<br>Fat: 54 g<br>Calcium: 0.55 mg<br>Iron: 0.3 mg<br>Vitamin A: 0 IU<br>Vitamin B12: 0 mcg<br>Vitamin C: 0 mg<br>Vitamin D: 0 IU<br>Vitamin K: 32.5 mcg<br>';
}

function hideOliveOil () {
  document.getElementById('olive_oil').innerHTML = '<strong>' + '1/4 cup' + '</strong>' + ' olive oil.';
}

function showRadish () {
  document.getElementById('radish').innerHTML = '<strong>' + 'Six' + '</strong>' + ' small red radishes cut into 1/8-inch slices.<br>Radish Nutrition Information (6 radishes):<br>Calories: 1.8<br>Protein: 0 g<br>Fat: 0 g<br>Calcium: 3 mg<br>Iron: 0 mg<br>Vitamin A: 0.6 IU<br>Vitamin B12: 0 mcg<br>Vitamin C: 1.8 mg<br>Vitamin D: 0 IU<br>Vitamin K: 0 mcg<br>';
}

function hideRadish () {
  document.getElementById('radish').innerHTML = '<strong>' + 'Six' + '</strong>' + ' small red radishes cut into 1/8-inch slices.';
}

function showTarragon () {
  document.getElementById('tarragon').innerHTML = '<strong>' + '1/2' + '</strong>' + ' teaspoon of dried tarragon.<br>Tarragon Nutrition Information (1/2 tsp):<br>Calories: 0.75<br>Protein: 0.05 g<br>Fat: 0 g<br>Calcium: 2.85 mg<br>Iron: 0.1 mg<br>Vitamin A: 10.5 IU<br>Vitamin B12: 0 mcg<br>Vitamin C: 0.1 mg<br>Vitamin D: 0 IU<br>Vitamin K: 0 mcg<br>';
}

function hideTarragon () {
  document.getElementById('tarragon').innerHTML = '<strong>' + '1/2' + '</strong>' + ' teaspoon of dried tarragon.';
}



function step1Completion () {
  document.getElementById('step1Completion').style.visibility = 'hidden';
  document.getElementById('step1Incompletion').style.visibility = 'visible';
  document.getElementById('step1').style.color = 'lightgray';
  document.getElementById('step1').style.fontStyle = 'italic';
}

function step1Incompletion () {
  document.getElementById('step1Completion').style.visibility = 'visible';
  document.getElementById('step1Incompletion').style.visibility = 'hidden';
  document.getElementById('step1').style.color = 'black';
  document.getElementById('step1').style.fontStyle = 'normal';
}

function step2Completion () {
  document.getElementById('step2Completion').style.visibility = 'hidden';
  document.getElementById('step2Incompletion').style.visibility = 'visible';
  document.getElementById('step2').style.color = 'lightgray';
  document.getElementById('step2').style.fontStyle = 'italic';

}

function step2Incompletion () {
  document.getElementById('step2Completion').style.visibility = 'visible';
  document.getElementById('step2Incompletion').style.visibility = 'hidden';
  document.getElementById('step2').style.color = 'black';
  document.getElementById('step2').style.fontStyle = 'normal';
}
