const respostasCertas = [
    {alternativaCerta:4, acertoValue:5, erroValue:-5,},
    {alternativaCerta:0, acertoValue:5, erroValue:-5,}
]

let pontos = 0
let contador = 0


//BUG AO PASSSAR PARA O PRÓXIMO MODAL A ALTERNATIVA SELECIONADA PRECISA SER ZERADA PARA RODAR O FOR NOVAMENTE 
//MAS NÃO ESTÁ ACONTECENDO ISSO, A INFORMAÇÃO FICA GUARDADA PARA OS OUTROS MODAIS

 
//GUARDAR VALOR DA ALTERNATIVA ESCOLHIDA PRA DEPOIS AVALIAR SE TÁ CERTA OU ERRADA
function showAnswer(selecionada){
    let alternativeSelected = document.forms[0];
    
    for(let i=0; i< alternativeSelected.length; i++){
        if(alternativeSelected[i].checked){
            selecionada = i
            console.log('Alternativa '+ i)
            break;
        }
    }
    
    console.log('Questão '+contador)
    
 //AVALIAR SE A ALTERNATIVA ESCOLHIDA ESTÁ CERTA OU ERRADA
    if(respostasCertas[contador].alternativaCerta === selecionada){
        pontos = pontos + respostasCertas[contador].acertoValue
        alert('Resposta Certa')
    } else {
        pontos = pontos + respostasCertas[contador].erroValue
        alert('Resposta Errada')
    }
    console.log('Você ficou com '+pontos+' pontos')
}

document.getElementsByClassName('form-check-input')


//PRECISO DAR UM JEITO DE AO PASSAR PARA O PRÓXIMO MODAL A ALTERNATIVA DEIXE DE SER SELECIONADA
function mudarModal(value){
    if(value){
        contador++
    } else {
        contador-1
    }
    console.log(contador)
}







/*
function showAnswer1(){
    let alternativeSelected = document.forms[0];
    let i;

    for(i=0; i < alternativeSelected.length; i++){
        if(alternativeSelected[4].checked){
            alert('Resposta Certa');
            break;
        } else {
            alert('Resposta Errada');
            break;
        }
    }
}

function showAnswer2(){
    let alternativeSelected = document.forms[0];
    let i;

    for(i=0; i < alternativeSelected.length; i++){
        if(alternativeSelected[1].checked){
            alert('Resposta Certa');
            break;
        } else {
            alert('Resposta Errada');
            break;
        }
    }
}
*/



