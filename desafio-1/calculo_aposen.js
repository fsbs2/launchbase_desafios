// Calculo da aposentadoria

const nome ="Gabriel";
const sexo ="F";
const idade = 30;
const contribuicao = 30;



if(sexo=="M"){
    if(contribuicao >= 35 && contribuicao + idade >=95){
        console.log("Parabéns, você está aposentado");

    }else{
       
        console.log("Você ainda não esta aposentado!");
        
    }
    
}else{
    if(contribuicao >= 30 && contribuicao + idade >= 85){
        console.log("Parabéns, você está aposentado");
    }else{
       
        console.log("Você ainda não está aposentado!")

    }
    
}