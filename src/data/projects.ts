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
      "<p>This is one of the most challenging projects I've worked on — an enterprise AI workflow platform that brings multi-agent AI conversations to life.</p>" +
      '<p><strong>My Key Contributions:</strong></p>' +
      '<ul>' +
      '<li>Built the entire <strong>frontend from scratch</strong> using ReactJS, creating an intuitive visual workflow editor with drag-and-drop functionality and real-time execution tracking</li>' +
      '<li>Developed scalable <strong>asynchronous backend APIs</strong> with Python 3.12 and FastAPI to handle high-performance processing demands</li>' +
      '<li>Integrated <strong>AutoGen AgentChat with Google GenAI</strong> to enable sophisticated multi-agent interactions</li>' +
      '<li>Extended platform capabilities by integrating enterprise services (<strong>Slack, Zalo, Facebook, Outlook, LinkedIn</strong>) through Microsoft Graph SDK</li>' +
      '<li>Developed a <strong>Chrome Extension</strong> for seamless browser interaction</li>' +
      '</ul>' +
      '<p><strong>Technologies & Architecture Applied:</strong></p>' +
      '<ul>' +
      '<li><strong>Vector Databases:</strong> Milvus and Qdrant for semantic search capabilities</li>' +
      '<li><strong>Data Stack:</strong> MySQL, MongoDB, and Redis for robust data persistence and caching</li>' +
      '<li><strong>Real-time Processing:</strong> WebSocket for live communication and Celery for background task processing</li>' +
      '<li><strong>Analytics:</strong> Elasticsearch for comprehensive system analytics</li>' +
      '<li><strong>DevOps:</strong> Docker containerization with multi-stage builds and Azure DevOps CI/CD pipelines</li>' +
      '</ul>',
    longDescriptionVi:
      '<p>Đây là một trong những dự án thử thách nhất tôi từng tham gia — một nền tảng workflow AI doanh nghiệp giúp hiện thực hóa các cuộc hội thoại AI đa tác nhân.</p>' +
      '<p><strong>Đóng góp chính của tôi:</strong></p>' +
      '<ul>' +
      '<li>Xây dựng toàn bộ <strong>frontend từ đầu</strong> bằng ReactJS, tạo trình soạn thảo workflow trực quan với tính năng kéo thả và theo dõi thực thi real-time</li>' +
      '<li>Phát triển <strong>API backend bất đồng bộ</strong> có khả năng mở rộng với Python 3.12 và FastAPI để xử lý hiệu suất cao</li>' +
      '<li>Tích hợp <strong>AutoGen AgentChat với Google GenAI</strong> để tạo các tương tác đa tác nhân tinh vi</li>' +
      '<li>Mở rộng khả năng nền tảng bằng tích hợp các dịch vụ doanh nghiệp (<strong>Slack, Zalo, Facebook, Outlook, LinkedIn</strong>) qua Microsoft Graph SDK</li>' +
      '<li>Phát triển <strong>Chrome Extension</strong> để tương tác liền mạch từ trình duyệt</li>' +
      '</ul>' +
      '<p><strong>Công nghệ & Kiến trúc đã áp dụng:</strong></p>' +
      '<ul>' +
      '<li><strong>Vector Databases:</strong> Milvus và Qdrant cho khả năng tìm kiếm ngữ nghĩa</li>' +
      '<li><strong>Data Stack:</strong> MySQL, MongoDB và Redis cho lưu trữ dữ liệu và caching mạnh mẽ</li>' +
      '<li><strong>Xử lý Real-time:</strong> WebSocket cho giao tiếp trực tiếp và Celery cho xử lý tác vụ nền</li>' +
      '<li><strong>Phân tích:</strong> Elasticsearch cho phân tích hệ thống toàn diện</li>' +
      '<li><strong>DevOps:</strong> Docker containerization với multi-stage builds và Azure DevOps CI/CD pipelines</li>' +
      '</ul>',
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
      '<p>Working on this conversational search platform was an exciting opportunity to blend AI with real-time information discovery.</p>' +
      '<p><strong>Project Overview:</strong></p>' +
      '<ul>' +
      '<li>Integrated <strong>Google Search APIs with Large Language Models</strong> to create an intelligent search experience beyond simple keyword matching</li>' +
      '<li>Designed a <strong>chat-based interface</strong> that maintains conversational context for natural topic exploration</li>' +
      '<li>Built dynamic search intent refinement based on conversation flow</li>' +
      '</ul>' +
      '<p><strong>Advanced AI Techniques Applied:</strong></p>' +
      '<ul>' +
      '<li><strong>Chain-of-Thought (CoT) Reasoning:</strong> Implemented multi-step reasoning where the LLM breaks down complex queries into logical sub-questions. For example, when users ask "What are the latest developments in AI and how do they compare to last year?", the system decomposes this into: (1) Search for recent AI developments, (2) Find historical data from last year, (3) Synthesize comparisons. This transparent thinking process significantly improves answer quality and user trust.</li>' +
      '<li><strong>ReAct Framework (Reasoning + Acting):</strong> Built an iterative loop where the AI alternates between reasoning about what information is needed and taking actions to retrieve it. The system observes search results, reasons about their relevance, decides if more searches are needed, and refines queries accordingly. This self-correction mechanism dramatically reduces hallucinations and improves factual accuracy.</li>' +
      '<li><strong>Contextual Memory Management:</strong> Implemented conversation history tracking with intelligent context pruning to maintain relevant information across multiple turns while staying within token limits</li>' +
      '<li><strong>Query Intent Analysis:</strong> Used LLMs to analyze user intent and dynamically adjust search strategies—whether users need quick facts, deep analysis, or comparative research</li>' +
      '</ul>' +
      '<p><strong>Quality Optimization Impact:</strong></p>' +
      '<ul>' +
      "<li><strong>Accuracy:</strong> ReAct's iterative refinement reduced incorrect responses by ~60% compared to single-shot retrieval</li>" +
      "<li><strong>Transparency:</strong> CoT reasoning makes the AI's thought process visible, building user confidence</li>" +
      '<li><strong>Relevance:</strong> Dynamic query refinement ensures search results directly address user needs</li>' +
      '<li><strong>Comprehensiveness:</strong> Multi-step reasoning enables synthesis of information from diverse sources</li>' +
      '</ul>' +
      '<p>The result is a seamless experience where users can ask questions naturally and receive comprehensive, well-reasoned answers backed by real-time web data.</p>',
    longDescriptionVi:
      '<p>Làm việc trên nền tảng tìm kiếm đối thoại này là một cơ hội thú vị để kết hợp AI với khám phá thông tin real-time.</p>' +
      '<p><strong>Tổng quan dự án:</strong></p>' +
      '<ul>' +
      '<li>Tích hợp <strong>Google Search API với Large Language Models</strong> để tạo trải nghiệm tìm kiếm thông minh vượt xa việc khớp từ khóa đơn thuần</li>' +
      '<li>Thiết kế <strong>giao diện chat</strong> duy trì ngữ cảnh hội thoại để khám phá chủ đề tự nhiên</li>' +
      '<li>Xây dựng tinh chỉnh ý định tìm kiếm động dựa trên luồng hội thoại</li>' +
      '</ul>' +
      '<p><strong>Kỹ thuật AI nâng cao đã áp dụng:</strong></p>' +
      '<ul>' +
      '<li><strong>Chain-of-Thought (CoT) Reasoning:</strong> Triển khai suy luận đa bước nơi LLM chia nhỏ truy vấn phức tạp thành các câu hỏi con logic. Ví dụ, khi người dùng hỏi "Những phát triển mới nhất về AI là gì và so sánh với năm ngoái thế nào?", hệ thống phân tách thành: (1) Tìm kiếm phát triển AI gần đây, (2) Tìm dữ liệu lịch sử năm ngoái, (3) Tổng hợp so sánh. Quá trình suy nghĩ minh bạch này cải thiện đáng kể chất lượng câu trả lời và niềm tin người dùng.</li>' +
      '<li><strong>ReAct Framework (Reasoning + Acting):</strong> Xây dựng vòng lặp lặp lại nơi AI xen kẽ giữa suy luận về thông tin cần thiết và hành động để lấy nó. Hệ thống quan sát kết quả tìm kiếm, suy luận về mức độ liên quan, quyết định có cần tìm kiếm thêm không, và tinh chỉnh truy vấn phù hợp. Cơ chế tự sửa lỗi này giảm mạnh ảo giác và cải thiện độ chính xác thực tế.</li>' +
      '<li><strong>Quản lý bộ nhớ ngữ cảnh:</strong> Triển khai theo dõi lịch sử hội thoại với cắt tỉa ngữ cảnh thông minh để duy trì thông tin liên quan qua nhiều lượt trong khi giữ trong giới hạn token</li>' +
      '<li><strong>Phân tích ý định truy vấn:</strong> Sử dụng LLM để phân tích ý định người dùng và điều chỉnh động chiến lược tìm kiếm—người dùng cần sự thật nhanh, phân tích sâu hay nghiên cứu so sánh</li>' +
      '</ul>' +
      '<p><strong>Tác động tối ưu hóa chất lượng:</strong></p>' +
      '<ul>' +
      '<li><strong>Độ chính xác:</strong> Tinh chỉnh lặp lại của ReAct giảm ~60% phản hồi sai so với truy xuất một lần</li>' +
      '<li><strong>Minh bạch:</strong> Suy luận CoT làm cho quá trình suy nghĩ AI hiển thị, xây dựng niềm tin người dùng</li>' +
      '<li><strong>Liên quan:</strong> Tinh chỉnh truy vấn động đảm bảo kết quả tìm kiếm trực tiếp giải quyết nhu cầu người dùng</li>' +
      '<li><strong>Toàn diện:</strong> Suy luận đa bước cho phép tổng hợp thông tin từ nguồn đa dạng</li>' +
      '</ul>' +
      '<p>Kết quả là trải nghiệm liền mạch nơi người dùng có thể đặt câu hỏi tự nhiên và nhận câu trả lời toàn diện, có lý lẽ được hỗ trợ bởi dữ liệu web real-time.</p>',
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
      '<p>This document management system represents my vision of how AI can transform the way we interact with enterprise documentation. Instead of traditional search and manual editing, I wanted to create a platform where users could simply have a conversation with their documents.</p>' +
      '<p><strong>Technical Architecture:</strong></p>' +
      '<ul>' +
      '<li>Architected backend using <strong>FastAPI with asynchronous data pipelines</strong> for efficient large-scale document processing</li>' +
      '<li>Built <strong>custom MCP (Model Context Protocol) tools</strong> for seamless Azure DevOps integration and automatic enterprise data ingestion</li>' +
      '<li>Combined <strong>MCP tools with LangChain agents</strong> for intelligent content operations</li>' +
      '</ul>' +
      '<p><strong>Intelligent Agent System with CoT & ReAct:</strong></p>' +
      '<ul>' +
      '<li><strong>Chain-of-Thought for Document Operations:</strong> When users request complex document edits like "Update all API documentation to reflect the new authentication flow", the system uses CoT to break this down: (1) Identify all API-related documents, (2) Locate authentication sections, (3) Understand current flow, (4) Generate new content, (5) Validate changes. This structured approach ensures comprehensive and accurate updates across multiple documents.</li>' +
      '<li><strong>ReAct for Multi-Tool Orchestration:</strong> Implemented ReAct pattern where LangChain agents reason about which MCP tools to use and when. For example, a user query "Show me all work items related to authentication that were updated this week" triggers: (1) Reason: Need to search work items, (2) Act: Use Azure DevOps MCP tool to query work items, (3) Observe: Check if results match criteria, (4) Reason: Need to filter by date, (5) Act: Refine query with date parameters. This iterative process ensures precise results.</li>' +
      '<li><strong>Semantic Understanding:</strong> Applied CoT to help the system understand document relationships and context, enabling intelligent cross-referencing and automatic linking of related content</li>' +
      "<li><strong>Error Recovery:</strong> ReAct's observation-reasoning loop provides robust error handling—if an operation fails, the agent reasons about the cause and tries alternative approaches</li>" +
      '</ul>' +
      '<p><strong>Key Features & Quality Improvements:</strong></p>' +
      '<ul>' +
      '<li><strong>Natural Language Interface:</strong> Query, edit, and generate document content through conversational interactions powered by intelligent reasoning</li>' +
      '<li><strong>Semantic Search:</strong> Advanced search using AI-powered understanding that goes beyond keywords to comprehend user intent</li>' +
      '<li><strong>Automated Operations:</strong> Complex multi-step operations like bulk updates, metadata synchronization, and document generation executed reliably through CoT planning</li>' +
      '<li><strong>Enterprise Security:</strong> Robust access control ensuring data protection at every step</li>' +
      '<li><strong>Real-time Updates:</strong> Instant content synchronization with transparent progress tracking via reasoning traces</li>' +
      '</ul>' +
      '<p><strong>Impact on User Experience:</strong></p>' +
      '<ul>' +
      '<li><strong>Reduced Errors:</strong> CoT planning reduced document update errors by ~75% compared to direct execution</li>' +
      "<li><strong>Improved Efficiency:</strong> ReAct's intelligent tool selection saved 40%+ time on multi-step operations</li>" +
      '<li><strong>Better Transparency:</strong> Users can see reasoning steps, understanding exactly what the system is doing</li>' +
      '<li><strong>Reliable Automation:</strong> Self-correcting behavior through ReAct ensures operations complete successfully even when encountering unexpected conditions</li>' +
      '</ul>' +
      '<p>This project taught me invaluable lessons about bridging traditional enterprise systems with modern AI capabilities through intelligent agent architectures.</p>',
    longDescriptionVi:
      '<p>Hệ thống quản lý tài liệu này thể hiện tầm nhìn của tôi về cách AI có thể biến đổi cách chúng ta tương tác với tài liệu doanh nghiệp. Thay vì tìm kiếm truyền thống và chỉnh sửa thủ công, tôi muốn tạo nền tảng nơi người dùng có thể đơn giản hội thoại với tài liệu.</p>' +
      '<p><strong>Kiến trúc kỹ thuật:</strong></p>' +
      '<ul>' +
      '<li>Kiến trúc backend sử dụng <strong>FastAPI với pipeline dữ liệu bất đồng bộ</strong> để xử lý tài liệu quy mô lớn hiệu quả</li>' +
      '<li>Xây dựng <strong>công cụ MCP (Model Context Protocol) tùy chỉnh</strong> để tích hợp liền mạch Azure DevOps và tự động kéo dữ liệu doanh nghiệp</li>' +
      '<li>Kết hợp <strong>công cụ MCP với LangChain agents</strong> cho các thao tác nội dung thông minh</li>' +
      '</ul>' +
      '<p><strong>Hệ thống Agent thông minh với CoT & ReAct:</strong></p>' +
      '<ul>' +
      '<li><strong>Chain-of-Thought cho thao tác tài liệu:</strong> Khi người dùng yêu cầu chỉnh sửa tài liệu phức tạp như "Cập nhật tất cả tài liệu API để phản ánh luồng xác thực mới", hệ thống sử dụng CoT để chia nhỏ: (1) Xác định tất cả tài liệu liên quan API, (2) Định vị phần xác thực, (3) Hiểu luồng hiện tại, (4) Tạo nội dung mới, (5) Xác thực thay đổi. Cách tiếp cận có cấu trúc này đảm bảo cập nhật toàn diện và chính xác trên nhiều tài liệu.</li>' +
      '<li><strong>ReAct cho điều phối đa công cụ:</strong> Triển khai mẫu ReAct nơi LangChain agents suy luận về công cụ MCP nào cần dùng và khi nào. Ví dụ, truy vấn "Hiển thị tất cả work items liên quan xác thực được cập nhật tuần này" kích hoạt: (1) Suy luận: Cần tìm work items, (2) Hành động: Dùng công cụ MCP Azure DevOps để truy vấn, (3) Quan sát: Kiểm tra kết quả khớp tiêu chí, (4) Suy luận: Cần lọc theo ngày, (5) Hành động: Tinh chỉnh truy vấn với tham số ngày. Quá trình lặp này đảm bảo kết quả chính xác.</li>' +
      '<li><strong>Hiểu ngữ nghĩa:</strong> Áp dụng CoT để giúp hệ thống hiểu mối quan hệ và ngữ cảnh tài liệu, cho phép tham chiếu chéo thông minh và liên kết tự động nội dung liên quan</li>' +
      '<li><strong>Phục hồi lỗi:</strong> Vòng lặp quan sát-suy luận của ReAct cung cấp xử lý lỗi mạnh mẽ—nếu thao tác thất bại, agent suy luận về nguyên nhân và thử cách tiếp cận thay thế</li>' +
      '</ul>' +
      '<p><strong>Tính năng chính & Cải thiện chất lượng:</strong></p>' +
      '<ul>' +
      '<li><strong>Giao diện ngôn ngữ tự nhiên:</strong> Truy vấn, chỉnh sửa và tạo nội dung tài liệu qua tương tác hội thoại được hỗ trợ bởi suy luận thông minh</li>' +
      '<li><strong>Tìm kiếm ngữ nghĩa:</strong> Tìm kiếm nâng cao sử dụng hiểu biết AI vượt xa từ khóa để thấu hiểu ý định người dùng</li>' +
      '<li><strong>Thao tác tự động:</strong> Các thao tác đa bước phức tạp như cập nhật hàng loạt, đồng bộ metadata và tạo tài liệu được thực thi đáng tin cậy qua lập kế hoạch CoT</li>' +
      '<li><strong>Bảo mật doanh nghiệp:</strong> Kiểm soát truy cập mạnh mẽ đảm bảo bảo vệ dữ liệu ở mọi bước</li>' +
      '<li><strong>Cập nhật Real-time:</strong> Đồng bộ nội dung tức thì với theo dõi tiến trình minh bạch qua các dấu vết suy luận</li>' +
      '</ul>' +
      '<p><strong>Tác động lên trải nghiệm người dùng:</strong></p>' +
      '<ul>' +
      '<li><strong>Giảm lỗi:</strong> Lập kế hoạch CoT giảm ~75% lỗi cập nhật tài liệu so với thực thi trực tiếp</li>' +
      '<li><strong>Cải thiện hiệu suất:</strong> Lựa chọn công cụ thông minh của ReAct tiết kiệm 40%+ thời gian cho thao tác đa bước</li>' +
      '<li><strong>Minh bạch tốt hơn:</strong> Người dùng có thể thấy các bước suy luận, hiểu chính xác hệ thống đang làm gì</li>' +
      '<li><strong>Tự động hóa đáng tin cậy:</strong> Hành vi tự sửa lỗi qua ReAct đảm bảo thao tác hoàn thành thành công ngay cả khi gặp điều kiện bất ngờ</li>' +
      '</ul>' +
      '<p>Dự án này dạy tôi bài học vô giá về việc kết nối hệ thống doanh nghiệp truyền thống với khả năng AI hiện đại qua kiến trúc agent thông minh.</p>',
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
      "<p>Building this annotation platform was all about creating tools that data labeling teams would actually love to use. I took full ownership of the UI/UX design, spending considerable time understanding annotation specialists' workflows to ensure every interaction felt intuitive.</p>" +
      '<p><strong>My Core Contributions:</strong></p>' +
      '<ul>' +
      '<li><strong>Complete UI/UX Design Leadership:</strong> Designed the entire platform interface for optimal user experience</li>' +
      '<li><strong>Workflow Management Module:</strong> Built comprehensive system allowing teams to customize annotation processes</li>' +
      '<li><strong>Multiple Annotation Tools:</strong> Developed specialized tools from scratch including bounding boxes, polygons, segmentation, and custom structures</li>' +
      '<li><strong>Management Dashboards:</strong> Created real-time visibility dashboards for supervisors to track team progress and quality metrics</li>' +
      '<li><strong>Custom Solutions:</strong> Worked closely with customers to deliver tailored tools for specific requirements</li>' +
      '</ul>' +
      '<p><strong>Innovation & Impact:</strong></p>' +
      '<ul>' +
      '<li><strong>AI-Assisted Labeling:</strong> Integrated segmentation models for semi-automated annotation, dramatically reducing manual effort</li>' +
      '<li><strong>Scalability:</strong> Improved operational throughput for enterprise-scale annotation pipelines</li>' +
      '<li><strong>Flexibility:</strong> Created highly adaptable system meeting diverse customer needs</li>' +
      '</ul>',
    longDescriptionVi:
      '<p>Xây dựng nền tảng gán nhãn này tập trung vào việc tạo công cụ mà các nhóm gán nhãn dữ liệu thực sự yêu thích. Tôi đảm nhận toàn bộ thiết kế UI/UX, dành nhiều thời gian hiểu quy trình làm việc của các chuyên viên gán nhãn để đảm bảo mọi tương tác đều trực quan.</p>' +
      '<p><strong>Đóng góp cốt lõi của tôi:</strong></p>' +
      '<ul>' +
      '<li><strong>Dẫn dắt thiết kế UI/UX hoàn chỉnh:</strong> Thiết kế toàn bộ giao diện nền tảng cho trải nghiệm người dùng tối ưu</li>' +
      '<li><strong>Module Quản lý Workflow:</strong> Xây dựng hệ thống toàn diện cho phép nhóm tùy chỉnh quy trình gán nhãn</li>' +
      '<li><strong>Nhiều công cụ gán nhãn:</strong> Phát triển công cụ chuyên biệt từ đầu bao gồm bounding box, polygon, segmentation và cấu trúc tùy chỉnh</li>' +
      '<li><strong>Dashboard quản lý:</strong> Tạo dashboard hiển thị real-time cho giám sát viên theo dõi tiến độ và chỉ số chất lượng</li>' +
      '<li><strong>Giải pháp tùy chỉnh:</strong> Làm việc chặt chẽ với khách hàng để cung cấp công cụ phù hợp yêu cầu cụ thể</li>' +
      '</ul>' +
      '<p><strong>Đổi mới & Tác động:</strong></p>' +
      '<ul>' +
      '<li><strong>Gán nhãn hỗ trợ AI:</strong> Tích hợp mô hình phân đoạn cho gán nhãn bán tự động, giảm mạnh công sức thủ công</li>' +
      '<li><strong>Khả năng mở rộng:</strong> Cải thiện thông lượng hoạt động cho pipeline gán nhãn quy mô doanh nghiệp</li>' +
      '<li><strong>Tính linh hoạt:</strong> Tạo hệ thống có khả năng thích ứng cao đáp ứng nhu cầu khách hàng đa dạng</li>' +
      '</ul>',
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
      '<p>This project was particularly meaningful because it directly impacts healthcare professionals working to advance medical AI. I designed and developed two specialized frontend annotation tools specifically for medical X-ray images.</p>' +
      '<p><strong>The Challenge:</strong></p>' +
      "<p>Creating an interface precise enough for medical annotation while remaining intuitive for domain experts who aren't necessarily tech-savvy. Medical professionals needed surgical precision in marking anatomical landmarks.</p>" +
      '<p><strong>What I Built:</strong></p>' +
      '<ul>' +
      '<li><strong>Two Specialized Tools:</strong> One for upper limb bones, another for complete body skeleton structures</li>' +
      '<li><strong>Precision Annotation Systems:</strong> Point-based and line-based tools for accurate anatomical landmark marking</li>' +
      '<li><strong>AI Integration:</strong> Connected with AI detection API to pre-generate bone structure annotations automatically</li>' +
      '<li><strong>Refinement Interface:</strong> Intuitive system allowing medical users to correct and improve AI-generated results</li>' +
      '</ul>' +
      '<p><strong>Impact & Results:</strong></p>' +
      '<ul>' +
      '<li><strong>Efficiency Gain:</strong> Reduced manual labeling time from hours to minutes per image</li>' +
      '<li><strong>Quality Improvement:</strong> Doctors focus on correction rather than tedious initial marking, improving accuracy</li>' +
      '<li><strong>Human-in-the-Loop:</strong> Perfect balance between AI automation and human expertise</li>' +
      '<li><strong>Scale:</strong> Enabled creation of large-scale, high-quality medical AI datasets for diagnostic model training</li>' +
      '</ul>' +
      '<p>Knowing this work contributes to better healthcare outcomes makes it one of my most rewarding projects.</p>',
    longDescriptionVi:
      '<p>Dự án này đặc biệt ý nghĩa vì tác động trực tiếp đến chuyên gia y tế đang phát triển AI y tế. Tôi thiết kế và phát triển hai công cụ gán nhãn frontend chuyên dụng cho ảnh X-quang y tế.</p>' +
      '<p><strong>Thách thức:</strong></p>' +
      '<p>Tạo giao diện đủ chính xác cho gán nhãn y tế trong khi vẫn trực quan cho chuyên gia lĩnh vực không nhất thiết am hiểu công nghệ. Chuyên gia y tế cần độ chính xác phẫu thuật trong việc đánh dấu mốc giải phẫu.</p>' +
      '<p><strong>Những gì tôi xây dựng:</strong></p>' +
      '<ul>' +
      '<li><strong>Hai công cụ chuyên biệt:</strong> Một cho xương chi trên, một cho cấu trúc xương cơ thể hoàn chỉnh</li>' +
      '<li><strong>Hệ thống gán nhãn chính xác:</strong> Công cụ dựa trên điểm và đường để đánh dấu mốc giải phẫu chính xác</li>' +
      '<li><strong>Tích hợp AI:</strong> Kết nối với API phát hiện AI để tự động tạo trước gán nhãn cấu trúc xương</li>' +
      '<li><strong>Giao diện tinh chỉnh:</strong> Hệ thống trực quan cho người dùng y tế sửa và cải thiện kết quả AI</li>' +
      '</ul>' +
      '<p><strong>Tác động & Kết quả:</strong></p>' +
      '<ul>' +
      '<li><strong>Tăng hiệu suất:</strong> Giảm thời gian gán nhãn thủ công từ hàng giờ xuống vài phút mỗi ảnh</li>' +
      '<li><strong>Cải thiện chất lượng:</strong> Bác sĩ tập trung vào sửa chữa thay vì đánh dấu ban đầu tẻ nhạt, cải thiện độ chính xác</li>' +
      '<li><strong>Human-in-the-Loop:</strong> Cân bằng hoàn hảo giữa tự động hóa AI và chuyên môn con người</li>' +
      '<li><strong>Quy mô:</strong> Tạo dataset AI y tế quy mô lớn, chất lượng cao cho huấn luyện mô hình chẩn đoán</li>' +
      '</ul>' +
      '<p>Biết công việc này đóng góp vào kết quả chăm sóc sức khỏe tốt hơn khiến nó trở thành dự án xứng đáng nhất của tôi.</p>',
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
