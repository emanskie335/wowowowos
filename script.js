let noCount = 0;
const maxNoClicks = 15; // Limit how small the "No" button gets or how many messages you have

const messages = [
    "No",
    "hui?!?1",
    "please heuheu",
    "tatlong rounds sunod sunod hehe",
    "Last chance!",
    "real ba??",
    "ekaw ren haiszxct",
    "pag isipan mo bby",
    "surekanaba my sugarhoneybunnycakes?",
    "anshaket",
    "PLEASE",
    "EEYAK AKO SIGE",
    "hey!!!!!",
    "huhu eyak na aq",
    "ANSAKET MUHH!!!",
    "OKY PENDUT KANA NG YES"
];

function handleNoclick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // 1. Update the No button text
    noButton.innerText = messages[Math.min(noCount, messages.length - 1)];
    
    // 2. Make the Yes button bigger
    // We increase the font size by 1.5x each time
    const currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
    const newSize = parseFloat(currentFontSize) * 1.5; 
    yesButton.style.fontSize = `${newSize}px`;
    
    // 3. Increment the click counter
    noCount++;
}

function handleYesclick() {
    // Redirect to a success page or change the content
    document.body.innerHTML = `
        <style>
            .success-message {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                text-align: center;
                              }
        </style>
        <div class="success-message">
            <img src="wowow.png" alt="Success">
            <h1>yie keleg nmn aq doon kiss kiss mwamwa chupchup k saken yieieieie</h1>
        </div>
    `;
}