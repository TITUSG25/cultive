import React from "react";
import { School, Monitor, Users, Heart } from "lucide-react";

export const featuresData = [
  {
    id: 1,
    title: "School Management Software",
    description:
      "Comprehensive digital solution to streamline all school operations, from admissions to academic management with real-time data insights.",
    icon: School,
    bgColor: "from-[#2B3F9F] to-[#1E2C7C]",
    stats: "85% efficiency increase",
  },
  {
    id: 2,
    title: "Language, Math & Robotic Labs Setup",
    description:
      "State-of-the-art laboratory setup with cutting-edge equipment and interactive learning environments for enhanced STEM education.",
    icon: Monitor,
    bgColor: "from-[#7B61FF] to-[#4C2EBE]",
    stats: "3x better engagement",
  },
  {
    id: 3,
    title: "Trainings, Workshops & Seminars",
    description:
      "Comprehensive professional development programs for teachers, students, and parents to enhance skills and knowledge across all educational domains.",
    icon: Users,
    bgColor: "from-[#10B981] to-[#047857]",
    stats: "500+ programs delivered",
  },
  {
    id: 4,
    title: "IEP & Psychological Counseling",
    description:
      "Individualized Education Plans and professional psychological counseling services to support student mental health and personalized learning journeys.",
    icon: Heart,
    bgColor: "from-[#FB7185] to-[#BE123C]",
    stats: "100% personalized support",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2B3F9F] mb-4">Our Innovative Features</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
          Empowering schools with modern solutions for management, engagement, and growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5 bg-gradient-to-br ${feature.bgColor}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold text-[#2B3F9F] mb-2 group-hover:text-[#1E2C7C] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">{feature.description}</p>

                <div className="text-sm font-medium text-[#FDB936]">{feature.stats}</div>

                {/* Glow border on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FDB936] transition-all duration-500 pointer-events-none`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
