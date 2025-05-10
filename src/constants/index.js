const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  { name: "Projects", link: "#projects" },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Employers & Clients" },
  { value: 5, suffix: "+", label: "Automated Pipelines" },
  { value: 2, suffix: "+", label: "Cloud Platforms" },
  { value: 10, suffix: "+", label: "Infrastructure Projects" },
  { value: 25, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/Kubernetes_logo.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/cicd.png",
    title: "CI/CD Pipelines",
    desc: "Designed and maintained Jenkins/GitHub Actions pipelines with SonarQube integration for code quality checks.",
  },
  {
    imgPath: "/images/terraform.png",
    title: "Infrastructure as Code",
    desc: "Automated infrastructure provisioning using Terraform across GCP/AWS environments.",
  },
  {
    imgPath: "/images/kubernetes.png",
    title: "Kubernetes Orchestration",
    desc: "Deployed scalable applications on Kubernetes clusters with auto-scaling and load balancing.",
  },
  {
    imgPath: "/images/security.png",
    title: "Security & Compliance",
    desc: "Implemented IAM policies, Wazuh IDS, and vulnerability scanning with OpenVAS.",
  },
  {
    imgPath: "/images/Grafana.png", // Add icon
    title: "Monitoring & Logging",
    desc: "Implemented centralized logging and monitoring solutions using Google Cloud Operations Suite (formerly Stackdriver) for real-time application insights. Configured Prometheus and Grafana dashboards for proactive issue detection and performance optimization."
  },
  {
    imgPath: "/images/Ansible.png", // Add icon
    title: "Configuration Management",
    desc: "Automated server configurations and deployments using Ansible playbooks. Managed infrastructure consistency across environments with shell scripting and automated day-to-day operations."
  }
];

const techStackImgs = [
  {
    name: "GCP",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Docker",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Kubernetes",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Terraform",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "GitHub Actions",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "Keycloak",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Grafana",
    imgPath: "/images/logos/Grafana.svg",
  },
  {
    name: "Ansible",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "AWS",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Jenkins",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "GCP",
    modelPath: "/models/Google+Cloud-transformed.glb",
    scale: 0.05,
    rotation: [1.5, 0, 0],
  },
  {
    name: "Docker",
    modelPath: "/models/Docker-transformed.glb",
    scale: 0.05,
    rotation: [1.5, 0, 0],
  },
  {
    name: "Kubernetes",
    modelPath: "/models/Kubernetes-transformed.glb",
    scale: 0.05,
    rotation: [1.5, 0, 0],
  },
  {
    name: "Terraform",
    modelPath: "/models/Terraform-transformed.glb",
    scale: 0.05,
    rotation: [1.5, 0, 0],
  },
  {
    name: "GitHub Actions",
    modelPath: "/models/GitHub+Actions-transformed.glb",
    scale: 0.05,
    rotation: [1.5, 0, 0],
  },
  {
    name: "Keycloak",
    modelPath: "/models/Keycloak-transformed.glb",
    scale: 0.055,
    rotation: [1.5, 0, 0],
  },
  {
    name: "Grafana",
    modelPath: "/models/Grafana-transformed.glb",
    scale: 0.05,
    rotation: [1.5, 0, 0],
  },
  {
    name: "Ansible",
    modelPath: "/models/Ansible-transformed.glb",
    scale: 0.05,
    rotation: [1.5, 0, 0],
  },
  {
    name: "AWS",
    modelPath: "/models/AWS-transformed.glb",
    scale: 0.05,
    rotation: [1.5, 0, 0],
  },
  {
    name: "Jenkins",
    modelPath: "/models/Jenkins-transformed.glb",
    scale: 0.05,
    rotation: [1.5, 0, 0],
  },
];

const expCards = [
    {
    review: "Nithin’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/Aigot-logo.png",
    logoPath: "/images/Aigot-logo.png",
    title: "DevOps | SRE | Cloud Engineer",
    date: "October 2024 - Present",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
  {
    review: "Nithin’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/Zemoso-small.png",
    logoPath: "/images/Zemoso.png",
    title: "DevOps Engineer (Zemoso Technologies)",
    date: "April 2024 - October 2024",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
  {
    review: "Nithin’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/elux.png",
    logoPath: "/images/Electrolux-logo.png",
    title: "System validation and connectivity engineer (Electrolux Italia)",
    date: "May 2023 - January 2024",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Nithin brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/stm-logo-small.png",
    logoPath: "/images/stm-logo.png",
    title: "Firmware Engineer",
    date: "July 2022 - January 2023",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/aigot.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Nicola Marmugi",
    mentions: "estherhoward",
    review:
      "Nithin delivered a robust DevOps solution that reduced our deployment time by 70%. His expertise in GitHub Actions and infrastructure automation was crucial for our digital transformation.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Salvatore Galati",
    mentions: "wadewarren",
    review:
      "Nithin’s infrastructure automation solutions saved us countless hours. His Kubernetes and Terraform implementation was both elegant and efficient.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Piermatteo Grieco",
    mentions: "ceo_aigot",
    review:
      "Nithin’s expertise in DevOps transformed our cloud infrastructure. His implementation of Terraform and Kubernetes pipelines reduced deployment times by 60%. He’s a true asset to any team.",
    imgPath: "/images/pier.png",
  },
  {
    name: "Priyanjali Guha",
    mentions: "hr_aigot",
    review:
      "Working with Nithin was seamless. His ability to communicate complex DevOps concepts to non-technical stakeholders made him invaluable during our infrastructure overhaul.",
    imgPath: "/images/PJ.png",
  },
  {
    name: "Francesco Postorino",
    mentions: "floydmiles",
    review:
      "Working with Nithin was a pleasure. He deployed a secure Netbird-based VPN on GCP and conducted performance testing with Gatling. His attention to detail is unmatched.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Katia Pasini",
    mentions: "albertflores",
    review:
      "Nithin’s work on our Docker containerization strategy was exceptional. He optimized deployments with Kubernetes orchestration and managed MongoDB Atlas seamlessly.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
