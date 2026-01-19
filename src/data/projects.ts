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
    title: 'AI Agency Platform - Generative AI Workflow Platform',
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
    id: '7',
    title: 'AI Agency - Browser Extension',
    titleVi: 'AI Agency - Tiện ích Trình duyệt',
    description:
      'AI-powered Chrome extension for LinkedIn posts and email composition with enterprise AI workflow integration',
    descriptionVi:
      'Tiện ích Chrome hỗ trợ AI để viết bài LinkedIn và email với tích hợp workflow AI doanh nghiệp',
    longDescription:
      '<p>This Chrome extension is something I built to extend our AI workflow platform into the browser — bringing AI-powered writing assistance directly into LinkedIn and email platforms where professionals spend most of their day.</p>' +
      '<p><strong>The Challenge:</strong></p>' +
      '<p>Our main AI platform was powerful, but users had to switch between their work (LinkedIn, Gmail) and our platform constantly. I wanted to eliminate that friction by bringing the AI right into their existing workflows. The goal was simple: let people get AI assistance without ever leaving the page they\'re working on.</p>' +
      '<p><strong>What I Built:</strong></p>' +
      '<ul>' +
      '<li><strong>LinkedIn Post Generator:</strong> Injected an AI assistant button directly into LinkedIn\'s post composer. Click it, describe what you want to write about, choose your tone (professional, casual, thought-leadership), and the AI generates a complete post. You can regenerate or edit before posting.</li>' +
      '<li><strong>Email Reply Assistant:</strong> Added AI suggestions to Gmail and Outlook. When you open an email, the extension analyzes it and offers quick reply options. You can choose formal or casual tone, and the AI drafts contextually appropriate responses based on the email thread.</li>' +
      '<li><strong>Smart Content Injection:</strong> Built content scripts that detect when you\'re composing on LinkedIn or in email apps, then inject our AI interface seamlessly without breaking the native UI. This was tricky because each platform has different DOM structures and security policies.</li>' +
      '<li><strong>Platform API Connection:</strong> Connected the extension to our main AI platform\'s backend APIs. This means the extension leverages all the same powerful workflows, agents, and models that power the main platform — no separate AI system needed.</li>' +
      '<li><strong>One-Click Generation:</strong> Implemented instant AI content generation with real-time feedback. Users see loading states, can cancel mid-generation, and get helpful error messages if something goes wrong.</li>' +
      '<li><strong>Copy & Edit Flow:</strong> Created a smooth workflow where AI-generated content appears in an editable modal. Users can tweak it before inserting into their post or email, maintaining full control over the final content.</li>' +
      '</ul>' +
      '<p><strong>Technical Implementation:</strong></p>' +
      '<ul>' +
      '<li><strong>Chrome Extension Architecture:</strong> Built with Manifest V3 using background service workers for API calls and content scripts for UI injection. Used React for the popup and modal interfaces to keep the code maintainable.</li>' +
      '<li><strong>Cross-Platform Content Scripts:</strong> Developed platform-specific injection logic for LinkedIn, Gmail, and Outlook. Each has different selectors and timing requirements, so I built detection systems that wait for the right moment to inject our UI.</li>' +
      '<li><strong>Authentication Flow:</strong> Implemented secure token-based auth that syncs with the main platform. Users log in once through the extension popup, and we store encrypted credentials in Chrome storage.</li>' +
      '<li><strong>API Client with Retry Logic:</strong> Built a robust API client that handles network failures gracefully with automatic retries, request queuing, and clear error messages to users.</li>' +
      '<li><strong>State Management:</strong> Used Chrome Storage API to persist user preferences, authentication state, and recent generation history across browser sessions.</li>' +
      '</ul>' +
      '<p><strong>Key Features Users Love:</strong></p>' +
      '<ul>' +
      '<li><strong>No Context Switching:</strong> Generate AI content without leaving LinkedIn or your email. The whole workflow happens inline.</li>' +
      '<li><strong>Customizable Output:</strong> Choose tone, length, and style. The AI adapts to match your personal voice or company brand guidelines.</li>' +
      '<li><strong>Fast Iteration:</strong> Don\'t like the first version? Regenerate with different parameters instantly. Users typically get what they want in 1-2 tries.</li>' +
      '<li><strong>Full Control:</strong> AI suggestions are starting points, not final drafts. You always review and edit before posting or sending.</li>' +
      '<li><strong>Cross-Platform Sync:</strong> If you update settings or workflows in the main platform, they automatically apply to the extension. No need to configure things twice.</li>' +
      '</ul>' +
      '<p><strong>Real-World Impact:</strong></p>' +
      '<ul>' +
      '<li><strong>Time Savings:</strong> Users report creating LinkedIn posts 3x faster. What used to take 20 minutes now takes 5-7 minutes including AI generation and editing.</li>' +
      '<li><strong>Higher Engagement:</strong> Posts created with AI assistance tend to get more engagement because the AI is trained on high-performing content patterns.</li>' +
      '<li><strong>Email Efficiency:</strong> Reply to routine emails in seconds instead of minutes. The context-aware responses handle most common scenarios well.</li>' +
      '<li><strong>Consistent Quality:</strong> Even on busy days when you\'re rushing, the AI helps maintain professional, well-structured communication.</li>' +
      '</ul>' +
      '<p>This extension taught me a lot about building browser extensions that feel native while adding powerful new capabilities. The trickiest part was making the UI feel like it belongs on LinkedIn and Gmail rather than feeling bolted-on. Getting the timing right for content script injection and handling edge cases across different platforms required lots of testing and iteration.</p>',
    longDescriptionVi:
      '<p>Tiện ích Chrome này tôi xây dựng để mở rộng nền tảng AI workflow vào trình duyệt — mang hỗ trợ viết AI trực tiếp vào LinkedIn và các nền tảng email nơi mọi người làm việc cả ngày.</p>' +
      '<p><strong>Thách thức:</strong></p>' +
      '<p>Nền tảng AI chính của chúng tôi rất mạnh, nhưng người dùng phải chuyển đổi liên tục giữa công việc của họ (LinkedIn, Gmail) và nền tảng của chúng tôi. Tôi muốn loại bỏ ma sát đó bằng cách đưa AI ngay vào quy trình làm việc hiện có của họ. Mục tiêu đơn giản: để mọi người có hỗ trợ AI mà không cần rời trang họ đang làm việc.</p>' +
      '<p><strong>Những gì tôi xây dựng:</strong></p>' +
      '<ul>' +
      '<li><strong>Trình tạo bài LinkedIn:</strong> Inject nút trợ lý AI trực tiếp vào trình soạn thảo bài viết LinkedIn. Click vào, mô tả điều bạn muốn viết, chọn giọng điệu (chuyên nghiệp, thân thiện, thought-leadership), và AI tạo bài viết hoàn chỉnh. Bạn có thể tạo lại hoặc chỉnh sửa trước khi đăng.</li>' +
      '<li><strong>Trợ lý trả lời Email:</strong> Thêm gợi ý AI vào Gmail và Outlook. Khi mở email, extension phân tích nó và đưa ra các lựa chọn trả lời nhanh. Bạn có thể chọn giọng điệu trang trọng hay thân mật, và AI soạn phản hồi phù hợp ngữ cảnh dựa trên chuỗi email.</li>' +
      '<li><strong>Injection nội dung thông minh:</strong> Xây dựng content scripts phát hiện khi bạn đang soạn thảo trên LinkedIn hay trong ứng dụng email, sau đó inject giao diện AI của chúng tôi một cách liền mạch mà không phá vỡ UI gốc. Đây là phần khó vì mỗi nền tảng có cấu trúc DOM và chính sách bảo mật khác nhau.</li>' +
      '<li><strong>Kết nối API nền tảng:</strong> Kết nối extension với API backend của nền tảng AI chính. Điều này có nghĩa extension tận dụng tất cả workflows, agents và models mạnh mẽ giống như nền tảng chính — không cần hệ thống AI riêng.</li>' +
      '<li><strong>Tạo một cú click:</strong> Triển khai tạo nội dung AI tức thì với phản hồi real-time. Người dùng thấy trạng thái loading, có thể hủy giữa chừng và nhận thông báo lỗi hữu ích nếu có gì sai.</li>' +
      '<li><strong>Luồng Copy & Edit:</strong> Tạo quy trình mượt mà nơi nội dung AI xuất hiện trong modal có thể chỉnh sửa. Người dùng có thể điều chỉnh trước khi chèn vào bài viết hoặc email, duy trì toàn quyền kiểm soát nội dung cuối.</li>' +
      '</ul>' +
      '<p><strong>Triển khai Kỹ thuật:</strong></p>' +
      '<ul>' +
      '<li><strong>Kiến trúc Chrome Extension:</strong> Xây dựng với Manifest V3 sử dụng background service workers cho API calls và content scripts cho UI injection. Dùng React cho popup và modal interfaces để giữ code dễ bảo trì.</li>' +
      '<li><strong>Content Scripts đa nền tảng:</strong> Phát triển logic injection đặc thù cho LinkedIn, Gmail và Outlook. Mỗi cái có selectors và timing requirements khác nhau, nên tôi xây hệ thống phát hiện chờ đúng thời điểm để inject UI.</li>' +
      '<li><strong>Luồng xác thực:</strong> Triển khai xác thực dựa trên token an toàn đồng bộ với nền tảng chính. Người dùng đăng nhập một lần qua popup extension, và chúng tôi lưu credentials mã hóa trong Chrome storage.</li>' +
      '<li><strong>API Client với Retry Logic:</strong> Xây dựng API client mạnh mẽ xử lý lỗi mạng một cách duyên dáng với retry tự động, request queuing và thông báo lỗi rõ ràng cho người dùng.</li>' +
      '<li><strong>Quản lý State:</strong> Dùng Chrome Storage API để duy trì preferences người dùng, trạng thái xác thực và lịch sử tạo gần đây qua các phiên trình duyệt.</li>' +
      '</ul>' +
      '<p><strong>Tính năng người dùng yêu thích:</strong></p>' +
      '<ul>' +
      '<li><strong>Không chuyển đổi ngữ cảnh:</strong> Tạo nội dung AI mà không rời LinkedIn hay email. Toàn bộ quy trình diễn ra inline.</li>' +
      '<li><strong>Output tùy chỉnh:</strong> Chọn giọng điệu, độ dài và phong cách. AI thích ứng để khớp giọng nói cá nhân bạn hoặc nguyên tắc thương hiệu công ty.</li>' +
      '<li><strong>Lặp nhanh:</strong> Không thích phiên bản đầu? Tạo lại với tham số khác tức thì. Người dùng thường có được điều họ muốn trong 1-2 lần thử.</li>' +
      '<li><strong>Kiểm soát đầy đủ:</strong> Gợi ý AI là điểm khởi đầu, không phải bản nháp cuối. Bạn luôn xem xét và chỉnh sửa trước khi đăng hoặc gửi.</li>' +
      '<li><strong>Đồng bộ đa nền tảng:</strong> Nếu bạn cập nhật settings hay workflows trong nền tảng chính, chúng tự động áp dụng cho extension. Không cần cấu hình hai lần.</li>' +
      '</ul>' +
      '<p><strong>Tác động thực tế:</strong></p>' +
      '<ul>' +
      '<li><strong>Tiết kiệm thời gian:</strong> Người dùng báo cáo tạo bài LinkedIn nhanh gấp 3 lần. Điều từng mất 20 phút giờ chỉ mất 5-7 phút bao gồm tạo AI và chỉnh sửa.</li>' +
      '<li><strong>Engagement cao hơn:</strong> Bài viết tạo với hỗ trợ AI có xu hướng có nhiều tương tác hơn vì AI được train trên các mẫu nội dung hiệu suất cao.</li>' +
      '<li><strong>Hiệu quả Email:</strong> Trả lời email thông thường trong vài giây thay vì vài phút. Phản hồi nhận biết ngữ cảnh xử lý tốt hầu hết các tình huống phổ biến.</li>' +
      '<li><strong>Chất lượng nhất quán:</strong> Ngay cả những ngày bận rộn khi bạn đang vội, AI giúp duy trì giao tiếp chuyên nghiệp, có cấu trúc tốt.</li>' +
      '</ul>' +
      '<p>Extension này dạy tôi rất nhiều về xây dựng browser extensions cảm giác native trong khi thêm khả năng mạnh mẽ mới. Phần khó nhất là làm cho UI cảm giác như thuộc về LinkedIn và Gmail thay vì cảm giác gắn thêm vào. Timing đúng cho content script injection và xử lý edge cases qua các nền tảng khác nhau đòi hỏi rất nhiều testing và lặp.</p>',
    image: '/assets/project/aiagency/demo.png',
    liveUrl: 'https://chromewebstore.google.com/detail/ai-agency-extension/cndekpcbdhlhmokdiefijpkjbkiblkmb',
    technologies: [
      'JavaScript',
      'Chrome Extension API',
      'React',
      'RESTful API',
      'LinkedIn Integration',
      'Gmail API',
      'FastAPI',
      'WebSocket',
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
  {
    id: '6',
    title: 'Smart Translation Extension',
    titleVi: 'Tiện ích Dịch thuật Thông minh',
    description:
      'Chrome extension for instant text translation with YouTube subtitle hover support',
    descriptionVi:
      'Tiện ích Chrome để dịch văn bản tức thì có hỗ trợ hover phụ đề',
    longDescription:
      '<p>This extension was born from a deeply personal need — as someone constantly learning English, I found myself frustrated with clunky translation workflows that interrupted my learning flow. I wanted something seamless, instant, and designed specifically for language learners like myself.</p>' +
      '<p><strong>The Personal Challenge:</strong></p>' +
      '<p>Every time I encountered unfamiliar words while reading articles or watching YouTube videos, I had to break my concentration, copy text, switch tabs, paste into Google Translate, and switch back. This constant context-switching was killing my learning momentum. I realized I needed a tool that would let me stay in my learning zone without disruptions.</p>' +
      '<p><strong>What I Built:</strong></p>' +
      '<ul>' +
      '<li><strong>Instant Translation Tooltip:</strong> Select any text on any webpage and see translation immediately via right-click or keyboard shortcut (Ctrl+Shift+T). No tab switching, no workflow disruption.</li>' +
      '<li><strong>YouTube Subtitle Hover Translation:</strong> The feature I\'m most proud of — hover over any word in YouTube subtitles to see instant translations. This was game-changing for my English learning through video content. Two modes available: word-by-word for vocabulary building, or full sentence for contextual understanding.</li>' +
      '<li><strong>Smart Context Menu:</strong> Integrated directly into the browser\'s right-click menu for the most natural user experience possible.</li>' +
      '<li><strong>Intelligent Caching:</strong> Built caching system to remember recent translations, making repeated lookups instant and reducing API calls.</li>' +
      '<li><strong>Beautiful, Non-Intrusive UI:</strong> Designed tooltips with smooth animations, auto-positioning to stay visible, dark mode support, and copy-to-clipboard functionality — all the little details that matter when you\'re using a tool dozens of times per day.</li>' +
      '<li><strong>100% Free Forever:</strong> Integrated with MyMemory Translation API (no API key required) to ensure this tool remains accessible to all language learners, not just those who can afford premium services.</li>' +
      '</ul>' +
      '<p><strong>Technical Innovations:</strong></p>' +
      '<ul>' +
      '<li><strong>Chrome Extension Architecture:</strong> Built complete extension system with background service workers, content scripts, and popup interface following Chrome Extension Manifest V3 best practices.</li>' +
      '<li><strong>Cross-Site Injection:</strong> Developed robust content script injection that works reliably across all websites including those with strict Content Security Policies.</li>' +
      '<li><strong>YouTube Subtitle Integration:</strong> Reverse-engineered YouTube\'s subtitle rendering system to inject hover listeners without breaking native functionality — this required deep understanding of DOM manipulation and event handling.</li>' +
      '<li><strong>Performance Optimization:</strong> Implemented debounced hover detection (~300ms delay) to prevent excessive API calls while maintaining responsive feel. Smart caching reduces redundant translations by 80%+.</li>' +
      '<li><strong>Async Architecture:</strong> Leveraged modern JavaScript async/await patterns with proper error handling to ensure smooth, non-blocking translation requests.</li>' +
      '</ul>' +
      '<p><strong>Real-World Impact on My Learning:</strong></p>' +
      '<ul>' +
      '<li><strong>Seamless Flow:</strong> I can now read English articles and watch YouTube videos without ever leaving my learning zone. Translation happens in context, exactly when I need it.</li>' +
      '<li><strong>Vocabulary Building:</strong> The YouTube hover feature transformed how I learn from video content. I can quickly check unfamiliar words while following along with native speakers.</li>' +
      '<li><strong>Context Retention:</strong> By keeping translations in-place rather than switching tabs, I maintain the context of what I\'m reading or watching, leading to better comprehension and retention.</li>' +
      '<li><strong>Daily Use:</strong> This has become an indispensable tool in my daily English learning routine. I use it dozens of times every day.</li>' +
      '</ul>' +
      '<p><strong>Open Source Philosophy:</strong></p>' +
      '<p>I made this project open source because I believe good learning tools should be accessible to everyone. If my personal tool can help even one other language learner improve their skills, then sharing it was worthwhile. The code is clean, well-documented, and ready for others to learn from or extend with their own features.</p>' +
      '<p>This project represents the intersection of solving my own problems and giving back to the learning community. It\'s a reminder that the best tools often come from scratching your own itch.</p>',
    longDescriptionVi:
      '<p>Tiện ích này ra đời từ nhu cầu cá nhân sâu sắc của tôi — là người liên tục học tiếng Anh, tôi cảm thấy bực bội với quy trình dịch thuật rườm rà làm gián đoạn quá trình học. Tôi muốn có thứ gì đó liền mạch, tức thì và được thiết kế đặc biệt cho người học ngôn ngữ như tôi.</p>' +
      '<p><strong>Thách thức cá nhân:</strong></p>' +
      '<p>Mỗi khi gặp từ lạ khi đọc bài viết hoặc xem video YouTube, tôi phải ngắt tập trung, copy văn bản, chuyển tab, paste vào Google Dịch, rồi quay lại. Việc chuyển đổi ngữ cảnh liên tục này đang phá hủy động lực học của tôi. Tôi nhận ra mình cần công cụ giúp tôi ở trong vùng học mà không bị gián đoạn.</p>' +
      '<p><strong>Những gì tôi xây dựng:</strong></p>' +
      '<ul>' +
      '<li><strong>Tooltip dịch tức thì:</strong> Chọn bất kỳ văn bản nào trên bất kỳ trang web nào và thấy bản dịch ngay lập tức qua chuột phải hoặc phím tắt (Ctrl+Shift+T). Không chuyển tab, không gián đoạn quy trình.</li>' +
      '<li><strong>Dịch phụ đề YouTube khi hover:</strong> Tính năng tôi tự hào nhất — hover chuột lên bất kỳ từ nào trong phụ đề YouTube để xem bản dịch tức thì. Đây là bước ngoặt cho việc học tiếng Anh qua nội dung video của tôi. Hai chế độ khả dụng: từng từ để xây dựng vốn từ, hoặc cả câu để hiểu ngữ cảnh.</li>' +
      '<li><strong>Menu ngữ cảnh thông minh:</strong> Tích hợp trực tiếp vào menu chuột phải của trình duyệt để có trải nghiệm người dùng tự nhiên nhất có thể.</li>' +
      '<li><strong>Caching thông minh:</strong> Xây dựng hệ thống caching để nhớ các bản dịch gần đây, làm cho tra cứu lặp lại trở nên tức thì và giảm lượng gọi API.</li>' +
      '<li><strong>UI đẹp, không gây phiền:</strong> Thiết kế tooltip với animation mượt mà, tự động định vị để luôn hiển thị, hỗ trợ dark mode và chức năng copy vào clipboard — tất cả những chi tiết nhỏ quan trọng khi bạn sử dụng công cụ hàng chục lần mỗi ngày.</li>' +
      '<li><strong>Miễn phí 100% mãi mãi:</strong> Tích hợp với MyMemory Translation API (không cần API key) để đảm bảo công cụ này luôn sẵn có cho mọi người học ngôn ngữ, không chỉ những người có khả năng trả tiền cho dịch vụ cao cấp.</li>' +
      '</ul>' +
      '<p><strong>Đổi mới kỹ thuật:</strong></p>' +
      '<ul>' +
      '<li><strong>Kiến trúc Chrome Extension:</strong> Xây dựng hệ thống extension hoàn chỉnh với background service workers, content scripts và giao diện popup tuân theo best practices của Chrome Extension Manifest V3.</li>' +
      '<li><strong>Injection đa trang web:</strong> Phát triển content script injection mạnh mẽ hoạt động đáng tin cậy trên tất cả websites bao gồm những trang có Content Security Policies nghiêm ngặt.</li>' +
      '<li><strong>Tích hợp phụ đề YouTube:</strong> Reverse-engineer hệ thống render phụ đề của YouTube để inject hover listeners mà không phá vỡ chức năng gốc — điều này đòi hỏi hiểu biết sâu về thao tác DOM và xử lý sự kiện.</li>' +
      '<li><strong>Tối ưu hiệu suất:</strong> Triển khai hover detection có debounce (~300ms delay) để ngăn gọi API quá mức trong khi vẫn duy trì cảm giác responsive. Caching thông minh giảm 80%+ bản dịch trùng lặp.</li>' +
      '<li><strong>Kiến trúc Async:</strong> Tận dụng mẫu async/await JavaScript hiện đại với xử lý lỗi đúng cách để đảm bảo các request dịch thuật mượt mà, không chặn.</li>' +
      '</ul>' +
      '<p><strong>Tác động thực tế lên việc học của tôi:</strong></p>' +
      '<ul>' +
      '<li><strong>Luồng liền mạch:</strong> Giờ đây tôi có thể đọc bài viết tiếng Anh và xem video YouTube mà không bao giờ rời khỏi vùng học. Dịch thuật diễn ra trong ngữ cảnh, chính xác khi tôi cần.</li>' +
      '<li><strong>Xây dựng vốn từ:</strong> Tính năng hover YouTube đã biến đổi cách tôi học từ nội dung video. Tôi có thể nhanh chóng kiểm tra từ lạ trong khi theo dõi người nói bản ngữ.</li>' +
      '<li><strong>Giữ ngữ cảnh:</strong> Bằng cách giữ bản dịch tại chỗ thay vì chuyển tab, tôi duy trì ngữ cảnh của những gì đang đọc hoặc xem, dẫn đến hiểu và ghi nhớ tốt hơn.</li>' +
      '<li><strong>Sử dụng hàng ngày:</strong> Đây đã trở thành công cụ không thể thiếu trong thói quen học tiếng Anh hàng ngày của tôi. Tôi sử dụng nó hàng chục lần mỗi ngày.</li>' +
      '</ul>' +
      '<p><strong>Triết lý mã nguồn mở:</strong></p>' +
      '<p>Tôi làm dự án này mã nguồn mở vì tin rằng công cụ học tốt phải có sẵn cho mọi người. Nếu công cụ cá nhân của tôi có thể giúp dù chỉ một người học ngôn ngữ khác cải thiện kỹ năng, thì việc chia sẻ nó là xứng đáng. Code sạch, tài liệu tốt và sẵn sàng cho người khác học từ hoặc mở rộng với tính năng riêng.</p>' +
      '<p>Dự án này đại diện cho giao điểm giữa việc giải quyết vấn đề riêng của tôi và đóng góp lại cho cộng đồng học tập. Nó là lời nhắc nhở rằng những công cụ tốt nhất thường đến từ việc gãi ngứa chính mình.</p>',
    image: '/assets/project/translate/demo.png',
    githubUrl: 'https://github.com/vinhbestever/extension-translate',
    technologies: [
      'JavaScript',
      'Chrome Extension API',
      'HTML/CSS',
      'MyMemory API',
      'DOM Manipulation',
      'Async/Await',
    ],
    category: 'personal',
    featured: false,
  },
];
