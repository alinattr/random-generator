const checkBtn = document.querySelector("button");
var string_inner_container = document.getElementById('string_inner_container')



checkBtn.addEventListener('click', e => {
    e.preventDefault();

string_inner_container.innerHTML = 'Ticket ID: ' + createRandom(7)
});

    function createRandom(string_length) {
        let randomString = ' ';
        let characters = '0123456789'
        for (var i, i = 0; i < string_length; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomString

    }

