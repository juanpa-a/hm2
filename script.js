

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// let database = firebase.database();
// let database = firebase.database();


let username;

function addGif(searchTerm) {
    $.ajax({
        url: `https://api.giphy.com/v1/gifs/random?api_key=fP48laK1atTXVubvELoxOtRtivArHEQk&tag=${searchTerm }&rating=R`,
        method: "GET"
    }).then(function(response) {
        $('.gif-chat').append(`
        <div class="gif-message">
            <iframe "embed-responsive-item" src=${response.data.embed_url} alt="">
        </div>
        `)
    });
}

$('#send-message').on('click', function() {
    addGif($('#message').val());
    $('#message').val('');
})
