function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const result = document.getElementById('bmi-result');
    const category = document.getElementById('bmi-category');
  
    if (!height || !weight || height <= 0 || weight <= 0) {
      result.textContent = "Please enter valid values!";
      category.textContent = "";
      return;
    }
  
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    result.textContent = `Your BMI is ${bmi}`;
  
    let status = "";
  
    if (bmi < 18.5) status = "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) status = "Normal weight";
    else if (bmi >= 25 && bmi < 29.9) status = "Overweight";
    else status = "Sorry Sir, But You are Obese!";
  
    category.textContent = `Category: ${status}`;
  }
  