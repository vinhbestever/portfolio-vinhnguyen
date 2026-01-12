export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Taureau.AI',
    role: 'AI-powered Document Management System',
    duration: '2024 - 2025',
    startDate: '2024-01',
    endDate: '2025-12',
    description: [
      'Designed AI-driven document management platform centralizing storage, retrieval, and intelligent interaction through natural language',
      'Architected backend using FastAPI with asynchronous data pipelines for large-scale document management',
      'Integrated enterprise data from Azure DevOps via custom MCP tools for seamless synchronization',
      'Developed chat-based interface for querying, editing, and generating document content using LangChain agents',
      'Implemented secure access control and real-time content updates ensuring enterprise-grade reliability'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'LangChain', 'BAML', 'Azure DevOps', 'MongoDB'],
  },
  {
    id: '2',
    company: 'Taureau.AI',
    role: 'Deep Search - Conversational AI Search Engine',
    duration: '2024',
    startDate: '2024-01',
    endDate: '2024-12',
    description: [
      'Developed conversational search platform for interactive information exploration using natural language',
      'Integrated Google Search APIs with Large Language Models for real-time information retrieval and contextualization',
      'Implemented Chain-of-Thought reasoning and ReAct frameworks for iterative reasoning and response refinement',
      'Designed chat-based interface with contextual memory and dynamic search intent refinement',
      'Delivered system capable of real-time AI-assisted information discovery with verifiable search results'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'LangChain', 'Google Search API', 'OpenAI'],
  },
  {
    id: '3',
    company: 'Taureau.AI',
    role: 'Generative AI Workflow Platform',
    duration: '2023 - 2024',
    startDate: '2023-01',
    endDate: '2024-12',
    description: [
      'Full-stack development of AI workflow orchestration platform enabling visual creation and automation of multi-agent AI workflows',
      'Built visual flow editor using ReactJS with drag-and-drop, live execution tracking, and error handling',
      'Implemented scalable asynchronous backend for contextual AI tasks and multi-agent orchestration',
      'Developed Chrome Extension connecting directly to system APIs for browser-based workflow interaction',
      'Integrated with Slack, Zalo, Facebook, Outlook, and LinkedIn with comprehensive public API layer'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'LangChain', 'LangGraph', 'MongoDB'],
  },
  {
    id: '4',
    company: 'Taureau.AI',
    role: 'X-Ray Image Annotation Platform',
    duration: '2023',
    startDate: '2023-01',
    endDate: '2023-12',
    description: [
      'Designed specialized labeling tools for medical X-ray annotation - upper limb bones and body skeleton structures',
      'Built interactive UI with precise point-based and line-based annotations for anatomical landmarks',
      'Integrated AI-assisted detection models to automatically identify bone structures and pre-generate annotations',
      'Enabled medical users to refine AI-generated results for improved accuracy',
      'Significantly reduced manual labeling time while maintaining high precision for medical AI dataset creation'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'TensorFlow', 'Medical AI'],
  },
  {
    id: '5',
    company: 'Taureau.AI',
    role: 'Image Annotation & Labeling Platform',
    duration: '2022 - 2023',
    startDate: '2022-07',
    endDate: '2023-12',
    description: [
      'Developed web-based image annotation editor for data labeling workflows focusing on usability and performance',
      'Led UI/UX design for entire platform ensuring intuitive experience for annotators and reviewers',
      'Built workflow management module allowing customizable annotation processes for different project requirements',
      'Developed multiple annotation tools (bounding boxes, polygons, segmentation, custom structures)',
      'Integrated AI segmentation models for semi-automated labeling improving efficiency and accuracy'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'Canvas API', 'TensorFlow'],
  },
];
