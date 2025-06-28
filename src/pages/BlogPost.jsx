import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogPosts';
import VisualPageHeader from '../components/VisualPageHeader';
import SEOHead from '../components/SEOHead';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const [shareCopied, setShareCopied] = useState(false);

  // Share handler
  const handleShare = async () => {
    const shareUrl = window.location.origin + '/blog/' + post.slug;
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: shareUrl
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or error
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 2000);
      } catch (err) {
        alert('Could not copy link.');
      }
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Update Not Found</h1>
          <p className="text-gray-600 mb-8">The project update you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Back to Updates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        url={window.location.origin + '/blog/' + post.slug}
        image={post.authorProfile?.image}
      />
      {/* Header */}
      <VisualPageHeader
        title={post.title}
        subtitle={post.excerpt}
        illustrationType="factory"
        accentColor="gray"
        videoSrc={process.env.PUBLIC_URL + '/videos/factory-header2.mp4'}
      />

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article */}
        <article className="bg-white rounded-3xl shadow-lg p-12 mb-12">
          {/* Meta information */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-8 border-b border-gray-200 gap-6">
            {/* Author Card */}
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <img
                src={post.authorProfile?.image}
                alt={post.authorProfile?.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-blue-200 shadow-lg"
              />
              <div>
                <p className="font-semibold text-gray-900 text-lg">{post.authorProfile?.name}</p>
                <p className="text-blue-600 text-sm font-medium mb-1">{post.authorProfile?.role}</p>
                <p className="text-gray-600 text-xs mb-2">{post.date}</p>
                <div className="flex space-x-2 mt-1">
                  <a href={post.authorProfile?.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href={post.authorProfile?.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href={post.authorProfile?.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 120 122" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="122" fill="white"/><path d="M89.6 18.2H109.2L74.8 58.1L115.2 110.2H83.2L59.7 80.2L33.7 110.2H14.1L50.6 67.6L12 18.2H45.2L66.7 45.9L89.6 18.2ZM83.9 101.1H93.2L41.1 27.1H31.2L83.9 101.1Z" fill="black"/></svg>
                  </a>
                  <a href={post.authorProfile?.social.web} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeWidth="2" /></svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-end w-full md:w-auto mt-4 md:mt-0">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mb-8">
            <p className="text-gray-700 text-sm md:text-base italic text-center md:text-left max-w-2xl mx-auto md:mx-0">{post.authorProfile?.bio}</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            to="/blog"
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Updates
          </Link>
          
          <div className="flex space-x-4">
            <button
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 relative"
              onClick={handleShare}
              type="button"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Share
              {shareCopied && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs rounded px-2 py-1 shadow-lg">Link copied!</span>
              )}
            </button>
            <a
              href={`https://github.com/sim-factory-lab/issues/new?title=Comment on: ${post.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Discuss
            </a>
          </div>
        </div>

        {/* Related Updates */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts
              .filter(p => p.slug !== slug)
              .slice(0, 2)
              .map((relatedPost, index) => (
                <Link
                  key={index}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{relatedPost.date}</span>
                    <span className="text-blue-600 text-sm font-medium">Read more →</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* GitHub Integration */}
        <div className="mt-16 bg-gray-100 rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Contribute to Our Project</h3>
          <p className="text-gray-600 mb-6">
            Found an issue or have a suggestion? Our project is open source and we welcome contributions!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/sim-factory-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              View Repository
            </a>
            <a
              href="https://github.com/sim-factory-lab/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Report Issue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 