document.getElementById('clickMe').onclick = () => {
    let randomColor = Math.round(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
};