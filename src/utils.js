const employmentHistory = [
  {
    company: "Nomad Health", // string, req
    role: "Software Engineer", // string, req
    dateRange: "June 2022 - September 2022", // string, req - represents dates worked
    location: "New York, NY", // string, req - represents work location
    // detailList Array<string>, req - represents bullet points of what I did at the job
    detailList: [
      "Developed features and bug fixes in a Flask app. Wrote integration and unit tests for any changes made to the codebase",
      "Participated in sprint planning as part of a an agile team to plan and discuss upcoming features",
      "Implemented front end features and bug fixes in Typescript using React, Material UI, react-query and various other libraries",
      "Acted as one of two main developers for reworking an internal-facing workflow. This involved cross functional collaboration with designers, engineers and product managers from other teams to align on timelines and goals",
    ],
  },
  {
    company: "Chronograph",
    role: "Software Developer",
    dateRange: "July 2021 - November 2021",
    location: "Brooklyn, NY",
    detailList: [
      "Gained experience with Ruby on Rails while implementing fixes and features for back end applications",
      "Participated in meetings with team members to discuss upcoming features. To this end, drafted documents outlining scope, high level implementation, and open questions to be shared with the team",
      "Implemented front end features and bug fixes using React, Redux, and various other libraries. Used Typescript for the majority of this work",
    ],
  },
  {
    company: "Infosys",
    role: "Associate Software Developer",
    dateRange: "March 2020 - July 2021",
    location: "New York, NY",
    detailList: [
      "Developed part of the checkout flow for a Telecommunications client using React, Material UI and Next.js",
      "Created an accessible UX for screen reader users by implementing accessibility best practices",
      "Followed agile software development practices throughout the duration of the project using JIRA",
      "Participated in and presented feature demos to internal stakeholders for product buy-in",
    ],
  },
  {
    company: "Fullstack Academy of Code",
    role: "Software Engineering Teaching Fellow",
    dateRange: "Sep 2019 - Dec 2019",
    location: "New York, NY",
    detailList: [
      "Led review of the NERD stack (Node.js, Express.js, React, Redux, Relational Databases), as well as algorithms and data structures",
      "Administered technical interviews to prospective students",
      "Directed two student teams as a technical mentor and project manager, leading standups and code reviews",
    ],
  },
];

// idea is this function is called to generate an individual employment history block
// have a function that iterates over list of employments and calls this function
function composeEmploymentBlock(employmentObj) {
  // listItem the li element in a list
  var listItem = document.createElement("li");
  listItem.className = "employment-item-container";

  // header markup generation
  const employmentHeader = document.createElement("div");
  employmentHeader.className = "employment-header";
  listItem.appendChild(employmentHeader);

  const role = document.createElement("p");
  role.innerText = employmentObj?.role || "Role not available";
  const dateRange = document.createElement("p");
  dateRange.innerText = employmentObj?.dateRange || "Date range not available";

  employmentHeader.appendChild(role);
  employmentHeader.appendChild(dateRange);

  // listItem the li element in a list
  // put here to remind me what listItem is
  var listItem;

  // company and location line markup generation
  const companyAndLocation = document.createElement("p");
  companyAndLocation.innerText = `${
    employmentObj?.company || "No company specified"
  } - ${employmentObj?.location || "No location specified"}`;

  // listItem the li element in a list
  // put here to remind me what listItem is
  var listItem;

  listItem.appendChild(companyAndLocation);

  // job detail list markup container
  const jobDetailsContainer = document.createElement("ul");
  jobDetailsContainer.className = "job-detail-container";

  // maybe add styles for detail list container?

  // generate list items representing job details
  const jobDetails = employmentObj?.detailList || [];

  for (const detail of jobDetails) {
    const listItem = document.createElement("li");

    const textContainer = document.createElement("p");
    textContainer.innerText = detail?.trim() || "No details available";

    listItem.appendChild(textContainer);

    jobDetailsContainer.appendChild(listItem);
  }

  if (jobDetails?.length === 0) {
    const noJobDetails = document.createElement("p");
    noJobDetails.innerText = "No job information available";

    jobDetailsContainer.appendChild(noJobDetails);
  }

  listItem.append(jobDetailsContainer);

  // listItem the li element in a list
  // put here to remind me what listItem is
  var listItem;

  return listItem;
}

// main function to call to render employment history - for now, not being used
export function createEmploymentList(employmentList) {
  const ulContainer = document.querySelector(".employment-list");

  for (const empHistory of employmentList) {
    const employmentBlock = composeEmploymentBlock(empHistory);

    ulContainer.appendChild(employmentBlock);
  }
}
