document.addEventListener("DOMContentLoaded", () => {

  // Insert current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear();

  // Get the main element
  const main = document.getElementById("main-content");

  // Loop through each department
  departments.forEach((department) => {

    // Create a section for each department
    const section = document.createElement("section");

    // Create and add department heading
    const heading = document.createElement("h2");
    heading.textContent = department.name;
    section.appendChild(heading);

    // Create employee list
    const ul = document.createElement("ul");

    // Loop through each employee in the department
    department.employees.forEach((employee) => {
      const li = document.createElement("li");
      li.textContent = employee.firstName + " " + (employee.lastName || "");
      ul.appendChild(li);
    });

    section.appendChild(ul);
    main.appendChild(section);
  });

});