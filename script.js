// Get the button and the skills section
var toggleSkillsButton = document.getElementById('toggle-skills-btn');
var skillsSection = document.getElementById('skills');
// Add a click event listener to the button
toggleSkillsButton.addEventListener('click', function () {
    // Toggle the display property of the skills section
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
