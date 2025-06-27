import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <article className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
      <div className="p-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formatDate(post.date)}
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          <Link 
            to={`/blog/${post.slug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        
        <Link 
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Read more
          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard; 