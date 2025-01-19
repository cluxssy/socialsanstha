import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { NEWS_API_KEY, NEWS_API_BASE_URL } from '../config';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('digital-marketing');
  const navigate = useNavigate();

  const categories = [
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'content-marketing', label: 'Content Marketing' },
    { id: 'branding', label: 'Branding' },
    { id: 'advertising', label: 'Advertising' },
    { id: 'marketing-trends', label: 'Marketing Trends' }
  ];

  useEffect(() => {
    fetchNews(activeCategory);
  }, [activeCategory]);

  const fetchNews = async (category) => {
    try {
      setLoading(true);
      setError(null);
      
      const queries = {
        'digital-marketing': 'digital marketing OR online marketing',
        'social-media': 'social media marketing OR social media strategy',
        'content-marketing': 'content marketing OR content strategy',
        'branding': 'brand marketing OR brand strategy',
        'advertising': 'digital advertising OR online advertising',
        'marketing-trends': 'marketing trends OR digital trends'
      };

      const query = queries[category] || 'digital marketing';
      
      const response = await fetch(
        `${NEWS_API_BASE_URL}/everything?` +
        `q=${encodeURIComponent(query)}` +
        '&language=en' +
        '&sortBy=relevancy' +
        `&apiKey=${NEWS_API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }

      const data = await response.json();
      
      const filteredArticles = data.articles
        .filter(article => {
          const relevantTerms = [
            'marketing', 'digital', 'media', 'brand', 'advertising',
            'content', 'social', 'strategy', 'business', 'campaign'
          ];
          const text = (article.title + ' ' + article.description).toLowerCase();
          return relevantTerms.some(term => text.includes(term));
        })
        .slice(0, 12)
        .map(article => ({
          ...article,
          // Generate some placeholder content for each article
          fullContent: `${article.description}\n\n${article.content}\n\n` +
            'This article explores the latest developments in digital marketing and their impact ' +
            'on businesses worldwide. As companies continue to adapt to the evolving digital landscape, ' +
            'new strategies and technologies emerge to help organizations better connect with their audience. ' +
            'The findings suggest that businesses that embrace these changes and implement innovative ' +
            'approaches are more likely to succeed in the competitive digital marketplace.'
        }));

      setArticles(filteredArticles);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getReadTime = (content) => {
    const wordsPerMinute = 200;
    const words = content?.split(/\s+/)?.length || 0;
    const readTime = Math.ceil(words / wordsPerMinute);
    return `${readTime} min read`;
  };

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
              Marketing Insights
            </h1>
            <p className="text-xl md:text-2xl text-primary-400 max-w-3xl mx-auto">
              Stay updated with the latest trends in digital marketing and media
            </p>
          </motion.div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full text-sm ${
                  activeCategory === category.id
                    ? 'bg-accent-400 text-dark-900'
                    : 'bg-dark-800 text-primary-400 hover:bg-accent-400 hover:text-dark-900'
                } transition-colors`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-accent-400 border-t-transparent rounded-full mx-auto mb-4"
              />
              <p className="text-primary-400">Loading articles...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-20">
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={() => fetchNews(activeCategory)}
                className="px-6 py-2 bg-accent-400 text-dark-900 rounded-full hover:bg-accent-300"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Article Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-800 rounded-lg overflow-hidden hover:bg-dark-700 transition-colors"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={article.urlToImage || 'https://via.placeholder.com/800x450?text=No+Image'}
                      alt={article.title}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/800x450?text=No+Image';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-primary-400 mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary-400">
                        {formatDate(article.publishedAt)}
                      </span>
                      <motion.button
                        onClick={() => navigate(`/blog/${index}`, { state: { article } })}
                        className="text-accent-400 hover:text-accent-300 transition-colors inline-flex items-center gap-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;
