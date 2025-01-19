import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "3", label: "Global Offices" }
  ];

  const values = [
    {
      title: "Creative Excellence",
      description: "We blend creativity with strategy to deliver exceptional digital experiences that stand out.",
      icon: "✨"
    },
    {
      title: "Result Driven",
      description: "Our focus is on delivering measurable results that help your business grow and succeed.",
      icon: "📈"
    },
    {
      title: "Innovation First",
      description: "We stay ahead of digital trends to bring cutting-edge solutions to our clients.",
      icon: "💡"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-primary-400 max-w-3xl mx-auto">
              We are a creative digital studio that believes in the power of innovative solutions and meaningful connections.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-6xl font-bold text-accent-400 mb-2">
                  {stat.number}
                </h3>
                <p className="text-primary-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="py-32 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                Our Story
              </h2>
              <p className="text-primary-400 text-lg mb-6">
                Founded with a vision to bridge the gap between creativity and technology, Social Sanstha has evolved into a full-service digital studio that pushes boundaries and sets new standards in digital excellence.
              </p>
              <p className="text-primary-400 text-lg mb-8">
                We believe in the power of digital transformation and its ability to create meaningful connections between brands and their audiences. Our team of experts brings together diverse skills and perspectives to deliver solutions that make an impact.
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-accent-400 text-dark-400 px-8 py-4 text-lg font-medium rounded-lg hover:bg-accent-300 transition-colors"
              >
                Let's Work Together
              </Link>
            </div>
            <div className="aspect-w-4 aspect-h-3 bg-dark-700 rounded-lg overflow-hidden">
              {/* Add your image here */}
              <div className="w-full h-full bg-gradient-to-br from-dark-600 to-dark-800"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Our Values
            </h2>
            <p className="text-xl text-primary-400 max-w-3xl mx-auto">
              The principles that guide us in creating exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-dark-800 p-8 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-primary-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
