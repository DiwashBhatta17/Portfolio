import React from 'react';
import { Code, Music, Languages } from 'lucide-react';

const interests = [
  { icon: Code, label: 'Coding' },
  { icon: Music, label: 'Music' },
  { icon: Languages, label: 'Languages' }
];

export default function Interests() {
  return (
    <section>
      <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-6">Interests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {interests.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3  dark:bg-[#0c030c] bg-white p-4 rounded-lg shadow-sm">
            <Icon className="text-gray-400 dark:text-[#f4f2f2]" />
            <span className="text-gray-600 dark:text-[#f4f2f2]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}