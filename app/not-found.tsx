'use client';
import {useRouter } from 'next/navigation';
import "./globals.css"
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
export default function NotFound() {
    let router= useRouter()
  return (
    <html>
      <body className='text-center w-full'>
    <div className="flex flex-col items-center w-full justify-center min-h-screen bg-white dark:bg-gray-900">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-8xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
          Sorry, the page you were looking for doesn’t exist. 
          <br />You may have mistyped the address or the page may have moved.
        </p>
          <Button
            type="primary"
            size="large"
            icon={<ArrowLeftOutlined />}
            className="flex items-center "
            onClick={()=>router.back()}
          >
            Go Back
          </Button>
      </div>

    </div>


      </body>
    </html>
  );
}