const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Prompt to select media stream, pass to video element, then play
async function selectmediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onLoadedMetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener('click', async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
  console.log('aaa');
});

// On Load
selectmediaStream();
