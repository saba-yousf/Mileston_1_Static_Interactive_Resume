// Get the button and the skills section
const toggleSkillsButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Add a click event listener to the button
toggleSkillsButton.addEventListener('click', () => {
    // Toggle the display property of the skills section
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
