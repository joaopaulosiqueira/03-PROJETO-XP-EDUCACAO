
var fsList = document.querySelectorAll('.multiple-field')
for (var i = 0; i < fsList.length; i++){
    initMultipleFieldSer(fsList[i])
}

function initMultipleFieldSer(fs) {
    var addButton = document.createElement('button')
    addButton.textContent = 'Adicionar'
    addButton.type = 'button'

    fs.appendChild(addButton)

    var firstInput = fs.querySelectorAll('input')

    addButton.addEventListener('click', function() {
        var div = document.createElement('div')
        var newInput = document.createElement('input')
        newInput.name = firstInput.name
        newInput.type = firstInput.type

        var deleteButton = document.createElement('button')
        deleteButton.textContent = 'Excluir'
        deleteButton.type = 'button'

        div.appendChild(newInput)
        div.appendChild(deleteButton)

        deleteButton.addEventListener('click', function(){
            div.remove()
        })

        fs.insertBefore(div, addButton)
    })
}