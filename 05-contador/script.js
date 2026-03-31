// 05-contador/script.js

function gerarSequencias() {
    alert('AAAAAAAAAAAA')
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const tbody = document.getElementById('tabela-corpo');

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Informe uma quantidade válida!');
        return;
    }

    tbody.innerHTML = '';

    for (let i = 1; i <= quantidade; i++) {
        const contagem  = i;
        const pares     = i * 2;
        const impares   = (i * 2) - 1;
        const multiplos5 = i * 5;
        const potencias2 = 2 ** (i - 1);
    
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="col-contagem">${contagem}</td>
            <td class="col-pares">${pares}</td>
            <td class="col-impares">${impares}</td>
            <td class="col-multiplos">${multiplos5}</td>
            <td class="col-potencias">${potencias2}</td>
        `;
    
        tbody.appendChild(tr);
    }

}