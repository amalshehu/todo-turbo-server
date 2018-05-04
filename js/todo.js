//check off specific todo (li)
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed')
})
//click on X to delete
$('ul').on('click', 'span', function(event) {
  $(this)
    .parent()
    .fadeOut(function() {
      $(this).remove()
    })
  event.stopPropagation()
})
//Adding a todo list
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var newTodoText = $(this).val()
    //create new li and add ul
    create(newTodoText)
    $('ul').append(
      "<li><span><i class='fa fa-trash'></i></span> " + newTodoText + '</li>'
    )
    $(this).val('')
  }
})

$('.fa-plus').click(function() {
  $("input[type='text']").fadeToggle()
})

const baseUrl = `http://localhost:5000`

window.onload = function() {
  getTodoList()
}

function getTodoList() {
  fetch(`${baseUrl}/todo/read`)
    .then(res => res.json())
    .then(data => {
      data.forEach(todo => {
        console.log(todo)
        let li = document.createElement('li')
        li.innerHTML = `<span><i class="fa fa-trash"></i></span>${todo.task}`
        document.getElementById('result').appendChild(li)
      })
    })
    .catch(err => console.log(err))
}
function create(taskName) {
  const formData = new FormData()
  formData.append('task', taskName)
  fetch(`${baseUrl}/todo/create`, {
    method: 'POST',
    body: formData
  })
}
