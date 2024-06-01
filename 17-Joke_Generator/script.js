const joke = document.getElementById('joke');
const jokeBtn = document.querySelector('.btn');


jokeBtn.addEventListener('click', () => {
    generatejokes()
})

function generatejokes() {
     
    const config ={
        headers: {
            'Accept': 'application/json'
        },
    }

    fetch('https://icanhazdadjoke.com',config)
    .then(res => res.json())
    .then((data) => {
        joke.innerHTML = data.joke;
    }) 

}