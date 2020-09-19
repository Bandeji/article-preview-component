const shareIcon = document.querySelector(".share-icon");
const shareMedia = document.querySelector(".share-media");
const user = document.querySelector(".user");
const shareMediaExitBtn = document.querySelector(".share-media span");
const browserWidth = window.innerWidth;


shareIcon.addEventListener("click", () => {
    if (browserWidth >= 768) {
        shareMedia.style.display = "flex";
    } else {
        user.style.display = "none";
        shareMedia.style.display = "flex";
    }
});

shareMediaExitBtn.addEventListener("click", () => {
    shareMedia.style.display = "none";
    user.style.display = "flex";
});

