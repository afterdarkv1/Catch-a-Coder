var names = ["Adrián", "Agustín", "Alberto", "Alejandro"];
var selectedNames = [];

function selectName() {
  if (names.length === 0) {
    document.getElementById("selectedName").textContent = "No more names available.";
    return;
  }

  var randomIndex = Math.floor(Math.random() * names.length);
  var selectedName = names[randomIndex];
  names.splice(randomIndex, 1);
  selectedNames.push(selectedName);
  document.getElementById("selectedName").textContent = selectedName;
}

function resetNames() {
  names = selectedNames.concat(names);
  selectedNames = [];
  document.getElementById("selectedName").textContent = "";
}
