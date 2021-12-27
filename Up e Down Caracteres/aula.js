
/*========= funcao ========*/
/*function divideNum(x,y){
    if(y != 0)
        return x/y;
    else
        return "Não é possível dividir por 0";    
};

console.log(divideNum(0,2));

/*========= classe ========*/
/*
class pessoa{
    constructor(nome,idade){
        
            this.nome = nome;
    
            this.idade = idade;
    }
}
let pessoa1 = new pessoa("Coders",20);
console.log(pessoa1);
*/

/*========= recebe do html ========*/
/*
function testando(){
    let teste = document.getElementsByName("botao")
    teste.forEach(element => {
        console.log(element.value);
    });
}*/

//document.write("String");

/* ===== telinha de alerta do navegador ===== */
//window.alert("Olá olá coders");

function upMax(){
    let nome = document.getElementById('inp');
    /*tudo que vem do input e uma string*/
     document.getElementById('mensagem').innerHTML = nome.value.toUpperCase();
}
function downMax(){
    let nome = document.getElementById('inp');
    /*tudo que vem do input e uma string*/
     document.getElementById('mensagem_2').innerHTML = nome.value.toLowerCase();
}