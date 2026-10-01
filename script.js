// ======================================
// Student Project Repository
// ======================================

// ---------- Theme Toggle ----------

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    body.classList.add("light-mode");
    themeToggle.textContent = "☀ Light Mode";
} else {
    themeToggle.textContent = "🌙 Dark Mode";
}

// Toggle Theme
themeToggle.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {

        themeToggle.textContent = "☀ Light Mode";
        localStorage.setItem("theme", "light");

    } else {

        themeToggle.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "dark");

    }

});

// ======================================
// Navigation Tabs
// ======================================

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        tabs.forEach((button) => button.classList.remove("active"));
        panels.forEach((panel) => panel.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.target).classList.add("active");

    });

});

// ======================================
// Sample Projects
// ======================================

const projects = [

    {
        title: "Online Library Management System",
        academicYear: "2024-25",
        domain: "Web Development",
        technology: "HTML, CSS, JavaScript",
        guide: "Dr. Sharma",
        abstract: "A web application for managing books, members and issue records in a college library.",
        teamMembers: "Asha, Rohan",
        email: "library@example.com"
    },

    {
        title: "AI Resume Screening System",
        academicYear: "2023-24",
        domain: "AI/ML",
        technology: "Python, TensorFlow",
        guide: "Prof. Mehta",
        abstract: "An AI-based system that automatically analyses resumes and ranks candidates.",
        teamMembers: "Neha, Vikram",
        email: "resume@example.com"
    },

    {
        title: "Smart Irrigation System",
        academicYear: "2022-23",
        domain: "IoT",
        technology: "Arduino, ESP32",
        guide: "Dr. Khan",
        abstract: "An IoT project that automates irrigation using soil moisture sensors.",
        teamMembers: "Mina, Ishan",
        email: "iot@example.com"
    }

];

// ======================================
// Elements
// ======================================

const projectGrid = document.getElementById("projectGrid");
const searchInput = document.getElementById("searchInput");
const filterDomainBrowse = document.getElementById("filterDomainBrowse");
const filterYearBrowse = document.getElementById("filterYearBrowse");
const filterGuideBrowse = document.getElementById("filterGuideBrowse");

const uploadForm = document.getElementById("uploadForm");
const uploadMessage = document.getElementById("uploadMessage");

const adminForm = document.getElementById("adminForm");
const adminMessage = document.getElementById("adminMessage");

// ======================================
// Populate Guide Filter
// ======================================

function populateGuideOptions() {

    const guides = [...new Set(projects.map(project => project.guide))].sort();

    filterGuideBrowse.innerHTML = '<option value="">All Guides</option>';

    guides.forEach((guide) => {

        filterGuideBrowse.innerHTML += `
            <option value="${guide}">${guide}</option>
        `;

    });

}

// ======================================
// Render Projects
// ======================================

function renderProjects() {

    const search = searchInput.value.toLowerCase().trim();
    const domain = filterDomainBrowse.value;
    const year = filterYearBrowse.value;
    const guide = filterGuideBrowse.value;

    const filteredProjects = projects.filter((project) => {

        const searchableText =
            `${project.title} ${project.domain} ${project.technology} ${project.guide}`.toLowerCase();

        return (

            searchableText.includes(search) &&
            (!domain || project.domain === domain) &&
            (!year || project.academicYear === year) &&
            (!guide || project.guide === guide)

        );

    });

    if (filteredProjects.length === 0) {

        projectGrid.innerHTML = `
            <div class="empty-state">
                No projects found matching your search.
            </div>
        `;

        return;

    }

    projectGrid.innerHTML = filteredProjects.map(project => `

        <article class="project-card">

            <h3>${project.title}</h3>

            <p><strong>Domain:</strong> ${project.domain}</p>

            <p><strong>Academic Year:</strong> ${project.academicYear}</p>

            <p><strong>Guide:</strong> ${project.guide}</p>

            <p>${project.abstract}</p>

            <div class="tag-row">

                <span class="tag">${project.technology}</span>

                <span class="tag">${project.domain}</span>

            </div>

        </article>

    `).join("");

}

// ======================================
// Search Filters
// ======================================

[
    searchInput,
    filterDomainBrowse,
    filterYearBrowse,
    filterGuideBrowse

].forEach((element) => {

    element.addEventListener("input", renderProjects);
    element.addEventListener("change", renderProjects);

});

// ======================================
// Upload Form
// ======================================

uploadForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const newProject = {

        title: document.getElementById("projectTitle").value.trim(),
        academicYear: document.getElementById("academicYear").value.trim(),
        domain: document.getElementById("domain").value,
        technology: document.getElementById("technology").value.trim(),
        guide: document.getElementById("guide").value.trim(),
        abstract: document.getElementById("abstract").value.trim(),
        teamMembers: document.getElementById("teamMembers").value.trim(),
        email: document.getElementById("email").value.trim()

    };

    if (

        !newProject.title ||
        !newProject.academicYear ||
        !newProject.domain ||
        !newProject.technology ||
        !newProject.guide ||
        !newProject.abstract ||
        !newProject.email

    ) {

        uploadMessage.textContent = "Please complete all required fields.";
        return;

    }

    projects.unshift(newProject);

    uploadForm.reset();

    uploadMessage.textContent = "Project uploaded successfully.";

    populateGuideOptions();
    renderProjects();

});

// ======================================
// Admin Login
// ======================================

adminForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const username = document.getElementById("adminUsername").value.trim();
    const password = document.getElementById("adminPassword").value.trim();

    if (username && password) {

        adminMessage.textContent = `Login successful. Welcome, ${username}.`;

    } else {

        adminMessage.textContent = "Please enter your username and password.";

    }

});

// ======================================
// Initial Load
// ======================================

populateGuideOptions();
renderProjects();
