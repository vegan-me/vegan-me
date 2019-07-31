
function showAlmondButter () {
  document.getElementById('almond_butter').innerHTML = '<strong>' + '2/3' + '</strong>' + ' cup of almond butter.<br>Almond Butter Nutrition Information (2/3 cup):<br>Calories: 1054.7<br>Protein: 25.1 g<br>Fat: 98.7 g<br>Calcium: 450 mg<br>Iron: 6.2 mg<br>Vitamin A: 0 IU<br>Vitamin B12: 0 mcg<br>Vitamin C: 1.2 mg<br>Vitamin D: 0 IU<br>Vitamin K: 0 mcg<br>';
}

function hideAlmondButter () {
  document.getElementById('almond_butter').innerHTML = '<strong>' + '2/3' + '</strong>' + ' cup of almond butter.';
}

function showMapleSyrup () {
  document.getElementById('maple_syrup').innerHTML = '<strong>' + '1/4 cup' + '</strong>' + ' of maple syrup.<br>Maple Syrup Nutrition Information (1/4 cup):<br>Calories: 210<br>Protein: 0 g<br>Fat: 0.2 g<br>Calcium: 54 mg<br>Iron: 1 mg<br>Vitamin A: 0 IU<br>Vitamin B12: 0 mcg<br>Vitamin C: 0 mg<br>Vitamin D: 0 IU<br>Vitamin K: 0 mcg<br>';
}

function hideMapleSyrup () {
  document.getElementById('maple_syrup').innerHTML = '<strong>' + '1/4 cup' + '</strong>' + ' of maple syrup.';
}

function showWalnuts () {
  document.getElementById('walnuts').innerHTML = '<strong>' + '1/4' + '</strong>' + ' cup of chopped walnuts.<br>Chopped Walnuts Nutrition Information (1/4 cup):<br>Calories: 191.3<br>Protein: 4.5 g<br>Fat: 19 g<br>Calcium: 28.8 mg<br>Iron: 0.9 mg<br>Vitamin A: 5.9 IU<br>Vitamin B12: 0 mcg<br>Vitamin C: 0.4 mg<br>Vitamin D: 0 IU<br>Vitamin K: 0.8 mcg<br>';
}

function hideWalnuts () {
  document.getElementById('walnuts').innerHTML = '<strong>' + '1/4' + '</strong>' + ' cup of chopped walnuts.';
}

function showCranberries () {
  document.getElementById('dried_cranberries').innerHTML = '<strong>' + '1/4' + '</strong>' + ' cup of dried cranberries.<br>Dried Cranberries Nutrition Information (1/4 cup):<br>Calories: 123<br>Protein: 0 g<br>Fat: 0.5 g<br>Calcium: 4 mg<br>Iron: 0.2 mg<br>Vitamin A: 0 IU<br>Vitamin B12: 0 mcg<br>Vitamin C: 0.5 mg<br>Vitamin D: 0 IU<br>Vitamin K: 1.5 mcg<br>';
}

function hideCranbarries () {
  document.getElementById('dried_cranberries').innerHTML = '<strong>' + '1/4' + '</strong>' + ' cup of dried cranberries.';
}

function showBread () {
  document.getElementById('bread').innerHTML = '<strong>' + '8' + '</strong>' + ' slices of whole-grained bread.<br>Whole-grained Bread Nutrition Information (8 slices):<br>Calories: 551.2<br>Protein: 28 g<br>Fat: 8.8 g<br>Calcium: 214.4 mg<br>Iron: 5.6 mg<br>Vitamin A: 0 IU<br>Vitamin B12: 0 mcg<br>Vitamin C: 0 mg<br>Vitamin D: 0 IU<br>Vitamin K: 3.2 mcg<br>';
}

function hideCranbarries () {
  document.getElementById('bread').innerHTML = '<strong>' + '8' + '</strong>' + ' slices of whole-grained bread.';
}

function showPears () {
  document.getElementById('pears').innerHTML = '<strong>' + '2' + '</strong>' + ' ripe pears.<br>Pears Nutrition Information (2 pears):<br>Calories: 206<br>Protein: 1.4 g<br>Fat: 0.4 g<br>Calcium: 32 mg<br>Iron: 0.6 mg<br>Vitamin A: 81.8 IU<br>Vitamin B12: 0 mcg<br>Vitamin C: 15 mg<br>Vitamin D: 0 IU<br>Vitamin K: 16 mcg<br>';
}

function hidePears () {
  document.getElementById('pears').innerHTML = '<strong>' + '2' + '</strong>' + ' ripe pears.';
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
