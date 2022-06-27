let Objetos = {

     Nome:"Rômulo",
     Time:"Flamengo",
     Idade: 29
}

Objetos.altura = 1.75

delete Objetos.Time 

console.log(Objetos)

let Cadastro = [
    {
        Nome:"Bianca",
        Idade:28,
        Telefone: 21986544785,
        Amigos:["Débora", "Marcela", "Lívia", "Priscila"]
    },
    {
        Nome:"Ricardo",
        Idade:31,
        Telefone: 21974635125,
        Amigos:["Matheus", "Jean", "Rômulo", "Diego"]
    },
    {
        Nome:"Liz",
        Idade:30,
        Telefone: 21961147786,
        Amigos:["André", "Jorge", "Gabi", "Garré"]
    },
    {
        Nome:"Leandro",
        Idade:29,
        Telefone: 21975662459,
        Amigos:["Evenly", "letícia", "Igor", "Mayara"]
    }
]

console.log(Cadastro[0].Amigos[1], Cadastro[1].Amigos[3], Cadastro[2].Amigos[1], Cadastro[3].Amigos[3])