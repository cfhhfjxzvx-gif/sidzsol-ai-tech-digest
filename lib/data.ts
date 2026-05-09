import { Article, Category, WeeklyDigest } from './types';

export const categories: Category[] = [
  'AI Tools',
  'Tech News',
  'Productivity',
  'Developer News',
  'Startups',
  'Gadgets',
  'Content Creation',
];

export const articles: Article[] = [
  {
    id: '1',
    slug: 'claude-4-redefines-ai-reasoning',
    title: 'Claude 4 Redefines AI Reasoning: What Developers Need to Know',
    summary: 'Anthropic\'s latest model pushes the boundaries of AI reasoning with breakthrough capabilities in code generation and complex problem solving.',
    aiSummary: 'Claude 4 from Anthropic introduces significantly improved reasoning capabilities, excelling at multi-step logic, code generation, and nuanced analysis. Developers can leverage its 200K context window and enhanced tool use for building sophisticated AI-powered applications.',
    content: 'Anthropic has released Claude 4, marking a significant leap in AI reasoning capabilities. The model demonstrates remarkable improvements in code generation, mathematical reasoning, and complex multi-step problem solving. With a 200K token context window and enhanced tool-use capabilities, Claude 4 positions itself as a formidable option for developers building AI-powered applications. Early benchmarks show it outperforming competitors in several key areas including code correctness, instruction following, and creative writing tasks.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
    category: 'AI Tools',
    publishedAt: '2026-05-09T10:00:00Z',
    readTime: 5,
    trending: true,
    featured: true,
  },
  {
    id: '2',
    slug: 'apple-vision-pro-2-announced',
    title: 'Apple Vision Pro 2 Arrives with Neural Engine Breakthrough',
    summary: 'Apple\'s second-generation spatial computing headset brings dramatic improvements in comfort, performance, and developer tools.',
    aiSummary: 'Apple Vision Pro 2 features a next-gen Neural Engine with 40% faster ML processing, 30% weight reduction, and new hand-tracking fidelity. The $2,499 starting price makes spatial computing more accessible while introducing powerful new APIs for developers.',
    content: 'Apple has officially unveiled the Vision Pro 2, its second-generation spatial computing headset. The device features a redesigned form factor that is 30% lighter, a next-generation Neural Engine delivering 40% faster machine learning processing, and significantly improved hand-tracking fidelity. Priced at $2,499, it represents a more accessible entry point into Apple\'s spatial computing ecosystem. New developer APIs enable more immersive experiences, and the ecosystem has grown to over 10,000 spatial apps.',
    imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80',
    source: 'The Verge',
    sourceUrl: 'https://theverge.com',
    category: 'Gadgets',
    publishedAt: '2026-05-09T08:30:00Z',
    readTime: 4,
    trending: true,
    featured: false,
  },
  {
    id: '3',
    slug: 'github-copilot-workspace-launch',
    title: 'GitHub Copilot Workspace: AI-Native Development Environment',
    summary: 'GitHub launches a fully AI-integrated development environment that can plan, implement, and test code changes from natural language specifications.',
    aiSummary: 'GitHub Copilot Workspace is a new AI-native development environment that turns natural language issue descriptions into complete implementation plans, code changes, and test suites. It integrates directly with repositories and can handle complex multi-file refactoring tasks autonomously.',
    content: 'GitHub has launched Copilot Workspace, a revolutionary AI-native development environment that transforms how developers work with code. Starting from a natural language issue description, Workspace can analyze the codebase, create a step-by-step implementation plan, generate code changes across multiple files, and even write and run tests. The tool integrates seamlessly with existing GitHub repositories and supports complex refactoring tasks that span entire codebases.',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
    source: 'GitHub Blog',
    sourceUrl: 'https://github.blog',
    category: 'Developer News',
    publishedAt: '2026-05-08T15:00:00Z',
    readTime: 6,
    trending: true,
    featured: false,
  },
  {
    id: '4',
    slug: 'notion-ai-agents-productivity',
    title: 'Notion AI Agents Can Now Automate Your Entire Workflow',
    summary: 'Notion\'s new AI agents can monitor databases, trigger actions, and automate complex workflows without leaving the platform.',
    aiSummary: 'Notion introduces autonomous AI agents that can monitor workspace databases, trigger automated workflows, draft documents, send notifications, and integrate with external tools. These agents learn from your workspace patterns to become more effective over time.',
    content: 'Notion has unveiled its most ambitious AI feature yet: autonomous AI agents that can monitor your workspace, trigger automated workflows, and handle complex multi-step tasks. These agents can draft documents based on database changes, send notifications when conditions are met, and integrate with external tools like Slack, Linear, and GitHub. The agents learn from your workspace patterns, becoming more effective over time at handling routine tasks and surfacing relevant information.',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    source: 'Product Hunt',
    sourceUrl: 'https://producthunt.com',
    category: 'Productivity',
    publishedAt: '2026-05-08T12:00:00Z',
    readTime: 4,
    trending: false,
    featured: false,
  },
  {
    id: '5',
    slug: 'openai-sora-video-generation',
    title: 'OpenAI Sora 2.0: Cinematic AI Video Generation Goes Mainstream',
    summary: 'Sora 2.0 delivers unprecedented video quality with precise motion control and style consistency across scenes.',
    aiSummary: 'OpenAI\'s Sora 2.0 generates cinema-quality videos up to 2 minutes long with consistent characters, precise camera movements, and photorealistic physics. New APIs enable developers to build video generation into their apps with fine-grained control over style and motion.',
    content: 'OpenAI has released Sora 2.0, a major upgrade to its AI video generation model. The new version produces cinema-quality videos up to two minutes long, with consistent character appearances across scenes, precise camera control, and remarkably realistic physics simulations. The model now supports style transfer, allowing creators to maintain visual consistency across projects. New developer APIs provide fine-grained control over every aspect of generation, from camera angles to lighting conditions.',
    imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
    source: 'Wired',
    sourceUrl: 'https://wired.com',
    category: 'Content Creation',
    publishedAt: '2026-05-08T09:00:00Z',
    readTime: 5,
    trending: true,
    featured: false,
  },
  {
    id: '6',
    slug: 'y-combinator-ai-startup-trends',
    title: 'Y Combinator S26: 60% of Startups Are AI-First',
    summary: 'The latest YC batch reveals a dramatic shift toward AI-native companies building vertical solutions across industries.',
    aiSummary: 'Y Combinator\'s Summer 2026 batch features 60% AI-first startups, up from 40% last year. Key trends include AI agents for specific industries, developer tools with embedded AI, and startups replacing entire SaaS categories with AI-native alternatives.',
    content: 'Y Combinator\'s Summer 2026 batch paints a vivid picture of the startup landscape: 60% of companies are AI-first, a dramatic increase from 40% in the previous year. The batch reveals several key trends: vertical AI agents designed for specific industries like healthcare, legal, and real estate; developer tools with deeply embedded AI capabilities; and ambitious startups aiming to replace entire SaaS categories with AI-native alternatives that are faster, cheaper, and more intuitive.',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
    category: 'Startups',
    publishedAt: '2026-05-07T14:00:00Z',
    readTime: 7,
    trending: false,
    featured: false,
  },
  {
    id: '7',
    slug: 'rust-overtakes-go-cloud-development',
    title: 'Rust Overtakes Go as the Fastest-Growing Cloud Development Language',
    summary: 'Rust adoption in cloud infrastructure has surged 150% year-over-year as major platforms embrace memory-safe systems programming.',
    aiSummary: 'Rust has surpassed Go in year-over-year growth for cloud development, driven by its memory safety guarantees and performance. Major cloud providers now offer first-class Rust SDKs, and serverless platforms report 40% cost savings from Rust-based functions.',
    content: 'Rust has officially overtaken Go as the fastest-growing language for cloud development, according to the latest Stack Overflow and GitHub surveys. Adoption has surged 150% year-over-year, driven by Rust\'s memory safety guarantees, zero-cost abstractions, and excellent performance characteristics. Major cloud providers including AWS, Azure, and GCP now offer first-class Rust SDKs, and serverless platforms report that Rust-based functions deliver up to 40% cost savings compared to equivalent Node.js implementations.',
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80',
    source: 'InfoQ',
    sourceUrl: 'https://infoq.com',
    category: 'Developer News',
    publishedAt: '2026-05-07T11:00:00Z',
    readTime: 6,
    trending: false,
    featured: false,
  },
  {
    id: '8',
    slug: 'perplexity-enterprise-ai-search',
    title: 'Perplexity Launches Enterprise AI Search for Knowledge Management',
    summary: 'Perplexity\'s enterprise offering connects to company data sources for instant AI-powered answers with full citation transparency.',
    aiSummary: 'Perplexity Enterprise connects to Confluence, Notion, Slack, Google Drive, and custom databases to provide instant AI-powered answers with full source citations. It features role-based access, audit trails, and SOC 2 compliance for enterprise deployment.',
    content: 'Perplexity has launched its Enterprise AI Search platform, designed to transform how companies access and manage internal knowledge. The platform connects to popular tools like Confluence, Notion, Slack, Google Drive, and custom databases to provide instant, AI-powered answers with full citation transparency. Enterprise features include role-based access controls, comprehensive audit trails, and SOC 2 Type II compliance. Early customers report a 60% reduction in time spent searching for internal information.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    source: 'Bloomberg',
    sourceUrl: 'https://bloomberg.com',
    category: 'AI Tools',
    publishedAt: '2026-05-07T08:00:00Z',
    readTime: 5,
    trending: false,
    featured: false,
  },
  {
    id: '9',
    slug: 'samsung-galaxy-ring-2-health-ai',
    title: 'Samsung Galaxy Ring 2 Brings AI Health Insights to Your Finger',
    summary: 'The next-gen Galaxy Ring adds continuous blood pressure monitoring and AI-powered health predictions with clinical-grade accuracy.',
    aiSummary: 'Samsung Galaxy Ring 2 introduces FDA-cleared continuous blood pressure monitoring, AI-driven health risk predictions, and 7-day battery life. The ring uses advanced sensors for sleep staging, stress monitoring, and early illness detection.',
    content: 'Samsung has announced the Galaxy Ring 2, featuring FDA-cleared continuous blood pressure monitoring, AI-driven health risk predictions, and an impressive 7-day battery life. The ring uses an array of advanced sensors including PPG, temperature, and bioimpedance to deliver clinical-grade sleep staging, real-time stress monitoring, and early illness detection. Samsung\'s AI health engine analyzes long-term data patterns to provide personalized health insights and risk assessments.',
    imageUrl: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80',
    source: 'CNET',
    sourceUrl: 'https://cnet.com',
    category: 'Gadgets',
    publishedAt: '2026-05-06T16:00:00Z',
    readTime: 4,
    trending: false,
    featured: false,
  },
  {
    id: '10',
    slug: 'midjourney-v7-photorealism',
    title: 'Midjourney V7 Achieves True Photorealism with Physics-Aware Rendering',
    summary: 'The latest Midjourney model understands real-world physics, producing images indistinguishable from professional photography.',
    aiSummary: 'Midjourney V7 introduces physics-aware rendering that understands light, shadow, reflection, and material properties. The model produces photorealistic images with accurate anatomy, consistent lighting, and fine detail that rival professional studio photography.',
    content: 'Midjourney has released V7, achieving what many considered the holy grail of AI image generation: true photorealism. The model introduces physics-aware rendering that understands how light interacts with different materials, producing images with accurate reflections, shadows, and subsurface scattering. Human anatomy is now rendered with remarkable accuracy, and the model can maintain consistent lighting conditions across complex multi-element scenes. The results are often indistinguishable from professional studio photography.',
    imageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80',
    source: 'Ars Technica',
    sourceUrl: 'https://arstechnica.com',
    category: 'Content Creation',
    publishedAt: '2026-05-06T10:00:00Z',
    readTime: 5,
    trending: true,
    featured: false,
  },
  {
    id: '11',
    slug: 'linear-raises-series-c',
    title: 'Linear Raises $150M Series C to Build AI-Powered Project Management',
    summary: 'The developer-loved project management tool secures major funding to expand its AI capabilities and enterprise features.',
    aiSummary: 'Linear has raised $150M at a $2B valuation to expand its AI-powered project management platform. New features include AI sprint planning, automated issue triage, and predictive velocity tracking for engineering teams.',
    content: 'Linear, the project management tool beloved by developers, has raised $150 million in Series C funding at a $2 billion valuation. The funding will accelerate the development of AI-powered features including automated sprint planning, intelligent issue triage and routing, and predictive velocity tracking. Linear\'s CEO announced plans to expand into enterprise markets with features like cross-team dependency mapping, advanced analytics, and deeper integrations with development tools.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    source: 'Forbes',
    sourceUrl: 'https://forbes.com',
    category: 'Startups',
    publishedAt: '2026-05-05T13:00:00Z',
    readTime: 4,
    trending: false,
    featured: false,
  },
  {
    id: '12',
    slug: 'cursor-ide-revolution',
    title: 'Cursor IDE 2.0: The AI-First Code Editor That\'s Changing Everything',
    summary: 'Cursor\'s major update brings multi-file editing, codebase-aware suggestions, and autonomous debugging capabilities.',
    aiSummary: 'Cursor IDE 2.0 introduces multi-file AI editing, deep codebase understanding for contextual suggestions, and autonomous debugging that can identify, explain, and fix bugs. The update makes it the most capable AI-first development environment available.',
    content: 'Cursor has released version 2.0 of its AI-first code editor, introducing features that blur the line between human and AI-assisted development. The update brings multi-file AI editing capabilities, deep codebase understanding for highly contextual suggestions, and an autonomous debugging mode that can identify, explain, and fix bugs with minimal human intervention. The editor now supports custom model configurations, allowing teams to use their own fine-tuned models for domain-specific coding tasks.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    source: 'Dev.to',
    sourceUrl: 'https://dev.to',
    category: 'Developer News',
    publishedAt: '2026-05-05T09:00:00Z',
    readTime: 6,
    trending: true,
    featured: false,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Category): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getTrendingArticles(): Article[] {
  return articles.filter((a) => a.trending);
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((a) => a.featured);
}

export function getRelatedArticles(articleId: string, limit = 3): Article[] {
  const article = articles.find((a) => a.id === articleId);
  if (!article) return [];
  return articles
    .filter((a) => a.id !== articleId && a.category === article.category)
    .slice(0, limit);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.source.toLowerCase().includes(q)
  );
}

export function getWeeklyDigest(): WeeklyDigest {
  return {
    id: 'w19-2026',
    weekNumber: 19,
    year: 2026,
    title: 'The AI Acceleration Issue',
    description:
      'This week saw groundbreaking developments in AI reasoning, spatial computing, and developer tooling. Here are the stories that defined the week.',
    articles: articles.slice(0, 8),
    publishedAt: '2026-05-09T00:00:00Z',
  };
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
