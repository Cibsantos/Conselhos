let id = Math.floor(Math.random() * 13)
let advicesPromisse = fetch(' http://localhost:3000/data');
let advicePromisse = fetch(` http://localhost:3000/data/${id}`);

function geraAdvice(advice) {
  return `<p>${advice}</p>`
}

function getAdvicesAll() {
  advicesPromisse.then((resp) => {
    resp.json().then((advice) => {
      console.log(advice)
      return advice
    })
  })
}
function getAdviceById() {
  advicePromisse.then(resp => {
    resp.json().then((advice) => {
      console.log(advice.text)
      return creatParagraph(advice.text)
    })
  })
}

getAdviceById()

function teste(){
  console.log('ola')
}




