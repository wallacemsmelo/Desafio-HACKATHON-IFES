// EVENTOS DO CALENDÁRIO
const evento1 = document.getElementById("diaEvento1");
const evento2 = document.getElementById("diaEvento2");
const evento3 = document.getElementById("diaEvento3");
let respEvento = document.getElementById("respEvento");

evento1.addEventListener("click", exibirEvento1);
evento2.addEventListener("click", exibirEvento2);
evento3.addEventListener("click", exibirEvento3);

function exibirEvento1() {
    respEvento.innerText = `Dia 06: Início das inscrições do programa`;
}

function exibirEvento2() {
    respEvento.innerText = `Dia 16: Fim das inscrições do programa`;
}

function exibirEvento3() {
    respEvento.innerText = `Dia 20: Início do prazo para recursos`;
}

(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()