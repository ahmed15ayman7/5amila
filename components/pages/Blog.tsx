import React from 'react'
import Image from 'next/image';
const Blog = () => {
  return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {posts.map(post => (
            <div key={post.title} className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-full h-48 object-cover relative rounded-t-lg">

              <Image 
                  src={post.image} 
                  alt={post.title} 
                  layout="fill" 
                  objectFit="cover" 
                  objectPosition="center 20%" 
                  className=""
                  />
                  </div>
              <div className="p-4">
                <p className="text-gray-600">{post.date}</p>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

  );
};

const posts = [
  {
    title: "How to Stop Hair Loss Naturally: A Guide to Hair Growth",
    date: "July 27, 2024",
    image: "/images/blog1.webp",
    excerpt: "Hair loss is a common concern affecting millions...",
  },
  {
    title: "Do Energy Drinks Cause Hair Loss? Myths vs Reality",
    date: "July 22, 2024",
    image: "/images/blog2.jpg",
    excerpt: "In our fast-paced world, reaching for an energy drink...",
  },
  {
    title: "When is the Best Time to Get a Hair Transplant Treatment?",
    date: "July 17, 2024",
    image: "/images/blog3.jpg",
    excerpt: "Hair loss is a condition that affects millions...",
  },
  {
    title: "How to Stop Hair Loss Naturally: A Guide to Hair Growth",
    date: "July 27, 2024",
    image: "/images/blog4.jpg",
    excerpt: "Hair loss is a common concern affecting millions...",
  },
  {
    title: "Do Energy Drinks Cause Hair Loss? Myths vs Reality",
    date: "July 22, 2024",
    image: "/images/blog5.jpeg",
    excerpt: "In our fast-paced world, reaching for an energy drink...",
  },
  {
    title: "When is the Best Time to Get a Hair Transplant Treatment?",
    date: "July 17, 2024",
    image: "/images/blog6.jpeg",
    excerpt: "Hair loss is a condition that affects millions...",
  },
  {
    title: "When is the Best Time to Get a Hair Transplant Treatment?",
    date: "July 17, 2024",
    image: "/images/blog7.jpeg",
    excerpt: "Hair loss is a condition that affects millions...",
  },
  {
    title: "When is the Best Time to Get a Hair Transplant Treatment?",
    date: "July 17, 2024",
    image: "/images/blog2.jpg",
    excerpt: "Hair loss is a condition that affects millions...",
  },
];

export default Blog;
