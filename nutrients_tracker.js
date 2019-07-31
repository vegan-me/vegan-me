var foodArray = ['apple', 'apricot', 'avocado','banana','blackberry (cups)','blueberry (cups)','cherry (cups)','coconut','cucumber','date','fig','gooseberry'
, 'grape (cups)','raisin (cups)','guava','jackfruit (cups)','kiwifruit','lemon','lime','lychee (cups)','mango','peach','pear','plum','prune (cups)','pineapple (cups)','raspberry (cups)'
,'cantaloupe (cups)','honeydew (cups)','watermelon (cups)','nectarine','orange','tangerine','papaya (cups)','star fruit (cups)','strawberry','grapefruit','artichoke'
, 'eggplant (cups)','asparagus (cups)', 'black beans (cups)','corn (ears)','chickpeas (cups)','green beans (cups)','kidney beans (cups)','lentils (cups)','squash','soybeans (cups)','peas (cups)','tomato','brocolli'
, 'brussel sprouts (cups)','cabbage (cups)','cauliflower (cups)','celery','kale (cups)','spinach (cups)','turnip','lettuce (cups)','mushrooms (cups)','okra (cups)','onion (cups)','yam (cups)','bell pepper'
, 'chili pepper (cups)','jalapeno (cups)','beetroot','carrot','radish (cups)','potato','sweet potato'
, 'brown rice (cups)','cornflakes (cups)','quinoa (cups)','oats (cups)','rice cake','whole-grain bread','bread rolls','white rice (cups)'
, 'pasta (servings)','couscous (cups)','tortillas', 'white bread','bagel','donut','granola (cups)','pancake'
, 'pita bread','mini-wheats','muffin','toast','waffles','pudding (ounces)'
, 'cashews (ounces)','almonds (cups)','brazil nuts (cups)','chestnuts (ounces)','hazelnuts (cups)','macadamia nuts (cups)','pistachios (cups)'
, 'walnuts (cups)','sesame seeds (cups)','pumpkin seeds (cups)','almond butter (cups)','olive oil (cups)','peanut butter (cups)','olives (ounces)'
, 'almond milk (cups)','soy milk (cups)','coconut milk (cups)','rice milk (cups)','soy yogurt (cups)','tempeh (cups)','tofu (cups)','seitan (cups)'
, 'textured vegetable protein (cups)','soy ice cream (cups)'];

var count = 0;

function hidePartTwo () {
  if (document.getElementById('extra1').style.visibility = 'hidden') {
    document.getElementById('foodsEaten').style.height = '250px';
  }
  var enteredNutrients = document.getElementById('nutrientSelector').value;
  if (enteredNutrients == 'default') {
    document.getElementById('graph').style.height = '0px';
  }
}


function hide () {
  document.getElementById('table').style.visibility = 'hidden';
  document.getElementById('hide()').style.visibility = 'hidden';
  document.getElementById('show()').style.visibility = 'visible';
  document.getElementById('calorieInfo').style.height = '350px';

}

function show () {
  //alert(5);
  document.getElementById('table').style.visibility = 'visible';
  document.getElementById('hide()').style.visibility = 'visible';
  document.getElementById('show()').style.visibility = 'hidden';
  document.getElementById('calorieInfo').style.height = '1150px';
}


function main () {

  var name = document.info.name.value;
  //alert(name);
  var enteredGender = document.getElementById('gender');
  var gender = enteredGender.options[enteredGender.selectedIndex].text;
  if (gender == 'Select gender') {
    gender = 'Rather not say';
  }

  //alert(gender);
  var age = document.info.age.value;
  //alert(age);
  var height = document.info.height.value;
  //alert(height);
  var enteredHeight_units = document.getElementById('height_units');
  var height_units = enteredHeight_units.options[enteredHeight_units.selectedIndex].text;
  if (height_units === 'inches') {
    height = height * 0.025;
    //alert(height);
  }
  var weight = document.info.weight.value;
  var enteredWeight_units = document.getElementById('weight_units');
  var weight_units = enteredWeight_units.options[enteredWeight_units.selectedIndex].text;
  if (weight_units === 'pounds') {
    weight = weight * 0.45;
    //alert(weight);
  }
  var enteredActivity_level = document.getElementById('activity_level');
  var activity_level = enteredActivity_level.options[enteredActivity_level.selectedIndex].text;
  //alert(activity_level);
  var bmi = Math.round(weight / Math.pow(height, 2));
  var smoke = document.info.smoke.value;
  //alert(smoke);
  var caloriesLeft = 0;
  var calciumLeft = 0;
  var difference = 0;
  var calciumDifference = 0;
  var ironLeft = 0;
  var ironDifference = 0;
  var vitamin_aLeft = 0;
  var vitamin_aDifference = 0;
  var vitaminb_Left = 0;
  var vitaminb_Difference = 0;
  var vitaminc_Left = 0;
  var vitaminc_Difference = 0;
  var vitamind_Left = 0;
  var vitamind_Difference = 0;
  var vitamink_Left = 0;
  var vitamink_Difference = 0;
  //https://stackoverflow.com/questions/4754699/how-do-i-determine-if-a-checkbox-is-checked
  var pregnancy = document.getElementById("Pregnancy").checked;
  var inherited = document.getElementById("InheritedMetabolicDiseases").checked;
  var heartDisease = document.getElementById("HeartDisease").checked;
  var diabetes = document.getElementById("Diabetes").checked;
  var none = document.getElementById("None").checked;
  if (none === true) {
    document.getElementById("Pregnancy").checked = false;
    document.getElementById("InheritedMetabolicDiseases").checked = false;
    document.getElementById("HeartDisease").checked = false;
    document.getElementById("Diabetes").checked = false;
  }
  if (smoke == 'yes') {
    vitaminc_Difference += 35;
  }
  if (pregnancy === true) {
    difference += 200;
    calciumDifference += 1000;
    ironDifference += 27;
    vitamin_aDifference += 780;
    vitaminb_Difference += 2.6;
    vitaminc_Difference += 90;
    vitamind_Difference += 600;
    vitamink_Difference += 90;
  }
  if (inherited === true) {
    difference -= 200;
  }

  if (heartDisease === true) {
    difference -= 500;
  }

  if (diabetes === true) {
    difference -= 500;
  }
  //alert(difference);

  if (gender === "Male") {
    if (activity_level === "Low (< 4 hrs/week)") {
      //alert("x");
      if (age >= 0 && age <= 3) {
        //alert(65);
        caloriesLeft = 1000;
        //alert(caloriesLeft);
        calciumLeft = 350;
        ironLeft = 9;
        vitamin_aLeft = 400;
        vitaminb_Left = 0.6;
        vitaminc_Left = 35;
        vitamind_Left = 400;
        vitamink_Left = 30;
      }
      else if (age >= 4 && age <= 8) {
        caloriesLeft = 1400;
        calciumLeft = 1000;
        ironLeft = 10;
        vitamin_aLeft = 400;
        vitaminb_Left = 1.2;
        vitaminc_Left = 25;
        vitamind_Left = 600;
        vitamink_Left = 55;
      }
      else if (age >= 9 && age <= 13) {
        caloriesLeft = 1800;
        calciumLeft = 1300;
        ironLeft = 8;
        vitamin_aLeft = 600;
        vitaminb_Left = 1.8;
        vitaminc_Left = 45;
        vitamind_Left = 600;
        vitamink_Left = 60;
      }
      else if (age >= 14 && age <= 18) {
        caloriesLeft = 2200;
        calciumLeft = 1300;
        ironLeft = 11;
        vitamin_aLeft = 900;
        vitaminb_Left = 2.4;
        vitaminc_Left = 75;
        vitamind_Left = 600;
        vitamink_Left = 75;
      }
      else if (age >= 19 && age <= 30) {
        caloriesLeft = 2400;
        calciumLeft = 1000;
        ironLeft = 8;
        vitamin_aLeft = 900;
        vitaminb_Left = 2.4;
        vitaminc_Left = 90;
        vitamind_Left = 600;
        vitamink_Left = 120;
      }
      else if (age >= 31 && age <= 50) {
        caloriesLeft = 2200;
        calciumLeft = 1000;
        ironLeft = 8;
        vitamin_aLeft = 900;
        vitaminb_Left = 2.4;
        vitaminc_Left = 90;
        vitamind_Left = 600;
        vitamink_Left = 120;
      }
      else if (age >= 51) {
        var index_calories = age - 51;
        caloriesLeft = 2000 - (10 * index_calories);
        calciumLeft = 1100;
        ironLeft = 8;
        vitamin_aLeft = 900;
        vitaminb_Left = 2.4;
        vitaminc_Left = 90;
        vitamind_Left = 700;
        vitamink_Left = 120;
      }
      //alert(caloriesLeft);
    }
    if (activity_level === "Moderate (4-8 hrs/week)") {
      if (age >= 0 && age <= 3) {
        caloriesLeft = 1200;
        calciumLeft = 350;
        ironLeft = 9;
        vitamin_aLeft = 400;
        vitaminb_Left = 0.6;
        vitaminc_Left = 35;
        vitamind_Left = 400;
        vitamink_Left = 30;
      }
      else if (age >= 4 && age <= 8) {
        caloriesLeft = 1500;
        calciumLeft = 1000;
        ironLeft = 10;
        vitamin_aLeft = 400;
        vitaminb_Left = 1.2;
        vitaminc_Left = 25;
        vitamind_Left = 600;
        vitamink_Left = 55;
      }
      else if (age >= 9 && age <= 13) {
        caloriesLeft = 2000;
        calciumLeft = 1300;
        ironLeft = 8;
        vitamin_aLeft = 600;
        vitaminb_Left = 1.8;
        vitaminc_Left = 45;
        vitamind_Left = 600;
        vitamink_Left = 60;
      }
      else if (age >= 14 && age <= 18) {
        caloriesLeft = 2600;
        calciumLeft = 1300;
        ironLeft = 11;
        vitamin_aLeft = 900;
        vitaminb_Left = 2.4;
        vitaminc_Left = 75;
        vitamind_Left = 600;
        vitamink_Left = 75;
      }
      else if (age >= 19 && age <= 30) {
        caloriesLeft = 2700;
        calciumLeft = 1000;
        ironLeft = 8;
        vitamin_aLeft = 900;
        vitaminb_Left = 2.4;
        vitaminc_Left = 90;
        vitamind_Left = 600;
        vitamink_Left = 120;
      }
      else if (age >= 31 && age <= 50) {
        caloriesLeft = 2500;
        calciumLeft = 1000;
        ironLeft = 8;
        vitamin_aLeft = 900;
        vitaminb_Left = 2.4;
        vitaminc_Left = 90;
        vitamind_Left = 600;
        vitamink_Left = 120;
      }
      else if (age >= 51) {
        var index_calories = age - 51;
        caloriesLeft = 2300 - (10 * index_calories);
        calciumLeft = 1100;
        ironLeft = 8;
        vitamin_aLeft = 900;
        vitaminb_Left = 2.4;
        vitaminc_Left = 90;
        vitamind_Left = 700;
        vitamink_Left = 120;
      }
      //alert(caloriesLeft);
    }
    if (activity_level === "High (> 8 hrs/week)") {
      if (age >= 0 && age <= 3) {
        caloriesLeft = 1200;
        calciumLeft = 350;
        ironLeft = 9;
        vitamin_aLeft = 400;
        vitaminb_Left = 0.6;
        vitaminc_Left = 35;
        vitamind_Left = 400;
        vitamink_Left = 30;
      }
      else if (age >= 4 && age <= 8) {
        caloriesLeft = 1800;
        calciumLeft = 1000;
        ironLeft = 10;
        vitamin_aLeft = 400;
        vitaminb_Left = 1.2;
        vitaminc_Left = 25;
        vitamind_Left = 600;
        vitamink_Left = 55;
      }
      else if (age >= 9 && age <= 13) {
        caloriesLeft = 2300;
        calciumLeft = 1300;
        ironLeft = 8;
        vitamin_aLeft = 600;
        vitaminb_Left = 1.8;
        vitaminc_Left = 45;
        vitamind_Left = 600;
        vitamink_Left = 60;
      }
      else if (age >= 14 && age <= 18) {
        caloriesLeft = 3000;
        calciumLeft = 1300;
        ironLeft = 11;
        vitamin_aLeft = 900;
        vitaminb_Left = 2.4;
        vitaminc_Left = 75;
        vitamind_Left = 600;
        vitamink_Left = 75;
      }
      else if (age >= 19 && age <= 30) {
        caloriesLeft = 3000;
        calciumLeft = 1000;
        ironLeft = 8;
        vitamin_aLeft = 900;
        vitaminb_Left = 2.4;
        vitaminc_Left = 90;
        vitamind_Left = 600;
        vitamink_Left = 120;
      }
      else if (age >= 31 && age <= 50) {
        caloriesLeft = 2900;
        calciumLeft = 1000;
        ironLeft = 8;
        vitamin_aLeft = 900;
        vitaminb_Left = 2.4;
        vitaminc_Left = 90;
        vitamind_Left = 600;
        vitamink_Left = 120;
      }
      else if (age >= 51) {
        var index_calories = age - 50;
        caloriesLeft = 2600 - (10 * index_calories);
        calciumLeft = 1100;
        ironLeft = 8;
        vitamin_aLeft = 900;
        vitaminb_Left = 2.4;
        vitaminc_Left = 90;
        vitamind_Left = 700;
        vitamink_Left = 120;
      }
      //alert(caloriesLeft);
    }
    // received information from https://www.webmd.com/diet/features/estimated-calorie-requirement

    if (bmi > 21.7) {
      var index = Math.round(bmi / 21.7);
      caloriesLeft = caloriesLeft + (index * 50);
      //alert(caloriesLeft);
    }
    else if (bmi < 21.7) {
      var index = Math.round(21.7 / bmi);
      caloriesLeft = caloriesLeft - (index * 50);
      //alert(caloriesLeft);
    }
  }

  else if (gender === "Female") {
    if (activity_level === "Low (< 4 hrs/week)") {
      // alert("x");
      if (age >= 0 && age <= 3) {
        caloriesLeft = 1000;
        calciumLeft = 350;
        ironLeft = 9;
        vitamin_aLeft = 400;
        vitaminb_Left = 0.6;
        vitaminc_Left = 35;
        vitamind_Left = 400;
        vitamink_Left = 30;
      }
      else if (age >= 4 && age <= 8) {
        caloriesLeft = 1200;
        calciumLeft = 1000;
        ironLeft = 10;
        vitamin_aLeft = 900;
        vitaminb_Left = 1.2;
        vitaminc_Left = 25;
        vitamind_Left = 600;
        vitamink_Left = 55;
      }
      else if (age >= 9 && age <= 13) {
        caloriesLeft = 1600;
        calciumLeft = 1300;
        ironLeft = 8;
        vitamin_aLeft = 600;
        vitaminb_Left = 1.8;
        vitaminc_Left = 45;
        vitamind_Left = 600;
        vitamink_Left = 60;
      }
      else if (age >= 14 && age <= 18) {
        caloriesLeft = 1800;
        calciumLeft = 1300;
        ironLeft = 15;
        vitamin_aLeft = 700;
        vitaminb_Left = 2.4;
        vitaminc_Left = 65;
        vitamind_Left = 600;
        vitamink_Left = 75;
      }
      else if (age >= 19 && age <= 30) {
        caloriesLeft = 2000;
        calciumLeft = 1000;
        ironLeft = 18;
        vitamin_aLeft = 700;
        vitaminb_Left = 2.4;
        vitaminc_Left = 75;
        vitamind_Left = 600;
        vitamink_Left = 90;
      }
      else if (age >= 31 && age <= 50) {
        caloriesLeft = 1800;
        calciumLeft = 1000;
        ironLeft = 18;
        vitamin_aLeft = 700;
        vitaminb_Left = 2.4;
        vitaminc_Left = 75;
        vitamind_Left = 600;
        vitamink_Left = 90;
      }
      else if (age >= 51) {
        var index_calories = age - 51;
        caloriesLeft = 1600 - (10 * index_calories);
        calciumLeft = 1100;
        ironLeft = 8;
        vitamin_aLeft = 700;
        vitaminb_Left = 2.4;
        vitaminc_Left = 75;
        vitamind_Left = 700;
        vitamink_Left = 90;
      }
      //alert(caloriesLeft);
    }
    if (activity_level === "Moderate (4-8 hrs/week)") {
      if (age >= 0 && age <= 3) {
        caloriesLeft = 1200;
        calciumLeft = 350;
        ironLeft = 9;
        vitamin_aLeft = 400;
        vitaminb_Left = 0.6;
        vitaminc_Left = 35;
        vitamind_Left = 400;
        vitamink_Left = 30;
      }
      else if (age >= 4 && age <= 8) {
        caloriesLeft = 1500;
        calciumLeft = 1000;
        ironLeft = 10;
        vitamin_aLeft = 400;
        vitaminb_Left = 1.2;
        vitaminc_Left = 25;
        vitamind_Left = 600;
        vitamink_Left = 55;
      }
      else if (age >= 9 && age <= 13) {
        caloriesLeft = 1800;
        calciumLeft = 1300;
        ironLeft = 8;
        vitamin_aLeft = 400;
        vitaminb_Left = 1.8;
        vitaminc_Left = 45;
        vitamind_Left = 600;
        vitamink_Left = 60;
      }
      else if (age >= 14 && age <= 18) {
        caloriesLeft = 2000;
        calciumLeft = 1300;
        ironLeft = 15;
        vitamin_aLeft = 600;
        vitaminb_Left = 2.4;
        vitaminc_Left = 65;
        vitamind_Left = 600;
        vitamink_Left = 75;
      }
      else if (age >= 19 && age <= 30) {
        caloriesLeft = 2100;
        calciumLeft = 1000;
        ironLeft = 18;
        vitamin_aLeft = 700;
        vitaminb_Left = 2.4;
        vitaminc_Left = 75;
        vitamind_Left = 600;
        vitamink_Left = 90;
      }
      else if (age >= 31 && age <= 50) {
        caloriesLeft = 2000;
        calciumLeft = 1000;
        ironLeft = 18;
        vitamin_aLeft = 700;
        vitaminb_Left = 2.4;
        vitaminc_Left = 75;
        vitamind_Left = 600;
        vitamink_Left = 90;
      }
      else if (age >= 51) {
        var index_calories = age - 51;
        caloriesLeft = 1800 - (10 * index_calories);
        calciumLeft = 1100;
        ironLeft = 8;
        vitamin_aLeft = 700;
        vitaminb_Left = 2.4;
        vitaminc_Left = 75;
        vitamind_Left = 700;
        vitamink_Left = 90;
      }
    }
    if (activity_level === "High (> 8 hrs/week)") {
      if (age >= 0 && age <= 3) {
        caloriesLeft = 1200;
        calciumLeft = 350;
        ironLeft = 9;
        vitamin_aLeft = 400;
        vitaminb_Left = 0.6;
        vitaminc_Left = 35;
        vitamind_Left = 400;
        vitamink_Left = 30;
      }
      else if (age >= 4 && age <= 8) {
        caloriesLeft = 1600;
        calciumLeft = 1000;
        ironLeft = 10;
        vitamin_aLeft = 400;
        vitaminb_Left = 1.2;
        vitaminc_Left = 25;
        vitamind_Left = 600;
        vitamink_Left = 55;
      }
      else if (age >= 9 && age <= 13) {
        caloriesLeft = 2000;
        calciumLeft = 1300;
        ironLeft = 8;
        vitamin_aLeft = 600;
        vitaminb_Left = 1.8;
        vitaminc_Left = 45;
        vitamind_Left = 600;
        vitamink_Left = 60;
      }
      else if (age >= 14 && age <= 18) {
        caloriesLeft = 2400;
        calciumLeft = 1300;
        ironLeft = 15;
        vitamin_aLeft = 700;
        vitaminb_Left = 2.4;
        vitaminc_Left = 65;
        vitamind_Left = 600;
        vitamink_Left = 75;
      }
      else if (age >= 19 && age <= 30) {
        caloriesLeft = 2400;
        calciumLeft = 1000;
        ironLeft = 18;
        vitamin_aLeft = 700;
        vitaminb_Left = 2.4;
        vitaminc_Left = 75;
        vitamind_Left = 600;
        vitamink_Left = 90;
      }
      else if (age >= 31 && age <= 50) {
        caloriesLeft = 2200;
        calciumLeft = 1000;
        ironLeft = 18;
        vitamin_aLeft = 700;
        vitaminb_Left = 2.4;
        vitaminc_Left = 75;
        vitamind_Left = 600;
        vitamink_Left = 90;
      }
      else if (age >= 51) {
        var index_calories = age - 50;
        caloriesLeft = 2100 - (10 * index_calories);
        calciumLeft = 1100;
        ironLeft = 8;
        vitamin_aLeft = 700;
        vitaminb_Left = 2.4;
        vitaminc_Left = 75;
        vitamind_Left = 700;
        vitamink_Left = 90;
      }
      // alert(caloriesLeft);
    }
    // received information from https://www.webmd.com/diet/features/estimated-calorie-requirement

    if (bmi > 21.7) {
      var index = Math.round(bmi / 21.7);
      caloriesLeft = caloriesLeft + (index * 50);
    }
    else if (bmi < 21.7) {
      var index = Math.round(21.7 / bmi);
      caloriesLeft = caloriesLeft - (index * 50);
    }
    //alert(caloriesLeft);
  }
  //alert(caloriesLeft);
  else if (gender === "Rather not say") {
    if (activity_level === "Low (< 4 hrs/week)") {
      //alert("x");
      if (age >= 0 && age <= 3) {
        caloriesLeft = 1000;
        calciumLeft = 350;
        ironLeft = 9;
        vitamin_aLeft = 400;
        vitaminb_Left = 0.6;
        vitaminc_Left = 35;
        vitamind_Left = 400;
        vitamink_Left = 30;
      }
      else if (age >= 4 && age <= 8) {
        caloriesLeft = 1300;
        calciumLeft = 1000;
        ironLeft = 10;
        vitamin_aLeft = 400;
        vitaminb_Left = 1.2;
        vitaminc_Left = 25;
        vitamind_Left = 600;
        vitamink_Left = 55;
      }
      else if (age >= 9 && age <= 13) {
        caloriesLeft = 1700;
        calciumLeft = 1300;
        ironLeft = 8;
        vitamin_aLeft = 600;
        vitaminb_Left = 1.8;
        vitaminc_Left = 45;
        vitamind_Left = 600;
        vitamink_Left = 60;
      }
      else if (age >= 14 && age <= 18) {
        caloriesLeft = 2000;
        calciumLeft = 1300;
        ironLeft = 13;
        vitamin_aLeft = 800;
        vitaminb_Left = 2.4;
        vitaminc_Left = 68;
        vitamind_Left = 600;
        vitamink_Left = 75;
      }
      else if (age >= 19 && age <= 30) {
        caloriesLeft = 2200;
        calciumLeft = 1000;
        ironLeft = 13;
        vitamin_aLeft = 800;
        vitaminb_Left = 2.4;
        vitaminc_Left = 83;
        vitamind_Left = 600;
        vitamink_Left = 105;
      }
      else if (age >= 31 && age <= 50) {
        caloriesLeft = 2000;
        calciumLeft = 1000;
        ironLeft = 13;
        vitamin_aLeft = 800;
        vitaminb_Left = 2.4;
        vitaminc_Left = 83;
        vitamind_Left = 600;
        vitamink_Left = 105;
      }
      else if (age >= 51) {
        var index_calories = age - 51;
        caloriesLeft = 1800 - (10 * index_calories);
        calciumLeft = 1100;
        ironLeft = 8;
        vitamin_aLeft = 800;
        vitaminb_Left = 2.4;
        vitaminc_Left = 83;
        vitamind_Left = 800;
        vitamink_Left = 105;
      }
    }
    if (activity_level === "Moderate (4-8 hrs/week)") {
      if (age >= 0 && age <= 3) {
        caloriesLeft = 1200;
        calciumLeft = 350;
        ironLeft = 9;
        vitamin_aLeft = 400;
        vitaminb_Left = 0.6;
        vitaminc_Left = 35;
        vitamind_Left = 400;
        vitamink_Left = 30;
      }
      else if (age >= 4 && age <= 8) {
        caloriesLeft = 1500;
        calciumLeft = 1000;
        ironLeft = 10;
        vitamin_aLeft = 400;
        vitaminb_Left = 1.2;
        vitaminc_Left = 25;
        vitamind_Left = 600;
        vitamink_Left = 55;
      }
      else if (age >= 9 && age <= 13) {
        caloriesLeft = 1900;
        calciumLeft = 1300;
        ironLeft = 8;
        vitamin_aLeft = 600;
        vitaminb_Left = 1.8;
        vitaminc_Left = 45;
        vitamind_Left = 600;
        vitamink_Left = 60;
      }
      else if (age >= 14 && age <= 18) {
        caloriesLeft = 2300;
        calciumLeft = 1300;
        ironLeft = 13;
        vitamin_aLeft = 800;
        vitaminb_Left = 2.4;
        vitaminc_Left = 68;
        vitamind_Left = 600;
        vitamink_Left = 75;
      }
      else if (age >= 19 && age <= 30) {
        caloriesLeft = 2400;
        calciumLeft = 1000;
        ironLeft = 13;
        vitamin_aLeft = 800;
        vitaminb_Left = 2.4;
        vitaminc_Left = 83;
        vitamind_Left = 600;
        vitamink_Left = 105;
      }
      else if (age >= 31 && age <= 50) {
        caloriesLeft = 2250;
        calciumLeft = 1000;
        ironLeft = 13;
        vitamin_aLeft = 800;
        vitaminb_Left = 2.4;
        vitaminc_Left = 83;
        vitamind_Left = 600;
        vitamink_Left = 105;
      }
      else if (age >= 51) {
        var index_calories = age - 51;
        caloriesLeft = 2050 - (10 * index_calories);
        calciumLeft = 1100;
        ironLeft = 8;
        vitamin_aLeft = 800;
        vitaminb_Left = 2.4;
        vitaminc_Left = 83;
        vitamind_Left = 700;
        vitamink_Left = 105;
      }
    }
    if (activity_level === "High (> 8 hrs/week)") {
      if (age >= 0 && age <= 3) {
        caloriesLeft = 1200;
        calciumLeft = 350;
        ironLeft = 9;
        vitamin_aLeft = 400;
        vitaminb_Left = 0.6;
        vitaminc_Left = 35;
        vitamind_Left = 400;
        vitamink_Left = 30;
      }
      else if (age >= 4 && age <= 8) {
        caloriesLeft = 1700;
        calciumLeft = 1000;
        ironLeft = 10;
        vitamin_aLeft = 400;
        vitaminb_Left = 1.2;
        vitaminc_Left = 25;
        vitamind_Left = 600;
        vitamink_Left = 55;
      }
      else if (age >= 9 && age <= 13) {
        caloriesLeft = 2150;
        calciumLeft = 1300;
        ironLeft = 13;
        vitamin_aLeft = 600;
        vitaminb_Left = 1.8;
        vitaminc_Left = 45;
        vitamind_Left = 600;
        vitamink_Left = 60;
      }
      else if (age >= 14 && age <= 18) {
        caloriesLeft = 2600;
        calciumLeft = 1300;
        ironLeft = 13;
        vitamin_aLeft = 800;
        vitaminb_Left = 2.4;
        vitaminc_Left = 78;
        vitamind_Left = 600;
        vitamink_Left = 75;
      }
      else if (age >= 19 && age <= 30) {
        caloriesLeft = 2600;
        calciumLeft = 1000;
        ironLeft = 13;
        vitamin_aLeft = 800;
        vitaminb_Left = 2.4;
        vitaminc_Left = 83;
        vitamind_Left = 600;
        vitamink_Left = 105;
      }
      else if (age >= 31 && age <= 50) {
        caloriesLeft = 2550;
        calciumLeft = 1000;
        ironLeft = 13;
        vitamin_aLeft = 800;
        vitaminb_Left = 2.4;
        vitaminc_Left = 83;
        vitamind_Left = 600;
        vitamink_Left = 105;
      }
      else if (age >= 51) {
        var index_calories = age - 50;
        caloriesLeft = 2350 - (10 * index_calories);
        calciumLeft = 1100;
        ironLeft = 13;
        vitamin_aLeft = 800;
        vitaminb_Left = 2.4;
        vitaminc_Left = 83;
        vitamind_Left = 700;
        vitamink_Left = 105;
      }
      //alert(caloriesLeft);
    }
    // received information from https://www.webmd.com/diet/features/estimated-calorie-requirement

    if (bmi > 21.7) {
      var index = Math.round(bmi / 21.7);
      caloriesLeft = caloriesLeft + (index * 50);
    }
    else if (bmi < 21.7) {
      var index = Math.round(21.7 / bmi);
      caloriesLeft = caloriesLeft - (index * 50);
    }
  }
  caloriesLeft += difference;
  calciumLeft += calciumDifference;
  ironLeft += ironDifference;
  vitamin_aLeft += vitamin_aDifference;
  vitaminb_Left += vitaminb_Difference;
  vitaminc_Left += vitaminc_Difference;
  vitamind_Left += vitamind_Difference;
  vitamink_Left += vitamink_Difference;
  //alert(caloriesLeft);
  //alert(bmi);
  var proteinLeft = 0.8 * weight;
  var fatLeft = 0;
  //alert(proteinLeft);
  if (age >= 40) {
    proteinLeft += 5;
  }
  fatLeft = 44;
  if (activity_level === "High (> 8 hrs/week)") {
    proteinLeft += 7;
    fatLeft = 77;
  }
  if (activity_level === "Moderate (4-8 hrs/week)") {
    proteinLeft += 5;
    fatLeft = 60;
  }
  //var message = "Well " + name + ", your daily alloted intake of calories is " + caloriesLeft + " calories!";
  if (age < 0 || height <= 0 || weight <= 0) {
    alert('There was an error in your submission. Please try again.');
  }

else {

    if (name != "") {
        document.getElementById("partb_title").innerHTML = name + "'s Results";
      }
      //document.getElementbyClassName('stats').style.visibility = 'visible';
      document.getElementById("calories").value = caloriesLeft;
      document.getElementById("protein").value = Math.round(proteinLeft);
      document.getElementById("fat").value = fatLeft;
      document.getElementById("calcium").value = calciumLeft;
      document.getElementById("iron").value = ironLeft;
      document.getElementById("vitamin_a").value = vitamin_aLeft;
      document.getElementById("vitamin_b12").value = vitaminb_Left;
      document.getElementById("vitamin_c").value = vitaminc_Left;
      document.getElementById("vitamin_d").value = vitamind_Left;
      document.getElementById("vitamin_k").value = vitamink_Left;

}

}


function enterExistingFoods () {
  var input = document.getElementById("foodsInput").value;
  var translate = input.toLowerCase();
  //alert(translate) // locally store translate
  var array = ['1','2','3']; // locally store array
  //alert(array.length);
  // randomly generate what option value should be updated next
  random = Math.floor((Math.random() * 3) + 1);
  //alert(random);
  random.toString();

  var caloriesLeft = document.getElementById('calories').value;
  var originalCaloriesLeft = document.getElementById('calories').value;
  var fatLeft = document.getElementById('fat').value;
  var originalProteinLeft = document.getElementById('protein').value;
  var proteinLeft = document.getElementById('protein').value;
  var originalFatLeft = document.getElementById('fat').value;
  var calciumLeft = document.getElementById('calcium').value;
  var originalCalciumLeft = document.getElementById('calcium').value;
  var ironLeft = document.getElementById('iron').value;
  var originalIronLeft = document.getElementById('iron').value;
  var vitamin_aLeft = document.getElementById('vitamin_a').value;
  var originalVitamin_aLeft = document.getElementById('vitamin_a').value;
  var vitamin_bLeft = document.getElementById('vitamin_b12').value;
  var originalVitamin_bLeft = document.getElementById('vitamin_b12').value;
  var vitamin_cLeft = document.getElementById('vitamin_c').value;
  var originalVitamin_cLeft = document.getElementById('vitamin_c').value;
  var vitamin_dLeft = document.getElementById('vitamin_d').value;
  var originalVitamin_dLeft = document.getElementById('vitamin_d').value;
  var vitamin_kLeft = document.getElementById('vitamin_k').value;
  var originalVitamin_kLeft = document.getElementById('vitamin_k').value;

  var caloriesConsumed = 0;
  var proteinConsumed = 0;
  var fatConsumed = 0;
  var calciumConsumed = 0;
  var ironConsumed = 0;
  var vitamin_aConsumed = 0;
  var vitamin_bConsumed = 0;
  var vitamin_cConsumed = 0;
  var vitamin_dConsumed = 0;
  var vitamin_kConsumed = 0;


  //alert(foodArray + length.toString());
  //alert(length);
  //alert("Hello" + random);
  //alert(o1);
  var quantity = document.getElementById('quantity').value;
  if (foodArray.includes(translate) == false) {
    document.getElementById('foodsEaten').style.height = '1100px';
    //alert(foodArray);
    document.getElementById('extra1').style.visibility = 'visible';
    document.getElementById('calories1').style.visibility = 'visible';
    document.getElementById('calories2').style.visibility = 'visible';
    document.getElementById('protein1').style.visibility = 'visible';
    document.getElementById('protein2').style.visibility = 'visible';
    document.getElementById('fat1').style.visibility = 'visible';
    document.getElementById('fat2').style.visibility = 'visible';
    document.getElementById('calcium1').style.visibility = 'visible';
    document.getElementById('calcium2').style.visibility = 'visible';
    document.getElementById('iron1').style.visibility = 'visible';
    document.getElementById('iron2').style.visibility = 'visible';
    document.getElementById('vitamin_a1').style.visibility = 'visible';
    document.getElementById('vitamin_a2').style.visibility = 'visible';
    document.getElementById('vitamin_b1').style.visibility = 'visible';
    document.getElementById('vitamin_b2').style.visibility = 'visible';
    document.getElementById('vitamin_c1').style.visibility = 'visible';
    document.getElementById('vitamin_c2').style.visibility = 'visible';
    document.getElementById('vitamin_d1').style.visibility = 'visible';
    document.getElementById('vitamin_d2').style.visibility = 'visible';
    document.getElementById('vitamin_k1').style.visibility = 'visible';
    document.getElementById('vitamin_k2').style.visibility = 'visible';
    document.getElementById('otherFoods').style.visibility = 'visible';
    document.getElementById('existingFoods').style.visibility = 'hidden';

    //alert(release + foodArray);
    document.getElementById(random).value = translate;

    /*alert(enteredCalories);
    foodArray.push(5/*translate);
    alert(foodArray)
    */
  }

  else if (foodArray.includes(translate) == true) {

    //alert(translate)
    count++;
    document.getElementById('clickCount').value = count;
    alert('You have successfully entered ' + quantity + " units of '"  + translate + "' as a food that you have eaten today!");
    //alert(count);
    switch (translate) {

      case 'apple':
        caloriesConsumed += quantity * 95;
        caloriesLeft -= caloriesConsumed;
        //alert(caloriesConsumed);
        //alert(caloriesLeft);
        proteinConsumed = quantity * 0.5;
        proteinLeft -= proteinConsumed;
        fatConsumed = quantity * 0.3;
        fatLeft -= fatConsumed;
        calciumConsumed = quantity * 11;
        calciumLeft -= calciumConsumed;
        ironConsumed = 0.2 * quantity;
        ironLeft -= ironConsumed;
        vitamin_aConsumed = 98 * quantity;
        vitamin_aLeft -= vitamin_aConsumed;
        vitamin_cConsumed = 8.4 * quantity;
        vitamin_cLeft -= vitamin_cConsumed;
        /*
        alert(caloriesLeft)
        alert(proteinLeft)
        alert(fatLeft)
        alert(calciumLeft)
        alert(ironLeft)
        alert(vitamin_aLeft)
        alert(vitamin_cLeft)
        */
        break;


        case 'apricot':
          caloriesConsumed += quantity * 17;
          caloriesLeft -= caloriesConsumed;
          proteinConsumed = quantity * 0.5;
          proteinLeft -= proteinConsumed;
          fatConsumed = quantity * 0.1;
          fatLeft -= fatConsumed;
          calciumConsumed = quantity * 5;
          calciumLeft -= calciumConsumed;
          ironConsumed = 2.66 * quantity;
          ironLeft -= ironConsumed;
          vitamin_aConsumed = 674 * quantity;
          vitamin_aLeft -= vitamin_aConsumed;
          vitamin_cConsumed = 3.5 * quantity;
          vitamin_cLeft -= vitamin_cConsumed;
          vitamin_kConsumed = 3.1 * quantity;
          vitamin_kLeft -= vitamin_kConsumed;
          break;

      case 'avocado':
          caloriesConsumed += quantity * 322;
          caloriesLeft -= caloriesConsumed;
          proteinConsumed = quantity * 4;
          proteinLeft -= proteinConsumed;
          fatConsumed = quantity * 29;
          fatLeft -= fatConsumed;
          calciumConsumed = quantity * 24;
          calciumLeft -= calciumConsumed;
          ironConsumed = 1.1 * quantity;
          ironLeft -= ironConsumed;
          vitamin_aConsumed = 293 * quantity;
          vitamin_aLeft -= vitamin_aConsumed;
          vitamin_cConsumed = 20.1 * quantity;
          vitamin_cLeft -= vitamin_cConsumed;
          vitamin_kConsumed = 21 * quantity;
          vitamin_kLeft -= vitamin_kConsumed;
          break;

      case 'banana':
              caloriesConsumed += quantity * 105;
              caloriesLeft -= caloriesConsumed;
              proteinConsumed = quantity * 1.3;
              proteinLeft -= proteinConsumed;
              fatConsumed = quantity * 0.4;
              fatLeft -= fatConsumed;
              calciumConsumed = quantity * 6;
              calciumLeft -= calciumConsumed;
              ironConsumed = 0.31 * quantity;
              ironLeft -= ironConsumed;
              vitamin_aConsumed = 76 * quantity;
              vitamin_aLeft -= vitamin_aConsumed;
              vitamin_cConsumed = 10.3 * quantity;
              vitamin_cLeft -= vitamin_cConsumed;
              break;

          case 'blackberry (cups)':
                caloriesConsumed += quantity * 62;
                caloriesLeft -= caloriesConsumed;
                proteinConsumed = quantity * 2;
                proteinLeft -= proteinConsumed;
                fatConsumed = quantity * 0.7;
                fatLeft -= fatConsumed;
                calciumConsumed = quantity * 42;
                calciumLeft -= calciumConsumed;
                ironConsumed = 0.9 * quantity;
                ironLeft -= ironConsumed;
                vitamin_aConsumed = 308 * quantity;
                vitamin_aLeft -= vitamin_aConsumed;
                vitamin_cConsumed = 30.2 * quantity;
                vitamin_cLeft -= vitamin_cConsumed;
                vitamin_kConsumed = 29 * quantity;
                vitamin_kLeft -= vitamin_kConsumed;
                break;

                case 'blueberry (cups)':
                  caloriesConsumed += quantity * 85;
                  caloriesLeft -= caloriesConsumed;
                  proteinConsumed = quantity * 1.1;
                  proteinLeft -= proteinConsumed;
                  fatConsumed = quantity * 0.5;
                  fatLeft -= fatConsumed;
                  calciumConsumed = quantity * 9;
                  calciumLeft -= calciumConsumed;
                  ironConsumed = 0.4 * quantity;
                  ironLeft -= ironConsumed;
                  vitamin_aConsumed = 80 * quantity;
                  vitamin_aLeft -= vitamin_aConsumed;
                  vitamin_cConsumed = 14.4 * quantity;
                  vitamin_cLeft -= vitamin_cConsumed;
                  break;

                  case 'cherry (cups)':
                    caloriesConsumed += quantity * 77;
                    caloriesLeft -= caloriesConsumed;
                    proteinConsumed = quantity * 1.6;
                    proteinLeft -= proteinConsumed;
                    fatConsumed = quantity * 0.5;
                    fatLeft -= fatConsumed;
                    calciumConsumed = quantity * 25;
                    calciumLeft -= calciumConsumed;
                    ironConsumed = 0.5 * quantity;
                    ironLeft -= ironConsumed;
                    vitamin_aConsumed = 1989 * quantity;
                    vitamin_aLeft -= vitamin_aConsumed;
                    vitamin_cConsumed = 15.5 * quantity;
                    vitamin_cLeft -= vitamin_cConsumed;
                    vitamin_kConsumed = 2.1 * quantity;
                    vitamin_kLeft -= vitamin_kConsumed;
                    break;

                    case 'coconut':
                      caloriesConsumed += quantity * 1405;
                      caloriesLeft -= caloriesConsumed;
                      proteinConsumed = quantity * 13;
                      proteinLeft -= proteinConsumed;
                      fatConsumed = quantity * 133;
                      fatLeft -= fatConsumed;
                      calciumConsumed = quantity * 56;
                      calciumLeft -= calciumConsumed;
                      ironConsumed = 9.6 * quantity;
                      ironLeft -= ironConsumed;
                      vitamin_cConsumed = 13.1 * quantity;
                      vitamin_cLeft -= vitamin_cConsumed;
                      vitamin_kConsumed = 0.2 * quantity;
                      vitamin_kLeft -= vitamin_kConsumed;
                      break;

                      case 'cucumber':
                        caloriesConsumed += quantity * 45;
                        caloriesLeft -= caloriesConsumed;
                        proteinConsumed = quantity * 0.65 * 3;
                        proteinLeft -= proteinConsumed;
                        fatConsumed = quantity * 0.33;
                        fatLeft -= fatConsumed;
                        calciumConsumed = quantity * 48;
                        calciumLeft -= calciumConsumed;
                        ironConsumed = 0.9 * quantity;
                        ironLeft -= ironConsumed;
                        vitamin_aConsumed = 315 * quantity;
                        vitamin_aLeft -= vitamin_aConsumed;
                        vitamin_cConsumed = 2.8 * 3 * quantity;
                        vitamin_cLeft -= vitamin_cConsumed;
                        vitamin_kConsumed = 16.4 * 3 * quantity;
                        vitamin_kLeft -= vitamin_kConsumed;
                        break;

                        case 'date':
                          caloriesConsumed += quantity * 79;
                          caloriesLeft -= caloriesConsumed;
                          proteinConsumed = quantity * 0.7;
                          proteinLeft -= proteinConsumed;
                          fatConsumed = quantity * 0.1;
                          fatLeft -= fatConsumed;
                          calciumConsumed = quantity * 10.9;
                          calciumLeft -= calciumConsumed;
                          ironConsumed = 0.3 * quantity;
                          ironLeft -= ironConsumed;
                          vitamin_aConsumed = 2.8 * quantity;
                          vitamin_aLeft -= vitamin_aConsumed;
                          vitamin_cConsumed = 0.1 * quantity;
                          vitamin_cLeft -= vitamin_cConsumed;
                          vitamin_kConsumed = 0.8 * quantity;
                          vitamin_kLeft -= vitamin_kConsumed;
                          break;

                          case 'fig':
                            caloriesConsumed += quantity * 47.4;
                            caloriesLeft -= caloriesConsumed;
                            proteinConsumed = quantity * 0.5;
                            proteinLeft -= proteinConsumed;
                            fatConsumed = quantity * 0.2;
                            fatLeft -= fatConsumed;
                            calciumConsumed = quantity * 22.4;
                            calciumLeft -= calciumConsumed;
                            ironConsumed = 0.2 * quantity;
                            ironLeft -= ironConsumed;
                            vitamin_aConsumed = 90.9 * quantity;
                            vitamin_aLeft -= vitamin_aConsumed;
                            vitamin_cConsumed = 1.3 * quantity;
                            vitamin_cLeft -= vitamin_cConsumed;
                            vitamin_kConsumed = 3 * quantity;
                            vitamin_kLeft -= vitamin_kConsumed;
                            break;

                            case 'gooseberry':
                              caloriesConsumed += quantity * 44;
                              caloriesLeft -= caloriesConsumed;
                              proteinConsumed = quantity * 0.9;
                              proteinLeft -= proteinConsumed;
                              fatConsumed = quantity * 0.6;
                              fatLeft -= fatConsumed;
                              calciumConsumed = quantity * 25;
                              calciumLeft -= calciumConsumed;
                              ironConsumed = 0.3 * quantity;
                              ironLeft -= ironConsumed;
                              vitamin_aConsumed = 290 * quantity;
                              vitamin_aLeft -= vitamin_aConsumed;
                              vitamin_cConsumed = 27.7 * quantity;
                              vitamin_cLeft -= vitamin_cConsumed;
                              break;

                              case 'grape (cups)':
                                caloriesConsumed += quantity * 61.6;
                                caloriesLeft -= caloriesConsumed;
                                proteinConsumed = quantity * 0.6;
                                proteinLeft -= proteinConsumed;
                                fatConsumed = quantity * 0.3;
                                fatLeft -= fatConsumed;
                                calciumConsumed = quantity * 12.9;
                                calciumLeft -= calciumConsumed;
                                ironConsumed = 0.3 * quantity;
                                ironLeft -= ironConsumed;
                                vitamin_aConsumed = 92 * quantity;
                                vitamin_aLeft -= vitamin_aConsumed;
                                vitamin_cConsumed = 3.7 * quantity;
                                vitamin_cLeft -= vitamin_cConsumed;
                                vitamin_kConsumed = 13.4 * quantity;
                                vitamin_kLeft -= vitamin_kConsumed;
                                break;

                                case 'raisin (cups)':
                                  caloriesConsumed += quantity * 488;
                                  caloriesLeft -= caloriesConsumed;
                                  proteinConsumed = quantity * 4.2;
                                  proteinLeft -= proteinConsumed;
                                  fatConsumed = quantity * 0.9;
                                  fatLeft -= fatConsumed;
                                  calciumConsumed = quantity * 46.2;
                                  calciumLeft -= calciumConsumed;
                                  ironConsumed = 4.3 * quantity;
                                  ironLeft -= ironConsumed;
                                  vitamin_cConsumed = 8.9 * quantity;
                                  vitamin_cLeft -= vitamin_cConsumed;
                                  break;

                                  case 'grapefruit':
                                    caloriesConsumed += quantity * 64.7;
                                    caloriesLeft -= caloriesConsumed;
                                    proteinConsumed = quantity * 1.2;
                                    proteinLeft -= proteinConsumed;
                                    fatConsumed = quantity * 0.2;
                                    fatLeft -= fatConsumed;
                                    calciumConsumed = quantity * 33.9;
                                    calciumLeft -= calciumConsumed;
                                    ironConsumed = 0.1 * quantity;
                                    ironLeft -= ironConsumed;
                                    vitamin_aConsumed = 1771 * quantity;
                                    vitamin_aLeft -= vitamin_aConsumed;
                                    vitamin_cConsumed = 48 * quantity;
                                    vitamin_cLeft -= vitamin_cConsumed;
                                    break;

                                    case 'guava':
                                      caloriesConsumed += quantity * 37.4;
                                      caloriesLeft -= caloriesConsumed;
                                      proteinConsumed = quantity * 1.4;
                                      proteinLeft -= proteinConsumed;
                                      fatConsumed = quantity * 0.5;
                                      fatLeft -= fatConsumed;
                                      calciumConsumed = quantity * 9.9;
                                      calciumLeft -= calciumConsumed;
                                      ironConsumed = 0.1 * quantity;
                                      ironLeft -= ironConsumed;
                                      vitamin_aConsumed = 343 * quantity;
                                      vitamin_aLeft -= vitamin_aConsumed;
                                      vitamin_cConsumed = 126 * quantity;
                                      vitamin_cLeft -= vitamin_cConsumed;
                                      vitamin_kConsumed = 1.4 * quantity;
                                      vitamin_kLeft -= vitamin_kConsumed;
                                      break;

                                      case 'jackfruit (cups)':
                                        caloriesConsumed += quantity * 155;
                                        caloriesLeft -= caloriesConsumed;
                                        proteinConsumed = quantity * 2.4;
                                        proteinLeft -= proteinConsumed;
                                        fatConsumed = quantity * 0.5;
                                        fatLeft -= fatConsumed;
                                        calciumConsumed = quantity * 56.1;
                                        calciumLeft -= calciumConsumed;
                                        ironConsumed = 1 * quantity;
                                        ironLeft -= ironConsumed;
                                        vitamin_aConsumed = 490 * quantity;
                                        vitamin_aLeft -= vitamin_aConsumed;
                                        vitamin_cConsumed = 11.1 * quantity;
                                        vitamin_cLeft -= vitamin_cConsumed;
                                        break;
                                        case 'kiwifruit':
                                          caloriesConsumed += quantity * 55.5;
                                          caloriesLeft -= caloriesConsumed;
                                          proteinConsumed = quantity * 1;
                                          proteinLeft -= proteinConsumed;
                                          fatConsumed = quantity * 0.5;
                                          fatLeft -= fatConsumed;
                                          calciumConsumed = quantity * 30.9;
                                          calciumLeft -= calciumConsumed;
                                          ironConsumed = 0.3 * quantity;
                                          ironLeft -= ironConsumed;
                                          vitamin_aConsumed = 79.2 * quantity;
                                          vitamin_aLeft -= vitamin_aConsumed;
                                          vitamin_cConsumed = 84.4 * quantity;
                                          vitamin_cLeft -= vitamin_cConsumed;
                                          vitamin_kConsumed = 36.7 * quantity;
                                          vitamin_kLeft -= vitamin_kConsumed;
                                          break;
                                          case 'lemon':
                                            caloriesConsumed += quantity * 16.8;
                                            caloriesLeft -= caloriesConsumed;
                                            proteinConsumed = quantity * 0.6;
                                            proteinLeft -= proteinConsumed;
                                            fatConsumed = quantity * 0.2;
                                            fatLeft -= fatConsumed;
                                            calciumConsumed = quantity * 15.1;
                                            calciumLeft -= calciumConsumed;
                                            ironConsumed = 0.3 * quantity;
                                            ironLeft -= ironConsumed;
                                            vitamin_aConsumed = 12.8 * quantity;
                                            vitamin_aLeft -= vitamin_aConsumed;
                                            vitamin_cConsumed = 30.7 * quantity;
                                            vitamin_cLeft -= vitamin_cConsumed;
                                            break;
                                      case 'lime':
                                              caloriesConsumed += quantity * 20.1;
                                              caloriesLeft -= caloriesConsumed;
                                              proteinConsumed = quantity * 0.5;
                                              proteinLeft -= proteinConsumed;
                                              fatConsumed = quantity * 0.1;
                                              fatLeft -= fatConsumed;
                                              calciumConsumed = quantity * 22.1;
                                              calciumLeft -= calciumConsumed;
                                              ironConsumed = 0.4 * quantity;
                                              ironLeft -= ironConsumed;
                                              vitamin_aConsumed = 33.5 * quantity;
                                              vitamin_aLeft -= vitamin_aConsumed;
                                              vitamin_cConsumed = 19.5 * quantity;
                                              vitamin_cLeft -= vitamin_cConsumed;
                                              vitamin_kConsumed = 0.4 * quantity;
                                              vitamin_kLeft -= vitamin_kConsumed;
                                              break;
                                              case 'lychee (cups)':
                                                caloriesConsumed += quantity * 125;
                                                caloriesLeft -= caloriesConsumed;
                                                proteinConsumed = quantity * 1.6;
                                                proteinLeft -= proteinConsumed;
                                                fatConsumed = quantity * 0.8;
                                                fatLeft -= fatConsumed;
                                                calciumConsumed = quantity * 9.5;
                                                calciumLeft -= calciumConsumed;
                                                ironConsumed = 0.6 * quantity;
                                                ironLeft -= ironConsumed;
                                                vitamin_cConsumed = 136 * quantity;
                                                vitamin_cLeft -= vitamin_cConsumed;
                                                vitamin_kConsumed = 0.8 * quantity;
                                                vitamin_kLeft -= vitamin_kConsumed;
                                                break;
                                                case 'mango':
                                                  caloriesConsumed += quantity * 135;
                                                  caloriesLeft -= caloriesConsumed;
                                                  proteinConsumed = quantity * 1.1;
                                                  proteinLeft -= proteinConsumed;
                                                  fatConsumed = quantity * 0.6;
                                                  fatLeft -= fatConsumed;
                                                  calciumConsumed = quantity * 20.7;
                                                  calciumLeft -= calciumConsumed;
                                                  ironConsumed = 0.3 * quantity;
                                                  ironLeft -= ironConsumed;
                                                  vitamin_aConsumed = 1584 * quantity;
                                                  vitamin_aLeft -= vitamin_aConsumed;
                                                  vitamin_cConsumed = 57.3 * quantity;
                                                  vitamin_cLeft -= vitamin_cConsumed;
                                                  vitamin_kConsumed = 8.7 * quantity;
                                                  vitamin_kLeft -= vitamin_kConsumed;
                                                  break;

                                                  case 'cantaloupe (cups)':
                                                    caloriesConsumed += quantity * 54.4;
                                                    caloriesLeft -= caloriesConsumed;
                                                    proteinConsumed = quantity * 1.3;
                                                    proteinLeft -= proteinConsumed;
                                                    fatConsumed = quantity * 0.3;
                                                    fatLeft -= fatConsumed;
                                                    calciumConsumed = quantity * 14.4;
                                                    calciumLeft -= calciumConsumed;
                                                    ironConsumed = 0.3 * quantity;
                                                    ironLeft -= ironConsumed;
                                                    vitamin_aConsumed = 5412 * quantity;
                                                    vitamin_aLeft -= vitamin_aConsumed;
                                                    vitamin_cConsumed = 58.7 * quantity;
                                                    vitamin_cLeft -= vitamin_cConsumed;
                                                    vitamin_kConsumed = 4 * quantity;
                                                    vitamin_kLeft -= vitamin_kConsumed;
                                                    break;

                                                    case 'honeydew (cups)':
                                                      caloriesConsumed += quantity * 63.7;
                                                      caloriesLeft -= caloriesConsumed;
                                                      proteinLeft -= proteinConsumed;
                                                      fatConsumed = quantity * 0.2;
                                                      fatLeft -= fatConsumed;
                                                      calciumConsumed = quantity * 10.6;
                                                      calciumLeft -= calciumConsumed;
                                                      ironConsumed = 0.3 * quantity;
                                                      ironLeft -= ironConsumed;
                                                      vitamin_aConsumed = 88.5 * quantity;
                                                      vitamin_aLeft -= vitamin_aConsumed;
                                                      vitamin_cConsumed = 31.9 * quantity;
                                                      vitamin_cLeft -= vitamin_cConsumed;
                                                      vitamin_kConsumed = 5.1 * quantity;
                                                      vitamin_kLeft -= vitamin_kConsumed;
                                                      break;

                                                      case 'watermelon (cups)':
                                                        caloriesConsumed += quantity * 46.2;
                                                        caloriesLeft -= caloriesConsumed;
                                                        proteinConsumed = quantity * 0.9;
                                                        proteinLeft -= proteinConsumed;
                                                        fatConsumed = quantity * 0.2;
                                                        fatLeft -= fatConsumed;
                                                        calciumConsumed = quantity * 10.8;
                                                        calciumLeft -= calciumConsumed;
                                                        ironConsumed = 0.4 * quantity;
                                                        ironLeft -= ironConsumed;
                                                        vitamin_aConsumed = 876 * quantity;
                                                        vitamin_aLeft -= vitamin_aConsumed;
                                                        vitamin_cConsumed = 12.5 * quantity;
                                                        vitamin_cLeft -= vitamin_cConsumed;
                                                        vitamin_kConsumed = 0.2 * quantity;
                                                        vitamin_kLeft -= vitamin_kConsumed;
                                                        break;

                                                        case 'nectarine':
                                                          caloriesConsumed += quantity * 61.6;
                                                          caloriesLeft -= caloriesConsumed;
                                                          proteinConsumed = quantity * 1.5;
                                                          proteinLeft -= proteinConsumed;
                                                          fatConsumed = quantity * 0.4;
                                                          fatLeft -= fatConsumed;
                                                          calciumConsumed = quantity * 8.4;
                                                          calciumLeft -= calciumConsumed;
                                                          ironConsumed = 0.4 * quantity;
                                                          ironLeft -= ironConsumed;
                                                          vitamin_aConsumed = 465 * quantity;
                                                          vitamin_aLeft -= vitamin_aConsumed;
                                                          vitamin_cConsumed = 7.6 * quantity;
                                                          vitamin_cLeft -= vitamin_cConsumed;
                                                          vitamin_kConsumed = 3.1 * quantity;
                                                          vitamin_kLeft -= vitamin_kConsumed;
                                                          break;

                                                          case 'orange':
                                                            caloriesConsumed += quantity * 64.9;
                                                            caloriesLeft -= caloriesConsumed;
                                                            proteinLeft -= proteinConsumed;
                                                            fatConsumed = quantity * 0.3;
                                                            fatLeft -= fatConsumed;
                                                            calciumConsumed = quantity * 60.6;
                                                            calciumLeft -= calciumConsumed;
                                                            ironConsumed = 0.1 * quantity;
                                                            ironLeft -= ironConsumed;
                                                            vitamin_aConsumed = 317 * quantity;
                                                            vitamin_aLeft -= vitamin_aConsumed;
                                                            vitamin_cConsumed = 63.4 * quantity;
                                                            vitamin_cLeft -= vitamin_cConsumed;
                                                            break;

                                                            case 'tangerine':
                                                              caloriesConsumed += quantity * 46.6;
                                                              caloriesLeft -= caloriesConsumed;
                                                              proteinConsumed = quantity * 0.7;
                                                              proteinLeft -= proteinConsumed;
                                                              fatConsumed = quantity * 0.3;
                                                              fatLeft -= fatConsumed;
                                                              calciumConsumed = quantity * 32.6;
                                                              calciumLeft -= calciumConsumed;
                                                              ironConsumed = 0.1 * quantity;
                                                              ironLeft -= ironConsumed;
                                                              vitamin_aConsumed = 599 * quantity;
                                                              vitamin_aLeft -= vitamin_aConsumed;
                                                              vitamin_cConsumed = 23.5 * quantity;
                                                              vitamin_cLeft -= vitamin_cConsumed;
                                                              break;


                                                              case 'papaya (cups)':
                                                                caloriesConsumed += quantity * 54.6;
                                                                caloriesLeft -= caloriesConsumed;
                                                                proteinConsumed = quantity * 0.9;
                                                                proteinLeft -= proteinConsumed;
                                                                fatConsumed = quantity * 0.2;
                                                                fatLeft -= fatConsumed;
                                                                calciumConsumed = quantity * 33.6;
                                                                calciumLeft -= calciumConsumed;
                                                                ironConsumed = 0.1 * quantity;
                                                                ironLeft -= ironConsumed;
                                                                vitamin_aConsumed = 1531 * quantity;
                                                                vitamin_aLeft -= vitamin_aConsumed;
                                                                vitamin_cConsumed = 86.5 * quantity;
                                                                vitamin_cLeft -= vitamin_cConsumed;
                                                                vitamin_kConsumed = 3.6 * quantity;
                                                                vitamin_kLeft -= vitamin_kConsumed;
                                                                break;

                                                                case 'peach':
                                                                  caloriesConsumed += quantity * 68.3;
                                                                  caloriesLeft -= caloriesConsumed;
                                                                  proteinConsumed = quantity * 1.6;
                                                                  proteinLeft -= proteinConsumed;
                                                                  fatConsumed = quantity * 0.4;
                                                                  fatLeft -= fatConsumed;
                                                                  calciumConsumed = quantity * 10.5;
                                                                  calciumLeft -= calciumConsumed;
                                                                  ironConsumed = 0.4 * quantity;
                                                                  ironLeft -= ironConsumed;
                                                                  vitamin_aConsumed = 570 * quantity;
                                                                  vitamin_aLeft -= vitamin_aConsumed;
                                                                  vitamin_cConsumed = 11.6 * quantity;
                                                                  vitamin_cLeft -= vitamin_cConsumed;
                                                                  vitamin_kConsumed = 4.6 * quantity;
                                                                  vitamin_kLeft -= vitamin_kConsumed;
                                                                  break;

                                                                  case 'pear':
                                                                    caloriesConsumed += quantity * 51.2;
                                                                    caloriesLeft -= caloriesConsumed;
                                                                    proteinConsumed = quantity * 0.6;
                                                                    proteinLeft -= proteinConsumed;
                                                                    fatConsumed = quantity * 0.3;
                                                                    fatLeft -= fatConsumed;
                                                                    calciumConsumed = quantity * 4.9;
                                                                    calciumLeft -= calciumConsumed;
                                                                    vitamin_cConsumed = 4.6 * quantity;
                                                                    vitamin_cLeft -= vitamin_cConsumed;
                                                                    vitamin_kConsumed = 5.5 * quantity;
                                                                    vitamin_kLeft -= vitamin_kConsumed;
                                                                    break;


                                                                    case 'plum':
                                                                      caloriesConsumed += quantity * 75.9;
                                                                      caloriesLeft -= caloriesConsumed;
                                                                      proteinConsumed = quantity * 1.2;
                                                                      proteinLeft -= proteinConsumed;
                                                                      fatConsumed = quantity * 0.5;
                                                                      fatLeft -= fatConsumed;
                                                                      calciumConsumed = quantity * 9.9;
                                                                      calciumLeft -= calciumConsumed;
                                                                      ironConsumed = 0.3 * quantity;
                                                                      ironLeft -= ironConsumed;
                                                                      vitamin_aConsumed = 569 * quantity;
                                                                      vitamin_aLeft -= vitamin_aConsumed;
                                                                      vitamin_cConsumed = 15.7 * quantity;
                                                                      vitamin_cLeft -= vitamin_cConsumed;
                                                                      vitamin_kConsumed = 10.6 * quantity;
                                                                      vitamin_kLeft -= vitamin_kConsumed;
                                                                      break;

                                                                      case 'prune (cups)':
                                                                        caloriesConsumed += quantity * 418;
                                                                        caloriesLeft -= caloriesConsumed;
                                                                        proteinConsumed = quantity * 3.8;
                                                                        proteinLeft -= proteinConsumed;
                                                                        fatConsumed = quantity * 0.7;
                                                                        fatLeft -= fatConsumed;
                                                                        calciumConsumed = quantity * 74.8;
                                                                        calciumLeft -= calciumConsumed;
                                                                        ironConsumed = 1.6 * quantity;
                                                                        ironLeft -= ironConsumed;
                                                                        vitamin_aConsumed = 1359 * quantity;
                                                                        vitamin_aLeft -= vitamin_aConsumed;
                                                                        vitamin_cConsumed = quantity;
                                                                        vitamin_cLeft -= vitamin_cConsumed;
                                                                        vitamin_kConsumed = 10.4 * quantity;
                                                                        vitamin_kLeft -= vitamin_kConsumed;
                                                                        break;

                                                                        case 'pineapple (cups)':
                                                                          caloriesConsumed += quantity * 82.5;
                                                                          caloriesLeft -= caloriesConsumed;
                                                                          proteinConsumed = quantity * 0.9;
                                                                          proteinLeft -= proteinConsumed;
                                                                          fatConsumed = quantity * 0.2;
                                                                          fatLeft -= fatConsumed;
                                                                          calciumConsumed = quantity * 21.5;
                                                                          calciumLeft -= calciumConsumed;
                                                                          ironConsumed = 0.5 * quantity;
                                                                          ironLeft -= ironConsumed;
                                                                          vitamin_aConsumed = 95.7 * quantity;
                                                                          vitamin_aLeft -= vitamin_aConsumed;
                                                                          vitamin_cConsumed = 78.9 * quantity;
                                                                          vitamin_cLeft -= vitamin_cConsumed;
                                                                          vitamin_kConsumed = 1.2 * quantity;
                                                                          vitamin_kLeft -= vitamin_kConsumed;
                                                                          break;

                                                                          case 'raspberry (cups)':
                                                                            caloriesConsumed += quantity * 64;
                                                                            caloriesLeft -= caloriesConsumed;
                                                                            proteinConsumed = quantity * 1.5;
                                                                            proteinLeft -= proteinConsumed;
                                                                            fatConsumed = quantity * 0.8;
                                                                            fatLeft -= fatConsumed;
                                                                            calciumConsumed = quantity * 30.7;
                                                                            calciumLeft -= calciumConsumed;
                                                                            ironConsumed = 0.8 * quantity;
                                                                            ironLeft -= ironConsumed;
                                                                            vitamin_aConsumed = 40.6 * quantity;
                                                                            vitamin_aLeft -= vitamin_aConsumed;
                                                                            vitamin_cConsumed = 32.2 * quantity;
                                                                            vitamin_cLeft -= vitamin_cConsumed;
                                                                            vitamin_kConsumed = 9.6 * quantity;
                                                                            vitamin_kLeft -= vitamin_kConsumed;
                                                                            break;

                                                                            case 'star fruit (cups)':
                                                                              caloriesConsumed += quantity * 40.9;
                                                                              caloriesLeft -= caloriesConsumed;
                                                                              proteinConsumed = quantity * 1.4;
                                                                              proteinLeft -= proteinConsumed;
                                                                              fatConsumed = quantity * 0.4;
                                                                              fatLeft -= fatConsumed;
                                                                              calciumConsumed = quantity * 4;
                                                                              calciumLeft -= calciumConsumed;
                                                                              ironConsumed = 0.1 * quantity;
                                                                              ironLeft -= ironConsumed;
                                                                              vitamin_aConsumed = 80.5 * quantity;
                                                                              vitamin_aLeft -= vitamin_aConsumed;
                                                                              vitamin_cConsumed = 45.4 * quantity;
                                                                              vitamin_cLeft -= vitamin_cConsumed;
                                                                              break;

                                                                              case 'strawberry':
                                                                                caloriesConsumed += quantity * 5.8;
                                                                                caloriesLeft -= caloriesConsumed;
                                                                                proteinConsumed = quantity * 0.1;
                                                                                proteinLeft -= proteinConsumed;
                                                                                fatConsumed = quantity * 0.1;
                                                                                fatLeft -= fatConsumed;
                                                                                calciumConsumed = quantity * 2.9;
                                                                                calciumLeft -= calciumConsumed;
                                                                                ironConsumed = 0.1 * quantity;
                                                                                ironLeft -= ironConsumed;
                                                                                vitamin_aConsumed = 2.2 * quantity;
                                                                                vitamin_aLeft -= vitamin_aConsumed;
                                                                                vitamin_cConsumed = 10.6 * quantity;
                                                                                vitamin_cLeft -= vitamin_cConsumed;
                                                                                vitamin_kConsumed = 0.4 * quantity;
                                                                                vitamin_kLeft -= vitamin_kConsumed;
                                                                                break;



                case 'artichoke':
                  caloriesConsumed += quantity * 60.2;
                  caloriesLeft -= caloriesConsumed;
                  proteinConsumed = quantity * 4.2;
                  proteinLeft -= proteinConsumed;
                  fatConsumed = quantity * 0.2;
                  fatLeft -= fatConsumed;
                  calciumConsumed = quantity * 56.3;
                  calciumLeft -= calciumConsumed;
                  ironConsumed = 1.6 * quantity;
                  ironLeft -= ironConsumed;
                  vitamin_aConsumed = 16.6 * quantity;
                  vitamin_aLeft -= vitamin_aConsumed;
                  vitamin_cConsumed = 15 * quantity;
                  vitamin_cLeft -= vitamin_cConsumed;
                  vitamin_kConsumed = 18.9 * quantity;
                  vitamin_kLeft -= vitamin_kConsumed;
                  break;
                case 'eggplant (cups)':
                    caloriesConsumed += quantity * 19.7;
                    caloriesLeft -= caloriesConsumed;
                    proteinConsumed = quantity * 0.8;
                    proteinLeft -= proteinConsumed;
                    fatConsumed = quantity * 0.2;
                    fatLeft -= fatConsumed;
                    calciumConsumed = quantity * 7.4;
                    calciumLeft -= calciumConsumed;
                    ironConsumed = 0.2 * quantity;
                    ironLeft -= ironConsumed;
                    vitamin_aConsumed = 22.1 * quantity;
                    vitamin_aLeft -= vitamin_aConsumed;
                    vitamin_cConsumed = 1.8 * quantity;
                    vitamin_cLeft -= vitamin_cConsumed;
                    vitamin_kConsumed = 2.9 * quantity;
                    vitamin_kLeft -= vitamin_kConsumed;
                    break;
                case 'asparagus (cups)':
                      caloriesConsumed += quantity * 26.8;
                      caloriesLeft -= caloriesConsumed;
                      proteinConsumed = quantity * 2.9;
                      proteinLeft -= proteinConsumed;
                      fatConsumed = quantity * 0.2;
                      fatLeft -= fatConsumed;
                      calciumConsumed = quantity * 32.2;
                      calciumLeft -= calciumConsumed;
                      ironConsumed = 2.9 * quantity;
                      ironLeft -= ironConsumed;
                      vitamin_aConsumed = 1013 * quantity;
                      vitamin_aLeft -= vitamin_aConsumed;
                      vitamin_cConsumed = 7.5 * quantity;
                      vitamin_cLeft -= vitamin_cConsumed;
                      vitamin_kConsumed = 55.7 * quantity;
                      vitamin_kLeft -= vitamin_kConsumed;
                      break;
                case 'black beans (cups)':
                        caloriesConsumed += quantity * 662;
                        caloriesLeft -= caloriesConsumed;
                        proteinConsumed = quantity * 41.9;
                        proteinLeft -= proteinConsumed;
                        fatConsumed = quantity * 2.8;
                        fatLeft -= fatConsumed;
                        calciumConsumed = quantity * 239;
                        calciumLeft -= calciumConsumed;
                        ironConsumed = 9.7 * quantity;
                        ironLeft -= ironConsumed;
                        vitamin_kConsumed = 10.9 * quantity;
                        vitamin_kLeft -= vitamin_kConsumed;
                        break;
                        case 'corn (ears)':
                              caloriesConsumed += quantity * 77.4;
                              caloriesLeft -= caloriesConsumed;
                              proteinConsumed = quantity * 2.9;
                              proteinLeft -= proteinConsumed;
                              fatConsumed = quantity * 1.1;
                              fatLeft -= fatConsumed;
                              calciumConsumed = quantity * 1.8;
                              calciumLeft -= calciumConsumed;
                              ironConsumed = 0.5 * quantity;
                              ironLeft -= ironConsumed;
                              vitamin_aConsumed = 0.9 * quantity;
                              vitamin_aLeft -= vitamin_aConsumed;
                              vitamin_cConsumed = 6.1 * quantity;
                              vitamin_cLeft -= vitamin_cConsumed;
                              vitamin_kConsumed = 0.3 * quantity;
                              vitamin_kLeft -= vitamin_kConsumed;
                              break;
                              case 'chickpeas (cups)':
                                    caloriesConsumed += quantity * 728;
                                    caloriesLeft -= caloriesConsumed;
                                    proteinConsumed = quantity * 38.6;
                                    proteinLeft -= proteinConsumed;
                                    fatConsumed = quantity * 12.1;
                                    fatLeft -= fatConsumed;
                                    calciumConsumed = quantity * 210;
                                    calciumLeft -= calciumConsumed;
                                    ironConsumed = 12.5 * quantity;
                                    ironLeft -= ironConsumed;
                                    vitamin_aConsumed = 134 * quantity;
                                    vitamin_aLeft -= vitamin_aConsumed;
                                    vitamin_cConsumed = 8 * quantity;
                                    vitamin_cLeft -= vitamin_cConsumed;
                                    vitamin_kConsumed = 18 * quantity;
                                    vitamin_kLeft -= vitamin_kConsumed;
                                    break;
                                    case 'green beans (cups)':
                                          caloriesConsumed += quantity * 34.1;
                                          caloriesLeft -= caloriesConsumed;
                                          proteinConsumed = quantity * 2;
                                          proteinLeft -= proteinConsumed;
                                          fatConsumed = quantity * 0.1;
                                          fatLeft -= fatConsumed;
                                          calciumConsumed = quantity * 40.7;
                                          calciumLeft -= calciumConsumed;
                                          ironConsumed = 1.1 * quantity;
                                          ironLeft -= ironConsumed;
                                          vitamin_aConsumed = 759 * quantity;
                                          vitamin_aLeft -= vitamin_aConsumed;
                                          vitamin_cConsumed = 17.9 * quantity;
                                          vitamin_cLeft -= vitamin_cConsumed;
                                          vitamin_kConsumed = 15.8 * quantity;
                                          vitamin_kLeft -= vitamin_kConsumed;
                                          break;
                                          case 'kidney beans (cups)':
                                                caloriesConsumed += quantity * 613;
                                                caloriesLeft -= caloriesConsumed;
                                                proteinConsumed = quantity * 43.4;
                                                proteinLeft -= proteinConsumed;
                                                fatConsumed = quantity * 1.5;
                                                fatLeft -= fatConsumed;
                                                calciumConsumed = quantity * 263;
                                                calciumLeft -= calciumConsumed;
                                                ironConsumed = 15.1 * quantity;
                                                ironLeft -= ironConsumed;
                                                vitamin_cConsumed = 8.3 * quantity;
                                                vitamin_cLeft -= vitamin_cConsumed;
                                                vitamin_kConsumed = 35 * quantity;
                                                vitamin_kLeft -= vitamin_kConsumed;
                                                break;
                                                case 'lentils (cups)':
                                                      caloriesConsumed += quantity * 678;
                                                      caloriesLeft -= caloriesConsumed;
                                                      proteinConsumed = quantity * 49.5;
                                                      proteinLeft -= proteinConsumed;
                                                      fatConsumed = quantity * 2;
                                                      fatLeft -= fatConsumed;
                                                      calciumConsumed = quantity * 108;
                                                      calciumLeft -= calciumConsumed;
                                                      ironConsumed = 14.5 * quantity;
                                                      ironLeft -= ironConsumed;
                                                      vitamin_aConsumed = 74.9 * quantity;
                                                      vitamin_aLeft -= vitamin_aConsumed;
                                                      vitamin_cConsumed = 8.4 * quantity;
                                                      vitamin_cLeft -= vitamin_cConsumed;
                                                      vitamin_kConsumed = 9.6 * quantity;
                                                      vitamin_kLeft -= vitamin_kConsumed;
                                                      break;
                                                      case 'squash':
                                                            caloriesConsumed += quantity * 31.4;
                                                            caloriesLeft -= caloriesConsumed;
                                                            proteinConsumed = quantity * 2.4;
                                                            proteinLeft -= proteinConsumed;
                                                            fatConsumed = quantity * 0.4;
                                                            fatLeft -= fatConsumed;
                                                            calciumConsumed = quantity * 29.4;
                                                            calciumLeft -= calciumConsumed;
                                                            ironConsumed = 0.7 * quantity;
                                                            ironLeft -= ironConsumed;
                                                            vitamin_aConsumed = 392 * quantity;
                                                            vitamin_aLeft -= vitamin_aConsumed;
                                                            vitamin_cConsumed = 33.3 * quantity;
                                                            vitamin_cLeft -= vitamin_cConsumed;
                                                            vitamin_kConsumed = 5.9 * quantity;
                                                            vitamin_kLeft -= vitamin_kConsumed;
                                                            break;
                                                            case 'soybeans (cups)':
                                                                  caloriesConsumed += quantity * 776;
                                                                  caloriesLeft -= caloriesConsumed;
                                                                  proteinConsumed = quantity * 68.1;
                                                                  proteinLeft -= proteinConsumed;
                                                                  fatConsumed = quantity * 37.2;
                                                                  fatLeft -= fatConsumed;
                                                                  calciumConsumed = quantity * 241;
                                                                  calciumLeft -= calciumConsumed;
                                                                  ironConsumed = 6.8 * quantity;
                                                                  ironLeft -= ironConsumed;
                                                                  vitamin_cConsumed = 7.9 * quantity;
                                                                  vitamin_cLeft -= vitamin_cConsumed;
                                                                  vitamin_kConsumed = 63.6 * quantity;
                                                                  vitamin_kLeft -= vitamin_kConsumed;
                                                                  break;
                                                                  case 'peas (cups)':
                                                                        caloriesConsumed += quantity * 117;
                                                                        caloriesLeft -= caloriesConsumed;
                                                                        proteinConsumed = quantity * 7.9;
                                                                        proteinLeft -= proteinConsumed;
                                                                        fatConsumed = quantity * 0.6;
                                                                        fatLeft -= fatConsumed;
                                                                        calciumConsumed = quantity * 36.2;
                                                                        calciumLeft -= calciumConsumed;
                                                                        ironConsumed = 2.1 * quantity;
                                                                        ironLeft -= ironConsumed;
                                                                        vitamin_aConsumed = 1109 * quantity;
                                                                        vitamin_aLeft -= vitamin_aConsumed;
                                                                        vitamin_cConsumed = 58 * quantity;
                                                                        vitamin_cLeft -= vitamin_cConsumed;
                                                                        vitamin_kConsumed = 36 * quantity;
                                                                        vitamin_kLeft -= vitamin_kConsumed;
                                                                        break;
                                                                        case 'tomato':
                                                                              caloriesConsumed += quantity * 22.1;
                                                                              caloriesLeft -= caloriesConsumed;
                                                                              proteinConsumed = quantity * 1.1;
                                                                              proteinLeft -= proteinConsumed;
                                                                              fatConsumed = quantity * 0.2;
                                                                              fatLeft -= fatConsumed;
                                                                              calciumConsumed = quantity * 12.3;
                                                                              calciumLeft -= calciumConsumed;
                                                                              ironConsumed = 0.3 * quantity;
                                                                              ironLeft -= ironConsumed;
                                                                              vitamin_aConsumed = 1025 * quantity;
                                                                              vitamin_aLeft -= vitamin_aConsumed;
                                                                              vitamin_cConsumed = 15.6 * quantity;
                                                                              vitamin_cLeft -= vitamin_cConsumed;
                                                                              vitamin_kConsumed = 9.7 * quantity;
                                                                              vitamin_kLeft -= vitamin_kConsumed;
                                                                              break;
                                                                              case 'brocolli':
                                                                                    caloriesConsumed += quantity * 50.3;
                                                                                    caloriesLeft -= caloriesConsumed;
                                                                                    proteinConsumed = quantity * 4.2;
                                                                                    proteinLeft -= proteinConsumed;
                                                                                    fatConsumed = quantity * 0.5;
                                                                                    fatLeft -= fatConsumed;
                                                                                    calciumConsumed = quantity * 69.6;
                                                                                    calciumLeft -= calciumConsumed;
                                                                                    ironConsumed = 1.1 * quantity;
                                                                                    ironLeft -= ironConsumed;
                                                                                    vitamin_aConsumed = 922 * quantity;
                                                                                    vitamin_aLeft -= vitamin_aConsumed;
                                                                                    vitamin_cConsumed = 132 * quantity;
                                                                                    vitamin_cLeft -= vitamin_cConsumed;
                                                                                    vitamin_kConsumed = 150 * quantity;
                                                                                    vitamin_kLeft -= vitamin_kConsumed;
                                                                                    break;
                                                                                    case 'brussel sprouts (cups)':
                                                                                          caloriesConsumed += quantity * 37.8;
                                                                                          caloriesLeft -= caloriesConsumed;
                                                                                          proteinConsumed = quantity * 3;
                                                                                          proteinLeft -= proteinConsumed;
                                                                                          fatConsumed = quantity * 0.3;
                                                                                          fatLeft -= fatConsumed;
                                                                                          calciumConsumed = quantity * 37;
                                                                                          calciumLeft -= calciumConsumed;
                                                                                          ironConsumed = 1.2 * quantity;
                                                                                          ironLeft -= ironConsumed;
                                                                                          vitamin_aConsumed = 664 * quantity;
                                                                                          vitamin_aLeft -= vitamin_aConsumed;
                                                                                          vitamin_cConsumed = 74.8 * quantity;
                                                                                          vitamin_cLeft -= vitamin_cConsumed;
                                                                                          vitamin_kConsumed = 156 * quantity;
                                                                                          vitamin_kLeft -= vitamin_kConsumed;
                                                                                          break;
                                                                                          case 'cabbage (cups)':
                                                                                                caloriesConsumed += quantity * 22.2;
                                                                                                caloriesLeft -= caloriesConsumed;
                                                                                                proteinConsumed = quantity * 1.1;
                                                                                                proteinLeft -= proteinConsumed;
                                                                                                fatConsumed = quantity * 0.1;
                                                                                                fatLeft -= fatConsumed;
                                                                                                calciumConsumed = quantity * 35.6;
                                                                                                calciumLeft -= calciumConsumed;
                                                                                                ironConsumed = 0.4 * quantity;
                                                                                                ironLeft -= ironConsumed;
                                                                                                vitamin_aConsumed = 87.2 * quantity;
                                                                                                vitamin_aLeft -= vitamin_aConsumed;
                                                                                                vitamin_cConsumed = 32.6* quantity;
                                                                                                vitamin_cLeft -= vitamin_cConsumed;
                                                                                                vitamin_kConsumed = 67.6 * quantity;
                                                                                                vitamin_kLeft -= vitamin_kConsumed;
                                                                                                break;
                                                                                                case 'cauliflower (cups)':
                                                                                                      caloriesConsumed += quantity * 25;
                                                                                                      caloriesLeft -= caloriesConsumed;
                                                                                                      proteinConsumed = quantity * 2;
                                                                                                      proteinLeft -= proteinConsumed;
                                                                                                      fatConsumed = quantity * 0.1;
                                                                                                      fatLeft -= fatConsumed;
                                                                                                      calciumConsumed = quantity * 22;
                                                                                                      calciumLeft -= calciumConsumed;
                                                                                                      ironConsumed = 0.4 * quantity;
                                                                                                      ironLeft -= ironConsumed;
                                                                                                      vitamin_aConsumed = 13 * quantity;
                                                                                                      vitamin_aLeft -= vitamin_aConsumed;
                                                                                                      vitamin_cConsumed = 46.4* quantity;
                                                                                                      vitamin_cLeft -= vitamin_cConsumed;
                                                                                                      vitamin_kConsumed = 16 * quantity;
                                                                                                      vitamin_kLeft -= vitamin_kConsumed;
                                                                                                      break;
                                                                                                      case 'celery':
                                                                                                            caloriesConsumed += quantity * 17.6;
                                                                                                            caloriesLeft -= caloriesConsumed;
                                                                                                            proteinConsumed = quantity * 0.8;
                                                                                                            proteinLeft -= proteinConsumed;
                                                                                                            fatConsumed = quantity * 0.2;
                                                                                                            fatLeft -= fatConsumed;
                                                                                                            calciumConsumed = quantity * 44;
                                                                                                            calciumLeft -= calciumConsumed;
                                                                                                            ironConsumed = 0.2 * quantity;
                                                                                                            ironLeft -= ironConsumed;
                                                                                                            vitamin_aConsumed = 494 * quantity;
                                                                                                            vitamin_aLeft -= vitamin_aConsumed;
                                                                                                            vitamin_cConsumed = 3.4 * quantity;
                                                                                                            vitamin_cLeft -= vitamin_cConsumed;
                                                                                                            vitamin_kConsumed = 32.2 * quantity;
                                                                                                            vitamin_kLeft -= vitamin_kConsumed;
                                                                                                            break;
                                                                                                            case 'kale (cups)':
                                                                                                                  caloriesConsumed += quantity * 33.5;
                                                                                                                  caloriesLeft -= caloriesConsumed;
                                                                                                                  proteinConsumed = quantity * 2.2;
                                                                                                                  proteinLeft -= proteinConsumed;
                                                                                                                  fatConsumed = quantity * 0.5;
                                                                                                                  fatLeft -= fatConsumed;
                                                                                                                  calciumConsumed = quantity * 90.5;
                                                                                                                  calciumLeft -= calciumConsumed;
                                                                                                                  ironConsumed = 1.1 * quantity;
                                                                                                                  ironLeft -= ironConsumed;
                                                                                                                  vitamin_aConsumed = 10302 * quantity;
                                                                                                                  vitamin_aLeft -= vitamin_aConsumed;
                                                                                                                  vitamin_cConsumed = 80.4 * quantity;
                                                                                                                  vitamin_cLeft -= vitamin_cConsumed;
                                                                                                                  vitamin_kConsumed = 547 * quantity;
                                                                                                                  vitamin_kLeft -= vitamin_kConsumed;
                                                                                                                  break;
                                                                                                                  case 'spinach (cups)':
                                                                                                                        caloriesConsumed += quantity * 6.9;
                                                                                                                        caloriesLeft -= caloriesConsumed;
                                                                                                                        proteinConsumed = quantity * 0.9;
                                                                                                                        proteinLeft -= proteinConsumed;
                                                                                                                        fatConsumed = quantity * 0.1;
                                                                                                                        fatLeft -= fatConsumed;
                                                                                                                        calciumConsumed = quantity * 29.7;
                                                                                                                        calciumLeft -= calciumConsumed;
                                                                                                                        ironConsumed = 0.8 * quantity;
                                                                                                                        ironLeft -= ironConsumed;
                                                                                                                        vitamin_aConsumed = 2813 * quantity;
                                                                                                                        vitamin_aLeft -= vitamin_aConsumed;
                                                                                                                        vitamin_cConsumed = 8.4 * quantity;
                                                                                                                        vitamin_cLeft -= vitamin_cConsumed;
                                                                                                                        vitamin_kConsumed = 145 * quantity;
                                                                                                                        vitamin_kLeft -= vitamin_kConsumed;
                                                                                                                        break;
                                                                                                                        case 'turnip':
                                                                                                                        caloriesConsumed += quantity * 34.2;
                                                                                                                        caloriesLeft -= caloriesConsumed;
                                                                                                                        proteinConsumed = quantity * 1.1;
                                                                                                                        proteinLeft -= proteinConsumed;
                                                                                                                        fatConsumed = quantity * 0.1;
                                                                                                                        fatLeft -= fatConsumed;
                                                                                                                        calciumConsumed = quantity * 36.6;
                                                                                                                        calciumLeft -= calciumConsumed;
                                                                                                                        ironConsumed = 0.4 * quantity;
                                                                                                                        ironLeft -= ironConsumed;
                                                                                                                        vitamin_cConsumed = 25.8 * quantity;
                                                                                                                        vitamin_cLeft -= vitamin_cConsumed;
                                                                                                                        vitamin_kConsumed = 0.1 * quantity;
                                                                                                                        vitamin_kLeft -= vitamin_kConsumed;
                                                                                                                        break;
                                                                                                                        case 'lettuce (cups)':
                                                                                                                        caloriesConsumed += quantity * 5.4;
                                                                                                                        caloriesLeft -= caloriesConsumed;
                                                                                                                        proteinConsumed = quantity * 0.5;
                                                                                                                        proteinLeft -= proteinConsumed;
                                                                                                                        fatConsumed = quantity * 0.1;
                                                                                                                        fatLeft -= fatConsumed;
                                                                                                                        calciumConsumed = quantity * 13;
                                                                                                                        calciumLeft -= calciumConsumed;
                                                                                                                        ironConsumed = 0.3 * quantity;
                                                                                                                        ironLeft -= ironConsumed;
                                                                                                                        vitamin_aConsumed = 2665 * quantity;
                                                                                                                        vitamin_aLeft -= vitamin_aConsumed;
                                                                                                                        vitamin_cConsumed = 6.5 * quantity;
                                                                                                                        vitamin_cLeft -= vitamin_cConsumed;
                                                                                                                        vitamin_kConsumed = 62.5 * quantity;
                                                                                                                        vitamin_kLeft -= vitamin_kConsumed;
case 'mushrooms (cups)':                                                                                                 break;
caloriesConsumed += quantity * 15.4;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 2.2;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.2;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 2.1;
calciumLeft -= calciumConsumed;
ironConsumed = 0.3 * quantity;
ironLeft -= ironConsumed;
vitamin_cConsumed = 1.5 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_dConsumed = 12.6 * quantity;
vitamin_dLeft -= vitamin_dConsumed;
break;
case 'okra (cups)':
caloriesConsumed += quantity * 31;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 2;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.1;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 81;
calciumLeft -= calciumConsumed;
ironConsumed = 0.8 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 375 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 21.1 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 53 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;
case 'onion (cups)':
caloriesConsumed += quantity * 64;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 1.8;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.2;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 36.8;
calciumLeft -= calciumConsumed;
ironConsumed = 0.3 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 3.2 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 11.8 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 0.6 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;
case 'yam (cups)':
caloriesConsumed += quantity * 177;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 2.3;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.3;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 25.5;
calciumLeft -= calciumConsumed;
ironConsumed = 0.8 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 207 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 25.6 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 3.4 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'bell pepper':
caloriesConsumed += quantity * 36.9;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 1.2;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.4;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 8.3;
calciumLeft -= calciumConsumed;
ironConsumed = 0.5 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 3726 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 152 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 5.8 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'chili pepper (cups)':
caloriesConsumed += quantity * 120;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 3.9;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 2.1;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 16.6;
calciumLeft -= calciumConsumed;
ironConsumed = 2.2 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 9800 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 11.6 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 40 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'jalapeno (cups)':
caloriesConsumed += quantity * 27;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 1.2;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.6;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 9;
calciumLeft -= calciumConsumed;
ironConsumed = 0.6 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 719 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 39.9 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 8.7 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'beetroot':
caloriesConsumed += quantity * 35.3;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 1.3;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.1;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 13.1;
calciumLeft -= calciumConsumed;
ironConsumed = 0.7 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 27.1 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 4 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 0.2 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'carrot':
caloriesConsumed += quantity * 25;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 0.6;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.1;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 20.1;
calciumLeft -= calciumConsumed;
ironConsumed = 0.2 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 10190 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 3.6 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 8.1 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'radish (cups)':
caloriesConsumed += quantity * 18.6;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 0.8;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.1;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 29;
calciumLeft -= calciumConsumed;
ironConsumed = 0.4 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 8.1 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 17.2 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 1.5 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'potato':
caloriesConsumed += quantity * 168;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 4.6;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.2;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 27.7;
calciumLeft -= calciumConsumed;
ironConsumed = 1.8 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 2.1 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 12.1 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 3.8 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'sweet potato':
caloriesConsumed += quantity * 112;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 2;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.1;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 39;
calciumLeft -= calciumConsumed;
ironConsumed = 0.8 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 18441 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 3.1 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 2.3 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;


case 'brown rice (cups)':
caloriesConsumed += quantity * 216;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 5;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 1.8;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 19.5;
calciumLeft -= calciumConsumed;
ironConsumed = 0.8 * quantity;
ironLeft -= ironConsumed;
vitamin_kConsumed = 1.2 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'cornflakes (cups)':
caloriesConsumed += quantity * 101;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 1.9;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.2;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 1.1;
calciumLeft -= calciumConsumed;
ironConsumed = 8.1 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 502 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 6.2 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_bConsumed = 2.7 * quantity;
vitamin_bLeft -= vitamin_bConsumed;
vitamin_dConsumed = 42.6 * quantity;
vitamin_dLeft -= vitamin_dConsumed;
break;

case 'quinoa (cups)':
caloriesConsumed += quantity * 222;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 8.1;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 3.6;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 31.5;
calciumLeft -= calciumConsumed;
ironConsumed = 2.8 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 9.3 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
break;

case 'oats (cups)':
caloriesConsumed += quantity * 607;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 26.4;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 10.8;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 84.3;
calciumLeft -= calciumConsumed;
ironConsumed = 7.4 * quantity;
ironLeft -= ironConsumed;
break;

case 'rice cake':
caloriesConsumed += quantity * 34.8;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 0.7;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.3;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 1;
calciumLeft -= calciumConsumed;
ironConsumed = 0.1 * quantity;
ironLeft -= ironConsumed;
vitamin_kConsumed = 0.2 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'whole-grain bread':
caloriesConsumed += quantity * 68.9;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 3.5;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 1.1;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 26.8;
calciumLeft -= calciumConsumed;
ironConsumed = 0.7 * quantity;
ironLeft -= ironConsumed;
vitamin_kConsumed = 0.4 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'bread rolls':
caloriesConsumed += quantity * 240;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 9;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 3.5;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 20;
calciumLeft -= calciumConsumed;
ironConsumed = 2.7 * quantity;
ironLeft -= ironConsumed;
break;

case 'white rice (cups)':
caloriesConsumed += quantity * 702;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 12.9;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 1.1;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 17.5;
calciumLeft -= calciumConsumed;
ironConsumed = 8.5 * quantity;
ironLeft -= ironConsumed;
break;

case 'pasta (servings)':
caloriesConsumed += quantity * 369;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 14.5;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 2.9;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 19.2;
calciumLeft -= calciumConsumed;
ironConsumed = 4.3 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 60.2 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_bConsumed = 0.4 * quantity;
vitamin_bLeft -= vitamin_bConsumed;
break;

case 'couscous (cups)':
caloriesConsumed += quantity * 176;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 5.9;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.3;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 12.6;
calciumLeft -= calciumConsumed;
ironConsumed = 0.6 * quantity;
ironLeft -= ironConsumed;
vitamin_kConsumed = 0.2 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'tortillas':
caloriesConsumed += quantity * 144;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 3.8;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 3.6;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 59.3;
calciumLeft -= calciumConsumed;
ironConsumed = 1.5 * quantity;
ironLeft -= ironConsumed;
vitamin_kConsumed = 1.6 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'white bread':
caloriesConsumed += quantity * 66.5;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 1.9;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.8;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 37.8;
calciumLeft -= calciumConsumed;
ironConsumed = 0.9 * quantity;
ironLeft -= ironConsumed;
vitamin_kConsumed = 0.8 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'bagel':
caloriesConsumed += quantity * 146;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 5.7;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.9;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 50.7;
calciumLeft -= calciumConsumed;
ironConsumed = 3.4 * quantity;
ironLeft -= ironConsumed;
vitamin_cConsumed = 0.6 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 0.6 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'donut':
caloriesConsumed += quantity * 51.9;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 0.8;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 2.5;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 6;
calciumLeft -= calciumConsumed;
ironConsumed = 0.5 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 3 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 0.2 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 1.5 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'granola (cups)':
caloriesConsumed += quantity * 118;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 2.5;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 4.9;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 15.2;
calciumLeft -= calciumConsumed;
ironConsumed = 0.7 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 37.8 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 0.2 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
break;

case 'pancake':
caloriesConsumed += quantity * 224;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 3.6;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 6;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 55;
calciumLeft -= calciumConsumed;
ironConsumed = 1.1 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 121 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 1.5 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_bConsumed = 0.1 * quantity;
vitamin_bLeft -= vitamin_bConsumed;
break;

case 'pita bread':
caloriesConsumed += quantity * 170;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 6.3;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 1.7;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 9.6;
calciumLeft -= calciumConsumed;
ironConsumed = 2 * quantity;
ironLeft -= ironConsumed;
vitamin_kConsumed = 0.9 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'mini-wheats':
caloriesConsumed += quantity * 35;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 0.9;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.2;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 3.4;
calciumLeft -= calciumConsumed;
ironConsumed = 3.3 * quantity;
ironLeft -= ironConsumed;
vitamin_kConsumed = 0.2 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
vitamin_bConsumed = 0.3 * quantity;
vitamin_bLeft -= vitamin_bConsumed;
break;

case 'muffin':
caloriesConsumed += quantity * 444;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 6;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 21.7;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 39.5;
calciumLeft -= calciumConsumed;
ironConsumed = 2.3 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 28.2 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 1 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 44.3 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
vitamin_bConsumed = 0.1 * quantity;
vitamin_bLeft -= vitamin_bConsumed;
break;

case 'toast':
caloriesConsumed += quantity * 75.1;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 3.1;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 1;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 39.6;
calciumLeft -= calciumConsumed;
ironConsumed = 1 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 18441 * quantity;
vitamin_kConsumed = 1.4 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'waffles':
caloriesConsumed += quantity * 218;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 5.9;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 10.6;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 191;
calciumLeft -= calciumConsumed;
ironConsumed = 1.7 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 171 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 0.3 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_bConsumed = 0.2 * quantity;
vitamin_bLeft -= vitamin_bConsumed;
break;


case 'pudding (ounces)':
caloriesConsumed += quantity * 98.3;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 0.4;
proteinLeft -= proteinConsumed;
calciumConsumed = quantity * 13.7;
calciumLeft -= calciumConsumed;
vitamin_kConsumed = 0.3 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'cashews (ounces)':
caloriesConsumed += quantity * 155;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 5.1;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 12.3;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 10.4;
calciumLeft -= calciumConsumed;
ironConsumed = 1.9 * quantity;
ironLeft -= ironConsumed;
vitamin_cConsumed = 0.1 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 9.5 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'almonds (cups)':
caloriesConsumed += quantity * 822;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 30.3;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 70.7;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 378;
calciumLeft -= calciumConsumed;
ironConsumed = 5.3 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 1.4 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
break;

case 'brazil nuts (cups)':
caloriesConsumed += quantity * 872;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 19;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 88;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 213;
calciumLeft -= calciumConsumed;
ironConsumed = 3.2 * quantity;
ironLeft -= ironConsumed;
vitamin_cConsumed = 0.9 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
break;

case 'chestnuts (ounces)':
caloriesConsumed += quantity * 62.7;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 1.2;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 0.3;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 5;
calciumLeft -= calciumConsumed;
ironConsumed = 0.4 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 56.6 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 10.1 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
break;

case 'hazelnuts (cups)':
caloriesConsumed += quantity * 848;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 20.2;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 82;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 154;
calciumLeft -= calciumConsumed;
ironConsumed = 6.3 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 27 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 8.5 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 19.2 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'macadamia nuts (cups)':
caloriesConsumed += quantity * 962;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 10.6;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 102;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 114;
calciumLeft -= calciumConsumed;
ironConsumed = 4.9 * quantity;
ironLeft -= ironConsumed;
vitamin_cConsumed = 1.6 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
break;

case 'pistachios (cups)':
caloriesConsumed += quantity * 685;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 25.3;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 54.7;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 132;
calciumLeft -= calciumConsumed;
ironConsumed = 5.1 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 680 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 6.2 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
break;

case 'walnuts (cups)':
caloriesConsumed += quantity * 765;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 17.8;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 76.3;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 115;
calciumLeft -= calciumConsumed;
ironConsumed = 3.4 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 23.4 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 1.5 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 3.2 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'sesame seeds (cups)':
caloriesConsumed += quantity * 825;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 25.5;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 71.5;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 1404;
calciumLeft -= calciumConsumed;
ironConsumed = 20.9 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 13 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
break;

case 'pumpkin seeds (cups)':
caloriesConsumed += quantity * 747;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 33.9;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 63.3;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 59.3;
calciumLeft -= calciumConsumed;
ironConsumed = 20.7 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 524 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 2.6 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 70.9 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'almond butter (cups)':
caloriesConsumed += quantity * 1582;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 37.7;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 148;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 675;
calciumLeft -= calciumConsumed;
ironConsumed = 9.3 * quantity;
ironLeft -= ironConsumed;
vitamin_cConsumed = 1.8 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
break;

case 'olive oil (cups)':
caloriesConsumed += quantity * 1910;
caloriesLeft -= caloriesConsumed;
fatConsumed = quantity * 216;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 2.2;
calciumLeft -= calciumConsumed;
ironConsumed = 1.2 * quantity;
ironLeft -= ironConsumed;
vitamin_kConsumed = 130 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'peanut butter (cups)':
caloriesConsumed += quantity * 1517;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 64.7;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 130;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 111;
calciumLeft -= calciumConsumed;
ironConsumed = 4.8 * quantity;
ironLeft -= ironConsumed;
vitamin_kConsumed = 1.5 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'olives (ounces)':
caloriesConsumed += quantity * 40.6;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 0.3;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 4.3;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 14.6;
calciumLeft -= calciumConsumed;
ironConsumed = 0.1 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 110 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_kConsumed = 0.4 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'almond milk (cups)':
caloriesConsumed += quantity * 40;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 1;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 3;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 450;
calciumLeft -= calciumConsumed;
ironConsumed = 1 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 90 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
break;

case 'soy milk (cups)':
caloriesConsumed += quantity * 108;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 5.2;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 3.2;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 280;
calciumLeft -= calciumConsumed;
ironConsumed = 0.7 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 400 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
break;

case 'coconut milk (cups)':
caloriesConsumed += quantity * 552;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 5.5;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 57.2;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 38.4;
calciumLeft -= calciumConsumed;
ironConsumed = 3.9 * quantity;
ironLeft -= ironConsumed;
vitamin_cConsumed = 6.7 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 0.2 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'rice milk (cups)':
caloriesConsumed += quantity * 248.8;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 7.2;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 4;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 235.2;
calciumLeft -= calciumConsumed;
ironConsumed = 0.8 * quantity;
ironLeft -= ironConsumed;
vitamin_aConsumed = 385.6 * quantity;
vitamin_aLeft -= vitamin_aConsumed;
vitamin_cConsumed = 1.6 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_bConsumed = 0.8 * quantity;
vitamin_bLeft -= vitamin_bConsumed;
vitamin_dConsumed = 76 * quantity;
vitamin_dLeft -= vitamin_dConsumed;
break;

case 'soy yogurt (cups)':
caloriesConsumed += quantity * 196.8;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 6.4;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 4;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 394.4;
calciumLeft -= calciumConsumed;
ironConsumed = 1.6 * quantity;
ironLeft -= ironConsumed;
vitamin_cConsumed = 39.2 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
break;

case 'tempeh (cups)':
caloriesConsumed += quantity * 320;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 30.8;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 17.9;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 184;
calciumLeft -= calciumConsumed;
ironConsumed = 4.5 * quantity;
ironLeft -= ironConsumed;
vitamin_bConsumed = 0.1 * quantity;
vitamin_bLeft -= vitamin_bConsumed;
break;

case 'tofu (cups)':
caloriesConsumed += quantity * 176.4;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 20.6;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 10.6;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 506;
calciumLeft -= calciumConsumed;
ironConsumed = 4 * quantity;
ironLeft -= ironConsumed;
vitamin_cConsumed = 0.6 * quantity;
vitamin_cLeft -= vitamin_cConsumed;
vitamin_kConsumed = 6 * quantity;
vitamin_kLeft -= vitamin_kConsumed;
break;

case 'seitan (cups)':
caloriesConsumed += quantity * 370;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 75;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 1.9;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 142;
calciumLeft -= calciumConsumed;
ironConsumed = 5.2 * quantity;
ironLeft -= ironConsumed;
break;

case 'textured vegetable protein (cups)':
caloriesConsumed += quantity * 588;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 52.9;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 11.8;
fatLeft -= fatConsumed;
calciumConsumed = quantity * 80;
calciumLeft -= calciumConsumed;
ironConsumed = 6.6 * quantity;
ironLeft -= ironConsumed;
break;

case 'soy ice cream (cups)':
caloriesConsumed += quantity * 360;
caloriesLeft -= caloriesConsumed;
proteinConsumed = quantity * 4;
proteinLeft -= proteinConsumed;
fatConsumed = quantity * 16;
fatLeft -= fatConsumed;
break;


}

  var caloriesAddOn = Number(document.getElementById('caloriesAddOn').value);
  caloriesAddOn += Number(caloriesConsumed);
  document.getElementById('caloriesAddOn').value = caloriesAddOn;
  caloriesConsumed = caloriesAddOn;

  var proteinAddOn = Number(document.getElementById('proteinAddOn').value);
  proteinAddOn += Number(proteinConsumed);
  document.getElementById('proteinAddOn').value = proteinAddOn;
  proteinConsumed = proteinAddOn;

  var fatAddOn = Number(document.getElementById('fatAddOn').value);
  fatAddOn += Number(fatConsumed);
  document.getElementById('fatAddOn').value = fatAddOn;
  fatConsumed = fatAddOn;

  var calciumAddOn = Number(document.getElementById('calciumAddOn').value);
  calciumAddOn += Number(calciumConsumed);
  document.getElementById('calciumAddOn').value = calciumAddOn;
  calciumConsumed = calciumAddOn;

  var ironAddOn = Number(document.getElementById('ironAddOn').value);
  ironAddOn += Number(ironConsumed);
  document.getElementById('ironAddOn').value = ironAddOn;
  ironConsumed = ironAddOn;

  var vitamin_aAddOn = Number(document.getElementById('vitamin_aAddOn').value);
  vitamin_aAddOn += Number(vitamin_aConsumed);
  document.getElementById('vitamin_aAddOn').value = vitamin_aAddOn;
  vitamin_aConsumed = vitamin_aAddOn;

  var vitamin_bAddOn = Number(document.getElementById('vitamin_bAddOn').value);
  vitamin_bAddOn += Number(vitamin_bConsumed);
  document.getElementById('vitamin_bAddOn').value = vitamin_bAddOn;
  vitamin_bConsumed = vitamin_bAddOn;

  var vitamin_cAddOn = Number(document.getElementById('vitamin_cAddOn').value);
  vitamin_cAddOn += Number(vitamin_cConsumed);
  document.getElementById('vitamin_cAddOn').value = vitamin_cAddOn;
  vitamin_cConsumed = vitamin_cAddOn;

  var vitamin_dAddOn = Number(document.getElementById('vitamin_dAddOn').value);
  vitamin_dAddOn += Number(vitamin_dConsumed);
  document.getElementById('vitamin_dAddOn').value = vitamin_dAddOn;
  vitamin_dConsumed = vitamin_dAddOn;

  var vitamin_kAddOn = Number(document.getElementById('vitamin_kAddOn').value);
  vitamin_kAddOn += Number(vitamin_kConsumed);
  document.getElementById('vitamin_kAddOn').value = vitamin_kAddOn;
  vitamin_kConsumed = vitamin_kAddOn;
  //alert(caloriesConsumed);


  if (count == 1) {
    document.getElementById('caloriesFirstEntry').value=caloriesAddOn;
    document.getElementById('proteinFirstEntry').value=proteinAddOn;
    document.getElementById('fatFirstEntry').value=fatAddOn;
    document.getElementById('calciumFirstEntry').value=calciumAddOn;
    document.getElementById('ironFirstEntry').value=ironAddOn;
    document.getElementById('vitamin_aFirstEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bFirstEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cFirstEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dFirstEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kFirstEntry').value=vitamin_kAddOn;
    document.getElementById('foodOne').innerHTML = 'Food Entry #1: ' + quantity + ' ' + translate;
    //alert(document.getElementById('caloriesFirstEntry').value);
  }
  else if (count == 2) {
    document.getElementById('caloriesSecondEntry').value=caloriesAddOn;
    document.getElementById('proteinSecondEntry').value=proteinAddOn;
    document.getElementById('fatSecondEntry').value=fatAddOn;
    document.getElementById('calciumSecondEntry').value=calciumAddOn;
    document.getElementById('ironSecondEntry').value=ironAddOn;
    document.getElementById('vitamin_aSecondEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bSecondEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cSecondEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dSecondEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kSecondEntry').value=vitamin_kAddOn;
    document.getElementById('foodTwo').innerHTML = 'Food Entry #2: ' + quantity + ' ' + translate;
  }
  if (count == 3) {
    document.getElementById('caloriesThirdEntry').value=caloriesAddOn;
    document.getElementById('proteinThirdEntry').value=proteinAddOn;
    document.getElementById('fatThirdEntry').value=fatAddOn;
    document.getElementById('calciumThirdEntry').value=calciumAddOn;
    document.getElementById('ironThirdEntry').value=ironAddOn;
    document.getElementById('vitamin_aThirdEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bThirdEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cThirdEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dThirdEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kThirdEntry').value=vitamin_kAddOn;
    document.getElementById('foodThree').innerHTML = 'Food Entry #3: ' + quantity + ' ' + translate;

  }

  if (count == 4) {
    document.getElementById('caloriesFourthEntry').value=caloriesAddOn;
    document.getElementById('proteinFourthEntry').value=proteinAddOn;
    document.getElementById('fatFourthEntry').value=fatAddOn;
    document.getElementById('calciumFourthEntry').value=calciumAddOn;
    document.getElementById('ironFourthEntry').value=ironAddOn;
    document.getElementById('vitamin_aFourthEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bFourthEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cFourthEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dFourthEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kFourthEntry').value=vitamin_kAddOn;
    document.getElementById('foodFour').innerHTML = 'Food Entry #4: ' + quantity + ' ' + translate;
  }

  if (count == 5) {
    document.getElementById('caloriesFifthEntry').value=caloriesAddOn;
    document.getElementById('proteinFifthEntry').value=proteinAddOn;
    document.getElementById('fatFifthEntry').value=fatAddOn;
    document.getElementById('calciumFifthEntry').value=calciumAddOn;
    document.getElementById('ironFifthEntry').value=ironAddOn;
    document.getElementById('vitamin_aFifthEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bFifthEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cFifthEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dFifthEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kFifthEntry').value=vitamin_kAddOn;
    document.getElementById('foodFive').innerHTML = 'Food Entry #5: ' + quantity + ' ' + translate;
  }

  if (count == 6) {
    document.getElementById('caloriesSixthEntry').value=caloriesAddOn;
    document.getElementById('proteinSixthEntry').value=proteinAddOn;
    document.getElementById('fatSixthEntry').value=fatAddOn;
    document.getElementById('calciumSixthEntry').value=calciumAddOn;
    document.getElementById('ironSixthEntry').value=ironAddOn;
    document.getElementById('vitamin_aSixthEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bSixthEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cSixthEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dSixthEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kSixthEntry').value=vitamin_kAddOn;
    document.getElementById('foodSix').innerHTML = 'Food Entry #6: ' + quantity + ' ' + translate;
  }

  if (count == 7) {
    document.getElementById('caloriesSeventhEntry').value=caloriesAddOn;
    document.getElementById('proteinSeventhEntry').value=proteinAddOn;
    document.getElementById('fatSeventhEntry').value=fatAddOn;
    document.getElementById('calciumSeventhEntry').value=calciumAddOn;
    document.getElementById('ironSeventhEntry').value=ironAddOn;
    document.getElementById('vitamin_aSeventhEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bSeventhEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cSeventhEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dSeventhEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kSeventhEntry').value=vitamin_kAddOn;
    document.getElementById('foodSeven').innerHTML = 'Food Entry #7: ' + quantity + ' ' + translate;
  }

  if (count == 8) {
    document.getElementById('caloriesEighthEntry').value=caloriesAddOn;
    document.getElementById('proteinEighthEntry').value=proteinAddOn;
    document.getElementById('fatEighthEntry').value=fatAddOn;
    document.getElementById('calciumEighthEntry').value=calciumAddOn;
    document.getElementById('ironEighthEntry').value=ironAddOn;
    document.getElementById('vitamin_aEighthEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bEighthEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cEighthEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dEighthEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kEighthEntry').value=vitamin_kAddOn;
    document.getElementById('foodEight').innerHTML = 'Food Entry #8: ' + quantity + ' ' + translate;
  }

  if (count == 9) {
    document.getElementById('caloriesNinthEntry').value=caloriesAddOn;
    document.getElementById('proteinNinthEntry').value=proteinAddOn;
    document.getElementById('fatNinthEntry').value=fatAddOn;
    document.getElementById('calciumNinthEntry').value=calciumAddOn;
    document.getElementById('ironNinthEntry').value=ironAddOn;
    document.getElementById('vitamin_aNinthEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bNinthEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cNinthEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dNinthEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kNinthEntry').value=vitamin_kAddOn;
    document.getElementById('foodNine').innerHTML = 'Food Entry #9: ' + quantity + ' ' + translate;
  }

  if (count == 10) {
    document.getElementById('caloriesTenthEntry').value=caloriesAddOn;
    document.getElementById('proteinTenthEntry').value=proteinAddOn;
    document.getElementById('fatTenthEntry').value=fatAddOn;
    document.getElementById('calciumTenthEntry').value=calciumAddOn;
    document.getElementById('ironTenthEntry').value=ironAddOn;
    document.getElementById('vitamin_aTenthEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bTenthEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cTenthEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dTenthEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kTenthEntry').value=vitamin_kAddOn;
    document.getElementById('foodTen').innerHTML = 'Food Entry #10: ' + quantity + ' ' + translate;
  }

    fatConsumed = Math.round(fatConsumed * 100)/100;  //http://jsfiddle.net/mmansion/8Lyab/
    ironConsumed = Math.round(ironConsumed * 100)/100;
    vitamin_cConsumed = Math.round(vitamin_cConsumed * 100)/100;
  if (Number(document.getElementById('calories').value) != 0) {
  document.getElementById('caloriesGoal').innerHTML = 'Calories Goal: ' + caloriesConsumed + '/' + originalCaloriesLeft + ' calories consumed. Goal is ' + Math.round((caloriesConsumed/originalCaloriesLeft) * 100) + "% complete.";
  if (caloriesConsumed > originalCaloriesLeft) {
    document.getElementById('caloriesGoal').style.color = 'lightgreen';
  }
  else {
    document.getElementById('caloriesGoal').style.color = 'pink';
  }



    document.getElementById('proteinGoal').innerHTML = 'Protein Goal: ' + proteinConsumed + '/' + originalProteinLeft + ' grams consumed. Goal is ' + Math.round((proteinConsumed/originalProteinLeft) * 100) + "% complete.";
    if (proteinConsumed > originalProteinLeft) {
      document.getElementById('proteinGoal').style.color = 'lightgreen';
    }
    else {
      document.getElementById('proteinGoal').style.color = 'pink';
    }

    document.getElementById('fatGoal').innerHTML = 'Fat Goal: ' + fatConsumed + '/' + originalFatLeft + ' grams consumed. Goal is ' + Math.round((fatConsumed/originalFatLeft) * 100) + "% complete.";
    if (fatConsumed > originalFatLeft) {
      document.getElementById('fatGoal').style.color = 'lightgreen';
    }
    else {
      document.getElementById('fatGoal').style.color = 'pink';
    }

    document.getElementById('calciumGoal').innerHTML = 'Calcium Goal: ' + calciumConsumed + '/' + originalCalciumLeft + ' mg consumed.  Goal is ' + Math.round((calciumConsumed/originalCalciumLeft) * 100) + "% complete.";
    if (calciumConsumed > originalCalciumLeft) {
      document.getElementById('calciumGoal').style.color = 'lightgreen';
    }
    else {
      document.getElementById('calciumGoal').style.color = 'pink';
    }

    document.getElementById('ironGoal').innerHTML = 'Iron Goal: ' + ironConsumed + '/' + originalIronLeft + ' mg consumed. Goal is ' + Math.round((ironConsumed/originalIronLeft) * 100) + "% complete.";
    if (ironConsumed > originalIronLeft) {
      document.getElementById('ironGoal').style.color = 'lightgreen';
    }
    else {
      document.getElementById('ironGoal').style.color = 'pink';
    }

    document.getElementById('vitamina_goal').innerHTML = 'Vitamin A Goal: ' + vitamin_aConsumed + '/' + originalVitamin_aLeft + ' IU consumed. Goal is ' + Math.round((vitamin_aConsumed/originalVitamin_aLeft) * 100) + "% complete.";
    if (vitamin_aConsumed > originalVitamin_aLeft) {
      document.getElementById('vitamina_goal').style.color = 'lightgreen';
    }
    else {
      document.getElementById('vitamina_goal').style.color = 'pink';
    }

    document.getElementById('vitaminb_goal').innerHTML = 'Vitamin B Goal: ' + vitamin_bConsumed + '/' + originalVitamin_bLeft + ' micrograms consumed. Goal is ' + Math.round((vitamin_bConsumed/originalVitamin_bLeft) * 100) + "% complete.";
    if (vitamin_bConsumed > originalVitamin_bLeft) {
      document.getElementById('vitaminb_goal').style.color = 'lightgreen';
    }
    else {
      document.getElementById('vitaminb_goal').style.color = 'pink';
    }

    document.getElementById('vitaminc_goal').innerHTML = 'Vitamin C Goal: ' + vitamin_cConsumed + '/' + originalVitamin_cLeft + ' mg consumed. Goal is ' + Math.round((vitamin_cConsumed/originalVitamin_cLeft) * 100) + "% complete.";
    if (vitamin_cConsumed > originalVitamin_cLeft) {
      document.getElementById('vitaminc_goal').style.color = 'lightgreen';
    }
    else {
      document.getElementById('vitaminc_goal').style.color = 'pink';
    }

    document.getElementById('vitamind_goal').innerHTML = 'Vitamin D Goal: ' + vitamin_dConsumed + '/' + originalVitamin_dLeft + ' IU consumed. Goal is ' + Math.round((vitamin_dConsumed/originalVitamin_dLeft) * 100) + "% complete.";
    if (vitamin_dConsumed > originalVitamin_dLeft) {
      document.getElementById('vitamind_goal').style.color = 'lightgreen';
    }
    else {
      document.getElementById('vitamind_goal').style.color = 'pink';
    }

    document.getElementById('vitamink_goal').innerHTML = 'Vitamin K Goal: ' + vitamin_kConsumed + '/' + originalVitamin_kLeft + ' micrograms consumed. Goal is ' + Math.round((vitamin_kConsumed/originalVitamin_kLeft) * 100) + "% complete.";
    if (vitamin_kConsumed > originalVitamin_kLeft) {
      document.getElementById('vitamink_goal').style.color = 'lightgreen';
    }
    else {
      document.getElementById('vitamink_goal').style.color = 'pink';
    }
}


else {
  alert('Please fill out the questionnaire above to view your nutrition goals.')
}





  //alert(caloriesLeft);
  /*document.getElementById('output').innerHTML = "You select the "
      + translate + " option";
*/
/*if ([1,2,3].includes(3)) {
  alert(5);
}
*/
//alert(count);
}
}

function enterOtherFoods () {
  count++;
  var translate = document.getElementById('foodsInput').value;
  document.getElementById('clickCount').value = count;
  document.getElementById('extra1').style.visibility = 'hidden';
  document.getElementById('calories1').style.visibility = 'hidden';
  document.getElementById('calories2').style.visibility = 'hidden';
  document.getElementById('protein1').style.visibility = 'hidden';
  document.getElementById('protein2').style.visibility = 'hidden';
  document.getElementById('calcium1').style.visibility = 'hidden';
  document.getElementById('calcium2').style.visibility = 'hidden';
  document.getElementById('fat1').style.visibility = 'hidden';
  document.getElementById('fat2').style.visibility = 'hidden';
  document.getElementById('iron1').style.visibility = 'hidden';
  document.getElementById('iron2').style.visibility = 'hidden';
  document.getElementById('vitamin_a1').style.visibility = 'hidden';
  document.getElementById('vitamin_a2').style.visibility = 'hidden';
  document.getElementById('vitamin_b1').style.visibility = 'hidden';
  document.getElementById('vitamin_b2').style.visibility = 'hidden';
  document.getElementById('vitamin_c1').style.visibility = 'hidden';
  document.getElementById('vitamin_c2').style.visibility = 'hidden';
  document.getElementById('vitamin_d1').style.visibility = 'hidden';
  document.getElementById('vitamin_d2').style.visibility = 'hidden';
  document.getElementById('vitamin_k1').style.visibility = 'hidden';
  document.getElementById('vitamin_k2').style.visibility = 'hidden';
  document.getElementById('otherFoods').style.visibility = 'hidden';
  document.getElementById('existingFoods').style.visibility = 'visible';



  var quantity = document.getElementById('quantity').value;

  var caloriesConsumed = document.getElementById('calories2').value * quantity;
  //alert(caloriesConsumed);
  var caloriesLeft = document.getElementById('calories').value;
  var caloriesAddOn = Number(document.getElementById('caloriesAddOn').value);
  caloriesAddOn += Number(caloriesConsumed);
  document.getElementById('caloriesAddOn').value = caloriesAddOn;
  caloriesConsumed = caloriesAddOn;
  var originalCaloriesLeft = caloriesLeft;
  document.getElementById('caloriesGoal').innerHTML = 'Calories Goal: ' + caloriesConsumed + '/' + originalCaloriesLeft + ' calories consumed.';
  if (caloriesConsumed > originalCaloriesLeft) {
    document.getElementById('caloriesGoal').style.color = 'green';
  }
  else {
    document.getElementById('caloriesGoal').style.color = 'red';
  }
  caloriesLeft -= caloriesConsumed;
  //alert(caloriesLeft);



  var proteinConsumed = document.getElementById('protein2').value;
  var proteinAddOn = Number(document.getElementById('proteinAddOn').value);
  proteinAddOn += Number(proteinConsumed);
  document.getElementById('proteinAddOn').value = proteinAddOn;
  proteinConsumed = proteinAddOn;
  var proteinLeft = document.getElementById('protein').value;
  proteinLeft -= proteinConsumed;
  //alert(proteinLeft);

  var fatConsumed = document.getElementById('fat2').value;
  var fatAddOn = Number(document.getElementById('fatAddOn').value);
  fatAddOn += Number(fatConsumed);
  document.getElementById('fatAddOn').value = fatAddOn;
  fatConsumed = fatAddOn;

  var fatLeft = document.getElementById('fat').value;
  fatLeft -= fatConsumed;
  //alert(fatLeft);

  var calciumConsumed = document.getElementById('calcium2').value;
  var calciumAddOn = Number(document.getElementById('calciumAddOn').value);
  calciumAddOn += Number(calciumConsumed);
  document.getElementById('calciumAddOn').value = calciumAddOn;
  calciumConsumed = calciumAddOn;
  var calciumLeft = document.getElementById('calcium').value;
  calciumLeft -= calciumConsumed;
  //alert(calciumLeft);

  var ironConsumed = document.getElementById('iron2').value;
  var ironAddOn = Number(document.getElementById('ironAddOn').value);
  ironAddOn += Number(ironConsumed);
  document.getElementById('ironAddOn').value = ironAddOn;
  ironConsumed = ironAddOn;

  var ironLeft = document.getElementById('iron').value;
  ironLeft -= ironConsumed;
  //alert(ironLeft);

  var vitamin_aConsumed = document.getElementById('vitamin_a2').value;
  var vitamin_aAddOn = Number(document.getElementById('vitamin_aAddOn').value);
  vitamin_aAddOn += Number(vitamin_aConsumed);
  document.getElementById('vitamin_aAddOn').value = vitamin_aAddOn;
  vitamin_aConsumed = vitamin_aAddOn;
  var vitamin_aLeft = document.getElementById('vitamin_a').value;
  vitamin_aLeft -= vitamin_aConsumed;
  //alert(vitamin_aLeft);

  var vitamin_bConsumed = document.getElementById('vitamin_b2').value;
  var vitamin_bAddOn = Number(document.getElementById('vitamin_bAddOn').value);
  vitamin_bAddOn += Number(vitamin_bConsumed);
  document.getElementById('vitamin_bAddOn').value = vitamin_bAddOn;
  vitamin_bConsumed = vitamin_bAddOn;
  var vitamin_bLeft = document.getElementById('vitamin_b12').value;
  vitamin_bLeft -= vitamin_bConsumed;
  //alert(vitamin_bLeft);

  var vitamin_cConsumed = document.getElementById('vitamin_c2').value;
  var vitamin_cAddOn = Number(document.getElementById('vitamin_cAddOn').value);
  vitamin_cAddOn += Number(vitamin_cConsumed);
  document.getElementById('vitamin_cAddOn').value = vitamin_cAddOn;
  vitamin_cConsumed = vitamin_cAddOn;
  var vitamin_cLeft = document.getElementById('vitamin_c').value;
  vitamin_cLeft -= vitamin_cConsumed;
  //alert(vitamin_cLeft);

  var vitamin_dConsumed = document.getElementById('vitamin_d2').value;
  var vitamin_dAddOn = Number(document.getElementById('vitamin_dAddOn').value);
  vitamin_dAddOn += Number(vitamin_dConsumed);
  document.getElementById('vitamin_dAddOn').value = vitamin_dAddOn;
  vitamin_dConsumed = vitamin_dAddOn;
  var vitamin_dLeft = document.getElementById('vitamin_d').value;
  vitamin_dLeft -= vitamin_dConsumed;
  //alert(vitamin_dLeft);

  var vitamin_kConsumed = document.getElementById('vitamin_k2').value;
  var vitamin_kAddOn = Number(document.getElementById('vitamin_kAddOn').value);
  vitamin_kAddOn += Number(vitamin_kConsumed);
  document.getElementById('vitamin_kAddOn').value = vitamin_kAddOn;
  vitamin_kConsumed = vitamin_kAddOn;
  var vitamin_kLeft = document.getElementById('vitamin_k').value;
  vitamin_kLeft -= vitamin_kConsumed;
  //alert(vitamin_kLeft);

  if (count == 1) {
    document.getElementById('caloriesFirstEntry').value=caloriesAddOn;
    document.getElementById('proteinFirstEntry').value=proteinAddOn;
    document.getElementById('fatFirstEntry').value=fatAddOn;
    document.getElementById('calciumFirstEntry').value=calciumAddOn;
    document.getElementById('ironFirstEntry').value=ironAddOn;
    document.getElementById('vitamin_aFirstEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bFirstEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cFirstEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dFirstEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kFirstEntry').value=vitamin_kAddOn;
    document.getElementById('foodOne').innerHTML = 'Food Entry #1: ' + quantity + ' ' + translate;
    //alert(document.getElementById('caloriesFirstEntry').value);
  }
  else if (count == 2) {
    document.getElementById('caloriesSecondEntry').value=caloriesAddOn;
    document.getElementById('proteinSecondEntry').value=proteinAddOn;
    document.getElementById('fatSecondEntry').value=fatAddOn;
    document.getElementById('calciumSecondEntry').value=calciumAddOn;
    document.getElementById('ironSecondEntry').value=ironAddOn;
    document.getElementById('vitamin_aSecondEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bSecondEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cSecondEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dSecondEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kSecondEntry').value=vitamin_kAddOn;
    document.getElementById('foodTwo').innerHTML = 'Food Entry #2: ' + quantity + ' ' + translate;
  }
  if (count == 3) {
    document.getElementById('caloriesThirdEntry').value=caloriesAddOn;
    document.getElementById('proteinThirdEntry').value=proteinAddOn;
    document.getElementById('fatThirdEntry').value=fatAddOn;
    document.getElementById('calciumThirdEntry').value=calciumAddOn;
    document.getElementById('ironThirdEntry').value=ironAddOn;
    document.getElementById('vitamin_aThirdEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bThirdEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cThirdEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dThirdEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kThirdEntry').value=vitamin_kAddOn;
    document.getElementById('foodThree').innerHTML = 'Food Entry #3: ' + quantity + ' ' + translate;
  }

  if (count == 4) {
    document.getElementById('caloriesFourthEntry').value=caloriesAddOn;
    document.getElementById('proteinFourthEntry').value=proteinAddOn;
    document.getElementById('fatFourthEntry').value=fatAddOn;
    document.getElementById('calciumFourthEntry').value=calciumAddOn;
    document.getElementById('ironFourthEntry').value=ironAddOn;
    document.getElementById('vitamin_aFourthEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bFourthEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cFourthEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dFourthEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kFourthEntry').value=vitamin_kAddOn;
    document.getElementById('foodFour').innerHTML = 'Food Entry #4: ' + quantity + ' ' + translate;
  }

  if (count == 5) {
    document.getElementById('caloriesFifthEntry').value=caloriesAddOn;
    document.getElementById('proteinFifthEntry').value=proteinAddOn;
    document.getElementById('fatFifthEntry').value=fatAddOn;
    document.getElementById('calciumFifthEntry').value=calciumAddOn;
    document.getElementById('ironFifthEntry').value=ironAddOn;
    document.getElementById('vitamin_aFifthEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bFifthEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cFifthEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dFifthEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kFifthEntry').value=vitamin_kAddOn;
    document.getElementById('foodFive').innerHTML = 'Food Entry #5: ' + quantity + ' ' + translate;
  }

  if (count == 6) {
    document.getElementById('caloriesSixthEntry').value=caloriesAddOn;
    document.getElementById('proteinSixthEntry').value=proteinAddOn;
    document.getElementById('fatSixthEntry').value=fatAddOn;
    document.getElementById('calciumSixthEntry').value=calciumAddOn;
    document.getElementById('ironSixthEntry').value=ironAddOn;
    document.getElementById('vitamin_aSixthEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bSixthEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cSixthEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dSixthEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kSixthEntry').value=vitamin_kAddOn;
    document.getElementById('foodSix').innerHTML = 'Food Entry #6: ' + quantity + ' ' + translate;
  }

  if (count == 7) {
    document.getElementById('caloriesSeventhEntry').value=caloriesAddOn;
    document.getElementById('proteinSeventhEntry').value=proteinAddOn;
    document.getElementById('fatSeventhEntry').value=fatAddOn;
    document.getElementById('calciumSeventhEntry').value=calciumAddOn;
    document.getElementById('ironSeventhEntry').value=ironAddOn;
    document.getElementById('vitamin_aSeventhEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bSeventhEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cSeventhEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dSeventhEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kSeventhEntry').value=vitamin_kAddOn;
    document.getElementById('foodSeven').innerHTML = 'Food Entry #7: ' + quantity + ' ' + translate;
  }

  if (count == 8) {
    document.getElementById('caloriesEighthEntry').value=caloriesAddOn;
    document.getElementById('proteinEighthEntry').value=proteinAddOn;
    document.getElementById('fatEighthEntry').value=fatAddOn;
    document.getElementById('calciumEighthEntry').value=calciumAddOn;
    document.getElementById('ironEighthEntry').value=ironAddOn;
    document.getElementById('vitamin_aEighthEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bEighthEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cEighthEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dEighthEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kEighthEntry').value=vitamin_kAddOn;
    document.getElementById('foodEight').innerHTML = 'Food Entry #8: ' + quantity + ' ' + translate;
  }

  if (count == 9) {
    document.getElementById('caloriesNinthEntry').value=caloriesAddOn;
    document.getElementById('proteinNinthEntry').value=proteinAddOn;
    document.getElementById('fatNinthEntry').value=fatAddOn;
    document.getElementById('calciumNinthEntry').value=calciumAddOn;
    document.getElementById('ironNinthEntry').value=ironAddOn;
    document.getElementById('vitamin_aNinthEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bNinthEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cNinthEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dNinthEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kNinthEntry').value=vitamin_kAddOn;
    document.getElementById('foodNine').innerHTML = 'Food Entry #9: ' + quantity + ' ' + translate;
  }

  if (count == 10) {
    document.getElementById('caloriesTenthEntry').value=caloriesAddOn;
    document.getElementById('proteinTenthEntry').value=proteinAddOn;
    document.getElementById('fatTenthEntry').value=fatAddOn;
    document.getElementById('calciumTenthEntry').value=calciumAddOn;
    document.getElementById('ironTenthEntry').value=ironAddOn;
    document.getElementById('vitamin_aTenthEntry').value=vitamin_aAddOn;
    document.getElementById('vitamin_bTenthEntry').value=vitamin_bAddOn;
    document.getElementById('vitamin_cTenthEntry').value=vitamin_cAddOn;
    document.getElementById('vitamin_dTenthEntry').value=vitamin_dAddOn;
    document.getElementById('vitamin_kTenthEntry').value=vitamin_kAddOn;
    document.getElementById('foodTen').innerHTML = 'Food Entry #10: ' + quantity + ' ' + translate;
  }


  alert('You have successfully entered ' + quantity + " units of '"  + translate + "' as a food that you have eaten today!");




}
