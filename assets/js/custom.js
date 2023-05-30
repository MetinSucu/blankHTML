jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchstart", handle, {passive: true});
    }
};

window.addEventListener('load', (event) => {
    setTimeout(function () {
        document.body.classList.remove('preload');
    }, 300);
});

$(document).ready(function () {
    var mainSlider = new Swiper('section.mainSlider .swiper-container', {
        loop: true,
        autoplay: {
            delay: 300000,
            disableOnInteraction: false
        },
        effect: 'fade',
        navigation: {
            nextEl: "section.mainSlider  .nextBtn",
            prevEl: "section.mainSlider  .prevBtn",
        },


    });
})

function initMap() {

    if ($(".contactMap").length) {
        $(".contactMap").each(function (index) {
            var mapID = "map" + index;
            $(this).find("#map").attr("id", mapID);
            var map = $("#" + mapID);
            var lat = (map.data("maplat"));
            var long = (map.data("maplong"));
            createMap(map, lat, long);
        });
    }
}

function createMap(mapSelector, mapLat, mapLong) {
    var mapCenter = {lat: parseFloat(mapLat), lng: parseFloat(mapLong)};

    var map = new google.maps.Map(mapSelector[0], {
        zoom: 13,
        disableDefaultUI: true,
        center: new google.maps.LatLng(mapCenter),

    });

    var marker = new google.maps.Marker({
        position: mapCenter,
        map: map
    });

}

$("body").on("click", ".test", function (button) {



});
