import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-6">Experience</h2>
      <div className="bg-white dark:bg-[#0c030c] p-6 rounded-lg shadow-sm">
        <div className="flex items-start gap-4">
          <Briefcase className="text-gray-400 mt-1" />
          <div>
            <h3 className="text-lg font-semibold dark:text-white text-gray-900">Web Developer</h3>
            <p className="text-gray-600  dark:text-[#e4d9d9]">Code Camp The British College</p>
            <p className="text-gray-500  dark:text-[#e4d9d9] text-sm">June 2023 - October 2023</p>
            <ul className="mt-4 text-gray-600  dark:text-[#e4d9d9] list-disc list-inside">
              <li>Collaborated in team environment using React and Spring Boot</li>
              <li>Engaged in daily stand-up meetings for progress tracking</li>
              <li>Enhanced communication skills and dedication to continuous learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}