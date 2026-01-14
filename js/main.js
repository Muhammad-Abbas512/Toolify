function searchTools() {
  let input = document.getElementById('toolSearch').value.toLowerCase();
  let cards = document.getElementsByClassName('tool-box');

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector('h3').innerText.toLowerCase();
    if (title.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}
