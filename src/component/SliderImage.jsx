import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SliderImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Welcome to Our Company',
      text: 'Innovative Solutions for Your Business',
    },
    {
      image: 'https://images.unsplash.com/photo-1632773004171-02bc1c4a726a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Professional Team',
      text: 'Experienced and Dedicated Professionals',
    },
    {
      image: 'https://images.unsplash.com/photo-1562505208-0b9bad881640?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Global Reach',
      text: 'Serving Clients Worldwide',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id='beranda' className="relative w-full h-120 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-120 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white space-y-4 transform transition-all duration-1000 ease-in-out">
              <h1 className="text-5xl font-bold animate-fade-in-up">
                {slide.title}
              </h1>
              <p className="text-xl animate-fade-in-up delay-150">
                {slide.text}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderImage;