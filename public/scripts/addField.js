// procurar o botão
document.querySelector('#add-time')
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Selecionar campos e duplicar
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    const fields = newFieldContainer.querySelectorAll('input')
    // Limpar campos
    fields.forEach(function(field) {
        field.value = ""
    })

    //Inserir na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

    
