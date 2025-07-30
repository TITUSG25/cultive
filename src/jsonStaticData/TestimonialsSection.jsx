import React, { useEffect, useState } from "react";
import { Star } from "lucide-react"; // for star icons

const testimonials = [
  {
    id: 1,
    quote:
      "Cultive has transformed how we manage our school operations. Everything is streamlined and efficient now.",
    name: "Michael Johnson",
    title: "School Principal",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    improvement: "85% reduction in administrative tasks",
  },
  {
    id: 2,
    quote:
      "As a teacher, I can now focus more on teaching rather than administrative tasks. Highly recommended!",
    name: "Sarah Williams",
    title: "High School Teacher",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    improvement: "3x more time for actual teaching",
  },
  {
    id: 3,
    quote:
      "The parent communication feature has been a game-changer for keeping track of my children's progress.",
    name: "David Chen",
    title: "Parent",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    improvement: "100% improved communication with school",
  },
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden transition-all duration-500 ${
        isActive ? "border-blue-200 scale-100 opacity-100" : "scale-95 opacity-70"
      }`}
      data-animate
      id={`testimonial-${testimonial.id}`}
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-16 translate-x-16" />

      <div className="relative z-10">
        {/* Author info */}
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-4 border-blue-200 shadow-lg">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
            <p className="text-gray-600 text-sm">{testimonial.title}</p>
          </div>
        </div>

        {/* Rating stars */}
        <div className="flex items-center mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed italic">
          "{testimonial.quote}"
        </blockquote>

        {/* Improvement metric */}
        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
          <div className="text-blue-700 font-semibold text-sm">
            Result: {testimonial.improvement}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Visibility animation with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-10">What People Are Saying</h2>
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === currentTestimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
