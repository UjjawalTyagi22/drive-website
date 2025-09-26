import React from 'react';
import { BookOpen, CheckCircle, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Lessons",
      description: "Engaging, gamified content that makes learning disaster preparedness fun and memorable.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Certification",
      description: "Earn recognized certifications upon completion of comprehensive training modules.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Star,
      title: "Real-World Scenarios",
      description: "Practice with region-specific disaster scenarios based on your location and risk factors.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center p-8">
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;