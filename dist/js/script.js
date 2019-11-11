function typeit() {
	new TypeIt('#typing', {
	strings: "Hi ! I'm Achmad",
	speed: 200,
	waitUntilVisible: true,
	loop: true
}).go();
}

$('.nav-link').on('click', function(event) {
	$('.nav-link').removeClass('active');
	$(this).addClass('active');
});
$('#home').on('click', function(event) {
	$('.cover-heading').html('<p id="typing"></p>');
	$('#deskripsi').text("I graduated from SMKN 1 Kediri on Veteran Street number 09. I like other than the ones I don't like. It doesn't matter if you want to contact me. And I created this website to fill my activities. Thank you for visiting.");
	typeit();
});

$('#blog').on('click', function(event) {
	$('.cover-heading').text("Blog");
	$('#deskripsi').html('I made a summary blog that I made myself. This blog aims to be a reference and can be read by everyone if you want. <br><br> <p class="lead"><a href="/blog" class="btn btn-lg btn-secondary">Visit Blog</a></p>')
});


$('#gallery').on('click', function(event) {
	$('.cover-heading').text("Gallery");
	$('#deskripsi').text("Gallery menu features will be updated soon, please wait another time");

});

$('#contact').on('click', function(event) {
	$('.cover-heading').text("Contact");
	$('#deskripsi').html('if you are interested in contacting me, I have provided contact information <br><br> Email : afdhol79@gmail.com <br>');

});