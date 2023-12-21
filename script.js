$(document).ready(function(){
    $('.collapse').on('show.bs.collapse', function () {
      
      $('.collapse.show').not(this).collapse('hide');
    });
  });




$(document).ready(function() {
    // Adiciona a validação ao formulário usando jQuery
    $("#meuFormulario").submit(function(event) {
      // Impede o envio padrão do formulário
      event.preventDefault();

      // Validação personalizada (pode ser ajustada conforme necessário)
      const nome = $("#nome").val();
      const email = $("#email").val();
      const telefone = $("#telefone").val();
      const mensagem = $("#mensagem").val();

      if (nome === "" || email === "" || telefone === "" || mensagem === "") {
        alert("Todos os campos são obrigatórios. Por favor, preencha todos.");
      } else {
        // Se todos os campos estão preenchidos, você pode enviar os dados para o servidor ou executar outra ação desejada.
        alert("Formulário enviado com sucesso!");
        // Aqui você pode adicionar código para enviar os dados para o servidor usando AJAX, por exemplo.
      }
    });
  });