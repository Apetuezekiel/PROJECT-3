sMsg.addEventListener('click', logOutMsg => {
    if (tInput.value === "") {
        alert('Please type in a Message')
    } else {
    msgDelivered.innerHTML = tInput.value
    console.log(tInput.value);
    }
})

/* I LEARNT THAT innerHTML and value DIFFERS IN THAT, value IS THE CONTENT OF AN INPUT WHEREAS innerHTML refers to anything inbetween a HTML tag */
