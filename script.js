let points = 0;
let target = Math.round(Math.random() * 75) + 25; 

$('#target').text(target);
$('#points').text(points);

$('.crystal').click(function() {
    points += parseInt(this.getAttribute('value'));
    $('#points').text(points);
});

addEventListener('click', function(){
    if (target === points) {
        alert('You win!')
        points = 0
        target = Math.round(Math.random() * 75) + 25; 
        $('#target').text(target);
        $('#points').text(points);
    } 
    else if (points > target) {
        alert('You lost!')
        points = 0
        target = Math.round(Math.random() * 75) + 25;
        $('#target').text(target);
        $('#points').text(points);
    }
})
