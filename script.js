function changeImage() {
    // Get the current image source.
    const currentImage = document.querySelector('.bg.jpg');
    const currentImageSource = currentImage.src;
    // Get the next image source.
    const nextImageSource = currentImageSource.replace(/(\d+)(\.\w+)$/, `$1+1$2`);
    // Set the new image source.
    currentImage.src = nextImageSource;
  }
  // Set the interval for the image change.
  setInterval(changeImage, 1000);