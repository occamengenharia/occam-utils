function formataCPF(cpf) {
    const elem_alvo = cpf;
    const cpf_atual = cpf.value;
    let cpfAtualizado;

    cpfAtualizado = cpf_atual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/ , '$1.$2.$3-$4');
    elemento_alvo.value = cpfAtualizado;

    const cpf = document.querySelector("cpf");
    cpf.addEventListener("input", function (event) {
      if (cpf.validity.patternMismatch) {
        cpf.setCustomValidity("Deveria ter apenas números aqui =) ");
        btnEnviar.disabled = true;
      } else {
        cpf.setCustomValidity("");
        btnEnviar.disabled = false;
      }
    });
  }