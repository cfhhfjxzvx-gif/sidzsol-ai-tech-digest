import { Article, Category, WeeklyDigest } from './types';

export const categories: Category[] = [
  'Startup Growth',
  'AI Business',
  'Founder Lessons',
  'Product Strategy',
  'Funding & Finance',
  'Builder Tools',
  'Scaling & Ops',
];

export const articles: Article[] = [
  {
    id: '1',
    slug: 'one-person-billion-dollar-companies-ai',
    title: 'The Rise of One-Person Billion-Dollar Companies Powered by AI',
    summary: 'A new class of solo founders is leveraging AI agents, automation, and no-code infrastructure to build companies that previously required 50+ employees.',
    aiSummary: 'AI is enabling a radical shift in startup economics. Solo founders are now building products generating $10M+ ARR with near-zero headcount by combining AI agents for customer support, automated code deployment, AI-driven marketing, and self-serve onboarding. The traditional venture playbook of "hire fast, scale headcount" is being replaced by "automate everything, stay lean."',
    content: 'The startup world is witnessing an unprecedented transformation. Companies like Midjourney ($200M+ revenue, ~40 employees), Cursor AI, and a growing wave of indie SaaS products are proving that massive revenue doesn\'t require massive teams. The key enabler? AI agents that handle customer support, code generation tools that 10x developer productivity, and automation platforms that eliminate operational overhead. This trend is reshaping how VCs evaluate startups—lean teams with high margins are now preferred over bloated organizations burning through capital. The implications for early-stage founders are clear: before hiring, ask whether an AI agent or automation workflow can do the job instead.',
    founderTakeaway: 'Before your next hire, audit every role against AI alternatives. Tools like AI support agents, automated QA, and AI-powered analytics can replace 3-5 FTEs. Stay lean, ship fast, and let margins compound.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    source: 'a16z',
    sourceUrl: 'https://a16z.com',
    category: 'AI Business',
    publishedAt: '2026-05-14T09:00:00Z',
    readTime: 7,
    trending: true,
    featured: true,
  },
  {
    id: '2',
    slug: 'what-founders-learn-from-cursor-ai-growth',
    title: 'What Founders Can Learn from Cursor AI\'s Explosive Growth',
    summary: 'Cursor went from $0 to $100M ARR in under 18 months. Here\'s the product strategy and distribution playbook that made it happen.',
    aiSummary: 'Cursor AI\'s growth is a masterclass in product-led growth for developer tools. By forking VS Code (leveraging existing muscle memory), offering a generous free tier, and building features that create immediate "aha moments," they achieved organic virality among developers. Their pricing strategy—free for individuals, paid for teams—created a bottom-up enterprise motion that bypassed traditional sales cycles.',
    content: 'Cursor AI\'s trajectory from launch to $100M ARR is one of the most studied growth stories in recent startup history. The company made several counterintuitive decisions: they built on top of VS Code rather than creating a new editor from scratch, they gave away powerful features for free to build habit, and they focused relentlessly on reducing time-to-value. Every new user experienced AI-assisted coding within 30 seconds of installation. The lesson for founders? Distribution beats differentiation. By meeting developers where they already were (VS Code), Cursor eliminated the biggest barrier to adoption. Their team of under 50 people outpaced Microsoft\'s own Copilot in developer satisfaction scores.',
    founderTakeaway: 'Study Cursor\'s playbook: meet users where they are, minimize time-to-value, and make your free tier good enough to create habits. Bottom-up adoption beats top-down sales for developer and prosumer tools.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
    category: 'Founder Lessons',
    publishedAt: '2026-05-13T14:00:00Z',
    readTime: 6,
    trending: true,
    featured: false,
  },
  {
    id: '3',
    slug: 'ai-agents-replacing-startup-workflows',
    title: 'How AI Agents Are Replacing Repetitive Startup Workflows',
    summary: 'From customer onboarding to invoice processing, AI agents are automating the operational drudgery that drains early-stage teams.',
    aiSummary: 'The latest generation of AI agents can now handle multi-step workflows autonomously: processing support tickets, qualifying leads, generating reports, managing social media, and even conducting initial sales calls. Startups using agent-based automation report 60-80% reduction in operational costs and 3x faster response times to customers.',
    content: 'AI agents have evolved beyond simple chatbots into autonomous workflow engines. Companies like Relevance AI, CrewAI, and LangGraph are enabling startups to build custom agent pipelines that handle entire business processes. A typical early-stage startup might deploy agents for: inbound lead qualification (saving 20 hours/week), customer support triage (handling 80% of tickets without human intervention), content repurposing (turning one blog post into 15 social media posts), and financial reconciliation. The key shift is that these agents don\'t just assist—they execute end-to-end, only escalating edge cases to humans. For resource-constrained startups, this is transformative.',
    founderTakeaway: 'Map your team\'s repetitive tasks this week. Start with one agent deployment—customer support or lead qualification typically yields the fastest ROI. Use frameworks like CrewAI or LangGraph to prototype in days, not months.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    source: 'The Rundown AI',
    sourceUrl: 'https://therundown.ai',
    category: 'Scaling & Ops',
    publishedAt: '2026-05-13T10:00:00Z',
    readTime: 5,
    trending: true,
    featured: false,
  },
  {
    id: '4',
    slug: 'yc-s26-ai-first-startup-trends',
    title: 'Y Combinator S26 Batch: The 5 Startup Patterns That Dominated',
    summary: 'Vertical AI agents, AI-native SaaS replacements, and infrastructure picks-and-shovels defined YC\'s most competitive batch ever.',
    aiSummary: 'YC S26 saw 65% AI-first startups. Five dominant patterns emerged: (1) vertical AI agents replacing entire job functions in healthcare, legal, and finance, (2) AI-native SaaS replacing legacy tools at 10x lower cost, (3) infrastructure for fine-tuning and deploying custom models, (4) developer tools with embedded AI, and (5) AI-powered marketplaces connecting supply and demand more efficiently.',
    content: 'Y Combinator\'s Summer 2026 batch was the most AI-heavy in history, with 65% of companies building AI-first products. The most funded pattern was vertical AI agents—startups building autonomous agents for specific industries like real estate transaction management, clinical trial matching, and legal document review. These startups are winning because they combine domain expertise with AI capabilities, creating moats that horizontal AI tools can\'t easily replicate. The second major trend was "AI-native SaaS"—startups rebuilding established software categories from scratch with AI at the core, often at 10x lower price points. Legacy SaaS companies charging $50-100/user/month are being disrupted by AI-first alternatives at $10-20/user/month with better functionality.',
    founderTakeaway: 'The biggest opportunity isn\'t building another AI wrapper—it\'s picking a specific industry, understanding its workflows deeply, and building an AI agent that replaces an entire job function. Domain expertise is the new moat.',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    source: 'Y Combinator',
    sourceUrl: 'https://ycombinator.com',
    category: 'Funding & Finance',
    publishedAt: '2026-05-12T15:00:00Z',
    readTime: 8,
    trending: true,
    featured: false,
  },
  {
    id: '5',
    slug: 'small-ai-teams-scaling-faster',
    title: 'Why Small AI Teams Are Scaling Faster Than Traditional Startups',
    summary: 'Teams of 3-5 engineers are outperforming 50-person organizations by leveraging AI-augmented development and ruthless prioritization.',
    aiSummary: 'The data is clear: small, AI-augmented teams are shipping faster and achieving better unit economics than larger organizations. Companies with fewer than 10 employees are reaching $1M+ ARR at 2x the rate of companies with 20+ employees. The secret? AI coding assistants that multiply individual output, automated testing pipelines, and a culture of shipping over meetings.',
    content: 'A new study analyzing 500 startups founded between 2024-2026 reveals a striking pattern: companies with fewer than 10 employees are reaching $1M ARR at twice the rate of companies with 20+ employees. The driving factors include AI-augmented development (developers using AI tools ship 3-5x more features), automated CI/CD pipelines that eliminate the need for dedicated DevOps teams, and a cultural advantage—small teams have fewer meetings, less politics, and faster decision cycles. Notable examples include companies like Photoroom (reached $100M+ revenue with ~30 people) and several YC companies hitting $5M ARR with teams of 3-5. The implications are profound: the optimal startup team size is shrinking, and founders should resist the urge to hire until absolutely necessary.',
    founderTakeaway: 'Resist premature hiring. Each new hire adds communication overhead that compounds. Use AI tools to 3-5x your existing team\'s output before adding headcount. Target $500K-$1M ARR per employee as your efficiency benchmark.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    source: 'Lenny\'s Newsletter',
    sourceUrl: 'https://lennysnewsletter.com',
    category: 'Startup Growth',
    publishedAt: '2026-05-12T08:00:00Z',
    readTime: 6,
    trending: true,
    featured: false,
  },
  {
    id: '6',
    slug: 'best-ai-infrastructure-tools-2026',
    title: 'The Essential AI Infrastructure Stack for Startups in 2026',
    summary: 'The definitive guide to the tools and platforms early-stage startups are using to build, deploy, and scale AI products without burning runway.',
    aiSummary: 'The AI infrastructure landscape has matured significantly. The winning stack for startups includes: Vercel/Railway for deployment, Supabase for backend, Cursor/Windsurf for AI-assisted development, Resend for transactional email, PostHog for analytics, and a mix of OpenAI/Anthropic/open-source models depending on use case. Total cost for a production-grade AI product: under $500/month until 10K users.',
    content: 'Building an AI product in 2026 is dramatically cheaper and faster than even two years ago. The modern startup stack has converged around a set of best-in-class tools that optimize for developer experience and cost efficiency. For AI model access, most startups use a multi-model approach: OpenAI for general-purpose tasks, Anthropic for complex reasoning, and fine-tuned open-source models (Llama, Mistral) for cost-sensitive production workloads. Vector databases like Pinecone and Weaviate handle RAG pipelines, while frameworks like LangChain and LlamaIndex provide the orchestration layer. On the infrastructure side, Vercel and Railway have become the default deployment platforms, with Supabase replacing Firebase for most use cases. The total cost to run a production AI application serving 10,000 users is now under $500/month—a fraction of what it cost in 2024.',
    founderTakeaway: 'Don\'t over-engineer your stack early. Start with managed services (Vercel + Supabase + OpenAI API), validate your idea, then optimize costs by moving to open-source models and self-hosted infrastructure only when unit economics demand it.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    source: 'Morning Brew',
    sourceUrl: 'https://morningbrew.com',
    category: 'Builder Tools',
    publishedAt: '2026-05-11T12:00:00Z',
    readTime: 9,
    trending: false,
    featured: false,
  },
  {
    id: '7',
    slug: 'automation-reducing-operational-costs',
    title: 'How Founders Are Using Automation to Cut Operational Costs by 70%',
    summary: 'Real case studies of startups that automated finance, HR, customer success, and marketing operations—and the exact tools they used.',
    aiSummary: 'Three startup case studies reveal how automation slashed operational costs: a B2B SaaS company automated 80% of customer onboarding with AI agents, saving $15K/month. A D2C brand used AI-generated content and automated ad optimization to cut marketing spend by 60%. A fintech startup automated compliance and reporting, eliminating 2 full-time roles.',
    content: 'Operational efficiency isn\'t glamorous, but it\'s the difference between startups that survive and those that burn out. Three detailed case studies illustrate the power of systematic automation: Case 1: A B2B SaaS company with 500 customers automated their entire customer onboarding flow using a custom AI agent built on GPT-4. The agent conducts welcome calls, configures accounts, provides training, and handles the first 30 days of support—saving $15K/month and improving NPS scores by 25 points. Case 2: A D2C e-commerce brand replaced their 3-person content team with an AI content pipeline that generates product descriptions, social media posts, and email campaigns. Combined with automated ad bidding, they reduced marketing costs by 60% while increasing conversion rates. Case 3: A fintech startup built automated compliance monitoring and regulatory reporting, eliminating two full-time compliance roles and reducing reporting time from 2 weeks to 2 hours.',
    founderTakeaway: 'Start by calculating the true cost of each operational function (salaries + tools + management overhead). Then evaluate: can an AI agent + automation workflow handle 80% of this? If yes, build it before hiring.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    source: 'a16z',
    sourceUrl: 'https://a16z.com',
    category: 'Scaling & Ops',
    publishedAt: '2026-05-11T09:00:00Z',
    readTime: 7,
    trending: false,
    featured: false,
  },
  {
    id: '8',
    slug: 'pre-funding-startup-focus-areas',
    title: 'What Early-Stage Startups Should Focus on Before Raising Funding',
    summary: 'The pre-seed checklist that top accelerators recommend: validate demand, build an MVP with paying users, and prove you can acquire customers cheaply.',
    aiSummary: 'Before raising funding, founders should focus on: (1) customer discovery—talk to 50+ potential users, (2) building a functional MVP in under 4 weeks using AI tools, (3) getting 10 paying customers (not free users), (4) proving a repeatable acquisition channel, and (5) documenting your unfair advantage. Most investors now expect $5-10K MRR before writing pre-seed checks.',
    content: 'The fundraising landscape has shifted dramatically. Investors in 2026 expect more traction at earlier stages than ever before. The bar for pre-seed is now what Series A looked like five years ago. Here\'s the playbook top accelerators recommend: First, conduct rigorous customer discovery. Talk to at least 50 potential users before writing a line of code. Understand their pain points, current solutions, and willingness to pay. Second, build a functional MVP in 2-4 weeks using AI-assisted development tools. If it takes longer, your scope is too large. Third—and this is critical—get 10 paying customers. Free users prove nothing; paying customers validate real demand. Fourth, identify and prove at least one repeatable customer acquisition channel. Whether it\'s content marketing, cold outreach, or product-led growth, you need evidence that you can find and convert customers systematically. Finally, articulate your unfair advantage clearly. Why will you win? What do you know that others don\'t?',
    founderTakeaway: 'Stop building in stealth. Get 10 paying customers before your pitch deck. Use AI coding tools to build your MVP in 2-4 weeks. Document everything—investors want to see the journey, not just the destination.',
    imageUrl: 'https://images.unsplash.com/photo-1553729459-uj4589c2c8h7?w=800&q=80',
    source: 'Y Combinator',
    sourceUrl: 'https://ycombinator.com',
    category: 'Funding & Finance',
    publishedAt: '2026-05-10T14:00:00Z',
    readTime: 6,
    trending: false,
    featured: false,
  },
  {
    id: '9',
    slug: 'ai-saas-pricing-strategies',
    title: 'The New Playbook for AI SaaS Pricing: Usage-Based vs. Seat-Based',
    summary: 'How AI-first startups are rethinking pricing models to capture more value while keeping customers happy.',
    aiSummary: 'Traditional per-seat SaaS pricing breaks down when AI does the work of multiple employees. Leading AI startups are adopting hybrid models: a base platform fee plus usage-based pricing tied to outcomes (tasks completed, documents processed, queries answered). This aligns incentives—customers pay for value received, and startups capture upside as usage grows.',
    content: 'The shift from seat-based to usage-based pricing is one of the most consequential changes in SaaS economics. When an AI agent can do the work of 5 employees, charging per-seat undervalues the product. But pure usage-based pricing creates unpredictable bills that enterprise buyers hate. The winning approach in 2026 is a hybrid model: a base platform fee (providing revenue predictability) plus a usage component tied to meaningful outcomes. For example, an AI legal review tool might charge $500/month base plus $2 per document reviewed. An AI customer support platform might charge $300/month plus $0.50 per ticket resolved. This model has three advantages: it aligns pricing with customer value, it creates natural expansion revenue as customers use more, and it provides a pricing floor that ensures profitability. Startups using this model report 140% net revenue retention on average.',
    founderTakeaway: 'If your AI product replaces human labor, don\'t price per seat—price per outcome. Start with a base fee for predictability plus usage pricing for upside. Aim for pricing that\'s 20-30% of the cost your product replaces.',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    source: 'Lenny\'s Newsletter',
    sourceUrl: 'https://lennysnewsletter.com',
    category: 'Product Strategy',
    publishedAt: '2026-05-10T10:00:00Z',
    readTime: 6,
    trending: true,
    featured: false,
  },
  {
    id: '10',
    slug: 'creator-economy-ai-tools-2026',
    title: 'The Creator Economy\'s AI Revolution: Tools Founders Are Building',
    summary: 'From AI video editors to autonomous content pipelines, the creator economy is the fastest-growing AI startup vertical of 2026.',
    aiSummary: 'Creator economy AI tools represent a $15B+ market opportunity. The most successful startups in this space are building: AI video editors that cut production time by 90%, content repurposing engines that turn one piece into 20+ formats, AI-powered audience analytics, and automated sponsorship matching platforms. Creators are willing to pay premium prices for tools that save them time.',
    content: 'The creator economy has become one of the most lucrative verticals for AI startups. With over 200 million creators worldwide and growing, the demand for AI-powered creation tools is insatiable. The winners in this space are building tools that solve the creator\'s biggest constraint: time. AI video editors like Descript and newer entrants can now edit a 30-minute video in under 5 minutes. Content repurposing engines automatically transform a YouTube video into blog posts, Twitter threads, LinkedIn carousels, and TikTok clips. AI audience analytics tools predict which content will perform best before it\'s published. And automated sponsorship platforms match creators with brands based on audience overlap and engagement patterns. The key insight for founders: creators have high willingness to pay (often $50-200/month per tool) and low switching costs, making this a market where product quality wins.',
    founderTakeaway: 'The creator economy is underserved by AI tooling. Focus on one specific creator pain point (editing, distribution, monetization) and build a 10x better solution. Creators talk to each other—great products grow through word of mouth.',
    imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
    source: 'Morning Brew',
    sourceUrl: 'https://morningbrew.com',
    category: 'AI Business',
    publishedAt: '2026-05-09T15:00:00Z',
    readTime: 5,
    trending: false,
    featured: false,
  },
  {
    id: '11',
    slug: 'startup-distribution-strategies-2026',
    title: 'Distribution > Product: The Startup Growth Strategies That Work in 2026',
    summary: 'Why the best product doesn\'t always win, and the 7 distribution channels early-stage startups are using to find their first 1,000 customers.',
    aiSummary: 'The seven most effective distribution channels for early-stage startups in 2026: (1) building in public on Twitter/X, (2) Product Hunt + Hacker News launches, (3) SEO-optimized AI-generated content, (4) strategic open-source projects, (5) community-led growth through Discord/Slack, (6) integration partnerships with established platforms, and (7) cold outreach with AI-personalized messages.',
    content: 'The most common cause of startup failure isn\'t a bad product—it\'s a bad distribution strategy. In 2026, the most successful early-stage startups are masters of at least two distribution channels. Building in public on Twitter/X remains the highest-ROI channel for developer and B2B tools, with founders like the teams behind Resend, Cal.com, and Dub.co growing primarily through transparent sharing of their journey. Product Hunt and Hacker News launches, when executed well, can generate 5,000-10,000 sign-ups in a single day. SEO powered by AI-generated, high-quality content is building sustainable traffic moats. Strategic open-source projects create community and trust before monetization. And AI-personalized cold outreach is replacing spray-and-pray email campaigns with hyper-relevant messages that get 30%+ response rates.',
    founderTakeaway: 'Pick two distribution channels and go deep. Build in public from day one—share your metrics, failures, and learnings. Launch on Product Hunt when you have 50+ early users who can support you. Start SEO early; it compounds.',
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
    category: 'Startup Growth',
    publishedAt: '2026-05-09T09:00:00Z',
    readTime: 7,
    trending: false,
    featured: false,
  },
  {
    id: '12',
    slug: 'building-ai-product-moats',
    title: 'How to Build a Defensible AI Product When Everyone Has Access to the Same Models',
    summary: 'The 4 types of moats AI startups are building: proprietary data, workflow integration, network effects, and domain-specific fine-tuning.',
    aiSummary: 'With commoditized foundation models, AI startups need moats beyond technology. The four defensible strategies: (1) proprietary data flywheels—every user interaction improves the product, (2) deep workflow integration that makes switching painful, (3) network effects where the product gets better with more users, and (4) domain-specific fine-tuned models that outperform general-purpose AI in narrow tasks.',
    content: 'The "thin wrapper" critique of AI startups is legitimate—if your product is just a UI on top of GPT-4, you have no moat. But the smartest AI founders are building defensibility through four strategies. First, proprietary data flywheels: every customer interaction generates data that improves the model, creating a compounding advantage. Second, deep workflow integration: by embedding into existing tools and processes, switching costs increase over time. Third, network effects: products where each new user makes the product better for everyone else. Fourth, domain-specific fine-tuning: training models on industry-specific data that outperforms general-purpose AI on narrow, high-value tasks. The key insight is that moats in AI are built through usage, not technology. The best AI products get better faster than competitors because they learn from more diverse, higher-quality data.',
    founderTakeaway: 'Your moat is not the AI model—it\'s the data flywheel you build around it. Design your product so every user interaction generates training data. After 6 months, your fine-tuned model should outperform any general-purpose alternative for your specific use case.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    source: 'a16z',
    sourceUrl: 'https://a16z.com',
    category: 'Product Strategy',
    publishedAt: '2026-05-08T11:00:00Z',
    readTime: 8,
    trending: false,
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
    id: 'w20-2026',
    weekNumber: 20,
    year: 2026,
    title: 'The Lean AI Founders Issue',
    description:
      'This week: how solo founders are building billion-dollar AI companies, the distribution strategies that actually work, and why small teams are outperforming large ones.',
    articles: articles.slice(0, 8),
    publishedAt: '2026-05-14T00:00:00Z',
  };
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
