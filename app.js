window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('rickAudio');
    audio.volume = 0.5;

    // Mobile browsers often require a user interaction to play audio.
    // This forces the audio to play the moment they touch anywhere on the screen.
    document.body.addEventListener('click', () => {
        audio.play().catch(error => console.log("Audio play failed:", error));
    });
    
    // Attempt autoplay immediately
    audio.play().catch(error => {
        console.log("Autoplay blocked. Waiting for user interaction/touch.");
    });
});

