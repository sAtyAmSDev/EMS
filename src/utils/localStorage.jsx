
const employees = [ 
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        title: "Complete project report",
        description: "Prepare the final report for the project and submit it.",
        date: "2024-10-30",
        category: "Reporting",
      },
      {
        active: false,
        completed: true,
        failed: false,
        title: "Team meeting",
        description: "Discuss project progress with the team.",
        date: "2024-10-25",
        category: "Meetings",
      },
      {
        active: true,
        completed: false,
        failed: false,
        title: "Code review",
        description: "Review code submitted by peers.",
        date: "2024-10-27",
        category: "Development",
      },
    ],
    taskCounter: {
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 3,
    },
  },
  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        title: "Update database",
        description: "Ensure the database is updated with the latest records.",
        date: "2024-10-28",
        category: "Database",
      },
      {
        active: false,
        completed: true,
        failed: false,
        title: "Prepare presentation",
        description: "Create a presentation for the upcoming client meeting.",
        date: "2024-10-24",
        category: "Presentations",
      },
      {
        active: true,
        completed: false,
        failed: true,
        title: "Bug fixing",
        description: "Fix bugs reported in the last software update.",
        date: "2024-10-29",
        category: "Development",
      },
    ],
    taskCounter: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 3,
    },
  },
  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        title: "Conduct training",
        description: "Provide training session for new employees.",
        date: "2024-11-01",
        category: "Training",
      },
      {
        active: true,
        completed: true,
        failed: false,
        title: "Review user feedback",
        description: "Analyze user feedback from the latest release.",
        date: "2024-10-26",
        category: "Feedback",
      },
    ],
    taskCounter: {
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 2,
    },
  },
  {
    id: 4,
    firstName: "Karan",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        title: "Server maintenance",
        description: "Perform maintenance on the server.",
        date: "2024-10-30",
        category: "Maintenance",
      },
      {
        active: false,
        completed: true,
        failed: false,
        title: "Document API",
        description: "Document the new API endpoints for developers.",
        date: "2024-10-22",
        category: "Documentation",
      },
      {
        active: true,
        completed: false,
        failed: true,
        title: "Install updates",
        description: "Install the latest software updates on all machines.",
        date: "2024-10-27",
        category: "Updates",
      },
    ],
    taskCounter: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 3,
    },
  },
  {
    id: 5,
    firstName: "Reyansh",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        title: "Create marketing plan",
        description:
          "Develop a marketing plan for the upcoming product launch.",
        date: "2024-11-05",
        category: "Marketing",
      },
      {
        active: true,
        completed: false,
        failed: false,
        title: "Market research",
        description: "Conduct research on competitors and market trends.",
        date: "2024-11-02",
        category: "Research",
      },
      {
        active: false,
        completed: true,
        failed: false,
        title: "Social media campaign",
        description: "Launch a social media campaign for the new product.",
        date: "2024-10-20",
        category: "Marketing",
      },
    ],
    taskCounter: {
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 3,
    },
  },
];



const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return {employees, admin};
};
