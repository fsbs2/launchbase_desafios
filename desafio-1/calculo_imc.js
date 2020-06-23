// Cálculo de IMC


const nome ='Gabriel';
const peso =70;
const altura=1.80;
let x=0;


const imc= peso/(altura*altura);

if(imc<17){
    x=1;
}

if(imc > 17 && imc < 18.49 ){
    x=2;
}

if(imc > 18.5 && imc < 24.99){
    x=3;
}
if(imc> 25 && imc < 29.99 ){
    x=4;
}
if(imc>30){
    x=5;
}





switch(x){
    case 1:
        console.log(`IMC ${imc} Muito abaixo do peso`);
        break;
    
    case 2:
        console.log(`IMC ${imc} Abaixo do peso`);
        break;

    case 3:
        console.log(`IMC ${imc} Peso normal`);
        break;

    case 4:
        console.log(`IMC ${imc} Acima do peso`);
        break;

    case 5:
        console.log(`IMC ${imc} Obesidade`);
        break;


    default:
        console.log('Não foi possível realizar o IMC');
          
}
