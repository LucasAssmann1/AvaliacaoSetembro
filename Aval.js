const frm = document.querySelector("form")
const respNum = document.querySelector("span")


const numeros = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numb = frm.inNumero.value;
    numeros.push(numb);
    let lista = "";
    numeros.sort((a, b) => a - b);

    for (let i = 0; i < numeros.length; i++) {
    lista += `${numeros[i]}\n`
    }

    respNum.innerText = lista;
    frm.inNumero.value = "";
    frm.inNumero.focus();
})