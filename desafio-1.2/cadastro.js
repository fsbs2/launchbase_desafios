const usuario = {
    nome:"Gabriel Fernandes Silva",
    idade: "25 anos",
};

const tecnologia = {
    propriedade: [
        {nome:"c++", especialidade: "Desktop"},
        {nome:"Python", especialidade: "Data science"},
        {nome:"javascript", especialidade: "Web/mobile"}
    ]
};


console.log(`O usuário ${usuario.nome} tem ${usuario.idade} e utiliza a seguinte tecnologia ${tecnologia.propriedade[0].nome} 
com especialidade em ${tecnologia.propriedade[0].especialidade}`);