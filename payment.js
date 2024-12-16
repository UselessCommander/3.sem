document.addEventListener("DOMContentLoaded", function() {
    const userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
console.log(userData);


    // Hent priserne for mad og kaffe fra userData
    let madPrice = 0;
    let kaffePrice = 0;

    // Tjek om brugeren har valgt mad og kaffe
    if (userData.mad === 'accept') {
        madPrice = 25;  // Hvis valgt, set prisen til 25 DKK
    }

    if (userData.kaffe === 'accept') {
        kaffePrice = 25;  // Hvis valgt, set prisen til 25 DKK
    }

    // Opdater kuponerne med de dynamiske priser
    document.querySelector('.mad-kupon p:nth-child(2)').textContent = `${madPrice},00 DKK`;
    document.querySelector('.kaffe-kupon p:nth-child(2)').textContent = `${kaffePrice},00 DKK`;

    // Beregn og opdater totalen
    const total = madPrice + kaffePrice;
    document.querySelector('.total strong').textContent = `${total},00 DKK`;
});
