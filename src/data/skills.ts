export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  titleVi: string;
  description: string;
  descriptionVi: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    titleVi: 'Phát triển Frontend',
    description: 'Building modern and responsive user interfaces',
    descriptionVi: 'Xây dựng giao diện người dùng hiện đại và responsive',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Vue.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 95 },
      { name: 'Redux', level: 85 },
    ],
  },
  {
    id: 'ai',
    title: 'AI & LLM Development',
    titleVi: 'AI & Phát triển LLM',
    description: 'Building intelligent applications with Large Language Models and AI',
    descriptionVi: 'Xây dựng ứng dụng thông minh với LLM và AI',
    skills: [
      { name: 'Generative AI', level: 90 },
      { name: 'Prompt Engineering', level: 95 },
      { name: 'LLM API Integration', level: 90 },
      { name: 'LangChain', level: 85 },
      { name: 'LangGraph', level: 85 },
      { name: 'BAML', level: 80 },
      { name: 'Python', level: 90 },
    ],
  },
  {
    id: 'system',
    title: 'System & DevOps',
    titleVi: 'Hệ thống & DevOps',
    description: 'Designing and deploying scalable systems',
    descriptionVi: 'Thiết kế và triển khai hệ thống có khả năng mở rộng',
    skills: [
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 80 },
      { name: 'AWS', level: 85 },
      { name: 'Linux', level: 90 },
      { name: 'CI/CD', level: 85 },
      { name: 'Terraform', level: 75 },
      { name: 'Nginx', level: 80 },
      { name: 'Git', level: 95 },
    ],
  },
];

