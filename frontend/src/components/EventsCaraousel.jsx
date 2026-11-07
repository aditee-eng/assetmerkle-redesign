
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Data for the cards
const cards = [
    {
      "id": "card1",
      "title": "Orientation and Treasure Hunt",
      "image": "https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_300_mgqx8x.png",
      "content": "We conducted out first fun event ‘Treasure Hunt’, with over fifteen teams participating following the orientation💰💰.",
      "readMoreLink": "/events"
    },
    {
      "id": "card2",
      "title": "Intro to Web3 and its Career Scope",
      "image": "https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_302_pgrxxz.png",
      "content": "AssetMerkle IGDTUW in collaboration with @ecell_igdtuw 📂bring to you an amazing session on \"Intro To Web3 and Career Scope\" with Sanket Agarwal.🤩🤩",
      "readMoreLink": "/events"
    },
    {
      "id": "card3",
      "title": "BFF Hackathon",
      "image": "https://res.cloudinary.com/djv5kc7as/image/upload/v1688802646/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_303_cpvgip.png",
      "content": "Unleashing the digital creativity at the ultimate hackathon showdown💥🚀 We dived into the world where tech meets enthusiasm: BFF Hackathon organised by Assetmerkle IGDTUW and AUV-DTU👾",
      "readMoreLink": "/events"
    },
    {
      "id": "card4",
      "title": "FastN Session",
      "image": "https://res.cloudinary.com/djv5kc7as/image/upload/v1698596897/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_315_hcwl6o.png",
      "content": "Assetmerkle IGDTUW collaborated with FastN and conducted a Roadshow. The roadshow consisted of enhancing the coding skills using fastN stack to build",
      "readMoreLink": "/events"
    },
    {
      "id": "card5",
      "title": "Web3 Cohort",
      "image": "https://res.cloudinary.com/djv5kc7as/image/upload/v1698598435/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_318_sjecxi.png",
      "content": "AssetMerkle IGDTUW has an ongoing mentorship cohort on web3 - we had started from scratch - right from the beginning of with Javascript, frontend development with ReactJs",
      "readMoreLink": "/events"
    },
    {
      "id": "card6",
      "title": "Ideathon",
      "image": "https://res.cloudinary.com/djv5kc7as/image/upload/v1698597655/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_316_ilf1ht.png",
      "content": "As a part of the cohort, the mentees have divided themselves among groups of three-four and have worked on the idea of building their own dApp. The ideathon was a",
      "readMoreLink": "/events"
    },
    {
      "id": "card7",
      "title": "Introduction to Crypto V/S Blockchain and Altcoins",
      "image": "https://res.cloudinary.com/djv5kc7as/image/upload/v1698598489/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_317_nle6lt.png",
      "content": "The event exploring the intricate relationship between crypto, blockchain technology, and altcoins was a remarkable success, shedding light on the dynamic and evolving",
      "readMoreLink": "/events"
    },
    {
      "id": "card8",
      "title": "HackHive, a 36-hour hackathon adventure",
      "image": "https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/hack-hive_b3tszn.png",
      "content": "HackHive, a 36-hour in-person hackathon in Indore by Techhunterssss, supported by MLH, was a tech extravaganza from October 27th to 29th. Tech enthusiasts made their bytes count in this inclusive event.",
      "readMoreLink": "/events"
    },
    {
      "id": "card9",
      "title": "Emerging Technologies Workshop",
      "image": "https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/AM-GDSC_o0c14y.png",
      "content": "'Emerging Technologies: Pioneering the Digital Frontier' was a two-day tech extravaganza on October 26 & 27, 2023. Participants delved into the latest in web3, cloud-native architectures, blockchain, AI, and more, engaging with experts and witnessing live demos.",
      "readMoreLink": "/events"
    },
    {
      "id": "card10",
      "title": "Chain Pe Charcha",
      "image": "https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/chainpecharcha_gm0ysz.png",
      "content": "AssetMerkle took a dive into the world of Web3 technologies with an exciting Twitter Spaces podcast. We unraveled the secrets of the decentralized web, featuring insights and discussions about the future of technology and cyberspace. If you were passionate about sharing your insights, we hope you joined us as a speaker.",
      "readMoreLink": "/events"
    },
    {
      "id": "card11",
      "title": "Deepdive into Blockchain & Crypto",
      "image": "https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/blockchain_o4u0ok.png",
      "content": "AssetMerkle's insightful session, \"Deepdive into Blockchain & Crypto,\" with Grahil Khandelwal, Community Lead at Deepverse DAO, explored Blockchain intricacies, Crypto insights, and decentralized ecosystem futures.",
      "readMoreLink": "/events"
    },
    {
      "id": "card12",
      "title": "Build with Tezos",
      "image": "https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/build-with-teszo_fj66i0.png",
      "content": "AssetMerkle and The Product House hosted 'Build with Tezos,' a hands-on workshop on Tezos Blockchain at IGDTUW.",
      "readMoreLink": "/events"
    },
    {
      "id": "card13",
      "title": "Careers in Web3",
      "image": "https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/geetika-di_ktiuzk.png",
      "content": "Dived into \"Careers in Web3\" with Geetika Gupta, President of Assetmerkle IGDTUW, for insights into opportunities in the tech world. Participants learned to create their first crypto wallet.",
      "readMoreLink": "/events"
    },
    {
      "id": "card14",
      "title": "Fleek Deploy: Delhi",
      "image": "https://res.cloudinary.com/dlx9sj1pl/image/upload/v1712693959/Screenshot_2024-04-10_014915_nepofq.png",
      "content": "Explored cutting-edge tech, showcased transformative decentralized hosting & web management.",
      "readMoreLink": "/events"
    },
    {
      "id": "card15",
      "title": "Starknet X Assetmerkle",
      "image": "https://res.cloudinary.com/dlx9sj1pl/image/upload/v1712692992/Screenshot_2024-04-10_013236_q0xwi0.png",
      "content": "Hands-on Starknet session: Theory, advantages over Layer 2, architecture, account abstraction, and STARKs.",
      "readMoreLink": "/events"
    },
    {
      "id": "card16",
      "title": "The Graph Workshop",
      "image": "https://res.cloudinary.com/dlx9sj1pl/image/upload/v1730999849/Screenshot_2024-11-07_224113_emm0uy.png",
      "content": "A beginner-friendly introduction to Web3 and The Graph. Dived into blockchain basics, learnt about subgraphs, and enjoyed exclusive swags, a GRT airdrop, and networking opportunities.",
      "readMoreLink": "/events"
    }
  ];

// Custom CSS for Swiper controls. This can be moved to your global CSS file.
const SwiperStyles = () => (
  <style>{`
    .events-carousel .swiper-button-next,
    .events-carousel .swiper-button-prev {
      color: #F6B433; /* Your theme's gold color */
      transform: scale(0.7);
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(8px);
      padding: 24px;
      border-radius: 50%;
      transition: all 0.3s ease;
    }
    .events-carousel .swiper-button-next:hover,
    .events-carousel .swiper-button-prev:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-color: rgba(246, 180, 51, 0.5);
    }
    .events-carousel .swiper-pagination-bullet {
      background-color: #4b5563; /* Gray for inactive dots */
      opacity: 0.7;
    }
    .events-carousel .swiper-pagination-bullet-active {
      background-color: #F6B433; /* Gold for the active dot */
      opacity: 1;
      width: 16px;
      border-radius: 4px;
    }
  `}</style>
);

const EventCard = ({ card }) => {
  const cardRef = React.useRef(null);
  const [style, setStyle] = React.useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = ((y / height) - 0.5) * -15; // Max 15deg rotation on X-axis
    const rotateY = ((x / width) - 0.5) * 15;  // Max 15deg rotation on Y-axis

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease-out',
      }}
      className="group h-full bg-white/[0.05] backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex flex-col text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-violet-400/30 transition-colors duration-500 spotlight-card"
    >
      <div className="mb-6 overflow-hidden rounded-xl border border-white/5 bg-black/40 h-48 flex items-center justify-center [transform:translateZ(20px)]">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h4 className="font-display text-lg font-bold mb-3 text-white group-hover:text-violet-300 transition-colors duration-300 [transform:translateZ(30px)]">
        {card.title}
      </h4>
      <p className="text-slate-400 text-sm flex-grow leading-relaxed font-light [transform:translateZ(10px)]">
        {card.content}
      </p>

      <div className="mt-6 [transform:translateZ(15px)]">
        <Link
          to={card.readMoreLink}
          className="inline-block bg-gradient-to-r from-violet-500/10 to-blue-500/5 border border-violet-500/20 text-violet-300 font-display text-xs font-bold tracking-wider px-5 py-2.5 rounded-full hover:bg-violet-500/25 hover:border-violet-400/50 transition-all duration-300"
        >
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
};

const EventsCaraousel = () => {
  return (
    <motion.section 
      id="events" 
      className="py-24 relative w-[90%] mx-auto overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <SwiperStyles />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h3 className="font-sans text-3xl md:text-4xl font-black mb-12 text-center text-white tracking-tight">
          Creating Impact Through Events
        </h3>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="events-carousel"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="self-stretch py-4">
              <EventCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default EventsCaraousel;