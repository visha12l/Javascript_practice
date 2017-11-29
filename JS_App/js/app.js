function addName() {
  let userInput = document.getElementById('userInput').value;
  if(!_.isEmpty(userInput)) {
    let parentWrap = document.createElement('li');
    parentWrap.setAttribute('class', 'clearfix list-group-item list-group-item-success');
    let textContent = document.createElement('span');
    textContent.setAttribute('class', 'pull-left studentName')
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'pull-right btn btn-danger')
    deleteButton.textContent = 'Delete'
    textContent.innerHTML = userInput;
    document.getElementById('studentList').appendChild(parentWrap);
    parentWrap.appendChild(textContent);
    parentWrap.appendChild(deleteButton);
    document.getElementById('userInput').value = '';
    deleteButton.addEventListener('click', function (e) {
      e.currentTarget.parentElement.classList.add('hide');
    });
  } else {
    alert('enter student name');
  }
}

function SearchName() {
  let searchTerm = document.getElementById('searchTerm').value;
  let list = document.getElementsByClassName('studentName');
  if(!_.isEmpty(searchTerm)) {
    var searchResult = _.filter(list, (index, key) => {
      return index.innerHTML.indexOf(searchTerm) > -1;
    });
    alert(`${searchResult.length} results found`);
  } else {
    alert('enter search term');
  }
}