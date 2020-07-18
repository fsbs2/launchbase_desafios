
//Usuários e tecnologias

const usuarios = [
    { nome: "Fernando", tecnologias:["html", "css"]},
    { nome: "Rogério", tecnologias:["javascript","css"]},
    { nome: "Thiago", tecnologias:["html","node.js"]}
];

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

for(let i = 0; i <  usuarios.length; i++){

    console.log(`O usuário ${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`);
}


// Usando for of

for(usuario of usuarios){
    console.log(`O usuário ${usuario.nome} trabalha com ${usuario.tecnologias}`);
}


