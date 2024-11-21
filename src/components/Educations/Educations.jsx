import React from 'react'
import "../Educations/Educations.css"
import { Link } from 'react-router-dom'

function Educations() {
  const blogs = [
    {
      id: "apple-web-design",
      title: "جلسه 8: بخش ششم طراحی سایت اپل با المنتور",
      image: "../src/images/apple-web-design-6-416x234.webp"
    },
    {
      id: "chatgpt-search-engine",
      title: "موتور جستجوی Chat GPT و تاثیر اون روی گوگل",
      image: "../src/images/searchgpt-chatgpt-search-engine-416x234.webp"
    },
    {
      id: "install-chat-wordpress",
      title: "راه‌اندازی چت آنلاین روی سایت وردپرس",
      image: "../src/images/install-chatina-wordpress-416x234.webp"
    },
  ];

  return (
    <div className='container-box'>
      {blogs.map((blog) => (
        <Link to={blog.id}>
          <div className="education">
            <img src={blog.image} alt="" />
            <p>{blog.title}</p>
          </div>
        </Link>
      ))}
      
    </div>
  )
}

export default Educations
