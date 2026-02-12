document.addEventListener('DOMContentLoaded', () => {
    const analyzeBtn = document.getElementById('analyze-btn');
    const numberInput = document.getElementById('number-input');
    const resultDisplay = document.getElementById('result-display');
    const scanHistory = document.getElementById('scan-history');

    analyzeBtn.addEventListener('click', async () => {
        const number = numberInput.value;
        if (!number) return;

        try {
            const response = await fetch('/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ number })
            });
            const data = await response.json();

            if (data.error) {
                alert(data.error);
                return;
            }

            displayResult(data);
            addToHistory(data);
        } catch (err) {
            console.error('Analysis failed:', err);
        }
    });

    function displayResult(data) {
        resultDisplay.classList.remove('hidden');
        document.getElementById('res-number').textContent = data.number;
        document.getElementById('res-sum').textContent = data.sum_divisors;
        document.getElementById('res-divisors').textContent = data.divisors.join(', ');

        const badgesContainer = document.getElementById('res-badges');
        badgesContainer.innerHTML = '';
        data.properties.forEach(prop => {
            const span = document.createElement('span');
            span.className = 'badge';
            span.textContent = prop;
            badgesContainer.appendChild(span);
        });
    }

    function addToHistory(data) {
        const li = document.createElement('li');
        li.textContent = `> [${new Date().toLocaleTimeString()}] TARGET: ${data.number} | STATUS: ${data.properties.join(', ')}`;
        scanHistory.prepend(li);
        if (scanHistory.children.length > 5) {
            scanHistory.removeChild(scanHistory.lastChild);
        }
    }
});
