function calcular(operacao) {
    const n1 = Number(document.getElementById('num1').value);
    const n2 = Number(document.getElementById('num2').value);
    const resultadoDiv = document.getElementById('resultado');

    if (document.getElementById('num1').value === '' || document.getElementById('num2').value === '') {
        resultadoDiv.innerHTML = '<p style="color: #f5576c;">🚨Preencha os dois campos!</p>';
        resultadoDiv.classList.add('show');
        return;
    }

    if (isNaN (n1) || isNaN(n2)) {
        resultadoDiv.innerHTML = '<p style="color: #f5576c;">🚨 Insira apenas números válidos!</p>';
        resultadoDiv.classList.add('show');
        return;
    }

    let resultado;
    let simbolo;

    switch (operacao) {
        case 'soma':
            resultado = n1 + n2;
            simbolo = '+';
            break;

        case 'subtracao':
            resultado = n1 - n2;
            simbolo = '-';
            break;

        case 'multiplicacao':
            resultado = n1 * n2;
            simbolo = '×';
            break;

        case 'divisao':
            if (n2 === 0) {
                resultadoDiv.innerHTML = '<p style="color: #f5576c;">⚠️ Divisão por zero não é permitida!</p>';
                resultadoDiv.classList.add('show');
                return;
            }
        resultado = n1 / n2;
        simbolo = '÷';
        break;
    }
        resultado = Math.round(resultado * 100) / 100;
        resultadoDiv.innerHTML= `
        <div>
            <p style="color: #ffffff; font-size: 16px; margin-bottom: 10px;">
                ${n1} ${simbolo} ${n2} =
            </p>
            <h2>${resultado}</h2>
        </div>
        `;

        resultadoDiv.classList.remove('show');
        setTimeout(() => resultadoDiv.classList.add('show'), 10);
}
    function limpar() {
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('resultado').innerHTML='<p class="mensagem-inicial">Digite os números e escolha uma operação</p>';
        document.getElementById('num1').focus();
    }
    
    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('num2').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calcular('soma');
        }
    });
});
