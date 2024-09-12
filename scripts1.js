// Gravity Calculator
function calculateGravity() {
    const weightOnEarth = document.getElementById('weightOnEarth').value;
    if (!weightOnEarth) {
        alert('Please enter your weight');
        return;
    }

    const gravityFactors = {
        Mercury: 0.38,
        Venus: 0.91,
        Earth: 1,
        Mars: 0.38,
        Jupiter: 2.34,
        Saturn: 1.06,
        Uranus: 0.92,
        Neptune: 1.19
    };

    let result = 'Your weight on different planets: \n';
    for (const planet in gravityFactors) {
        const planetWeight = (weightOnEarth * gravityFactors[planet]).toFixed(2);
        result += `${planet}: ${planetWeight} kg\n`;
    }

    document.getElementById('gravityResult').textContent = result;
}

// Distance Calculator
function calculateDistance() {
    const distance = document.getElementById('destination').value;
    document.getElementById('distanceResult').textContent = `Distance: ${distance} km`;
}

// Travel Time Estimator
function calculateTravelTime() {
    const speed = document.getElementById('speed').value;
    const distance = document.getElementById('destination').value;
    
    if (!speed) {
        alert('Please enter the speed');
        return;
    }

    const time = (distance / speed).toFixed(2);
    document.getElementById('travelTimeResult').textContent = `Estimated travel time: ${time} hours`;
}
