export const site = {
  name: "Ryan Jose Silab",
  location: "Butuan City, Agusan Del Norte, Philippines",
  tagline: "Video Editor | Web Developer | Photo Editor | Freelancer",
  /** Optional: URL to profile image (e.g. /avatar.jpg). Leave empty for initials placeholder. */
  avatarUrl: "/ryanjosepicpic.jpg" as string | undefined,
  /** Show verified checkmark next to name */
  verified: true,
  /** Optional: Facebook profile URL – verified badge links here when set */
  facebookUrl: "https://www.facebook.com/ryan.jose.silab.2024/" as string | undefined,
  email: "rjsilab@gmail.com",
  calendlyUrl: "https://calendly.com/your-link",
  blogUrl: "https://ryanjosesilab.blogspot.com/",
  linkedin: "https://www.linkedin.com/in/ryan-jose-silab-1116093bb/",
  github: "https://github.com/ryanjosesilab",
  instagram: "https://www.instagram.com/silabryanjose?igsh=MTAxbm1nZDh0bnZzbg%3D%3D",
};

export const heroBadges: { label: string; href: string; subtitle?: string }[] = [];

export const about = `With a background in Web development and immersive technologies, I bring a unique technical edge to my creative work. Today, I operate at the intersection of design and function serving as a Video Editor, Web Developer, and Photo Editor for brands that value high-end aesthetics and precision. From my early experience with DOST-funded simulations to modern freelance projects, I specialize in building digital environments that are as functional as they are visually compelling.

My process is rooted in the belief that great design should feel effortless. Whether I am architecting a seamless web interface, refining the rhythmic pacing of a cinematic edit, or manipulating light and color in post-production, my goal is to create a cohesive narrative. I leverage my experience in React and Flutter to build responsive platforms, while my eye for detail ensures every frame of video or still image resonates with intent. I am dedicated to helping teams and clients deliver faster, smarter, and with a level of consistency that defines modern digital excellence.`; 

export const experience = [
  { role: "Photo Editing", company: "Assirac Frozen Goods", year: "2025" },
  { role: "Data Entry Clerk", company: "Jonie's Lender", year: "2023" },
  { role: "Photo Editing", company: "Rjones", year: "2023" },
  { role: "Video Editing", company: "Raiz Gaming", year: "2022" },
  
];

export const techStack = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  backend: ["Node.js", "PostgreSQL"],
  devops: ["Docker", "GitHub Actions"],
  modeling: [
    "Photoshop",
    "Danvinci Resolve",
    "Adobe Premiere Pro",
    "Texture Editing",
    "Adobe Illustrator",
  ],
};

export const projects = [
  { name: "Assirac Fried Chicken Product", description: "Product Fried Chicken Photo Editing", url: "https://drive.google.com/file/d/1zhmOpJBWS2MQV7FlR7bcv7WtFczFbvls/view?usp=sharing"},
  { name: "Jonie's Lender Data Clerk", description: "Data Entry Money Tracking and Collection ", url: "https://drive.google.com/file/d/1HRkWrn9CbbefkSVOJPm7tiE_w0tJWMMr/view?usp=sharing" },
  { name: "RJONES Logo Creation", description: "Logo for Newly made Company", url: "https://drive.google.com/file/d/14E1JVappDwGQbVczHKLxdUpjbtuxVMDm/view?usp=sharing" },
  { name: "Video Editing", description: "Video editing using Adobe Premiere Pro", url: "https://drive.google.com/file/d/1KsKOh-ytT_n_KRS-WrLOxYZ6V1oH7HSz/view?usp=sharing" },
];

export const certifications: {
  name: string;
  issuer: string;
  href: string;
  year?: string;
}[] = [
  {
    name: "Course Completion HTML Certification",
    issuer: "SoloLearn",
    href: "https://drive.google.com/file/d/167jpEEEJeP1I8P9dOlk7pjl5m0bWaPXE/view?usp=sharing",
  },
  {
    name: "Course Completion CSS Certification",
    issuer: "SoloLearn",
    href: "https://drive.google.com/file/d/1GCS6b2qh0W7u_RowAQA_D9QxuAm8Qdv9/view?usp=sharing",
  },
  {
    name: "Alternative Learning System (ALS) Certificate of Completion",
    issuer: "Arvin B. Pascual",
    href: "https://drive.google.com/file/d/1SXyUpl5REaMoeoeSg0vmDVI3ZrAbiY8h/view?usp=sharing",
  },
];

export const recommendations = [
  { quote: "I greatly admire exemplary work ethic. Approaches every task with unwavering dedication, consistency, and a proactive attitude that sets a high standard for the entire team. Consistently goes above and beyond, demonstrating a remarkable commitment to quality and excellence in every project. Strong sense of responsibility and relentless pursuit of success.", author: "Raymond Jones C. Silab", title: "CEO & Founder" },
  { quote: "Outstanding communication skills and consistently conveys ideas clearly and effectively, fostering an environment of collaboration and mutual understanding. Ability to articulate complex concepts with ease and engage in constructive dialogue has greatly enhanced our team's efficiency and cohesion.", author: "Jonelyn Rose C. Silab", title: "Entrepreneur" },
];

export const memberships = [
  {
    name: "Caraga State University - Main Campus",
    href: "https://www.facebook.com/csumain.usg",
  },
];
