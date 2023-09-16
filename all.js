window.doEmergencyRedirect = true;

window.resetEmergencyKeydown = () => document.body.onkeydown = (e) => {
    if (!doEmergencyRedirect) return;

    let url = localStorage.getItem('url') || 'https://classroom.google.com';
    let key = localStorage.getItem('key') || '`';

    if (e.key == key) {
        e.preventDefault();
        top.location.href = url;
    };
};

window.updateTabMeta = () => {
    if (top.document.querySelector('link[rel=icon]')) top.document.querySelector('link[rel=icon]').remove();

    if (localStorage.title) top.document.querySelector('title').innerHTML = localStorage.title;
    if (localStorage.icon) top.document.head.insertAdjacentHTML(`beforeend`, `<link rel="icon" type="image/x-icon" href="${localStorage.icon}">`);
};

if (localStorage.antiClose) window.onbeforeunload = () => false;

resetEmergencyKeydown();
updateTabMeta();