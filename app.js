"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const form = document.getElementById("resumeForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const degreeField = document.getElementById("degree");
const institutionField = document.getElementById("institution");
const jobTitleField = document.getElementById("jobTitle");
const companyField = document.getElementById("company");
const skillsField = document.getElementById("skills");
const resumeName = document.getElementById("resumeName");
const resumeEmail = document.getElementById("resumeEmail");
const resumePhone = document.getElementById("resumePhone");
const resumeDegree = document.getElementById("resumeDegree");
const resumeInstitution = document.getElementById("resumeInstitution");
const resumeJobTitle = document.getElementById("resumeJobTitle");
const resumeCompany = document.getElementById("resumeCompany");
const resumeSkills = document.getElementById("resumeSkills");
const errorMessage = document.getElementById("errorMessage");
// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// Form submit event
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const phone = phoneField.value.trim();
    const degree = degreeField.value.trim();
    const institution = institutionField.value.trim();
    const jobTitle = jobTitleField.value.trim();
    const company = companyField.value.trim();
    const skills = skillsField.value.trim();
    if (!name || !email || !phone || !degree || !institution) {
        errorMessage.innerText = "All fields are required.";
    }
    else if (!validateEmail(email)) {
        errorMessage.innerText = "Please enter a valid email address.";
    }
    else {
        errorMessage.innerText = ""; // Clear error messages
        // Update resume preview
        resumeName.innerText = name;
        resumeEmail.innerText = email;
        resumePhone.innerText = phone;
        resumeDegree.innerText = degree;
        resumeInstitution.innerText = institution;
        resumeJobTitle.innerText = jobTitle ? jobTitle : "Not Provided";
        resumeCompany.innerText = company ? company : "Not Provided";
        resumeSkills.innerText = skills ? skills : "Not Provided";
    }
});
// Function to make elements editable
function makeEditable(id) {
    const element = document.getElementById(id);
    if (!element)
        return;
    element.addEventListener('click', () => {
        const originalContent = element.innerHTML;
        // Switch to input mode
        element.setAttribute('contenteditable', 'true');
        element.classList.add('editing');
        element.focus();
        // Save changes when losing focus
        element.addEventListener('blur', () => {
            element.setAttribute('contenteditable', 'false');
            element.classList.remove('editing');
            // Optionally, save changes to a backend or local storage here
        });
    });
}
// Apply editable functionality to resume sections
makeEditable('education');
makeEditable('experience');
// Editable functionality: allowing user to click and edit sections
function editable(id) {
    const element = document.getElementById(id);
    if (!element)
        return;
    element.addEventListener('click', () => {
        element.setAttribute('contenteditable', 'true');
        element.classList.add('editing');
        element.focus();
        // When the user clicks away, save the content
        element.addEventListener('blur', () => {
            element.setAttribute('contenteditable', 'false');
            element.classList.remove('editing');
        });
    });
}
// Initialize editing for resume sections
makeEditable('education');
makeEditable('experience');
// Generate unique shareable link
const generateLinkBtn = document.getElementById('generateLinkBtn');
generateLinkBtn?.addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    if (username) {
        const shareableLink = `https://${username}.vercel.app/resume`;
        const shareLinkElement = document.getElementById('shareLink');
        if (shareLinkElement) {
            shareLinkElement.innerHTML = `Shareable link: <a href="${shareableLink}" target="_blank">${shareableLink}</a>`;
        }
    }
    else {
        alert('Please enter a valid username.');
    }
});
// PDF Download functionality using window.print (no external library required)
const downloadBtn = document.getElementById('downloadBtn');
downloadBtn?.addEventListener('click', () => {
    const resumeElement = document.getElementById('resume');
    if (resumeElement) {
        window.print(); // This will print or save as PDF based on user choice
    }
});
