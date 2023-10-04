const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const scomentario = document.querySelector('#m-comentario')
const sprioridade = document.querySelector('#m-prioridade')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}


loadItens()

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.snome}</td>
    <td>${item.scomentario}</td>
    <td>${item.sprioridade}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  
    modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
    }
  }

  if (edit) {
      snome.value = itens[index].nome
      scomentario.value = itens[index].comentario
      sprioridade.value = itens[index].prioridade
      id = index
  } else {
      sNome.value = ''
      scomentario.value = ''
      sprioridade.value = ''
    }
  
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || scomentario.value == '' || sprioridade.value == '') {

      return
  }

  e.preventDefault();

  if (id !== undefined) {
      itens[id].nome = sNome.value
      itens[id].comentario = scomentario.value
      itens[id].prioridade = sprioridade.value
  } else {
      itens.push({'nome': sNome.value, 'comentario': scomentario.value, 'prioridade': sprioridade.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

