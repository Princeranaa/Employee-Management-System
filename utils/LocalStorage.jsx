const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "arjun@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Quarterly Financial Analysis",
        description: "Analyze financial data and prepare a comprehensive quarterly report for stakeholders.",
        date: "2024-10-01",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team Strategy Meeting",
        description: "Organize and prepare agenda for the upcoming team strategy meeting to align goals.",
        date: "2024-10-05",
        category: "Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Project Documentation Revamp",
        description: "Update and improve project documentation for clarity and completeness.",
        date: "2024-10-10",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Rahul",
    email: "rahul@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Application Bug Resolution",
        description: "Identify and fix critical bugs in the application to ensure stability.",
        date: "2024-10-02",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Version Release Preparation",
        description: "Prepare for the deployment of the new application version, including testing and documentation.",
        date: "2024-10-07",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Code Review and Feedback",
        description: "Conduct thorough code reviews to ensure quality and adherence to standards.",
        date: "2024-10-12",
        category: "Code Review",
        active: false,
        newTask: true,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Priya",
    email: "priya@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      new: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Emerging Technology Research",
        description: "Research and evaluate emerging technologies relevant to our projects and business goals.",
        date: "2024-10-03",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Content Creation for Blog",
        description: "Write a detailed blog post on recent industry trends to enhance our online presence.",
        date: "2024-10-08",
        category: "Content",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Professional Development Workshop",
        description: "Attend a workshop to enhance skills and knowledge in relevant fields.",
        date: "2024-10-15",
        category: "Training",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "sneha@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "User Feedback Synthesis",
        description: "Collect and analyze user feedback to inform future product decisions.",
        date: "2024-10-04",
        category: "Analysis",
        active: true,
        newTask: true,
        completed: true,
        failed: false
      },
      {
        title: "User Experience Survey Design",
        description: "Create a comprehensive survey to gather user experience insights.",
        date: "2024-10-09",
        category: "Survey",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Stakeholder Presentation Preparation",
        description: "Prepare and refine the presentation for the upcoming stakeholder meeting.",
        date: "2024-10-14",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Neha",
    email: "neha@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Feature Development Initiative",
        description: "Develop and implement new features based on user feedback and project goals.",
        date: "2024-10-05",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Performance Evaluation Testing",
        description: "Conduct tests to evaluate application performance and identify areas for improvement.",
        date: "2024-10-10",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "User Manual Revision",
        description: "Update and revise user manuals to ensure accuracy and clarity.",
        date: "2024-10-15",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 6,
    firstName: "Tulsi",
    email: "Tulsi@patel.com",
    password: "123",
    taskCounts: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      
        {
          "title": "Laravel Feature Implementation",
          "description": "Design and implement new features in Laravel based on user feedback and project requirements, ensuring best practices in PHP development.",
          "date": "2024-10-23",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Laravel Performance Benchmarking",
          "description": "Conduct performance tests on Laravel applications to evaluate efficiency and identify optimization opportunities.",
          "date": "2024-10-23",
          "category": "Testing",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Laravel Documentation Update",
          "description": "Revise and update the documentation for Laravel projects to ensure clarity and comprehensive guides for developers.",
          "date": "2024-10-23",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      
      
    ]
  }
];











const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "admin123",
  }
];

export const setlocalStorage = ()=>{
      localStorage.setItem("employees",JSON.stringify(employees))
      localStorage.setItem("admin",JSON.stringify(admin))
}

export const getlocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
   return {employees,admin}
}
