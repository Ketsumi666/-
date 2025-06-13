// Получаем элементы формы и результата
const form = document.getElementById('birthForm');
const resultDiv = document.getElementById('result');

// Обработчик отправки формы
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  // Получаем данные из формы
  const date = new Date(form.date.value + 'T' + form.time.value);
  const location = form.location.value;

  // Выводим результаты (временно простые)
  resultDiv.innerHTML = `
    <h2>Ваши данные:</h2>
    <p>Дата рождения: ${date.toLocaleString()}</p>
    <p>Место рождения: ${location}</p>
    <p>Обработка данных...</p>
  `;
});
