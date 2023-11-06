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

    // Add the event listener for the form submission
    document.getElementById('comment_form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page

        const name = nameInput.value;
        const comment = commentInput.value;

        // Create a new comment element
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;

        // Get the comment section and insert the new comment at the top
        commentDisplay.insertBefore(newComment, commentDisplay.firstChild);

        // Clear the input fields
        nameInput.value = '';
        commentInput.value = '';

        // Disable the comment button after submitting
        commentButton.disabled = true;
    });
});
