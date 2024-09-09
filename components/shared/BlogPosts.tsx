'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
const blogs = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    excerpt: "Closures are a fundamental concept in JavaScript that every developer should understand...",
    image: "/images/blog1.webp",
    author: "Jane Doe",
    date: "August 23, 2024",
  },
  {
    id: 2,
    title: "A Guide to React Hooks",
    excerpt: "React Hooks allow you to use state and other features in functional components...",
    image: "/images/blog2.jpg",
    author: "John Smith",
    date: "August 20, 2024",
  },
  {
    id: 3,
    title: "Exploring Next.js Features",
    excerpt: "Next.js offers many powerful features, such as server-side rendering, static site generation...",
    image: "/images/blog3.jpg",
    author: "Alice Brown",
    date: "August 18, 2024",
  },
  {
    id: 4,
    title: "CSS Grid Layout",
    excerpt: "CSS Grid Layout is a two-dimensional layout system for the web...",
    image: "/images/blog4.jpg",
    author: "Bob White",
    date: "August 15, 2024",
  },
  {
    id: 5,
    title: "Understanding Asynchronous JavaScript",
    excerpt: "Asynchronous JavaScript is key to building fast and responsive web applications...",
    image: "/images/blog5.jpeg",
    author: "Sarah Lee",
    date: "August 12, 2024",
  },
  {
    id: 6,
    title: "Introduction to TypeScript",
    excerpt: "TypeScript is a superset of JavaScript that adds type safety...",
    image: "/images/blog6.jpeg",
    author: "Mark Evans",
    date: "August 10, 2024",
  },
  {
    id: 7,
    title: "Building REST APIs with Node.js",
    excerpt: "Learn how to build scalable and maintainable REST APIs using Node.js...",
    image: "/images/blog7.jpeg",
    author: "Emily Carter",
    date: "August 8, 2024",
  },
  {
    id: 8,
    title: "Advanced CSS Techniques",
    excerpt: "Explore advanced CSS techniques to enhance your web design...",
    image: "/images/blog5.jpeg",
    author: "David Johnson",
    date: "August 5, 2024",
  },
];





const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);
  const t = useTranslations('blogs');

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-[40px] font-bold mb-8 text-center">{t('latestBlogPosts')}</h1>
      <div className="flex flex-wrap md:flex-nowrap gap-8">
        {/* Left: Selected Blog */}
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image 
              src={selectedBlog.image} 
              alt={selectedBlog.title} 
              layout="fill" 
              objectFit="cover" 
              objectPosition="center 30%" 
              className="rounded-t-lg"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{selectedBlog.title}</h2>
            <p className="text-gray-600 mb-4">{selectedBlog.excerpt}</p>
            <div className="text-sm text-gray-500">
              <p>{t('by')} {selectedBlog.author}</p>
              <p>{selectedBlog.date}</p>
            </div>
          </div>
        </div>

        {/* Right: Scrollable Blog List */}
        <div className="w-full md:w-1/3 h-[600px] overflow-y-scroll px-4">
          {blogs.slice(1).map((blog) => (
            <div 
              key={blog.id} 
              className="flex items-center mb-4 p-4 bg-white rounded-lg shadow cursor-pointer"
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="w-1/3 h-20 relative">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  layout="fill" 
                  objectFit="cover" 
                  objectPosition="center 20%" 
                  className="rounded-lg"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">{blog.title}</h3>
                <p className="text-sm text-gray-500">{blog.author} - {blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
