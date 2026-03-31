// 05-contador/script.js

function gerarSequencias() {
    // 1. Pegar o valor do input
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const tbody = document.getElementById('tabela-corpo');
    
    // 2. Limpar o tbody antes de gerar
    tbody.innerHTML = '';

    // 3. Criar o loop de 1 até a quantidade informada
    for (let i = 1; i <= quantidade; i++) {
        // 4. Calcular cada coluna
        const contagem = i;
        const pares = i * 2;
        const impares = (i * 2) - 1;
        const multiplos5 = i * 5;
        const potencias2 = 2 ** (i - 1);

        // 5. Montar a <tr> e inserir no HTML
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${contagem}</td>
            <td>${pares}</td>
            <td>${impares}</td>
            <td>${multiplos5}</td>
            <td>${potencias2}</td>
        `;
        tbody.appendChild(tr);
    }
}