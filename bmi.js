
function calculateBMI(weight, height) {
  if (typeof weight !== 'number' || typeof height !== 'number') {
    throw new Error('Weight and height must be numbers!');
  }
  if (weight <= 0) {
    throw new Error('Weight must be greater than zero!');
  }
  if (height <= 0) {
    throw new Error('Height must be greater than zero!');
  }

  const heightMeters = height / 100;
  const bmiValue = weight / (heightMeters * heightMeters);
  const bmiRounded = Math.round(bmiValue * 100) / 100;

  let category = '';
  if (bmiRounded < 18.5) {
    category = 'Underweight';
  } else if (bmiRounded < 25) {
    category = 'Normal weight';
  } else if (bmiRounded < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  return {
    bmi: bmiRounded,
    category: category
  };
}



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter weight in kg: ', (weightInput) => {
  rl.question('Enter height in cm: ', (heightInput) => {
    
    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);

    try {
      const result = calculateBMI(weight, height);
      console.log(`Your BMI is ${result.bmi}. Category: ${result.category}.`);
    } catch (err) {
      console.error('Error:', err.message);
    }

    rl.close();
  });
});
