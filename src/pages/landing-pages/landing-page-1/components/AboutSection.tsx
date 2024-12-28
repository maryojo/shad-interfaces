import React, { useRef } from 'react';
import Card from './Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { description } from '@/pages/ProfilePage01';

const AboutSection = () => {
  const scrollRef = useRef(null);

  const cardData = [
    {
      bgColor: "bg-[#c3ff3d]",
      age: "5 - 12 years",
      category: "For kids",
      programName: "Junior programs",
      description: "Introduce young athletes to the basics of sports with fun and engaging activities. This program focuses on developing coordination, motor skills.",
      imgUrl: 'https://img.freepik.com/free-photo/front-view-boy-holding-ball_23-2148263188.jpg?t=st=1733602994~exp=1733606594~hmac=32adfe93e5a21208b1222f9079d68cf14da18e22f77b80a0041b7c6dd2557704&w=900', 
    },
    {
      age: "13 - 19 years",
      category: "For teens",
      programName: "Teens programs",
      description: 'Elevate athletic performance with advanced training techniques, including strength, endurance, and sport-specific skills',
      imgUrl: "https://img.freepik.com/free-photo/medium-shot-woman-holding-ball_23-2149137068.jpg?t=st=1733603503~exp=1733607103~hmac=4b6b18873d76c0011032fb929c08415a22fd42afd660824952b83c6e1c484d8d&w=360",
    },
    {
      age: "18 - 45 years",
      category: "All levels",
      programName: "Adult programs",
      description: 'Designed for athletes aiming to reach peak performance, this program focuses on high-intensity conditioning, advanced skill mastery, and mental preparation',
      imgUrl: 'https://img.freepik.com/free-photo/looking-young-afro-american-sporty-man-wearing-headband-wristband-with-headphones-neck-exercising-with-dumbbell_141793-98767.jpg?t=st=1734630202~exp=1734633802~hmac=da475c9aa0c92f2f349789fb4bcb77e44815a16f470370ff189936b3ecf4e9c8&w=826',
    },
    {
      age: "All ages",
      category: "All levels",
      programName: "Private lessons",
      description: 'Enhance strength, flexibility, and endurance with specialized training for mature athletes. ',
      imgUrl: 'https://img.freepik.com/free-photo/mirthful-african-american-lady-carries-two-hula-hoops-rolled-up-karemat-exercises-loose-weight_273609-29959.jpg?t=st=1734630852~exp=1734634452~hmac=bba92e53fdf6b26c0170e3650c8cdfba5f048a538b2facf58c3b91b3032d516f&w=900',
    },
    {
      age: "All ages",
      category: "All levels",
      programName: "Special programs",
      description: 'Stay active and fit with a program tailored to adults looking to maintain athletic performance, improve fitness, or participate in recreational sports.',
      imgUrl: 'https://img.freepik.com/free-photo/full-shot-people-training-with-80-s-outfit_23-2151081400.jpg?t=st=1734630976~exp=1734634576~hmac=7565476268ae461a8b6d7698991cc3952bd0c0556468699e248577c527783811&w=360',
    },
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      if (direction === 'left') {
        scrollRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: 'smooth',
        });
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="pl-8 md:pl-16 py-12 md:py-20">
      <div className="flex md:items-end md:flex-row flex-col">
        <div>
          <p className="uppercase text-neutral-500">Elevate your game</p>
          <h3 className="text-4xl md:text-6xl font-bold mb-10 w-full md:w-2/4">
            Comprehensive Sport Training for Everyone
          </h3>
        </div>
        <div className="flex gap-5 mb-10">
          <div
            className="bg-neutral-900 w-7 h-7 rounded-full cursor-pointer flex items-center justify-center"
            onClick={() => handleScroll('left')}
          >
            <ChevronLeft size={15} className="text-neutral-200" />
          </div>
          <div
            className="bg-neutral-900 w-7 h-7 rounded-full cursor-pointer flex items-center justify-center"
            onClick={() => handleScroll('right')}
          >
            <ChevronRight size={15} className="text-neutral-200" />
          </div>
        </div>
      </div>
      <div className="overflow-x-scroll overflow-y-hidden flex flex-nowrap  gap-4 pb-4 scroll-smooth hide-scrollbar" ref={scrollRef}>
      {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
