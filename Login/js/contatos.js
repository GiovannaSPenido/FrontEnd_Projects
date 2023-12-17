const isUserLoggedIn = document.querySelector('#usuario-logado')
const modal = document.querySelector('.modal-container')
const tablebody = document.querySelector('tbody')
const campoNome = document.querySelector('#nome')
const campoIdade = document.querySelector('#idade')
const btnSalvar = document.querySelector('#btnSalvar')
const btnNew = document.querySelector('#btnNew')
const btnLogout = document.querySelector('#btnLogout')

let contatos = []
let id = undefined
let nextID

tablebody.innerHTML = ''

function deleteItem(id) {
    let index = contatos.findIndex(contato => contato.id === id)
    document.getElementById(`tr-${id}`).remove()
    contatos.splice(index, 1)
    setItensBD()
}

function updateItem() {
    let item = ({
        'id': id,
        'nome': campoNome.value,
        'idade': campoIdade.value,
    })

    if (id !== undefined) {
        let index = contatos.findIndex(contato => contato.id === id)
        contatos[index].nome = item.nome
        contatos[index].idade = item.idade
    }

    document.getElementById(`nome-${item.id}`).innerHTML = item.nome
    document.getElementById(`idade-${item.id}`).innerHTML = item.idade

    setItensBD()
}

function createItem() {
    nextID = findNextId()
    let item = ({
        'id': nextID,
        'nome': campoNome.value,
        'idade': campoIdade.value,
    })
    insertHTMLTableRow(item)
    contatos.push(item)
    setItensBD()
}

function editItem(index) {
    openModal(true, index)
}

function modalAddEvents() {
    // para cada clique fora da área do modal ele será fechado
    // quando clica dentro = -1, quando clica fora = 0
    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1)
            modal.classList.remove('active')
    }
    document.onkeydown = e => {
        if (e.key === 'Escape')
            modal.classList.remove('active')
    }
}

function openModal(edit = false, index = 0) {

    modal.classList.add('active')
    modalAddEvents()
    // quando for pra editar os valores dos campos serão carregados
    if (edit) {
        id = index
        campoNome.value = document.getElementById(`nome-${index}`).innerHTML
        campoIdade.value = document.getElementById(`idade-${index}`).innerHTML
    } else {
        campoNome.value = ''
        campoIdade.value = ''
    }
}

function findNextId() {
    if(contatos.length === 0) return 1
    let actualId = 0
    contatos.forEach(contato => {
        if (contato.id > actualId) actualId = contato.id
    })
    return actualId + 1
}

function salvarContato(e) {
    e.preventDefault()

    if (formIsValid()) {
        // Se (id !== undefined) quer dizer que é para editar 
        if (id !== undefined) updateItem()
        else createItem()
        modal.classList.remove('active')
        id = undefined
    }
}

function logout() {
    localStorage.removeItem('user')
    window.location.href = "../index.html"
}

function insertHTMLTableRow(item) {
    let tr = document.createElement('tr')
    tr.setAttribute('id', `tr-${item.id}`)

    tr.innerHTML = `
      <td>${item.id}</td>
      <td id="nome-${item.id}">${item.nome}</td>
      <td id="idade-${item.id}">${item.idade}</td>
      <td class="acao">
        <button onclick="editItem(${item.id})"><i class='bx bx-edit'></i></button>
      </td>
      <td class="acao">
        <button onclick="deleteItem(${item.id})"><i class='bx bx-trash'></i></button>
      </td>
    `
    tablebody.appendChild(tr)
}

function getItensBD() {
    return JSON.parse(localStorage.getItem('db')) ?? []
}

function setItensBD() {
    localStorage.setItem('db', JSON.stringify(contatos))
}

function loadItens() {
    let itens = getItensBD()
    tablebody.innerHTML = ''
    itens.forEach((item) => {
        insertHTMLTableRow(item)
    })
    contatos.push(...itens)
}

function isAutenticated() {
    if (!localStorage.getItem('user')) {
        window.location.href = "../index.html"
    }
}

function init() {
    isAutenticated()
    loadItens()
    nextID = findNextId()
    isUserLoggedIn.innerHTML = `Bem vindo, ${localStorage.getItem('user')}`
}

init()

btnLogout.onclick = e => logout()
btnNew.onclick = e => openModal()
btnSalvar.onclick = e => salvarContato(e)