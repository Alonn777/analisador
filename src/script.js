/* 
Logica de progamação 
[x] Pegar os valores criados no html
[x]fazer com que o botão funcione
[x] fazer que o resultado apareça na tabela abaixo 
[x] Fazer o botão de finalizar funcionar 
[x] fazer a analise dos numeros com o botão finalizar 
*/

let numero = document.getElementById('numero')
let res = document.getElementById('selres')
let p = document.getElementById('tes')
let final = document.getElementById('finalizar')

let valores = []; //array que armazena os numeros 

function Valor() {
    let num = Number(numero.value)
    if (numero.value.length == 0 || num < 1 || num > 100 || valores.includes(num)) {
        window.alert('Numero invalido ou ja adicionado')
    }
    else {
        valores.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        item.value = `res${num}`
        res.appendChild(item)
        res.innerHTML 
        numero.value = ''
        numero.focus()
    }


}

function Finalizar() {
    if (valores.length == 0) {
        window.alert('adicione valores antes de finalizar')
    }
    {
        // peço perdão pelo codigo esta bagunçado minha Forma de estruturar o codigo ainda este sendo desenvolvida
        let total = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma =  valores.reduce((acc, val  ) => acc + val, 0) 
        let media = soma / total;

        let resposta = [
            p.innerHTML = '',
            p.innerHTML += ` <p> Foram informados ao todo ${total}</p>`,
            p.innerHTML += ` <p> O maior valor informado foi ${maior} </p>`,
            p.innerHTML += ` <p> O menor valor informado ${menor} </p>`,
            p.innerHTML += ` <p> A soma de todos os valores informados foi ${soma} </p>`,
            p.innerHTML += ` <p> A media dos Valores  ${media} </p>`
        ]



    }



}

