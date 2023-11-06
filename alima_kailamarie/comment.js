document.addEventListener("DOMContentLoaded", function () {
    // Enable the "Comment" button when both fields are filled out
    const nameInput = document.getElementById("name");
    const commentInput = document.getElementById("comment");
    const commentButton = document.getElementById("comment_button");
    const commentDisplay = document.getElementById("comment_display");

    nameInput.addEventListener("input", toggleCommentButton);
    commentInput.addEventListener("input", function () {
        toggleCommentButton();
        commentDisplay.textContent = commentInput.value;
    });

    function toggleCommentButton() {
        commentButton.disabled = !(nameInput.value && commentInput.value);
    }

});