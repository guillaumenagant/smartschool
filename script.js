document.getElementById('fruitForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le rechargement de la page
  
  const name = document.getElementById('name').value;
  const fruit = document.getElementById('fruit').value;
  
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Bonjour ${name} ! Vous aimez le fruit suivant : ${fruit}.`;
  resultDiv.classList.remove('hidden');
});