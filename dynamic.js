fetch(`/api/v2/games`, {
    method: 'POST'
}).then(data => data.json()).then((data) => {
    let cards = data.sort((a, b) => a.name.localeCompare(b.name));

    document.querySelector('.lowCardHolder').innerHTML = cards.map(card => `
        <a href="#" id="${card.name.replace(/[.!&\s]/g, '-')}" class="cardLink">
            <div class="card">
                <img class="cardImage" src="${card.image}" loading="lazy">
                <div class="cardName">${card.name}</div>
            </div>
        </a>
    `).join('');

    data.map(card => document.getElementById(card.name.replaceAll(/[.!&\s]/g, '-')).addEventListener('click', () => {
        sessionStorage.setItem('frameLink', card.url);
        location.href = '/go';
    }));

    document.querySelector('.cardSearch').oninput = (ev) => {
        let cards = document.querySelector('.lowCardHolder').children;
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].children[0].children[1].textContent.toLowerCase().indexOf(ev.srcElement.value.toLowerCase()) > -1) cards[i].style.display = '';
            else cards[i].style.display = 'none';
        };
    };
});