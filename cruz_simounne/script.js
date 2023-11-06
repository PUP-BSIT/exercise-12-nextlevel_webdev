document.getElementById('commentForm').addEventListener('input', function() {
    const fullName = document.getElementById('fullname').value;
    const comment = document.getElementById('comment').value;
    const commentButton = document.getElementById('commentButton');

    if (fullName.trim() !== '' && comment.trim() !== '') {
        commentButton.removeAttribute('disabled');
    } else {
        commentButton.setAttribute('disabled', 'true');
    }
});

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullname').value;
    const comment = document.getElementById('comment').value;
    
    console.log(`Name: ${fullName}, Comment: ${comment}`);
});
