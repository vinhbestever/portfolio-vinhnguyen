export interface Project {
  id: string;
  title: string;
  titleVi: string;
  description: string;
  descriptionVi: string;
  longDescription: string;
  longDescriptionVi: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'ai' | 'system';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Generative AI Workflow Platform',
    titleVi: 'Nền tảng Luồng công việc AI',
    description: 'AI-driven workflow orchestration platform for creating and automating multi-agent AI workflows',
    descriptionVi: 'Nền tảng điều phối workflow AI để tạo và tự động hóa quy trình AI đa tác nhân',
    longDescription: 'Full-stack development of an AI-driven workflow orchestration platform enabling users to visually create, automate, and monitor multi-agent AI workflows. Built visual flow editor using ReactJS with drag-and-drop functionality, live execution tracking, and error handling. Implemented scalable asynchronous backend for contextual AI tasks and multi-agent orchestration. Integrated with Slack, Zalo, Facebook, Outlook, and LinkedIn. Developed Chrome Extension for direct browser interaction.',
    longDescriptionVi: 'Phát triển full-stack nền tảng điều phối workflow AI cho phép người dùng tạo, tự động hóa và giám sát workflow AI đa tác nhân bằng giao diện trực quan. Xây dựng trình soạn thảo flow với ReactJS có tính năng kéo thả, theo dõi thực thi trực tiếp và xử lý lỗi. Triển khai backend bất đồng bộ có khả năng mở rộng cho các tác vụ AI theo ngữ cảnh. Tích hợp với Slack, Zalo, Facebook, Outlook và LinkedIn. Phát triển Chrome Extension để tương tác trực tiếp từ trình duyệt.',
    image: '/assets/projects/workflow.jpg',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'LangChain', 'LangGraph', 'MongoDB'],
    category: 'ai',
    featured: true,
  },
  {
    id: '2',
    title: 'Deep Search - Conversational AI Search',
    titleVi: 'Deep Search - Tìm kiếm AI đối thoại',
    description: 'Conversational search platform using LLMs for real-time information discovery',
    descriptionVi: 'Nền tảng tìm kiếm đối thoại sử dụng LLM để khám phá thông tin thời gian thực',
    longDescription: 'Developed a conversational search platform for interactive information exploration using natural language. Integrated Google Search APIs with Large Language Models for real-time information retrieval and contextualization. Implemented Chain-of-Thought reasoning and ReAct frameworks for iterative reasoning and response refinement. Designed chat-based interface with contextual memory and dynamic search intent refinement.',
    longDescriptionVi: 'Phát triển nền tảng tìm kiếm đối thoại để khám phá thông tin tương tác bằng ngôn ngữ tự nhiên. Tích hợp Google Search API với LLM để truy xuất và ngữ cảnh hóa thông tin thời gian thực. Triển khai Chain-of-Thought reasoning và ReAct framework để lặp lại suy luận và cải thiện phản hồi. Thiết kế giao diện chat với bộ nhớ ngữ cảnh và tinh chỉnh ý định tìm kiếm động.',
    image: '/assets/projects/deep-search.jpg',
    technologies: ['React', 'TypeScript', 'Python', 'LangChain', 'Google Search API', 'OpenAI'],
    category: 'ai',
    featured: true,
  },
  {
    id: '3',
    title: 'AI-powered Document Management System',
    titleVi: 'Hệ thống Quản lý Tài liệu AI',
    description: 'Intelligent document management with natural language interaction and Azure DevOps integration',
    descriptionVi: 'Quản lý tài liệu thông minh với tương tác ngôn ngữ tự nhiên và tích hợp Azure DevOps',
    longDescription: 'Designed AI-driven document management platform centralizing storage, retrieval, and intelligent interaction through natural language. Architected backend using FastAPI with asynchronous data pipelines. Integrated enterprise data from Azure DevOps via custom MCP tools. Developed chat-based interface for querying, editing, and generating document content. Combined MCP tools and LangChain agents for content editing, metadata updates, and semantic search. Implemented secure access control and real-time content updates.',
    longDescriptionVi: 'Thiết kế nền tảng quản lý tài liệu AI tập trung lưu trữ, truy xuất và tương tác thông minh qua ngôn ngữ tự nhiên. Xây dựng backend với FastAPI và pipeline dữ liệu bất đồng bộ. Tích hợp dữ liệu doanh nghiệp từ Azure DevOps qua MCP tools tùy chỉnh. Phát triển giao diện chat để truy vấn, chỉnh sửa và tạo nội dung tài liệu. Kết hợp MCP tools và LangChain agents cho chỉnh sửa nội dung, cập nhật metadata và tìm kiếm ngữ nghĩa.',
    image: '/assets/projects/doc-management.jpg',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'LangChain', 'BAML', 'Azure DevOps', 'MongoDB'],
    category: 'ai',
    featured: true,
  },
  {
    id: '4',
    title: 'Image Annotation & Labeling Platform',
    titleVi: 'Nền tảng Gán nhãn Hình ảnh',
    description: 'Web-based annotation editor for data labeling workflows with AI assistance',
    descriptionVi: 'Trình soạn thảo gán nhãn trên web cho quy trình gán nhãn dữ liệu có hỗ trợ AI',
    longDescription: 'Developed web-based image annotation editor for data labeling workflows. Led UI/UX design for entire platform ensuring intuitive experience. Built workflow management module for customizable annotation processes. Developed multiple annotation tools (bounding boxes, polygons, segmentation, custom structures). Integrated AI segmentation models for semi-automated labeling. Built management dashboards and custom tools for specific customer requirements. Improved system flexibility and operational throughput for scalable annotation pipelines.',
    longDescriptionVi: 'Phát triển trình soạn thảo gán nhãn hình ảnh trên web cho quy trình gán nhãn dữ liệu. Dẫn dắt thiết kế UI/UX cho toàn bộ nền tảng đảm bảo trải nghiệm trực quan. Xây dựng module quản lý workflow cho quy trình gán nhãn tùy chỉnh. Phát triển nhiều công cụ gán nhãn (bounding box, polygon, segmentation, cấu trúc tùy chỉnh). Tích hợp mô hình phân đoạn AI cho gán nhãn bán tự động. Xây dựng dashboard quản lý và công cụ tùy chỉnh theo yêu cầu khách hàng.',
    image: '/assets/projects/annotation.jpg',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'Canvas API', 'TensorFlow'],
    category: 'frontend',
    featured: false,
  },
  {
    id: '5',
    title: 'X-Ray Image Annotation Platform',
    titleVi: 'Nền tảng Gán nhãn Ảnh X-quang',
    description: 'Specialized annotation tools for medical X-ray image labeling with AI-assisted detection',
    descriptionVi: 'Công cụ gán nhãn chuyên dụng cho ảnh X-quang y tế với phát hiện hỗ trợ AI',
    longDescription: 'Designed specialized labeling tools for medical X-ray image annotation - upper limb bones and body skeleton structures. Built interactive UI with precise point-based and line-based annotations for anatomical landmarks. Integrated AI-assisted detection models to automatically identify bone structures and pre-generate annotations. Enabled medical users to refine AI-generated results for improved accuracy. Significantly reduced manual labeling time while maintaining high precision for large-scale medical AI dataset creation.',
    longDescriptionVi: 'Thiết kế công cụ gán nhãn chuyên dụng cho ảnh X-quang y tế - xương chi trên và cấu trúc xương cơ thể. Xây dựng UI tương tác với gán nhãn dựa trên điểm và đường chính xác cho các mốc giải phẫu. Tích hợp mô hình phát hiện hỗ trợ AI để tự động nhận diện cấu trúc xương và tạo trước gán nhãn. Cho phép người dùng y tế tinh chỉnh kết quả AI để cải thiện độ chính xác. Giảm đáng kể thời gian gán nhãn thủ công đồng thời duy trì độ chính xác cao.',
    image: '/assets/projects/xray-annotation.jpg',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'TensorFlow', 'Medical AI'],
    category: 'ai',
    featured: false,
  },
];
