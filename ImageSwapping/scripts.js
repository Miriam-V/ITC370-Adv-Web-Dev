
function changeImage(varImage) { 
    document.getElementById('bigImage').src=varImage;
}

bigImage.addEventListener("dblclick", function() {
    document.getElementById('img1').src='imagefive.jpg';
    document.getElementById('img2').src='imagesix.jpeg';
    document.getElementById('img3').src='imageseven.jpeg';
    document.getElementById('img4').src='imageeight.jpeg';
});