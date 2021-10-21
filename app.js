var string_inner_container = document.getElementById('string_inner_container')
string_inner_container.innerHTML = 'Ticket ID: ' + create_random_string(6)

function create_random_string (string_length) {
    var random_string = ' ';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
    for (var i, i = 0; i < string_length; i++) {
        random_string += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return random_string
}