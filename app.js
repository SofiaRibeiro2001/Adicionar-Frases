// (function(){
//     const form = document.querySelector("#message-form");

//     //cria um função que só funcionará no evento
//     form.addEventListener('submit', function(e){ //e -objeto de evento (contém informações sobre o evento que ocorreu)
//         e.preventDefault() //como padrão

//         //criar uma variavel para guadar o que utilizador for escrever
//         const mensagem = document.querySelector('#message');
//         const feedback = document.querySelector('.feedback');
//         const mensagemContent = document.querySelector('.message-content');

//         //se a mensagem que o user escreveu estiver vazia vai aparecer o feedback de aviso
//         if(mensagem.value === ''){
//             feedback.classList.add('show-feedback');
//             setTimeout(function() { // o tempo que vai parecer a mensagem
//                 feedback.classList.remove('show-feedback')
//             }, 4000);
//         } else {
//             mensagemContent.textContent = mensagem.value;
//             mensagem.value = '';
//         }
//     });
// })();

(function(){
    const form = document.getElementById("message-form");

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const mensagem = document.getElementById('message');
        const feedback = document.getElementsByClassName('feedback')[0]; //[0] - corresponde a 1 utilização no codigo html
        const mensagemContent = document.getElementsByClassName('message-content')[0];

        if(mensagem.value === ''){
            feedback.classList.add('show-feedback');
            setTimeout(() => {
                feedback.classList.remove('show-feedback');
            }, 4000);
        } else {
            mensagemContent.textContent = mensagem.value;
            mensagem.value = '';
        }
    });
})(); //() - é usado para imediatamente invocar a função anônima