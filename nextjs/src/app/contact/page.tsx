'use client';

import React, { useState } from 'react';

export default function Page() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('送信しました');
  };

  return (
    <main className='min-h-[82vh] flex flex-col justify-center items-center py-3 md:py-6'>
      <div className='max-w-lg w-full'>
        <h1 className='text-center text-4xl md:text-5xl font-bold mb-2 md:mb-4'>
          Contact
        </h1>
        <p className='text-sm lg:text-xl leading-relaxed whitespace-pre-line mb-4 md:mb-8'>
          各種お問い合わせはこちらのフォームよりお願いいたします。
          <br />
          お名前・メールアドレス・件名・お問い合わせ内容を記載して送信ボタンをクリックしてください。
          <br />
          できる限り対応させていただきますが、内容によっては返信を控えさせて頂きますのでご了承ください。
        </p>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='flex gap-2'>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleChange}
              className='w-1/2 border border-gray-400 rounded-md px-3 py-2'
            />
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
              className='w-1/2 border border-gray-400 rounded-md px-3 py-2'
            />
          </div>

          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className='w-full border border-gray-400 rounded-md px-3 py-2'
          />

          <input
            type='tel'
            name='phone'
            placeholder='Phone Number'
            value={formData.phone}
            onChange={handleChange}
            className='w-full border border-gray-400 rounded-md px-3 py-2'
          />

          <textarea
            name='message'
            placeholder='Message'
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className='w-full border border-gray-400 rounded-md px-3 py-2'
          />

          <button
            type='submit'
            className='w-full text-center mt-5 md:mt-10 transition text-xl md:text-2xl'
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
