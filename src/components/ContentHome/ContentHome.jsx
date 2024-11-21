import React from 'react'
import "../ContentHome/ContentHome.css"

function ContentHome() {
  return (
  <div className="container">
      <div className='content-home'>
        <div className="text-home">
            <h2>وردپرس فارسی به زبان ساده</h2>
            <p>به میهن وردپرس خوش آمدید. اینجا یاد می‌گیرید چطور سایت خود را با وردپرس راه‌اندازی کنید و آن را رشد دهید.</p>
            <p>از اینجا شروع کنید و اولین سایت خود را با وردپرس راه‌اندازی کنید...</p>
            <button>راهنمای ورود به مسیر</button>
        </div>
        <div className="image-home">
            <img src="../src/images/rezarad.webp" alt="" />
        </div>
    </div>
  </div>
  )
}

export default ContentHome