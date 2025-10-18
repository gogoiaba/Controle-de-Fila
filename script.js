let fila = [];
let clientesChegando = Number(prompt("Quantos clientes chegaram na agência?"));
for (let i = 0; i < clientesChegando; i++) {
  fila.push(i + 1);
}
console.log(`A fila atual é ${fila}`);
console.log(`Tem ${fila.length} clientes na fila.`);
console.log(`O primeiro cliente da fila é a senha ${fila[0]}.`);

let atendimento = prompt("Deseja chamar um cliente? s/n");
while (atendimento === "s") {
  fila.shift();
  atendimento = prompt("Deseja chamar um cliente? s/n");
  console.log(`A fila atual é ${fila}`);
  console.log(`Tem ${fila.length} clientes na fila.`);
  console.log(`O primeiro cliente da fila é a senha ${fila[0]}.`);
}
