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
  category: 'enterprise' | 'personal';
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  additionalImages?: string[];
  localVideoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Generative AI Workflow Platform',
    titleVi: 'Nền tảng Luồng công việc AI',
    description:
      'AI-driven workflow orchestration platform for creating and automating multi-agent AI workflows',
    descriptionVi:
      'Nền tảng điều phối workflow AI để tạo và tự động hóa quy trình AI đa tác nhân',
    longDescription:
      'Full-stack development of an enterprise-grade AI workflow orchestration platform enabling users to visually create, automate, and monitor multi-agent AI workflows. Built visual flow editor using ReactJS with drag-and-drop functionality, live execution tracking, and error handling. Implemented scalable asynchronous backend using Python 3.12 and FastAPI for high-performance API services. Leveraged AutoGen AgentChat for multi-agent conversations with Google GenAI integration. Integrated vector databases (Milvus, Qdrant) for similarity search and Elasticsearch for analytics. Utilized MySQL, MongoDB, and Redis for data persistence and caching. Implemented background task processing with Celery and real-time communication via WebSocket. Integrated with enterprise services including Slack, Zalo, Facebook, Outlook, and LinkedIn using Microsoft Graph SDK. Built workflow builder with dynamic code execution capabilities. Deployed using Docker with multi-stage builds and Azure DevOps CI/CD pipelines. Developed Chrome Extension for direct browser interaction.',
    longDescriptionVi:
      'Phát triển full-stack nền tảng điều phối workflow AI cấp doanh nghiệp cho phép người dùng tạo, tự động hóa và giám sát workflow AI đa tác nhân bằng giao diện trực quan. Xây dựng trình soạn thảo flow với ReactJS có tính năng kéo thả, theo dõi thực thi trực tiếp và xử lý lỗi. Triển khai backend bất đồng bộ có khả năng mở rộng sử dụng Python 3.12 và FastAPI cho dịch vụ API hiệu suất cao. Tận dụng AutoGen AgentChat cho hội thoại đa tác nhân với tích hợp Google GenAI. Tích hợp vector databases (Milvus, Qdrant) cho tìm kiếm tương đồng và Elasticsearch cho phân tích. Sử dụng MySQL, MongoDB và Redis cho lưu trữ dữ liệu và caching. Triển khai xử lý tác vụ nền với Celery và giao tiếp thời gian thực qua WebSocket. Tích hợp với các dịch vụ doanh nghiệp bao gồm Slack, Zalo, Facebook, Outlook và LinkedIn sử dụng Microsoft Graph SDK. Xây dựng workflow builder với khả năng thực thi code động. Triển khai sử dụng Docker với multi-stage builds và Azure DevOps CI/CD pipelines. Phát triển Chrome Extension để tương tác trực tiếp từ trình duyệt.',
    image: '/assets/project/genai/workflow.png',
    additionalImages: ['/assets/project/genai/chat.png'],
    localVideoUrl: '/assets/project/genai/demo.mov',
    technologies: [
      'React',
      'TypeScript',
      'Python 3.12',
      'FastAPI',
      'AutoGen',
      'Google GenAI',
      'MySQL',
      'MongoDB',
      'Redis',
      'Elasticsearch',
      'Milvus',
      'Celery',
      'WebSocket',
      'Docker',
      'Azure DevOps',
    ],
    category: 'enterprise',
    liveUrl: 'https://agency.allby.ai/',
    featured: false,
  },
  {
    id: '2',
    title: 'Deep Search - Conversational AI Search',
    titleVi: 'Deep Search - Tìm kiếm AI đối thoại',
    description:
      'Conversational search platform using LLMs for real-time information discovery',
    descriptionVi:
      'Nền tảng tìm kiếm đối thoại sử dụng LLM để khám phá thông tin thời gian thực',
    longDescription:
      'Developed a conversational search platform for interactive information exploration using natural language. Integrated Google Search APIs with Large Language Models for real-time information retrieval and contextualization. Implemented Chain-of-Thought reasoning and ReAct frameworks for iterative reasoning and response refinement. Designed chat-based interface with contextual memory and dynamic search intent refinement.',
    longDescriptionVi:
      'Phát triển nền tảng tìm kiếm đối thoại để khám phá thông tin tương tác bằng ngôn ngữ tự nhiên. Tích hợp Google Search API với LLM để truy xuất và ngữ cảnh hóa thông tin thời gian thực. Triển khai Chain-of-Thought reasoning và ReAct framework để lặp lại suy luận và cải thiện phản hồi. Thiết kế giao diện chat với bộ nhớ ngữ cảnh và tinh chỉnh ý định tìm kiếm động.',
    image: '/assets/project/deepsearch/thumb.png',
    technologies: [
      'React',
      'TypeScript',
      'Python',
      'LangChain',
      'Google Search API',
      'OpenAI',
    ],
    category: 'enterprise',
    featured: false,
  },
  {
    id: '3',
    title: 'AI-powered Document Management System',
    titleVi: 'Hệ thống Quản lý Tài liệu AI',
    description:
      'Intelligent document management with natural language interaction and Azure DevOps integration',
    descriptionVi:
      'Quản lý tài liệu thông minh với tương tác ngôn ngữ tự nhiên và tích hợp Azure DevOps',
    longDescription:
      'Designed AI-driven document management platform centralizing storage, retrieval, and intelligent interaction through natural language. Architected backend using FastAPI with asynchronous data pipelines. Integrated enterprise data from Azure DevOps via custom MCP tools. Developed chat-based interface for querying, editing, and generating document content. Combined MCP tools and LangChain agents for content editing, metadata updates, and semantic search. Implemented secure access control and real-time content updates.',
    longDescriptionVi:
      'Thiết kế nền tảng quản lý tài liệu AI tập trung lưu trữ, truy xuất và tương tác thông minh qua ngôn ngữ tự nhiên. Xây dựng backend với FastAPI và pipeline dữ liệu bất đồng bộ. Tích hợp dữ liệu doanh nghiệp từ Azure DevOps qua MCP tools tùy chỉnh. Phát triển giao diện chat để truy vấn, chỉnh sửa và tạo nội dung tài liệu. Kết hợp MCP tools và LangChain agents cho chỉnh sửa nội dung, cập nhật metadata và tìm kiếm ngữ nghĩa.',
    image: '/assets/project/docai/demo.png',
    technologies: [
      'React',
      'TypeScript',
      'Python',
      'FastAPI',
      'BAML',
      'Azure DevOps',
      'MongoDB',
    ],
    category: 'enterprise',
    featured: false,
  },
  {
    id: '4',
    title: 'Image Annotation & Labeling Platform',
    titleVi: 'Nền tảng Gán nhãn Hình ảnh',
    description:
      'Web-based annotation editor for data labeling workflows with AI assistance',
    descriptionVi:
      'Trình soạn thảo gán nhãn trên web cho quy trình gán nhãn dữ liệu có hỗ trợ AI',
    longDescription:
      'Developed web-based image annotation editor for data labeling workflows. Led UI/UX design for entire platform ensuring intuitive experience. Built workflow management module for customizable annotation processes. Developed multiple annotation tools (bounding boxes, polygons, segmentation, custom structures). Integrated AI segmentation models for semi-automated labeling. Built management dashboards and custom tools for specific customer requirements. Improved system flexibility and operational throughput for scalable annotation pipelines.',
    longDescriptionVi:
      'Phát triển trình soạn thảo gán nhãn hình ảnh trên web cho quy trình gán nhãn dữ liệu. Dẫn dắt thiết kế UI/UX cho toàn bộ nền tảng đảm bảo trải nghiệm trực quan. Xây dựng module quản lý workflow cho quy trình gán nhãn tùy chỉnh. Phát triển nhiều công cụ gán nhãn (bounding box, polygon, segmentation, cấu trúc tùy chỉnh). Tích hợp mô hình phân đoạn AI cho gán nhãn bán tự động. Xây dựng dashboard quản lý và công cụ tùy chỉnh theo yêu cầu khách hàng.',
    image: '/assets/project/aiplatform/annotator.png',
    technologies: [
      'React',
      'TypeScript',
      'Canvas API',
      'REST API',
      'Label Studio',
    ],
    category: 'enterprise',
    liveUrl: 'https://www.allby.ai/',
    featured: false,
  },
  {
    id: '5',
    title: 'X-Ray Image Annotation Platform',
    titleVi: 'Nền tảng Gán nhãn Ảnh X-quang',
    description:
      'Frontend annotation tools for medical X-ray labeling with AI detection API integration',
    descriptionVi:
      'Công cụ gán nhãn frontend cho ảnh X-quang y tế tích hợp API phát hiện AI',
    longDescription:
      'Designed and developed two specialized frontend labeling tools for medical X-ray image annotation — one for upper limb bones and another for body skeleton structures. Built interactive UI with precise point-based and line-based annotations, enabling domain experts to label anatomical landmarks efficiently. Integrated with AI detection API to receive and display pre-generated bone structure annotations. Implemented intuitive interface allowing medical users to refine AI-generated results for improved accuracy. Significantly reduced manual labeling time while maintaining high annotation precision, supporting large-scale medical AI dataset creation.',
    longDescriptionVi:
      'Thiết kế và phát triển hai công cụ gán nhãn frontend chuyên dụng cho ảnh X-quang y tế — một cho xương chi trên và một cho cấu trúc xương cơ thể. Xây dựng giao diện tương tác với gán nhãn dựa trên điểm và đường chính xác, cho phép chuyên gia y tế gán nhãn các mốc giải phẫu hiệu quả. Tích hợp với API phát hiện AI để nhận và hiển thị gán nhãn cấu trúc xương được tạo sẵn. Triển khai giao diện trực quan cho phép người dùng y tế tinh chỉnh kết quả AI để cải thiện độ chính xác. Giảm đáng kể thời gian gán nhãn thủ công đồng thời duy trì độ chính xác cao, hỗ trợ tạo dataset AI y tế quy mô lớn.',
    image: '/assets/project/medical/medical.png',
    videoUrl: 'https://www.youtube.com/embed/SzSpVDu3SRU',
    technologies: [
      'React',
      'TypeScript',
      'Canvas API',
      'REST API',
      'Medical AI',
    ],
    category: 'enterprise',
    featured: false,
  },
];
