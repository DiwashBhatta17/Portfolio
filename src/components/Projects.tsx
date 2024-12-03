import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'GestureSense',
    description: 'PC control system using hand gestures and voice commands with AI assistance. Implemented using OpenCV, face recognition, and speech recognition.',
    link: 'https://github.com/DiwashBhatta17/GestureSense.git'
  },
  {
    title: 'Newa Express',
    description: 'Food delivery web app built with React and Spring Boot. Features live tracking system using Leaflet maps and email service integration.',
    link: 'https://github.com/DiwashBhatta17/Newa_express.git'
  },
  {
    title: 'Chatting Web App',
    description: 'A chatting app with React as the frontend, Node.js as the backend, and MySQL as the database. Focuses on sharing information without revealing sensitive data such as phone numbers or emails.',
    link: 'https://github.com/DiwashBhatta17/ChattingApp.git'
  },
  {
    title: 'Spam Email Finder',
    description: 'Training a model to detect spam emails from a given dataset. Includes data cleaning, removing outliers, and training using five different modules. Random Forest is the best-performing model.',
    link: 'Not added to GitHub'
  },
  {
    title: 'All_Well Clinic',
    description: 'A web application for clinics to book appointments and schedule doctor visits. Built with ReactJS on the frontend and Spring Boot on the backend, with MySQL. Integrates email service for OTP verification.',
    link: 'https://github.com/DiwashBhatta17/allwell_clinic.git'
  },
  {
    title: 'WireCart',
    description: 'An e-commerce website built using PHP and Oracle Apex as the database. Includes email OTP integration and connects to PayPal for payment services.',
    link: 'Not added to GitHub'
  },
  {
    title: 'Awesome Petstore',
    description: 'An online pet store for buying and selling pets. Built with ReactJS as the frontend, Laravel as the backend, and PostgreSQL as the database. Features email verification with a user interface.',
    link: 'Not added to GitHub'
  },
  {
    title: 'Android Applications',
    description: 'A series of composable Android applications built using Android Studio. Involves working with Composable UI, Intents, Android lifecycle, API integrations, permissions, and modules.',
    link: 'Not added to GitHub'
  },
  {
    title: 'Basic Self-made Programming Language',
    description: 'A basic programming language created in C#. It supports variables, while loops, for loops, and methods with or without parentheses to draw shapes.',
    link: 'https://github.com/DiwashBhatta17/Component_1_Assignment.git'
  },
  {
    title: 'Optimizing Energy uses in Smart Homes',
    description: 'A concept for optimizing energy resources in smart homes using Python and Prolog.',
    link: 'https://github.com/DiwashBhatta17/Smart_Home_Management.git'
  },
  {
    title: 'Simple Music Listener Android App',
    description: 'The first Android project built using Java, featuring a simple music listener app.',
    link: 'Not added to GitHub'
  }
];


export default function Projects() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((project) => (
          <div key={project.title} className="bg-white dark:bg-[#0c030c] p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold dark:text-white text-gray-900">{project.title}</h3>
            <p className="text-gray-600  dark:text-[#e4d9d9] mt-2">{project.description}</p>
            <a href={project.link} 
              className="inline-flex items-center gap-2 mt-4  dark:text-[#e4d9d9] text-gray-600 hover:text-gray-900">
              <Github size={20} />
              <span>View Project</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}