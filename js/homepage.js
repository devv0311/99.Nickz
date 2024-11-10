function closePage() {
    const image = document.getElementById("image");
    const buttonContainer = document.getElementById("button-container");
    const messageText = document.getElementById("message-text");
    const goBackButton = document.getElementById("go-back-button");

    // Trigger fade-out animation for background and buttons
    image.style.animation = "fadeOutBackground 1s forwards";
    buttonContainer.style.animation = "fadeOutBackground 1s forwards";

    // Display the second message text after the fade-out animation completes
    setTimeout(() => {
        messageText.classList.add("show-message"); // Make second text visible with fade-in
        goBackButton.classList.add("show-go-back-button"); // Show the go-back button
    }, 500); // 500ms delay to match the fade-out duration
}

function redirectToPage() {
    window.location.href = "content_list.html";
}

function goBack() {
    const image = document.getElementById("image");
    const buttonContainer = document.getElementById("button-container");
    const messageText = document.getElementById("message-text");
    const goBackButton = document.getElementById("go-back-button");

    // Fade out background and second message
    image.style.animation = "fadeInImage 1s forwards";  // Make background reappear
    buttonContainer.style.animation = "fadeInButtons 1s forwards"; // Show buttons again

    messageText.classList.remove("show-message"); // Hide second text
    goBackButton.classList.remove("show-go-back-button"); // Hide the go-back button
}
