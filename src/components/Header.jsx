import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 bg-gradient-to-b from-dark-400/90 to-transparent backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="group flex items-center gap-4">
          <motion.img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="overflow-hidden relative"
            whileHover="hover"
          >
            <motion.span 
              className="inline-block text-lg tracking-[0.3em] font-light text-white uppercase relative z-10"
              variants={{
                hover: {
                  y: -20,
                  transition: { duration: 0.3, ease: "easeOut" }
                }
              }}
            >
              Social Sanstha
            </motion.span>
            <motion.span 
              className="inline-block text-lg tracking-[0.3em] font-light text-accent-400 uppercase absolute top-0 left-0 z-10"
              variants={{
                hover: {
                  y: 0,
                  transition: { duration: 0.3, ease: "easeOut" }
                }
              }}
              style={{ y: 20 }}
            >
              Social Sanstha
            </motion.span>
          </motion.div>
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-sm tracking-[0.2em] text-white hover:text-accent-400 transition-colors uppercase"
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="text-sm tracking-[0.2em] text-white hover:text-accent-400 transition-colors uppercase"
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className="text-sm tracking-[0.2em] text-white hover:text-accent-400 transition-colors uppercase"
          >
            About
          </Link>
          <Link 
            to="/blog" 
            className="text-sm tracking-[0.2em] text-white hover:text-accent-400 transition-colors uppercase"
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className="text-sm tracking-[0.2em] text-white hover:text-accent-400 transition-colors uppercase"
          >
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
