import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
      <div className="bg-white dark:bg-[#0c030c] p-6 rounded-lg shadow-sm space-y-6">
        {/* Bachelor's Degree */}
        <div className="flex items-start gap-4">
          <GraduationCap className="text-gray-400 dark:text-[#e4d9d9] mt-1" />
          <div>
            <h3 className="text-lg font-semibold dark:text-white text-gray-900">BSc (Hons) Computing</h3>
            <p className="text-gray-600 dark:text-[#e4d9d9]">The British College</p>
            <p className="text-gray-500 dark:text-[#e4d9d9] text-sm">2021 - 2024</p>
            <p className="text-gray-500 dark:text-[#e4d9d9] text-sm">
              Kathmandu, Nepal
            </p>
            <a 
              href="https://www.thebritishcollege.edu.np/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              Visit College Website
            </a>
          </div>
        </div>
        {/* Intermediate Level */}
        <div className="flex items-start gap-4">
          <GraduationCap className="text-gray-400 dark:text-[#e4d9d9] mt-1" />
          <div>
            <h3 className="text-lg font-semibold dark:text-white text-gray-900">Intermediate Level</h3>
            <p className="text-gray-600 dark:text-[#e4d9d9]">Aishwarya Vidhya Niketan</p>
            <p className="text-gray-500 dark:text-[#e4d9d9] text-sm">2019 - 2020</p>
            <p className="text-gray-500 dark:text-[#e4d9d9] text-sm">
              Dhangadhi, Nepal
            </p>
            <a 
              href="https://avn.edu.np/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              Visit School Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
