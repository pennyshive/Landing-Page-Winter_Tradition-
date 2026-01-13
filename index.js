function displayAnswer(response) {
  let aiContainer = document.querySelector("#ai-container");
  aiContainer.innerHTML = response.data.answer;
}

function submitForm(event) {
  event.preventDefault();

  let formInput = document.querySelector("#form-input");
  let h1Element = document.querySelector("#winter-head");
  let aiContainer = document.querySelector("#ai-container");
  h1Element.innerHTML = `<strong>☃️'${formInput.value}' is an awesome winter tradition!</strong>☃️`;
  aiContainer.innerHTML = `⌛Generating fun jokes about ${formInput.value}☃️`;

  let apiKey = "04be30ebbbe0f71eoaba8f379747a4t7";
  let prompt = `Please display 20 fun jokes with emojis about ${formInput.value} in html format. Do not show any html elements and their symbols. Have a heading stating "😹Let's laugh together😹" with 5px text-shadow in orange. Keep the answers short.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAnswer);
}
let searchForm = document.querySelector("#search-from");
searchForm.addEventListener("submit", submitForm);
