let poems = [
    {
        poemText: `
        <p>Новых возможностей, новых идей, <br>
        Рядом прекрасных, надежных друзей!<br>
        Новый год станет пускай самым лучшим,<br>
        Добрым, веселым и очень везучим!<br>
    </p>
    `,
        bg: `url(img/6233666.jpg)`
    }
]


let wrapper = document.querySelector('.wrapper');
let btn = document.getElementById('btn');
let poem = document.querySelector('.content_poem')

btn.addEventListener('click', function () {
    let randomIndex;

    randomIndex = Math.floor(Math.random()) * poems.length
    console.log(randomIndex)
    poem.innerHTML = '';
    poem.innerHTML = poems[randomIndex].poemText;
})
