const usuarios = [
    { nome: "Fernando", tecnologias:["html", "css"]},
    { nome: "Rogério", tecnologias:["javascript","css"]},
    { nome: "Thiago", tecnologias:["html","node.js"]}
];

/*Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. 
Essa função deve retornar um boolean true/false.*/

function checkCssOfUser(usuario){

    console.log(usuario.nome)
    for(let tecnologia of usuario.tecnologias){
        const encontreiCss = tecnologia =='css'
        if(encontreiCss){
            return true;
        }

    }
    return false;
}


for(let usuario of usuarios){
    const esseUsuariosPossuiCss = checkCssOfUser(usuario);
    console.log(esseUsuariosPossuiCss)
}
