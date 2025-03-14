// Open the modal and set the video source
function openModal(videoId) {
  const modal = document.getElementById('videoModal');
  const expandedVideo = document.getElementById('expandedVideo');
  const thumbnailVideo = document.getElementById('thumbnailVideo');

  // Set the modal video source to match the clicked thumbnail
  expandedVideo.src = thumbnailVideo.src;

  // Show the modal
  modal.style.display = 'block';
}
// testing comment

// Close the modal
function closeModal() {
  const modal = document.getElementById('videoModal');
  const expandedVideo = document.getElementById('expandedVideo');

  // Pause the video in the modal
  expandedVideo.src = ''; // Reset the video source

  // Hide the modal
  modal.style.display = 'none';
}