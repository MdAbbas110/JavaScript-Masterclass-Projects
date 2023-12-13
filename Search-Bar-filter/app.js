document.getElementById('searchInput').addEventListener('keyup', function () {
  let filter = this.value.toUpperCase();
  let ul = document.getElementById('itemList');
  let li = document.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
    let textValue = li[i].textContent;
    console.log(textValue);
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
});
