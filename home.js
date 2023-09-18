document.querySelector('#blankLauncher').onclick = () => {
    let w = window.open();
    w.document.write(`
        <head>
            <link rel="icon" href="${localStorage.icon || ''}" type="image/x-icon">
            <title>${localStorage.title || '404'}</title>
        </head>
        <body style="margin: 0;">
            <iframe style="border:none; width:100%; height:100%;" src="${location.href}"></iframe>
        </body>
    `);
};

let splashTexts = [
    'the teacher is behind you',
    'why does this exist',
    'yet another rewrite??',
    'this code is probably skidded',
    'this splash text animation took 20 minutes to code!',
    'wow, themes! magical!',
    'free movies hehe'
];

let splashText = splashTexts[Math.floor(Math.random() * splashTexts.length)];
let pushToSplash = (text) => document.querySelector('.splash').innerHTML += text;
let i = setInterval(() => {
    if (splashText == '') {
        splashText = document.querySelector('.splash').innerHTML;
        return clearInterval(i);
    };
    pushToSplash(splashText.split('')[0]);
    splashText = splashText.split('')
    splashText.shift();
    splashText = splashText.join('');
}, 100);