// components/Shared/PortfolioIntroduction.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const PortfolioIntroduction = () => {
  return (
    <div className="flex flex-col items-center text-center py-16">
      {/* Profile Image */}
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6">
        <Image
          src="https://i.ibb.co.com/fVy964XL/scott-rodgerson-708on-MVu9v-I-unsplash.jpg" // Path to your profile image
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-gray-200 shadow-lg"
        />
      </div>

      {/* Name */}
      <h1 className="text-3xl sm:text-4xl font-semibold  mb-4">
        John Doe
      </h1>

      {/* Bio */}
      <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
        I am a passionate web developer with a keen interest in creating dynamic, user-friendly websites and applications. My goal is to build high-quality, scalable solutions using modern technologies.
      </p>

      {/* Social Media Links */}
      <div className="flex space-x-6">
        <Link
          href="https://github.com/yourusername"
          target="_blank"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          <i className="fab fa-github fa-2x" />
        </Link>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          <i className="fab fa-twitter fa-2x" />
        </a>
      </div>
    </div>
  );
};

export default PortfolioIntroduction;
