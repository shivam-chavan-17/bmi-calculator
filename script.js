function calcBmi() {
    // selected gender
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const weight = parseFloat(document.getElementById("weight-para").value);
    const height = parseFloat(document.getElementById("height-para").value) / 100; // Convert cm to meters
    const bmiResultElement = document.getElementById("bmiResult");

    // Check if the input values are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        bmiResultElement.textContent = "Please enter valid weight and height values."
        return;
    }

    let bmi;
    if (gender === "male") {
        bmi = weight / (height * height);
    } else {
        bmi = 0.765 * (weight / (height * height));
    }

    // Display the result on the web page
    bmiResultElement.textContent = bmi.toFixed(2); // two decimal places
}





