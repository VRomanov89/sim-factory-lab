import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  author = 'Vladimir Romanov'
}) => {
  const siteTitle = 'Sim Factory Lab';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'A community-driven project exploring modern manufacturing technologies, ISA-95 architecture, and industrial automation. Learn about PLC programming, SCADA systems, and factory automation.';
  const defaultKeywords = 'manufacturing, industrial automation, ISA-95, PLC programming, SCADA, MES, factory automation, Industry 4.0, smart manufacturing, OT systems';
  const defaultImage = '/og-image.png';
  const siteUrl = 'https://sim-factory-lab.vercel.app';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />
      <meta property="twitter:creator" content="@VRomanov89" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url || siteUrl} />
    </Helmet>
  );
};

export default SEOHead; 