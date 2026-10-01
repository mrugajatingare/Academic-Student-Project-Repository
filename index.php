<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Project Repository</title>
  <meta name="description" content="A polished student project repository for uploading academic projects, exploring them, and filtering by domain, year, guide, or technology.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="background-orb orb-one"></div>
  <div class="background-orb orb-two"></div>

  <main class="app-shell">
    <header class="hero">
    <div>
        <p class="eyebrow">Student Project Repository</p>

        <h1>Academic Project Repository</h1>

        <p class="lead">
            A centralized platform to upload, manage, and discover student academic projects across departments and technologies.
        </p>
    </div>

    <button id="themeToggle"
            class="theme-toggle"
            type="button"
            aria-label="Toggle Theme">
         Dark Mode
    </button>
</header>
    <nav class="tabs" aria-label="Repository sections">
      <button class="tab active" data-target="upload"> Upload Project</button>
      <button class="tab" data-target="browse"> Browse Repository</button>
      <button class="tab" data-target="admin"> Admin Login</button>
    </nav>

    <section class="panel active" id="upload">
      <h2>Upload a project</h2>
      <form id="uploadForm" class="upload-form">
        <div class="form-row">
          <label>
            Project title
            <input type="text" id="projectTitle" required>
          </label>
          <label>
            Academic year
            <input type="text" id="academicYear" placeholder="e.g. 2024-25" required>
          </label>
        </div>

        <div class="form-row">
          <label>
            Domain / Category*
            <select id="domain" required>
              <option value="">Select domain</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App">Mobile App</option>
              <option value="AI/ML">AI/ML</option>
              <option value="IoT">IoT</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Technology stack*
            <input type="text" id="technology" placeholder="React, Node.js, Python" required>
          </label>
        </div>

        <label>
          Faculty guide / mentor*
          <input type="text" id="guide" required>
        </label>

        <label>
          Project abstract*
          <textarea id="abstract" rows="4" placeholder="Describe the project in a few lines" required></textarea>
        </label>

        <div class="form-row">
          <label>
            Team members
            <input type="text" id="teamMembers" placeholder="John Doe, Jane Smith">
          </label>
          <label>
            Email*
            <input type="email" id="email" required>
          </label>
        </div>

        <label>
          Upload documentation / related files
          <input type="file" id="projectFiles" multiple accept=".pdf,.doc,.docx,.zip,.jpg,.jpeg,.png">
        </label>

        <button type="submit">Submit project</button>
        <p id="uploadMessage" class="form-message" role="status"></p>
      </form>
    </section>

    <section class="panel" id="browse">
      <div class="toolbar">
        <input id="searchInput" type="search" placeholder="Search by title, technology, or guide">
        <select id="filterDomainBrowse">
          <option value="">All domains</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile App">Mobile App</option>
          <option value="AI/ML">AI/ML</option>
          <option value="IoT">IoT</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Blockchain">Blockchain</option>
          <option value="Other">Other</option>
        </select>
        <select id="filterYearBrowse">
          <option value="">All years</option>
          <option value="2024-25">2024-25</option>
          <option value="2023-24">2023-24</option>
          <option value="2022-23">2022-23</option>
        </select>
        <select id="filterGuideBrowse">
          <option value="">All guides</option>
        </select>
      </div>
      <div id="projectGrid" class="project-grid"></div>
    </section>

    <section class="panel" id="admin">
      <div class="admin-card">
        <h2>Admin access</h2>
        <p>This space can connect to your future PHP admin dashboard for moderation and approvals.</p>
        <form id="adminForm" class="admin-form">
          <label>
            Username
            <input type="text" id="adminUsername" required>
          </label>
          <label>
            Password
            <input type="password" id="adminPassword" required>
          </label>
          <button type="submit">Login</button>
          <p id="adminMessage" class="form-message" role="status"></p>
        </form>
      </div>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
