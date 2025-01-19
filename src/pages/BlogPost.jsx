import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const BlogPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    navigate('/blog');
    return null;
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Generate key points from the article content
  const generateKeyPoints = (content) => {
    return [
      "Understanding market dynamics and trends",
      "Implementing effective digital strategies",
      "Maximizing audience engagement",
      "Measuring and analyzing results"
    ];
  };

  // Generate related topics based on the article category
  const generateRelatedTopics = () => {
    return [
      "Digital Strategy",
      "Content Marketing",
      "Social Media",
      "Brand Development"
    ];
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-32 pb-20">
      <motion.article 
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6 text-sm text-primary-400">
            <span>{formatDate(article.publishedAt)}</span>
            <span>•</span>
            <span>{article.source.name}</span>
            {article.author && (
              <>
                <span>•</span>
                <span>By {article.author}</span>
              </>
            )}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            {article.title}
          </h1>
          {article.description && (
            <p className="text-xl text-primary-400 mb-8">
              {article.description}
            </p>
          )}
        </header>

        {/* Featured Image */}
        {article.urlToImage && (
          <motion.div 
            className="mb-12 rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/1200x800?text=No+Image+Available';
              }}
            />
          </motion.div>
        )}

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {/* Main content */}
          <div className="mb-12">
            <div className="text-lg text-primary-400 leading-relaxed space-y-6">
              {/* Article Content */}
              <div className="space-y-6">
                {article.fullContent.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-dark-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Key Points</h2>
            <ul className="space-y-4">
              {generateKeyPoints().map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-primary-400"
                >
                  <span className="text-accent-400 mt-1">•</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Related Topics */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Related Topics</h2>
            <div className="flex flex-wrap gap-3">
              {generateRelatedTopics().map((topic, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-dark-800 rounded-full text-primary-400 text-sm"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/blog')}
            className="mt-12 px-6 py-3 bg-dark-800 text-white rounded-lg hover:bg-dark-700 transition-colors inline-flex items-center gap-2"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            ← Back to Blog
          </motion.button>
        </div>
      </motion.article>
    </div>
  );
};

export default BlogPost;
