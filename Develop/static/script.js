document.addEventListener("DOMContentLoaded", function() {
    // Get all dropdown toggles
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Add event listener to each dropdown toggle
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            // Get the corresponding dropdown menu
            var dropdownMenu = this.nextElementSibling;

            // Calculate the height of the dropdown menu
            var dropdownMenuHeight = dropdownMenu.scrollHeight;

            // Add extra space to the container
            dropdownMenu.parentNode.style.marginBottom = dropdownMenuHeight + 'px';
        });
    });
});
