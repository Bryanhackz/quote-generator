document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalEl = document.getElementById('total-price');
    const summaryList = document.getElementById('summary-list');
    const btnGenerate = document.getElementById('btn-generate');

    function updateQuote() {
        let total = 0;
        summaryList.innerHTML = '';
        
        checkboxes.forEach(cb => {
            if (cb.checked) {
                const price = parseInt(cb.getAttribute('data-price'), 10);
                const name = cb.value;
                total += price;
                
                const li = document.createElement('li');
                li.className = 'summary-item';
                li.innerHTML = `<span>${name}</span><span>$${price}</span>`;
                summaryList.appendChild(li);
            }
        });

        if (total === 0) {
            summaryList.innerHTML = '<li class="summary-item" style="justify-content: center; color: var(--text-secondary); font-style: italic;">No services selected</li>';
            btnGenerate.disabled = true;
        } else {
            btnGenerate.disabled = false;
        }

        totalEl.textContent = `$${total}`;
        
        // Animation trigger
        totalEl.classList.remove('price-anim');
        void totalEl.offsetWidth; // Trigger reflow
        totalEl.classList.add('price-anim');
    }

    checkboxes.forEach(cb => cb.addEventListener('change', updateQuote));

    btnGenerate.addEventListener('click', () => {
        const selectedServices = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => `- ${cb.value}: $${cb.getAttribute('data-price')}`)
            .join('\n');

        const total = totalEl.textContent;
        const message = `Hello,\n\nI would like to request a quote for the following services:\n\n${selectedServices}\n\nTotal Estimate: ${total}\n\nPlease contact me to discuss the next steps.`;
        
        const mailtoLink = `mailto:hello@acmedigital.com?subject=Project Quote Request&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    });
});