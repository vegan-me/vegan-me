
function showCauliflower () {
  document.getElementById('cauliflower').innerHTML = '<strong>' + 'Two' + '</strong>' + ' heads of cauliflower, broken into florets.<br>Cauliflower Nutrition Information (2 heads):<br>Calories: 288<br>Protein: 22.8 g<br>Fat: 1.2 g<br>Calcium: 252 mg<br>Iron: 5 mg<br>Vitamin A: 149.6 IU<br>Vitamin B12: 0 mcg<br>Vitamin C: 534 mg<br>Vitamin D: 0 IU<br>Vitamin K: 184 mcg<br>';
}

function hideCauliflower () {
  document.getElementById('cauliflower').innerHTML = '<strong>' + 'Two' + '</strong>' + ' heads of cauliflower, broken into florets.';
}

function showOliveOil () {
  document.getElementById('olive_oil').innerHTML = '<strong>' + '1/4 cup' + '</strong>' + ' olive oil.<br>Olive Oil Nutrition Information (1/4 cup):<br>Calories: 477.5<br>Protein: 0 g<br>Fat: 54 g<br>Calcium: 0.55 mg<br>Iron: 0.3 mg<br>Vitamin A: 0 IU<br>Vitamin B12: 0 mcg<br>Vitamin C: 0 mg<br>Vitamin D: 0 IU<br>Vitamin K: 32.5 mcg<br>';
}

function hideOliveOil () {
  document.getElementById('olive_oil').innerHTML = '<strong>' + '1/4 cup' + '</strong>' + ' olive oil.';
}

function showOnion () {
  document.getElementById('onion').innerHTML = '<strong>' + '1' + '</strong>' + ' large onion, chopped.<br>Onion Nutrition Information (1 large):<br>Calories: 60<br>Protein: 0.8 g<br>Fat: 0 g<br>Calcium: 21.6 mg<br>Iron: 0.4 mg<br>Vitamin A: 1.2 IU<br>Vitamin B12: 0 mcg<br>Vitamin C: 3.6 mg<br>Vitamin D: 0 IU<br>Vitamin K: 0.4 mcg<br>';
}

function hideOnion () {
  document.getElementById('onion').innerHTML = '<strong>' + '1' + '</strong>' + ' large onion, chopped.';
}

function showGarlic () {
  document.getElementById('garlic').innerHTML = '<strong>' + '4' + '</strong>' + ' cloves of garlic, chopped.<br>Garlic Nutrition Information (4 cloves):<br>Calories: 18<br>Protein: 1.6 g<br>Fat: 0.2 g<br>Calcium: 34.5 mg<br>Iron: 0.3 mg<br>Vitamin A: 3 IU<br>Vitamin B12: 0 mcg<br>Vitamin C: 11.1 mg<br>Vitamin D: 0 IU<br>Vitamin K: 0.6 mcg<br>';
}

function hideGarlic () {
  document.getElementById('garlic').innerHTML = '<strong>' + '4' + '</strong>' + ' cloves of garlic, chopped.';
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

function step3Completion () {
  document.getElementById('step3Completion').style.visibility = 'hidden';
  document.getElementById('step3Incompletion').style.visibility = 'visible';
  document.getElementById('step3').style.color = 'lightgray';
  document.getElementById('step3').style.fontStyle = 'italic';
}

function step3Incompletion () {
  document.getElementById('step3Completion').style.visibility = 'visible';
  document.getElementById('step3Incompletion').style.visibility = 'hidden';
  document.getElementById('step3').style.color = 'black';
  document.getElementById('step3').style.fontStyle = 'normal';
}

function step4Completion () {
  document.getElementById('step4Completion').style.visibility = 'hidden';
  document.getElementById('step4Incompletion').style.visibility = 'visible';
  document.getElementById('step4').style.color = 'lightgray';
  document.getElementById('step4').style.fontStyle = 'italic';
}

function step4Incompletion () {
  document.getElementById('step4Completion').style.visibility = 'visible';
  document.getElementById('step4Incompletion').style.visibility = 'hidden';
  document.getElementById('step4').style.color = 'black';
  document.getElementById('step4').style.fontStyle = 'normal';
}
