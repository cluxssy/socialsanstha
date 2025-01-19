import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const services = [
    { 
      title: 'Editing',
      subtitle: 'Visual Stories',
      year: '2024',
      category: 'Post Production'
    },
    { 
      title: 'Social Media Marketing',
      subtitle: 'Digital Growth',
      year: '2024',
      category: 'Marketing'
    },
    { 
      title: 'Content Strategy',
      subtitle: 'Brand Voice',
      year: '2024',
      category: 'Strategy'
    },
    { 
      title: 'Graphic Designing',
      subtitle: 'Visual Identity',
      year: '2024',
      category: 'Design'
    },
    { 
      title: 'Web Designing',
      subtitle: 'Digital Experience',
      year: '2024',
      category: 'Development'
    },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="h-screen flex items-center justify-center bg-dark-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ y, opacity }}
        >
          <div className="text-center">
            <motion.h1 
              className="text-8xl md:text-[12rem] font-bold text-white tracking-tighter mb-4"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              SOCIAL SANSTHA
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-primary-400 tracking-wide"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              CREATIVE SQUAD / DIGITAL STUDIO
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-gray-500 text-sm tracking-widest">Scroll More___</p>
        </motion.div>
      </motion.section>

      {/* Works Section */}
      <section className="min-h-screen bg-dark-900 py-32">
        <div className="container mx-auto px-4">
          <div className="mb-20">
            <motion.h2 
              className="text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              WORKS
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We help brands grow and tell their stories to the world.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to="/services" className="block">
                  <div className="relative overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9 bg-dark-800">
                      <div className="p-8 flex flex-col justify-between h-full">
                        <div>
                          <p className="text-primary-300 text-sm mb-2">{service.category}</p>
                          <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-primary-400">{service.subtitle}</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <span className="text-sm text-primary-300">{service.year}</span>
                          <motion.span 
                            className="text-accent-400"
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            View Project →
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <motion.section 
        className="py-20 bg-dark-900 border-t border-dark-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl text-white font-bold">INDIA</h2>
              <p className="text-gray-500">2024</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact"
                className="text-white hover:text-primary-500 transition-colors text-lg"
              >
                Let's Work Together →
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
