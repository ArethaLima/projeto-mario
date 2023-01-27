/*   
OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, devemos abrir o modal com o vídeo do trailer.
1º passo - Pegar o elemento que representa o botão "Veja o trailer"na tela usando o js.
2º passo - Identificar quando o usuário clicar no botão.
3º passo - Pegar o elemento modal no js.
4º passo - Abrir o modal na tela.

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal.
1º passo- Pegar o elemento de fechar modal usando o js.
2º passo- Identificar quando o usuário clicar no X. 
3º passo -Fechar o modal. 
*/


const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkVideo = video.src; 

function alternarModal () {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
alternarModal();
video.setAttribute("src",linkVideo);   
});


botaoFecharModal.addEventListener("click", () => {
alternarModal();
video.setAttribute("src", "");
})








