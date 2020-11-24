// Initialize and add the app
function initMap() {
    //Your location
    const loc = { lat:6.570652, lng:3.367890 };
    //Centered map on location
    const map = new google.maps.Map(document.querySelector('.Map')
    , {
        zoom: 14,
        center: loc
});
//The marker, positioned at location
const marker = new google.maps.Marker({ position: loc, map:
    map});
}

// Smooth Scrolling
/*$('#navbar a, .btn').on('click', fuction(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
}); */