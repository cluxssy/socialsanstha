import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const Services = () => {
  const containerRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const services = [
    {
      title: 'Editing',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      description: 'Professional video and photo editing services that bring your content to life. We specialize in color grading, transitions, and effects that make your content stand out.',
      features: ['Content Editing', 'Color Grading', 'Motion Graphics', 'Sound Design'],
      tools: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Audition'],
      details: 'Transform your raw footage into compelling visual stories. Our editing team combines technical expertise with creative vision to deliver content that captivates your audience.',
      process: ['Concept Development', 'Raw Footage Review', 'Editing & Effects', 'Color Correction', 'Final Delivery']
    },
    {
      title: 'Social Media Marketing',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      description: 'Strategic social media management that builds your brand presence and engages your audience across all major platforms.',
      features: ['Content Strategy', 'Community Management', 'Analytics Reporting', 'Paid Advertising'],
      tools: ['Meta Business Suite', 'Hootsuite', 'Buffer', 'Sprout Social'],
      details: 'Build meaningful connections with your audience through strategic social media management. We help you create engaging content that resonates with your target market.',
      process: ['Strategy Planning', 'Content Creation', 'Community Engagement', 'Performance Analysis', 'Strategy Refinement']
    },
    {
      title: 'Content Strategy',
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      description: 'Data-driven content strategies that align with your business goals and resonate with your target audience.',
      features: ['Content Planning', 'SEO Optimization', 'Market Research', 'Performance Analysis'],
      tools: ['SEMrush', 'Ahrefs', 'Google Analytics', 'Buzzsumo'],
      details: 'Create content that converts. Our data-driven approach ensures your content strategy aligns with business objectives while engaging your target audience.',
      process: ['Audience Research', 'Strategy Development', 'Content Calendar', 'Implementation', 'Performance Tracking']
    },
    {
      title: 'Graphic Designing',
      image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      description: 'Creative graphic design solutions that communicate your brand message effectively and memorably.',
      features: ['Brand Identity', 'Marketing Materials', 'Social Media Graphics', 'Print Design'],
      tools: ['Adobe Photoshop', 'Illustrator', 'Figma', 'Canva Pro'],
      details: 'Turn your vision into visual reality. Our design team creates stunning graphics that capture attention and communicate your message effectively.',
      process: ['Brief & Research', 'Concept Development', 'Design Creation', 'Refinement', 'Final Delivery']
    },
    {
      title: 'Web Designing',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      description: 'Modern, responsive web design that provides an exceptional user experience across all devices.',
      features: ['UI/UX Design', 'Responsive Design', 'Website Development', 'Performance Optimization'],
      tools: ['React.js', 'Tailwind CSS', 'Next.js', 'WordPress'],
      details: 'Create immersive digital experiences. We design and develop websites that are not just visually stunning but also highly functional and user-friendly.',
      process: ['Discovery', 'Wireframing', 'Design', 'Development', 'Launch']
    }
  ];

  return (
    <div ref={containerRef} className="bg-dark-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y, opacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 to-dark-900" />
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
            style={{ filter: 'brightness(0.3)' }}
          />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tighter"
          >
            SERVICES
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto tracking-wide"
          >
            CREATIVE SOLUTIONS FOR MODERN BRANDS
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 gap-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-dark-900/60 group-hover:bg-dark-900/40 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-primary-400 mb-6 text-lg">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-dark-300 text-accent-400 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ x: 10 }}
                    className="text-white flex items-center gap-2 group"
                  >
                    <span>Learn More</span>
                    <span className="text-accent-400 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-dark-800 rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative h-64 -mx-8 -mt-8 mb-8">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/60 to-transparent" />
              <h2 className="absolute bottom-6 left-8 text-4xl font-bold text-white">
                {selectedService.title}
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
                <p className="text-primary-400">{selectedService.details}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Our Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.process.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-primary-400"
                    >
                      <span className="text-accent-400 font-bold">{index + 1}.</span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-dark-300 text-accent-400 rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors mt-8"
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Services;
