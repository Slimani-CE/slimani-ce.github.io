const eng = {
  name: "Mustapha SLIMANI",
  age: "23 yo",
  email: "itsmustaphahere@gmail.com",
  linkedin: "https://www.linkedin.com/in/mustaphaslimani/",
  phone: "+212 6 81 89 53 83",
  portfolio: "https://slimani-ce.github.io/",
  motivation:
    "As a dedicated software engineer, I thrive on coding challenges and am fervently seeking new opportunities to architect innovative solutions. Let's code the future together!",
  about:
    "Mustapha SLIMANI, a 23-year-old software enthusiast and Master's student specializing in Distributed Systems and Artificial Intelligence. Proficient in languages like C, Python, Java, and JavaScript, I enjoy crafting creative solutions. As a dedicated student, I blend knowledge and passion for coding. Certified in HTML, CSS, JavaScript, React, and more, I'm on a journey to shape innovation. Let's embark on this coding adventure together!",
  currentEducation:
    "Master's student in Artificial Intelligence and Distributed Systems at ENSET",
  education: {
    master: {
      title:
        "Master's degree in Distributed Systems and Artificial Intelligence",
      institute:
        "HASSAN II University, Higher Normal School of Technical Education, ENSET",
      period: "2022-2024",
      city: "Mohammedia, Morocco",
    },
    bachelor: {
      title: "Bachelor’s degree in Software Engineering",
      institute: "My Ismail university, Faculty of Science and Technologies",
      period: "2018-2022",
      city: "Errachidia, Morocco",
    },
    bac: {
      title: "Baccalaureate’s degree in physical science",
      institute: "Chahid My Tayeb Ben My Lakbir high school",
      period: "2017-2018",
      city: "Errachidia, Morocco",
    },
  },
  techStack: {
    programming: ["c", "Python", "Java", "PHP", "JavaScript"],
    machineLearning: [
      "NumPy",
      "Pandas",
      "NLTK",
      "Scikit-Learn",
      "TensorFlow",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],
    softwareEngineering: [
      "HTML",
      "CSS",
      "SQL",
      "Bootstrap",
      "Spring Framework",
      "Angular",
      "React.js",
      "Node.js",
      "JWT",
      "OAuth2",
      "Keycloak",
    ],
    devOps: ["Git", "Github", "Maven", "JUnit", "Jest", "Docker", "Kubernetes"],
    distributedSystems: ["SOAP", "REST", "GraphQL", "gRPC", "Spark", "Kafka"],
  },
  extracurricularActivities: [
    {
      title: "Vice-Responsible of Programming Tutorials",
      organization: "FSTE IT CLUB",
      role: "Organize programming tutorials for the club's members.",
      period: "2021-2022",
      city: "Errachidia, Morocco",
    },
  ],
  projects: [
    {
      title: "Distributed Radar Management System",
      type: "academic",
      techStack: ["Java", "Spring", "Angular", "gRPC", "REST"],
      details:
        "A distributed system simulating a radar system with three microservices: registration, infraction, and radar. It includes a Java gRPC client and an Angular application for front-end",
      period: "June 2023",
      city: "Mohammedia, Morocco",
      link: "https://slimani-ce.github.io/digit-classifier.github.io/",
    },
    {
      title: "Handwritten Digit Classifier – End to End application",
      type: "personal",
      techStack: [
        "Python",
        "Pandas",
        "TensorFlow",
        "FastAPI",
        "HTML",
        "CSS",
        "JS",
      ],
      details:
        "Trained an artificial neural network to classify handwritten digits. Built a frontend interface for users to submit their handwritten digits and receive real-time classification results from the backend.",
      period: "June 2023",
      city: "Mohammedia, Morocco",
      link: "https://slimani-ce.github.io/digit-classifier.github.io/",
    },
    {
      title: "Fake News Classifier & REST API to consume the model",
      type: "personal",
      techStack: ["Python", "Pandas", "NLTK", "ScikitLearn", "FastAPI"],
      details:
        "Trained and exported a machine learning model to classify news as real or fake. Developed a Python FastAPI to provide an API endpoint for consuming the model",
      period: "June 2023",
      city: "Mohammedia, Morocco",
      link: "https://github.com/Slimani-CE/fake-news-classifier",
    },
    {
      title: "Chat application",
      type: "academic",
      techStack: ["Java", "JavaFX"],
      details:
        "Building a web-based chat application, which includes a user interface and the ability to communicate with others via Telnet.",
      period: "Feb 2023",
      city: "Mohammedia, Morocco",
      link: "https://github.com/Slimani-CE/chat_application_with_sockets",
    },
    {
      title: "Car rental manager",
      type: "academic",
      techStack: ["HTML5", "CSS3", "JS", "PHP", "jQuery", "MySQL", "Chart.js"],
      details:
        "Developing a web application for car rental agencies. The application allows car rental agency administrators to manage their agency. •	Ability to create, edit, explore and delete employees, cars, reservations, clients",
      period: "Mar 2023",
      city: "Errachidia, Morocco",
      link: "https://github.com/Slimani-CE/location-automobile",
    },
  ],
  certifications: [
    {
      title: "HTML and CSS in depth by Meta",
      link: "https://www.coursera.org/account/accomplishments/verify/QED8LMMFB5FC",
    },
    {
      title: "Version Control by Meta",
      link: "https://www.coursera.org/account/accomplishments/verify/T9KAWP7GRPM5",
    },
    {
      title: "Programming with JavaScript by Meta",
      link: "https://www.coursera.org/account/accomplishments/verify/8RGBFQT75KGS",
    },
    {
      title: "React Basics by Meta",
      link: "https://www.coursera.org/account/accomplishments/verify/DHRZLSW45X9L",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
      link: "https://www.udemy.com/certificate/UC-c6dfa73d-dd56-4d84-9865-9006d7e726af/",
    },
    {
      title: "Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",
      link: "https://www.udemy.com/certificate/UC-22986cd7-2448-4964-9bcf-86cc7bc3f5b3/",
    },
    {
      title: "Advanced Learning Algorithms",
      link: "https://www.coursera.org/account/accomplishments/verify/TBGUJW45C4TQ",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      link: "https://www.coursera.org/account/accomplishments/verify/WBMU6T37B2XZ",
    },
  ],
  languages: [
    {
      language: "arabic",
      level: "native",
    },
    {
      language: "english",
      level: "advanced",
    },
    {
      language: "french",
      level: "advanced",
    },
  ],
};

const fr = {
  name: "Mustapha SLIMANI",
  age: "23 ans",
  email: "itsmustaphahere@gmail.com",
  linkedin: "https://www.linkedin.com/in/mustaphaslimani/",
  phone: "+212 6 81 89 53 83",
  portfolio: "https://slimani-ce.github.io/",
  motivation:
    "En tant qu'ingénieur logiciel dévoué, je prospère dans les défis de codage et recherche ardemment de nouvelles opportunités pour concevoir des solutions innovantes. Codons l'avenir ensemble !",
  about:
    "Mustapha SLIMANI, passionné de logiciels de 23 ans et étudiant en Master spécialisé en Systèmes Distribués et Intelligence Artificielle. Maîtrisant des langages tels que C, Python, Java et JavaScript, j'apprécie élaborer des solutions créatives. En tant qu'étudiant dévoué, je fusionne connaissance et passion pour la programmation. Certifié en HTML, CSS, JavaScript, React et plus, je suis en chemin pour façonner l'innovation. Embarquons ensemble dans cette aventure du code !",
  currentEducation:
    "Étudiant en Master en Intelligence Artificielle et Systèmes Distribués à l'ENSET",
  education: {
    master: {
      title: "Master en Systèmes Distribués et Intelligence Artificielle",
      institute:
        "Université HASSAN II, École Normale Supérieure de l'Enseignement Technique, ENSET",
      period: "2022-2024",
      city: "Mohammédia, Maroc",
    },
    bachelor: {
      title: "Licence en Génie Logiciel",
      institute: "Université My Ismaïl, Faculté des Sciences et Technologies",
      period: "2018-2022",
      city: "Errachidia, Maroc",
    },
    bac: {
      title: "Baccalauréat en Sciences Physiques",
      institute: "Lycée Chahid My Tayeb Ben My Lakbir",
      period: "2017-2018",
      city: "Errachidia, Maroc",
    },
  },
  techStack: {
    programming: ["c", "Python", "Java", "PHP", "JavaScript"],
    machineLearning: [
      "NumPy",
      "Pandas",
      "NLTK",
      "Scikit-Learn",
      "TensorFlow",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],
    softwareEngineering: [
      "HTML",
      "CSS",
      "SQL",
      "Bootstrap",
      "Spring Framework",
      "Angular",
      "React.js",
      "Node.js",
      "JWT",
      "OAuth2",
      "Keycloak",
    ],
    devOps: ["Git", "Github", "Maven", "JUnit", "Jest", "Docker", "Kubernetes"],
    distributedSystems: ["SOAP", "REST", "GraphQL", "gRPC", "Spark", "Kafka"],
  },
  extracurricularActivities: [
    {
      title: "Vice-Responsable des Tutoriels de Programmation",
      organization: "FSTE IT CLUB",
      role: "Organiser des tutoriels de programmation pour les membres du club.",
      period: "2021-2022",
      city: "Errachidia, Maroc",
    },
  ],
  projects: [],
  certifications: [
    {
      title: "HTML and CSS in depth by Meta",
      link: "https://www.coursera.org/account/accomplishments/verify/QED8LMMFB5FC",
    },
    {
      title: "Version Control by Meta",
      link: "https://www.coursera.org/account/accomplishments/verify/T9KAWP7GRPM5",
    },
    {
      title: "Programming with JavaScript by Meta",
      link: "https://www.coursera.org/account/accomplishments/verify/8RGBFQT75KGS",
    },
    {
      title: "React Basics by Meta",
      link: "https://www.coursera.org/account/accomplishments/verify/DHRZLSW45X9L",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
      link: "https://www.udemy.com/certificate/UC-c6dfa73d-dd56-4d84-9865-9006d7e726af/",
    },
    {
      title: "Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",
      link: "https://www.udemy.com/certificate/UC-22986cd7-2448-4964-9bcf-86cc7bc3f5b3/",
    },
    {
      title: "Advanced Learning Algorithms",
      link: "https://www.coursera.org/account/accomplishments/verify/TBGUJW45C4TQ",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      link: "https://www.coursera.org/account/accomplishments/verify/WBMU6T37B2XZ",
    },
  ],
  languages: [
    {
      language: "arabic",
      level: "langue maternelle",
    },
    {
      language: "english",
      level: "avancé",
    },
    {
      language: "french",
      level: "avancé",
    },
  ],
};
