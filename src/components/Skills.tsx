import React from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'C', 'C#', 'Java', 'C++']
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'TailwindCSS', 'JSON', 'Bootstrap']
  },
  {
    title: 'Developing Mobile Applications',
    skills: ['Kotlin', 'Java', 'Android Development (Android Studio)', 'React Native']
  },
  {
    title: 'Frameworks and Libraries',
    skills: ['ReactJS', 'Laravel', 'Node.js', 'Spring Boot']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'Apex Oracle', 'PostgreSQL', 'SQL', 'MongoDB']
  },
  {
    title: 'Extras',
    skills: ['Git', 'GitHub', 'Jira', 'Bitbucket', 'AI', 'R Programming', 'Postman', 'OOP', 'Adobe Photoshop', 'Linux', 'REST APIs', 'OpenCV', 'Data Processing', 'Machine Learning']
  }
];


export default function Skills() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-white dark:bg-[#0c030c] dark:text-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-[#473737] dark:text-[#f4f2f2] text-gray-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}