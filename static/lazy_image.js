function loadImage(e) {
    image = document.getElementById(e+"-child");
    if (image.src != image.dataset.url) {
        console.log("loading");
        image.src = image.dataset.url;
    }
}