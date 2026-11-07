import React, { useRef, useEffect } from 'react';

// --- Data for Web3 Resources ---
// I've curated a list of high-quality blogs and videos for each level.
const resources = {
  beginner: {
    title: "Beginner Resources",
    description: "Start your Web3 journey here. These resources cover the fundamental concepts, terminology, and basic tools.",
    blogs: [
      {
        title: "Ethereum.org: Introduction to Web3",
        description: "The official Ethereum site provides a foundational overview of what Web3 is.",
        link: "https://ethereum.org/en/web3/"
      },
      {
        title: "Web3 University: The Complete Guide",
        description: "A comprehensive, structured guide covering everything from blockchain basics to your first dApp.",
        link: "https://www.web3.university/"
      },
      {
        title: "DEV Community: A List of Web3 Learning Resources",
        description: "A community-curated list that provides a broad overview of different learning platforms.",
        link: "https://dev.to/gulcan_yayla/a-list-of-web3-learning-resources-2ed5"
      },
    ],
    videos: [
      {
        title: "What Is Web3? | Simplilearn",
        description: "A clear, concise animated video explaining the core concepts of Web3 and how it differs from Web2.",
        link: "https://www.youtube.com/watch?v=xMicygVbMik"
      },
      {
        title: "Solidity & Smart Contracts Course | freeCodeCamp",
        description: "A massive, in-depth tutorial (over 16 hours) that takes you from zero to hero in blockchain development.",
        link: "https://www.youtube.com/watch?v=gyMwXuJrbJQ"
      },
      {
        title: "Web3 Explained in 5 Minutes | Simplilearn",
        description: "A very quick and high-level overview for those who are brand new to the space.",
        link: "https://www.youtube.com/watch?v=0tZFQs7qBfQ"
      },
    ],
    githubProjects: [
      {
        title: "Buildspace Projects",
        description: "Hands-on beginner-friendly Web3 projects covering NFTs, DAOs, dApps, and smart contract development.",
        link: "https://github.com/buildspace/buildspace-projects"
      },
      {
        title: "Scaffold-ETH 2",
        description: "A modern Ethereum development toolkit for building and deploying full-stack decentralized applications.",
        link: "https://github.com/scaffold-eth/scaffold-eth-2"
      },
    ],
  },
  intermediate: {
    title: "Intermediate Resources",
    description: "You've got the basics down. Now it's time to build, deploy, and dive deeper into the ecosystem.",
    blogs: [
      {
        title: "Solidity by Example",
        description: "A hands-on resource with practical, easy-to-understand code examples for various Solidity features.",
        link: "https://solidity-by-example.org/"
      },
      {
        title: "Alchemy's Road to Web3",
        description: "A project-based learning course that guides you through building full-stack dApps.",
        link: "https://docs.alchemy.com/docs/road-to-web3"
      },
      {
        title: "Cyfrin: Learn Web3 Development For Free",
        description: "A collection of high-quality courses focusing on security and advanced development practices.",
        link: "https://www.cyfrin.io/blog/learn-web3-development-roadmap"
      },
    ],
    videos: [
      {
        title: "Full Course: Web3 Developer in 2024 | thirdweb",
        description: "A complete roadmap and course that covers building and deploying smart contracts and dApps.",
        link: "https://www.youtube.com/watch?v=jYEqoIeAoBg"
      },
      {
        title: "Dapp University YouTube Channel",
        description: "A channel filled with tutorials on building decentralized applications on Ethereum.",
        link: "https://www.youtube.com/c/DappUniversity"
      },
      {
        title: "Blockchain Crash Course 2022 | codedamn",
        description: "A detailed crash course that covers blockchain, Solidity, and the Ethereum ecosystem.",
        link: "https://www.youtube.com/watch?v=SDqzWMeUK9k"
      },
    ],
    githubProjects: [
      {
        title: "Uniswap Interface",
        description: "Frontend codebase of the Uniswap decentralized exchange, ideal for understanding DeFi UI architecture.",
        link: "https://github.com/Uniswap/interface"
      },
      {
        title: "ENS App v3",
        description: "Ethereum Name Service application that demonstrates domain registration and Web3 identity systems.",
        link: "https://github.com/ensdomains/ens-app-v3"
      },
      {
        title: "Aave Interface",
        description: "Production-grade lending and borrowing protocol frontend built on Ethereum.",
        link: "https://github.com/aave/interface"
      }
    ],
  },
  expert: {
    title: "Expert Resources",
    description: "For those pushing the boundaries. Explore advanced topics, security, and the future of the decentralized web.",
    blogs: [
      {
        title: "EIPs: Ethereum Improvement Proposals",
        description: "Read the primary source for new standards and protocols in the Ethereum ecosystem.",
        link: "https://eips.ethereum.org/all"
      },
      {
        title: "Week in Ethereum News",
        description: "A long-running and highly respected newsletter covering the latest developments in the ecosystem.",
        link: "https://weekinethereumnews.com/"
      },
      {
        title: "Speed Run Ethereum",
        description: "A set of challenges that test your Solidity and dApp development skills with scaffold-eth.",
        link: "https://speedrunethereum.com/"
      },
    ],
    videos: [
      {
        title: "Patrick Collins YouTube Channel",
        description: "A leading educator in the space, focusing on smart contract development, security, and DeFi.",
        link: "https://www.youtube.com/c/patrickcollins"
      },
      {
        title: "Alchemy YouTube Channel",
        description: "Deep dives into Web3 infrastructure, advanced tutorials, and developer interviews.",
        link: "https://www.youtube.com/c/AlchemyPlatform"
      },
      {
        title: "Nader Dabit YouTube Channel",
        description: "Content on modern web development, Web3, DeFi, and cloud computing from a top developer advocate.",
        link: "https://www.youtube.com/c/naderdabit"
      },
    ],
    githubProjects: [
      {
        title: "Uniswap V2 Core",
        description: "Core smart contracts powering one of the world's largest decentralized exchanges.",
        link: "https://github.com/Uniswap/v2-core"
      },
      {
        title: "Compound Protocol",
        description: "The underlying smart contract system behind Compound's decentralized lending markets.",
        link: "https://github.com/compound-finance/compound-protocol"
      },
      {
        title: "OpenZeppelin Contracts",
        description: "Industry-standard secure smart contract library used across thousands of blockchain projects.",
        link: "https://github.com/OpenZeppelin/openzeppelin-contracts"
      }
    ],
  },
};

// --- SVG Icon Components ---
const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-blue-500/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-blue-500/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


// --- Helper Components ---

// Animated background component
const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let nodes = [];

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    class Node {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = -1 + Math.random() * 2;
        this.vy = -1 + Math.random() * 2;
        this.radius = Math.random() * 1.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(96, 165, 250, 0.6)';
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < 70; i++) {
        nodes.push(new Node());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.sqrt(Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2));
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${1 - dist / 100})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', () => { });
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

// Card for displaying a single resource (3D Tilt Version)
const ResourceCard = ({ title, description, link, type }) => {
  const cardRef = React.useRef(null);
  const [style, setStyle] = React.useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = ((y / height) - 0.5) * -12; // Max 12deg rotation
    const rotateY = ((x / width) - 0.5) * 12;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);

    setStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });
  };

  return (
    <a
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease-out',
      }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col bg-white/[0.02] backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg hover:border-violet-500/40 hover:bg-white/[0.04] transition-all duration-300 group spotlight-card"
    >
      <h3 className="font-display text-base font-bold text-slate-100 mb-3 break-words group-hover:text-violet-300 transition-colors flex items-center gap-2.5 [transform:translateZ(20px)]">
        {type === 'blog' ? <BookIcon /> : <PlayIcon />}
        <span className="flex-1">{title}</span>
      </h3>
      <p className="text-slate-400 flex-grow break-words text-sm leading-relaxed font-light [transform:translateZ(10px)]">{description}</p>
    </a>
  );
};


// --- Main App Component ---
export default function Docs() {
  const [activeTab, setActiveTab] = React.useState('beginner');
  const activeData = resources[activeTab];

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-5 py-2 text-xs font-display font-bold uppercase tracking-wider rounded-full transition-all duration-300 relative cursor-pointer ${
        activeTab === id
          ? 'text-slate-950 bg-violet-400 shadow-md shadow-violet-500/10'
          : 'text-slate-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="relative min-h-screen bg-transparent text-white font-sans overflow-x-hidden">
      {/* <AnimatedBackground /> */}
      <main className="relative z-10 container mx-auto px-4 py-16 md:py-24 mt-28 md:mt-32">
        <header className="text-center mb-16">
          <h1 className="font-sans text-3xl md:text-5xl font-black mb-4 mt-20 text-white tracking-tight">
            Web3 Learning <span className="font-serif italic font-normal text-violet-400">Docs</span>
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
            Your curated guide to mastering the decentralized web. Select your experience level to begin.
          </p>
        </header>

        <div className="flex justify-center gap-1.5 p-1.5 bg-white/[0.02] border border-white/10 rounded-full max-w-xs mx-auto mb-16 backdrop-blur-md">
          <TabButton id="beginner" label="Beginner" />
          <TabButton id="intermediate" label="Intermediate" />
          <TabButton id="expert" label="Expert" />
        </div>

        <div className="max-w-6xl mx-auto bg-white/[0.01] backdrop-blur-md p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl font-bold text-white mb-3">{activeData.title}</h2>
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-2xl mx-auto">{activeData.description}</p>
          </div>

          {/* Blogs Section */}
          <section className="mb-16">
            <h3 className="font-display text-lg font-bold pb-3 mb-8 text-slate-200 border-b border-white/5">Blogs & Articles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeData.blogs.map((item) => (
                <ResourceCard key={item.link} {...item} type="blog" />
              ))}
            </div>
          </section>

          {/* Videos Section */}
          <section className="mb-16">
            <h3 className="font-display text-lg font-bold pb-3 mb-8 text-slate-200 border-b border-white/5">Videos & Tutorials</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeData.videos.map((item) => (
                <ResourceCard key={item.link} {...item} type="video" />
              ))}
            </div>
          </section>

          {/* GitHub Projects Section */}
          <section>
            <h3 className="font-display text-lg font-bold pb-3 mb-8 text-slate-200 border-b border-white/5">GitHub Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeData.githubProjects.map((item) => (
                <ResourceCard key={item.link} {...item} type="github" />
              ))}
            </div>
          </section>
          
        </div>
      </main>
    </div>
  );
}
