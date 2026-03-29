function calculateIrrigation() {
    let soil = document.getElementById("soil").value;
    let moisture = document.getElementById("moisture").value;
    let temp = document.getElementById("temp").value;

    let result = "";

    if (temp === "") {
        result = "⚠️ Please enter temperature";
    } 
    else if (soil === "Sandy" && moisture === "Low") {
        result = "💧 High irrigation needed (30 mins)";
    } 
    else if (soil === "Sandy" && moisture === "Medium") {
        result = "💧 Moderate irrigation (20 mins)";
    } 
    else if (soil === "Clay" && moisture === "High") {
        result = "✅ No irrigation needed";
    } 
    else if (soil === "Clay" && moisture === "Low") {
        result = "💧 Light irrigation (15 mins)";
    } 
    else if (soil === "Loamy" && moisture === "Low") {
        result = "💧 Moderate irrigation (25 mins)";
    } 
    else {
        result = "🌱 Maintain current conditions";
    }

    // Temperature adjustment
    if (temp > 35) {
        result += " | 🔥 High temperature: Increase water slightly";
    } 
    else if (temp < 15) {
        result += " | ❄️ Low temperature: Reduce watering";
    }

    document.getElementById("result").innerText = result;
}
