// Open the modal and set the video source
function openModal(videoId) {
  const thumbnailVideo = document.getElementById(videoId);
  const modalVideo = document.getElementById('expandedVideo');
  const modal = document.getElementById('videoModal');

  // Set the modal video source to match the clicked thumbnail
  modalVideo.src = thumbnailVideo.querySelector('source').src;
  modalVideo.load(); // Reload the video
  modalVideo.play(); // Start playing the video

  // Show the modal
  modal.style.display = 'block';
}

// Close the modal
function closeModal() {
  const modalVideo = document.getElementById('expandedVideo');
  const modal = document.getElementById('videoModal');

  // Pause and reset the video
  modalVideo.pause();
  modalVideo.currentTime = 0;

  // Hide the modal
  modal.style.display = 'none';
}