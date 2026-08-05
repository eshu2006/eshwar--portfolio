import adobeCert from '../assets/images/adobe-hackathon-cert.png'
import acmCert from '../assets/images/acm-wcc-cert.png'
import diamondCert from '../assets/images/diamond-coder-cert.png'
import gdgcCert from '../assets/images/gdgc-challenge-cert.png'
import infosysCert from '../assets/images/infosys-internship-cert.png'


export const personalData = {
  name: 'POKALA ESHWAR',
  title: 'Full Stack & AI Engineer',
  tagline: 'DESIGN. DEVELOP. DEPLOY.',
  email: 'eshwarpokala28@gmail.com',
  phone: '6304854056',
  location: 'Hyderabad, Telangana, India',
  github: 'https://github.com/eshu2006',
  linkedin: 'https://linkedin.com/in/pokala-eshwar-5b1285290', // standard handle based on name
  portfolio: '#',
  linktree: 'https://linktr.ee/eshwarpokala28',
  about: 'Information Technology student at VNR VJIET with a strong passion for full-stack web development and AI integration. Experienced in developing scalable AI-driven platforms, deep learning applications, and event management solutions.'
}

export const educationData = [
  {
    institution: 'VNR Vignana Jyothi Institute of Engineering and Technology',
    degree: 'Bachelor of Technology in Information Technology',
    period: 'Sep 2023 – 2027',
    location: 'Hyderabad, Telangana, India',
    cgpa: '8.9'
  }
]

export const experienceData = [
  {
    id: 1,
    role: 'Web Intern',
    company: 'Infosys Spring Board',
    period: 'December 2025',
    bullets: [
      'Built a Campus Event Management Hub that allows administrators to manage campus events, track event details, and handle user interactions through responsive forms and event listeners.',
      'Implemented validation and structured workflows to ensure accurate data entry and efficient event management.'
    ]
  }
]

export const skillsData = [
  {
    category: 'Programming Languages',
    items: ['C', 'JavaScript', 'Python', 'Java', 'C++']
  },
  {
    category: 'Technologies',
    items: ['HTML', 'CSS', 'React JS', 'Bootstrap', 'Express.js', 'Node.js', 'LangChain']
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB']
  },
  {
    category: 'Other Tools',
    items: ['Git', 'GitHub Copilot', 'Postman', 'Power BI', 'Claude', 'Antigravity']
  },
  {
    category: 'Core Concepts',
    items: ['OOPS', 'DSA', 'DBMS', 'Operating Systems', 'Computer Networks']
  }
]

export const projectsData = [
  {
    id: 1,
    title: 'MailCraft AI - Intelligent Email Generator',
    tech: 'React.js, Vite, Tailwind CSS, Framer Motion, FastAPI, Python, MongoDB, Google Gemini API',
    bullets: [
      'Engineered a modern AI-powered email generation platform using React, FastAPI, and Google Gemini AI, facilitating secure JWT user authentication and automated email drafting.',
      'Integrated advanced email workflows permitting PDF/TXT downloads, writing tone adjustment, direct Gmail sending, and dynamic email histories.'
    ],
    github: 'https://github.com/eshu2006/AI-Email_Generator',
    demo: 'https://ai-email-generator-zeta-eight.vercel.app/'
  },
  {
    id: 2,
    title: 'Intelligent Next Best Action Platform',
    tech: 'React, TypeScript, Vite, Tailwind CSS, FastAPI, Python, MongoDB, Google Gemini, Multi-Agent RAG',
    bullets: [
      'Engineered a Planner-Based Multi-Agent Decision Intelligence Platform that dynamically orchestrates specialized AI agents (Incident, Context, Risk, Recommendation) to evaluate organizational risk.',
      'Integrated a RAG pipeline utilizing vector search against enterprise policies and threat intelligence databases, incorporating Human-in-the-Loop review workflows.'
    ],
    github: 'https://github.com/eshu2006/Enterprise-AI-',
    demo: 'https://enterprise-ai-five.vercel.app/'
  },
  {
    id: 3,
    title: 'Enterprise Decision Intelligence Platform',
    tech: 'Python, FastAPI, React.js, MongoDB, Google Gemini API, Render, Vercel',
    bullets: [
      'Engineered a full-stack AI-powered decision intelligence platform using FastAPI and React with multi-agent orchestration, secure authentication, enterprise incident management, and RESTful APIs.',
      'Integrated AI-driven incident analysis, memory-based incident retrieval, document ingestion, approval workflows, MongoDB data persistence, and cloud deployment to deliver scalable enterprise decision support.'
    ],
    github: 'https://github.com/eshu2006/BUILDWISE-AI-Construction-Planner',
    demo: '#'
  },
  {
    id: 4,
    title: 'Fake News Detection using Deep Learning',
    tech: 'Python, TensorFlow, PyTorch, DistilBERT, CNN, Scikit-learn, Pandas, NumPy, NLTK, G Colab',
    bullets: [
      'Developed a fake news detection system using DistilBERT, CNN, and FastText models to classify news articles as real or fake using NLP techniques.',
      'Performed text preprocessing, tokenization, model training, and evaluation in Python to improve classification accuracy.'
    ],
    github: 'https://github.com/eshu2006/Fake-News-Detection-using-Deep-Learning',
    demo: '#'
  },
  {
    id: 5,
    title: 'Student Companion System',
    tech: 'React, HTML5, CSS3, Bootstrap, JavaScript',
    bullets: [
      'Developed a responsive web-based platform to support students with academic planning, resource sharing, and peer collaboration.',
      'Implemented secure user authentication, dynamic content rendering, and an intuitive user interface to ensure smooth navigation and a scalable user experience.'
    ],
    github: 'https://github.com/eshu2006/student-companion-system',
    demo: 'https://student-companion-system.vercel.app'
  }
]

export const certificatesData = [
  {
    id: 1,
    title: 'Diamond Certified Smart Coder',
    issuer: 'Smart Interviews',
    date: 'Active',
    link: diamondCert
  },
  {
    id: 2,
    title: 'Java Fundamentals',
    issuer: 'Infosys Springboard',
    date: 'Active'
  },
  {
    id: 3,
    title: 'Web Development',
    issuer: 'Infosys Springboard',
    date: 'Active',
    link: infosysCert
  }
]

export const achievementsData = [
  {
    id: 1,
    title: 'Certificate of Participation',
    org: 'Adobe India Hackathon',
    description: 'Developed innovative solution under strict deadlines.',
    link: adobeCert
  },
  {
    id: 2,
    title: 'ACM VNR VJIET WCC 4.0',
    org: 'ACM Student Chapter',
    description: 'Active participant in competitive programming and technical challenges.',
    link: acmCert
  },
  {
    id: 3,
    title: 'Solution Challenge Hackathon',
    org: 'GDGC VNRVJIET',
    description: 'Collaborated to build community-driven tech solutions.',
    link: gdgcCert
  }
]

export const volunteeringData = [
  {
    id: 1,
    role: 'Tech Volunteer',
    org: 'ACM VNRVJIET'
  },
  {
    id: 2,
    role: 'NSS Volunteer',
    org: 'National Service Scheme',
    description: 'Actively participated in community service activities.'
  }
]
