const metaValidate = (element) => {
    if (!document.querySelector(element).value || document.querySelector(element).value.replaceAll(' ', '') === '') return false;
    else return true;
};

document.querySelector('#setTabName').onclick = () => {
    if (!metaValidate('#cloakTitleInput')) localStorage.removeItem('title');
    else localStorage.setItem('title', document.querySelector('#cloakTitleInput').value);

    window.updateTabMeta();

    document.querySelector('#cloakContainer').insertAdjacentHTML('beforeend', `<div id="cloakInfo" class="infoText">updated tab name!</div>`);
    setTimeout(() => document.querySelector('.infoText').remove(), 2500);
};

document.querySelector('#setTabIcon').onclick = () => {
    if (!metaValidate('#cloakIconInput')) localStorage.removeItem('icon');
    else localStorage.setItem('icon', document.querySelector('#cloakIconInput').value);

    window.updateTabMeta();

    document.querySelector('#cloakContainer').insertAdjacentHTML('beforeend', `<div id="cloakInfo" class="infoText">updated tab icon!</div>`);
    setTimeout(() => document.querySelector('.infoText').remove(), 2500);
}

document.querySelectorAll('.cloakPreset').forEach(preset => preset.onclick = () => {
    localStorage.title = preset.getAttribute('attr-name');
    localStorage.icon = preset.src;

    window.updateTabMeta();
});

const emerButton = document.querySelector('#emerButton').onclick = () => {
    window.doEmergencyRedirect = false;

    const url = /^(http(s)?:\/\/)?([\w-]+\.)+[\w]{2,}(\/.*)?$/.test(document.querySelector('#url').value) ?
        document.querySelector('#url').value : null;

    [...document.querySelector('#emergencyContainer').children].filter(a => a.tagName !== 'DIV').forEach(child => child.style.display = 'none');
    document.querySelector('#emergencyContainer').innerHTML += `<div id="emergencyInfo" class="infoText">click any key to set it as the emergency...</div>`;

    if (!url) {
        document.querySelector('#emergencyInfo').innerText = 'reset emergency key data.';
        delete localStorage.key;
        delete localStorage.url;
        return setTimeout(() => {
            document.querySelector('#emergencyInfo').remove();
            [...document.querySelector('#emergencyContainer').children].filter(a => a.tagName !== 'DIV').forEach(child => child.style.display = '');
            document.querySelector('#emerButton').onclick = emerButton;
        }, 3000)
    };

    document.body.onkeydown = (e) => {
        localStorage.setItem('key', e.key);
        localStorage.setItem('url', url);

        document.querySelector('#clickMessage').innerText = 'key & url set!';

        window.resetEmergencyKeydown();
    };
};

document.querySelector('#emerButton').onclick = emerButton;

document.querySelectorAll('.themeButton').forEach(element => element.onclick = () => {
    alert('coming soon...')
});

document.querySelector('#antiCloseButton').onclick = () => {
    if (localStorage.antiClose) {
        delete localStorage.antiClose;
        window.onbeforeunload = false;
        document.querySelector('#antiCloseButton').innerText = 'Enable Anti-Close';
    } else {
        localStorage.antiClose = true;
        window.onbeforeunload = () => false;
        document.querySelector('#antiCloseButton').innerText = 'Disable Anti-Close';
    };
};
