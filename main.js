
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

function calculateBMR() {
    const gender = document.getElementById("gender").value;
    const age = +document.getElementById("age").value;
    const height = +document.getElementById("height").value;
    const weight = +document.getElementById("weight").value;
    const activity = +document.getElementById("activity").value;
    const goal = +document.getElementById("goal").value;

    let bmr = gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const tdee = bmr * activity;
    const goalCalories = tdee * (1 + goal);

    document.getElementById("result").innerText =
        `Ваш BMR: ${Math.round(bmr)} ккал/день\n` +
        `TDEE: ${Math.round(tdee)} ккал/день\n` +
        `Цільова калорійність: ${Math.round(goalCalories)} ккал/день`;
}
