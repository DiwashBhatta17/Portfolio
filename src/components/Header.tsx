import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import image1 from '../components/images/diwash2.jpg'

export default function Header() {
  return (
    <header className="bg-white dark:bg-[#0c030c] dark:text-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img 
            src={image1}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Diwash Bhatta</h1>
            <p className="mt-2 text-xl text-gray-600 dark:text-[#e4d9d9]">Full Stack Developer | Masters with AI</p>
            <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="mailto:bhattadiwash17@gmail.com" className="flex items-center gap-2 dark:text-[#e4d9d9] text-gray-600 hover:text-gray-900">
                <Mail size={20} />
                <span>bhattadiwash17@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-2 dark:text-[#e4d9d9]  text-gray-600">
                <MapPin size={20} />
                <span>Bhaktapur, Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}