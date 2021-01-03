const num = Number(prompt('Digite um numero: '));

const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

titulo.innerHTML = `Seu Numero é ${num}`;
texto.innerHTML = `<p>Raiz quadrada: ${num ** 0.5}</p>`
texto.innerHTML += `<p>${num} é um numero inteiro: ${Number.isInteger(num)}</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`
texto.innerHTML += `<p>Arredondar para cima: ${Math.floor(num)}</p>`
texto.innerHTML += `<p>Arredondar para baixo: ${Math.ceil(num)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`
