document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tablink').forEach(button => {
        button.addEventListener('click', () => {
            const tabContents = document.querySelectorAll('.tabcontent');
            tabContents.forEach(content => content.style.display = 'none');
            document.getElementById(button.textContent.toLowerCase()).style.display = 'block';
        });
    });
});

function showVideo() {
    alert("Here you can embed a video or redirect to a video page.");
}
