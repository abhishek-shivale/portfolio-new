import {Icons} from "@/components/icons";
import {HomeIcon, NotebookIcon} from "lucide-react";
import {YOE} from "@/lib/utils";

export const DATA = {
  name: "Abhishek",
  initials: "AS",
  url: "https://abhishek.win",
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    `I am a backend engineer with ${YOE} years of experience building reliable distributed systems with Node.js, TypeScript, Kafka, gRPC, PostgreSQL, and Rust.`,
  summary: `I love building software that scales and solves real problems. I build software in multiple languages, primarily Rust, JavaScript, and TypeScript, and try to make every system as efficient as possible. I have built multiple payment integrations for high-scale systems and event-driven systems using Kafka that process apporx more than 2 million events per day.`,
  avatarUrl: "/pfp-transparent.png",
  skills: [
    "Node.js",
    "TypeScript",
    "NestJS",
    "Express.js",
    "Kafka",
    "gRPC",
    "BullMQ",
    "Redis",
    "Valkey",
    "ScyllaDB",
    "ClickHouse",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Drizzle",
    "Docker",
    "AWS",
    "GitHub Actions",
    "k6",
    "Linux",
    "Rust",
    "Tokio",
    "Axum",
    "Dioxus",
    "Solana",
    "Anchor",
    "Arweave",
    "Python",
    "Flask",
    "Next.js",
    "React",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abhishekshivale01@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhishek-shivale",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhishek-shivale/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/abhishekwinn",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:abhishekshivale01@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Xoyal IT Services",
      href: "#",
      badges: ["Current"],
      location: "Pune, Maharashtra",
      title: "Node.js Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEeljnxoh_UTA/company-logo_100_100/B4DZmErQYRGsAQ-/0/1758867556359/xoyal_logo?e=1764806400&v=beta&t=SCt1iNkpkNghH3fTCNMiH4EImS4lcysyxFYuhgSsJqY",
      start: "June 2025",
      end: "Present",
      description:
        "Building backend services for a multi-tenant messaging platform using NestJS, Kafka, gRPC, ScyllaDB, ClickHouse, and PostgreSQL. Delivered authentication, sessions, API keys, tokens, RBAC, permissions, invitations, SMS and MMS workflows, bulk and scheduled messaging, webhooks, message logs, templates, notifications, billing, wallet operations, auto-recharge, payment history, and multi-provider payment integrations. Also worked on Kafka consumer reliability, retry flows, rate limiting, load testing, deployments, data migrations, and production debugging.",
    },
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl:
        "https://res.cloudinary.com/dygubvmg6/image/upload/h_200,w_200/v1745657872/atkjbhocsiyv2zw2rg80.jpg",
      start: "Mar 2025",
      end: "May 2025",
      description:
        "Built a Python trading bot that converted two swing-trading strategies into executable rules, with a historical data analysis and backtesting workflow covering six months of market data.",
    },
    {
      company: "EcoStart Ventures Inc.",
      href: "https://www.climachampions.com",
      badges: [],
      location: "Pune, Maharashtra",
      title: "Full-time Software Trainee",
      logoUrl:
        "https://res.cloudinary.com/dmhge6flm/image/upload/v1717398740/Favicon.png",
      start: "Jan 2024",
      end: "Mar 2025",
      description:
        "Built REST APIs in Node.js, designed and optimized database schemas, implemented vector search, and integrated AI-assisted workflows to improve search and automate platform operations.",
    },
  ],
  education: [
    {
      school: "Chandigarh University",
      href: "https://www.cuchd.in",
      degree: "Bachelor of Computer Applications",
      logoUrl: "https://www.cuchd.in/latest-assets/images/fevicon.png",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "PG-CDC",
      href: "https://github.com/abhishek-shivale/pg-cdc",
      dates: "2026 to Present",
      active: true,
      description:
        "A production-grade learning project for PostgreSQL change data capture. It explores WAL and logical replication, event streaming through Redpanda, asynchronous Rust processing, ClickHouse synchronization, Docker-based infrastructure, and terminal monitoring.",
      technologies: [
        "Rust",
        "PostgreSQL",
        "CDC",
        "Redpanda",
        "ClickHouse",
        "Tokio",
        "Ratatui",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhishek-shivale/pg-cdc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dygubvmg6/image/upload/v1785201827/ChatGPT_Image_Jul_28_2026_06_53_40_AM_seeok7.png",
      video: "",
    },
    {
      title: "Cassie",
      href: "https://cassieoracle.xyz/",
      dates: "2026",
      active: false,
      description:
        "A permissionless optimistic oracle on Solana. Users can post bountied questions, submit bonded answers, dispute proposals, and resolve escalated cases through a reputation-weighted council. It also supports callbacks for external programs.",
      technologies: [
        "Rust",
        "Solana",
        "Anchor",
        "Next.js",
        "Surfpool",
        "CPI",
        "PDAs",
      ],
      links: [
        {
          type: "Website",
          href: "https://cassieoracle.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhishek-shivale/cassie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dygubvmg6/image/upload/v1785203778/ChatGPT_Image_Jul_28_2026_07_26_04_AM_ftqdl7.png",
      video: "https://lofi-assets.abhishek.win/portfolio/Cassie.mp4",
    },
    {
      title: "Sketch",
      href: "https://github.com/abhishek-shivale/sketch",
      dates: "2026",
      active: true,
      description:
        "A real-time collaborative drawing server built with Rust, Axum, Tokio, and WebSockets. It includes concurrent state management, event broadcasting, room coordination, and drawing history replay.",
      technologies: ["Rust", "Axum", "Tokio", "WebSockets", "Serde"],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhishek-shivale/sketch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dygubvmg6/image/upload/v1785202553/ChatGPT_Image_Jul_28_2026_07_05_44_AM_pf8dei.png",
      video: "",
    },
    {
      title: "Stele",
      href: "https://github.com/abhishek-shivale/stele",
      dates: "2026",
      active: false,
      description:
        "A permissionless Solana protocol for permanently publishing wallet-attributed records of real-world events. Content hashes are anchored on Solana while complete content can be stored through Arweave.",
      technologies: ["Rust", "Solana", "Anchor", "Arweave", "PDAs"],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhishek-shivale/stele",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dygubvmg6/image/upload/v1785203305/ChatGPT_Image_Jul_28_2026_07_18_15_AM_rvvjkh.png",
      video: "",
    },
    {
      title: "Sol Key Manager",
      href: "https://github.com/abhishek-shivale/sol-keymgr",
      dates: "2026",
      active: false,
      description:
        "A Solana-focused key management tool designed around encrypted key storage, safer local workflows, and a cleaner developer experience for managing wallets and signing operations.",
      technologies: ["Rust", "Solana", "Cryptography", "CLI", "Key Management"],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhishek-shivale/sol-keymgr",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dygubvmg6/image/upload/v1785203234/ChatGPT_Image_Jul_28_2026_07_17_04_AM_qmokhe.png",
      video: "",
    },
    {
      title: "TimeFlow",
      href: "https://github.com/abhishek-shivale/TimeFlow",
      dates: "2026",
      active: false,
      description:
        "A minimalist and responsive stopwatch application built with Rust and Dioxus 0.7, with start, pause, reset, and cross-platform interface support including an iOS target.",
      technologies: ["Rust", "Dioxus", "iOS", "Responsive UI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhishek-shivale/TimeFlow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dygubvmg6/image/upload/v1785204620/timeflow-1536x1024_jyjk0i.png",
      video: "",
    },
    {
      title: "Novel Hunter",
      href: "https://github.com/abhishek-shivale/novel-hunter",
      dates: "2025",
      active: true,
      description:
        "A Flask scraper and API that extracts novel rankings, metadata, chapter lists, and chapter content from online reading sources.",
      technologies: ["Python", "Flask", "Web Scraping", "REST API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhishek-shivale/novel-hunter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/novel-hunter.png",
      video: "",
    },
    {
      title: "Video Transcoding Pipeline",
      href: "https://github.com/abhishek-shivale/video_streaming",
      dates: "2025",
      active: true,
      description:
        "A scalable video processing pipeline built with TurboRepo, NestJS, BullMQ, Redis, PostgreSQL, AWS S3, Docker, and FFmpeg. It supports direct uploads, queued processing, multi-bitrate HLS output, and independently scalable worker services.",
      technologies: [
        "TurboRepo",
        "NestJS",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "BullMQ",
        "Redis",
        "AWS S3",
        "FFmpeg",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhishek-shivale/video_streaming",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://lofi-assets.abhishek.win/portfolio/Video_Transcoding.mp4",
    },
    {
      title: "AI-powered Twitter Bot",
      href: "https://github.com/abhishek-shivale/anime_news_ai_bot",
      dates: "2025",
      active: false,
      description:
        "An automated TypeScript bot that reads anime news from RSS feeds, generates post content through an AI workflow, schedules publishing, and records application logs.",
      technologies: [
        "Node.js",
        "TypeScript",
        "node-cron",
        "Winston",
        "LangChain",
        "Twitter API",
        "RSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhishek-shivale/anime_news_ai_bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bot.png",
      video: "",
    },
    {
      title: "TinyURL",
      href: "https://tinyurl-one.vercel.app",
      dates: "2024 to Present",
      active: true,
      description:
        "A URL shortening application with custom slugs, password protection, authentication, click tracking, and a database-backed management interface.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      links: [
        {
          type: "Website",
          href: "https://tinyurl-one.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhishek-shivale/tinyurl",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tiny.png",
      video: "",
    },
    {
      title: "Next.js Starter",
      href: "https://starter-repo.vercel.app",
      dates: "2024 to Present",
      active: true,
      description:
        "A reusable Next.js starter template for building scalable web applications with authentication, PostgreSQL, Prisma, Tailwind CSS, and a prepared component system.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "shadcn/ui",
        "NextAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://starter-repo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhishek-shivale/nextjs-starter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/template.png",
      video: "",
    },
    {
      title: "Email Validator",
      href: "https://email-validator-omega.vercel.app",
      dates: "2024",
      active: false,
      description:
        "A free email validation tool for checking and cleaning email lists, designed to improve list quality and reduce invalid addresses before campaigns are sent.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Google Sheets",
      ],
      links: [
        {
          type: "Website",
          href: "https://email-validator-omega.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhishek-shivale/Email_Validator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/email.png",
      video: "",
    },
  ],
} as const;

    // hackathons: [
    //   {
    //     title: "Hack Western 5",
    //     dates: "November 23rd - 25th, 2018",
    //     location: "London, Ontario",
    //     description:
    //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //     links: [],
    //   },
    //   {
    //     title: "Hack The North",
    //     dates: "September 14th - 16th, 2018",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //     links: [],
    //   },
    //   {
    //     title: "FirstNet Public Safety Hackathon",
    //     dates: "March 23rd - 24th, 2018",
    //     location: "San Francisco, California",
    //     description:
    //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
    //     icon: "public",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
    //     links: [],
    //   },
    //   {
    //     title: "DeveloperWeek Hackathon",
    //     dates: "February 3rd - 4th, 2018",
    //     location: "San Francisco, California",
    //     description:
    //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //     links: [
    //       {
    //         title: "Github",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/cryptotrends/cryptotrends",
    //       },
    //     ],
    //   },
    //   {
    //     title: "HackDavis",
    //     dates: "January 20th - 21st, 2018",
    //     location: "Davis, California",
    //     description:
    //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //     win: "Best Data Hack",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //     links: [
    //       {
    //         title: "Devpost",
    //         icon: <Icons.globe className="h-4 w-4" />,
    //         href: "https://devpost.com/software/my6footprint",
    //       },
    //       {
    //         title: "ML",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //       },
    //       {
    //         title: "iOS",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/Wallet6/CarbonWallet",
    //       },
    //       {
    //         title: "Server",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/Wallet6/wallet6-server",
    //       },
    //     ],
    //   },
    //   {
    //     title: "ETH Waterloo",
    //     dates: "October 13th - 15th, 2017",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //     links: [
    //       {
    //         title: "Organization",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/ethdocnet",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Hack The North",
    //     dates: "September 15th - 17th, 2017",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed a virtual reality application allowing users to see themselves in third person.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //     links: [
    //       {
    //         title: "Streamer Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/justinmichaud/htn2017",
    //       },
    //       {
    //         title: "Client Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/RTSPClient",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Hack The 6ix",
    //     dates: "August 26th - 27th, 2017",
    //     location: "Toronto, Ontario",
    //     description:
    //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //     links: [
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/ShareShip/ShareShip",
    //       },
    //       {
    //         title: "Site",
    //         icon: <Icons.globe className="h-4 w-4" />,
    //         href: "https://share-ship.herokuapp.com/",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Stupid Hack Toronto",
    //     dates: "July 23rd, 2017",
    //     location: "Toronto, Ontario",
    //     description:
    //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //     links: [
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Global AI Hackathon - Toronto",
    //     dates: "June 23rd - 25th, 2017",
    //     location: "Toronto, Ontario",
    //     description:
    //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //     win: "1st Place Winner",
    //     links: [
    //       {
    //         title: "Article",
    //         icon: <Icons.globe className="h-4 w-4" />,
    //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //       },
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/TinySamosas/",
    //       },
    //     ],
    //   },
    //   {
    //     title: "McGill AI for Social Innovation Hackathon",
    //     dates: "June 17th - 18th, 2017",
    //     location: "Montreal, Quebec",
    //     description:
    //       "Developed realtime facial microexpression analyzer using AI",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //     links: [],
    //   },
    //   {
    //     title: "Open Source Circular Economy Days Hackathon",
    //     dates: "June 10th, 2017",
    //     location: "Toronto, Ontario",
    //     description:
    //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //     win: "1st Place Winner",
    //     links: [
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/genecis",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Make School's Student App Competition 2017",
    //     dates: "May 19th - 21st, 2017",
    //     location: "International",
    //     description: "Improved PocketDoc and submitted to online competition",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //     win: "Top 10 Finalist | Honourable Mention",
    //     links: [
    //       {
    //         title: "Medium Article",
    //         icon: <Icons.globe className="h-4 w-4" />,
    //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //       },
    //       {
    //         title: "Devpost",
    //         icon: <Icons.globe className="h-4 w-4" />,
    //         href: "https://devpost.com/software/pocketdoc-react-native",
    //       },
    //       {
    //         title: "YouTube",
    //         icon: <Icons.youtube className="h-4 w-4" />,
    //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //       },
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/pocketdoc-react-native",
    //       },
    //     ],
    //   },
    //   {
    //     title: "HackMining",
    //     dates: "May 12th - 14th, 2017",
    //     location: "Toronto, Ontario",
    //     description: "Developed neural network to optimize a mining process",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //     links: [],
    //   },
    //   {
    //     title: "Waterloo Equithon",
    //     dates: "May 5th - 7th, 2017",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //     links: [
    //       {
    //         title: "Devpost",
    //         icon: <Icons.globe className="h-4 w-4" />,
    //         href: "https://devpost.com/software/pocketdoc-react-native",
    //       },
    //       {
    //         title: "YouTube",
    //         icon: <Icons.youtube className="h-4 w-4" />,
    //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //       },
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/pocketdoc-react-native",
    //       },
    //     ],
    //   },
    //   {
    //     title: "SpaceApps Waterloo",
    //     dates: "April 28th - 30th, 2017",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //     links: [
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/earthwatch",
    //       },
    //     ],
    //   },
    //   {
    //     title: "MHacks 9",
    //     dates: "March 24th - 26th, 2017",
    //     location: "Ann Arbor, Michigan",
    //     description:
    //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //     links: [
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/threejs-planes",
    //       },
    //     ],
    //   },
    //   {
    //     title: "StartHacks I",
    //     dates: "March 4th - 5th, 2017",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //     win: "1st Place Winner",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //     links: [
    //       {
    //         title: "Source (Mobile)",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/mattBlackDesign/recipic-ionic",
    //       },
    //       {
    //         title: "Source (Server)",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/mattBlackDesign/recipic-rails",
    //       },
    //     ],
    //   },
    //   {
    //     title: "QHacks II",
    //     dates: "February 3rd - 5th, 2017",
    //     location: "Kingston, Ontario",
    //     description:
    //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //     links: [
    //       {
    //         title: "Source (Mobile)",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/human-huntr-react-native",
    //       },
    //       {
    //         title: "Source (API)",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Terrible Hacks V",
    //     dates: "November 26th, 2016",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed a mock of Windows 11 with interesting notifications and functionality",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //     links: [
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Portal Hackathon",
    //     dates: "October 29, 2016",
    //     location: "Kingston, Ontario",
    //     description:
    //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //     links: [
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/UWPortalSDK/crowmark",
    //       },
    //     ],
    //   },
    // ],
