import React, { useState, useEffect, useRef } from 'react';
import './EventsCSS.css'
import EventsCoverflow from '../components/EventsCoverflow';

// Css for bg in EventsCSS.css
export default function Events() {
  return (
    <div className="black-star-bg text-white font-sans antialiased">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <HeroSection />
        <Timeline />
      </main>
    </div>
  );
}


// Hero Section Component
// The main introductory section with a headline and call-to-action.
// UPDATED: Added revealing text animations on load.
const HeroSection = () => {
    // State to trigger the animation
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Set animate to true after a short delay to trigger the animation
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="text-center w-full md:w-4/5 flex items-center flex-col justify-center mx-auto pt-20 pb-10">
            <h1 className={`text-3xl sm:text-5xl lg:text-6xl text-center font-extrabold text-white leading-tight transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                We host robust <span className="text-blue-400">events</span> that help leverage the web3 infrastructure.
            </h1>
            <p className={`mt-6 max-w-2xl mx-auto text-lg text-gray-300 transition-all duration-700 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                WE STRIVE TO CREATE A COMMUNITY OF STUDENTS PASSIONATE ABOUT BLOCKCHAIN AND WEB3 TECHNOLOGY
            </p>
            <div className={`mt-10 transition-all duration-700 delay-400 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <a href="/collaborate" className="inline-block bg-blue-500 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-400 transform hover:-translate-y-1 transition-all duration-300">
                    🤝 Collaborate with us
                </a>
            </div>
        </div>
    );
};


// Custom hook to detect if an element is on screen
// This is used to trigger animations as the user scrolls.
const useOnScreen = (options) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};


// Timeline Item Component
// Represents a single event card in the timeline.
// UPDATED: Animations are more pronounced and directions are corrected.
const TimelineItem = ({ event, index }) => {
    // An item is on the right side if its index is odd.
    const isRight = index % 2 !== 0;
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

    const cardComponent = (
        <a href={event.link} target="_blank" rel="noopener noreferrer" className="group">
             <div className="flex items-start space-x-4">
                  {/* Image on the left */}
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x300/1F2937/9CA3AF?text=Image'; }}
                  />
                  {/* Text content on the right */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-blue-400">{event.title}</h3>
                    {event.subtitle && <p className="text-xs sm:text-sm text-gray-400 mt-1 font-semibold">{event.subtitle}</p>}
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-2">{event.description}</p>
                  </div>
             </div>
        </a>
    );

    return (
        <div ref={ref} className="mb-12 mx-auto md:w-[80%]">
            {/* --- Desktop Layout (visible on lg screens and up) --- */}
            {/* On desktop, odd items are on the right, even on the left */}
            <div className={`hidden lg:flex justify-between items-center w-full ${isRight ? 'flex-row-reverse' : ''}`}>
                {/* The Card */}
                <div className={`w-5/12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRight ? 'translate-x-20' : '-translate-x-20'}`}`}>
                    <div className="p-4 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 hover:border-blue-500">
                        {cardComponent}
                    </div>
                </div>
                {/* The Center Dot */}
                <div className="relative w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full shadow-lg z-10"></div>
                </div>
                {/* The Date */}
                <div className={`w-5/12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRight ? '-translate-x-20' : 'translate-x-20'}`}`}>
                    <p className={`font-bold text-lg ${isRight ? 'text-right' : 'text-left'}`}>{event.date}</p>
                </div>
            </div>

            {/* --- Mobile Layout (hidden on lg screens and up) --- */}
            <div className="lg:hidden flex">
                <div className="flex flex-col items-center mr-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full shadow-lg z-10 flex-shrink-0"></div>
                    <div className="w-1 mt-2 flex-grow bg-gray-600"></div>
                </div>
                {/* UPDATED: Increased slide distance for a more noticeable effect from the left */}
                <div className={`w-full transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <p className="font-bold text-lg mb-2 text-blue-400">{event.date}</p>
                    <div className="p-4 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 hover:border-blue-500">
                        {cardComponent}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Timeline Component
// This component lays out the timeline events using the JSON data.
const Timeline = () => {
    const events = [
  {
    "date": "16-18 FEBURARY 2026",
    "title": "AM Hacks 2.0",
    "link": "https://www.instagram.com/reel/DWzcxwlE6s4/",
    "imageUrl": "https://res.cloudinary.com/da2ycmeeo/image/upload/v1781519522/AM2.0_nz5v7v.jpg",
    "subtitle": "The Next-Gen Web3 Hackathon",
    "description": "AM Hacks 2.0 at IGDTUW united passionate innovators to build impactful solutions, learn from mentors, and tackle real-world challenges. The event fostered creativity, collaboration, and a spirit of innovation among participants."

  },
  {
    "date": "4-6 APRIL 2025",
    "title": "AM Hacks 1.0",
    "link": "https://www.instagram.com/reel/DKZu_3qS2IW/",
    "imageUrl": "https://res.cloudinary.com/dalgvlhes/image/upload/v1754845980/Screenshot_2025-08-10_224238_vfubi8.png",
    "subtitle": "The Ultimate Web3 Hackathon",
    "description": "AM Hacks 1.0 at IGDTUW brought together innovators and problem-solvers for a high-energy hackathon, with hands-on coding, expert mentoring, intense challenges, and networking over ideas, snacks, and swag."
  },
  {
    "date": "25th SEP 2025",
    "title": "MEXC Foundation X Build3DAO - Intro Day",
    "link": "https://www.instagram.com/p/DQR4ZBiEiZT/",
    "imageUrl": "https://res.cloudinary.com/duplabys5/image/upload/v1762857476/mexc_clprub.jpg",
    "subtitle": "Building the Future Together - A Web3 Collaboration",
    "description": "AssetMerkle hosted an immersive introduction day with MEXC Foundation and Build3DAO at IGDTUW, bringing together industry leaders and students to explore blockchain innovation, Web3 technologies, and building decentralized ecosystems."
  },
  {
    "date": "12 FEBRUARY 2025",
    "title": "The Algorand Meetup",
    "link": "https://www.instagram.com/p/DFsyeoxyLfp/",
    "imageUrl": "https://res.cloudinary.com/dalgvlhes/image/upload/v1742829285/Screenshot_2025-03-24_204331_nmf72w.png",
    "subtitle": "AlgoBharat Hack Series 2025 – Delhi Meetup!",
    "description": "The AlgoBharat Hack Series 2025 seminar at IGDTUW introduced Web3 builders to Algorand’s tech, with expert Q&As, a challenge breakdown, and networking over snacks & swag."
  },
  {
    "date": "01-02 APRIL 2023",
    "title": "BFF Hackathon",
    "link": "https://www.instagram.com/reel/CpdLN0qMN3D/",
    "imageUrl": "https://res.cloudinary.com/djv5kc7as/image/upload/v1688802646/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_303_cpvgip.png",
    "subtitle": null,
    "description": "A 24-hour offline hackathon in collaboration with DTU AUV, featuring problem-solving, mentor guidance, and project building."
  },
  {
    "date": "25th MAY 2025",
    "title": "KRNL Decoded Delhi Meetup",
    "link": "https://www.instagram.com/p/DQR2KGBkmFW/",
    "imageUrl": "https://res.cloudinary.com/duplabys5/image/upload/v1762857469/krnl_a8wyr8.jpg",
    "subtitle": "Exploring Kernel Network & Web3 Infrastructure",
    "description": "A community meetup discussing Kernel Network's infrastructure with expert speakers and hands-on learning."
  },
  {
    "date": "13 SEPTEMBER 2024",
    "title": "The Graph Workshop",
    "link": "https://www.instagram.com/p/C_fIOVIsNpc/",
    "imageUrl": "https://res.cloudinary.com/dlx9sj1pl/image/upload/v1730999849/Screenshot_2024-11-07_224113_emm0uy.png",
    "subtitle": "A Beginner-Friendly Introduction",
    "description": "A beginner-friendly introduction to Web3 and The Graph, covering blockchain basics, subgraphs, and featuring GRT airdrops & swags."
  },
/* {
    "date": "17 JANUARY 2025",
    "title": "She On Chain Bootcamp",
    "link": "https://www.instagram.com/p/DE71b3hyqkI/",
    "imageUrl": "https://res.cloudinary.com/dalgvlhes/image/upload/v1742918061/Screenshot_2025-03-25_212330_meoj6t.png",
    "subtitle": "ASSETMERKLE X RISEIN",
    "description": "Hands-on bootcamp on blockchain, dApps, Web3 concepts, and exclusive perks for builders."
  },*/
  {
    "date": "27 SEPTEMBER - 4 OCTOBER 2025",
    "title": "Web3Xcelerate Week",
    "link": "https://www.instagram.com/p/DAbb2uLyPIN/",
    "imageUrl": "https://res.cloudinary.com/deysvolet/image/upload/v1763829043/Screenshot_2025-11-22_220020_jlelpw.png",
    "subtitle": "Web3 Bootcamp",
    "description": "An immersive Web3 bootcamp hosted by TechNeeds × AssetMerkle featuring project building under expert mentorship."
  },
  {
    "date": "26th JUNE 2025",
    "title": "Chainlink 101",
    "link": "https://www.instagram.com/p/DQR3kQJkjCA/",
    "imageUrl": "https://res.cloudinary.com/duplabys5/image/upload/v1762857467/assetmerkle_X_ChainLink_iwxxya.png",
    "subtitle": "Mastering Decentralized Oracles & Smart Contracts",
    "description": "A virtual workshop introducing Chainlink's oracle network, smart contract integrations, and real-world data connectivity."
  },
  {
    "date": "06 JANUARY 2024 ONWARDS",
    "title": "Chain Pe Charcha",
    "link": "https://www.instagram.com/p/C1mzhijSS22/",
    "imageUrl": "https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/chainpecharcha_gm0ysz.png",
    "subtitle": null,
    "description": "A Web3-focused Twitter Spaces podcast exploring decentralized technologies and future tech trends."
  },
  {
    "date": "",
    "title": "Mentorship Cohort",
    "link": "",
    "imageUrl": "https://res.cloudinary.com/deysvolet/image/upload/v1763829161/Screenshot_2025-11-22_220223_ifinqy.png",
    "subtitle": "",
    "description": ""
  },
  {
    "date": "18 FEBRUARY 2024",
    "title": "Fleek Deploy : Delhi",
    "link": "https://www.instagram.com/reel/C45hoCXyVrF/",
    "imageUrl": "https://res.cloudinary.com/deysvolet/image/upload/v1763828917/Screenshot_2025-11-22_215724_k4mjmu.png",
    "subtitle": "Unleashing the Power of Decentralized Web Hosting and Innovation",
    "description": "Explored decentralized hosting, cutting-edge Web3 tooling, and infrastructure with expert-led sessions."
  },
  /*{
    "date": "9 NOVEMBER 2024",
    "title": "The Web3 Week",
    "link": "https://www.instagram.com/p/DE71b3hyqkI/",
    "imageUrl": "https://res.cloudinary.com/dalgvlhes/image/upload/v1742918572/Screenshot_2025-03-25_213237_wtmyee.png",
    "subtitle": "Careers in Web3",
    "description": "A week-long event introducing Web3, blockchain, smart contracts, and dApps to beginners."
  },
  {
    "date": "5-12 FEBRUARY 2024",
    "title": "Starknet X Assetmerkle",
    "link": "https://www.instagram.com/p/C3DcogPyYN9/",
    "imageUrl": "https://res.cloudinary.com/dlx9sj1pl/image/upload/v1712692992/Screenshot_2024-04-10_013236_q0xwi0.png",
    "subtitle": null,
    "description": "A hands-on learning series on Starknet, account abstraction, STARKs, and Layer 2 architecture."
  },
  {
    "date": "29 JANUARY 2024",
    "title": "Careers in Web3",
    "link": "https://www.instagram.com/p/C2p11F5Sxye/",
    "imageUrl": "https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/geetika-di_ktiuzk.png",
    "subtitle": null,
    "description": "A session led by Geetika Gupta on Web3 career opportunities and hands-on wallet creation."
  },
  {
    "date": "25 JANUARY 2024",
    "title": "Build with Tezos",
    "link": "https://www.instagram.com/p/C2aDhlkyXuh/",
    "imageUrl": "https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/build-with-teszo_fj66i0.png",
    "subtitle": null,
    "description": "A hands-on workshop on Tezos blockchain, organized with The Product House."
  },
  {
    "date": "08 JANUARY 2024",
    "title": "Deepdive into Blockchain & Crypto",
    "link": "https://www.instagram.com/p/C1zYCVlyoLM/",
    "imageUrl": "https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/blockchain_o4u0ok.png",
    "subtitle": null,
    "description": "A session exploring blockchain fundamentals, crypto markets, and decentralized ecosystems."
  },
  {
    "date": "26-27 OCTOBER 2023",
    "title": "Emerging Technologies Workshop",
    "link": "https://www.instagram.com/p/Cy0XPIESUBA/",
    "imageUrl": "https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/AM-GDSC_o0c14y.png",
    "subtitle": null,
    "description": "A two-day tech workshop covering Web3, AI, blockchain, cloud-native systems, and live demos."
  },
  {
    "date": "27-29 OCTOBER 2023",
    "title": "HackHive",
    "link": "https://www.instagram.com/p/CyWG4_eSLHg/",
    "imageUrl": "https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/hack-hive_b3tszn.png",
    "subtitle": null,
    "description": "A 36-hour hackathon hosted in Indore by Techhunterssss and supported by MLH."
  },
  {
    "date": "06 OCTOBER 2023",
    "title": "Introduction to Crypto vs Blockchain and Altcoins",
    "link": "https://www.instagram.com/p/Cx0QMPrS13G/",
    "imageUrl": "https://res.cloudinary.com/djv5kc7as/image/upload/v1698598489/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_317_nle6lt.png",
    "subtitle": null,
    "description": "An online webinar and quiz exploring crypto, blockchain architecture, and altcoins."
  },
  {
    "date": "19 AUGUST 2023",
    "title": "Web3 Cohort & Ideathon",
    "link": "https://www.instagram.com/p/CwGGYVuyqHk/",
    "imageUrl": "https://res.cloudinary.com/djv5kc7as/image/upload/v1698597655/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_316_ilf1ht.png",
    "subtitle": null,
    "description": "A mentorship cohort on JavaScript, React, Node.js, followed by Web3 ideathon project building."
  },
  {
    "date": "06 AUGUST 2023",
    "title": "FastN Session",
    "link": "https://www.instagram.com/p/CvZ9Ps1yCk_/",
    "imageUrl": "https://res.cloudinary.com/djv5kc7as/image/upload/v1698596897/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_315_hcwl6o.png",
    "subtitle": null,
    "description": "An interactive coding roadshow to build full-stack web apps using FastN stack."
  },
  {
    "date": "13 FEBRUARY 2023",
    "title": "Intro to Web3 and its Career Scope",
    "link": "https://www.instagram.com/p/CoeHzBkSLWY/",
    "imageUrl": "https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_302_pgrxxz.png",
    "subtitle": null,
    "description": "Introductory Web3 session by Sanket Aggarwal explaining blockchain technology and career scope."
  },
  {
    "date": "01 FEBRUARY 2023",
    "title": "Global Career Opportunities in Web3 & Metaverse",
    "link": "https://www.instagram.com/p/CoBxdCNynKB/",
    "imageUrl": "https://res.cloudinary.com/djv5kc7as/image/upload/v1688802648/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_301_oeeode.png",
    "subtitle": null,
    "description": "A session with Vas Modinos exploring blockchain adoption, Web3 career pathways, and metaverse opportunities."
  },*/


    ];

    // Oldest first so the timeline reads left (past) to right (present).
    const items = [...events].reverse().map((e, i) => ({
        id: i,
        title: e.title,
        image: e.imageUrl,
        date: e.date,
        subtitle: e.subtitle,
        description: e.description,
        href: e.link,
    }));

    return <EventsCoverflow items={items} />;
};