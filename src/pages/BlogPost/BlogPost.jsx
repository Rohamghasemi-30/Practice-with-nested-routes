import React from 'react'
import { useParams } from 'react-router-dom'
import "../BlogPost/BlogPost.css"

function BlogPost() {
  const { categoryblog } = useParams();

  const blogContent = {
    "apple-web-design": {
      title: "جلسه 8: بخش ششم طراحی سایت اپل با المنتور",
      content: "این جلسه شامل مراحل طراحی بخش ششم سایت اپل با استفاده از المنتور است.",
    },
    "chatgpt-search-engine": {
      title: "موتور جستجوی Chat GPT و تاثیر اون روی گوگل",
      content: "در این مقاله به تاثیر Chat GPT به عنوان یک موتور جستجوی هوشمند روی بازار گوگل پرداخته‌ایم.",
    },
    "install-chat-wordpress": {
      title: "راه‌اندازی چت آنلاین روی سایت وردپرس",
      content: "راهنمای کامل نصب و راه‌اندازی سیستم چت آنلاین روی سایت وردپرس شما.",
    },
  };

  const blog = blogContent[categoryblog];

  return (
    <div className='container-blog'>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  )
}

export default BlogPost
