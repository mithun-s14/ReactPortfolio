import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Python from '../assets/python.webp';
import ReactIcon from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Java from '../assets/java.png';
import JavaScript from '../assets/javascript.png'
import GitHub from '../assets/github.png'
import NET from '../assets/dotnet.png'
import Typescript from '../assets/typescript.png'
import CSharp from '../assets/csharp.png'
import pandas from '../assets/pandas.svg'
import beautifulsoup from '../assets/beautifulsoup.png'
import scikitlearn from '../assets/scikitlearn.png'
import selenium from '../assets/selenium.png'
import supabase from '../assets/supabase.png'
import powerplatform from '../assets/powerplatform.webp'
import mssql from '../assets/mssql.png';
import numpy from '../assets/numpy.png';
import flask from '../assets/flask.png';
import visualstudio from '../assets/visualstudio.png';
import vercel from '../assets/vercel.svg';
import nodejs from '../assets/nodejs.png';

const skills = {
  'Languages': [
    { img: HTML, label: 'HTML' },
    { img: CSS, label: 'CSS' },
    { img: JavaScript, label: 'JavaScript' },
    { img: Python, label: 'Python' },
    { img: Java, label: 'Java' },
    { img: Typescript, label: 'TypeScript' },
    { img: CSharp, label: 'C#' },

  ],
  'Frameworks & Libraries': [
    { img: ReactIcon, label: 'React' },
    { img: Tailwind, label: 'Tailwind CSS' },
    { img: NET, label: 'Microsoft .NET' },
    { img: pandas, label: 'Pandas', size: 'w-14' },
    { img: beautifulsoup, label: 'BeautifulSoup', size: 'w-29' },
    { img: scikitlearn, label: 'Scikit-learn' },
    { img: selenium, label: 'Selenium' },
    { img: numpy, label: 'NumPy' },
    { img: flask, label: 'Flask', size: 'w-28' },

  ],
  'Developer Tools': [
    { img: GitHub, label: 'GitHub' },
    { img: supabase, label: 'Supabase' },
    { img: powerplatform, label: 'Power Platform' },
    { img: mssql, label: 'SQL Server Management Studio', size: 'h-24'},
    { img: visualstudio, label: 'Visual Studio' },
    { img: vercel, label: 'Vercel' },
    { img: nodejs, label: 'Node.js' },
  ],
};

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a192f] text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full py-16'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#38A5FF]'>Skills</p>
          <p className='py-4 text-gray-300'>Languages, frameworks, and tools I use to build software</p>
        </div>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className='mt-8'>
            <h3 className='text-2xl font-semibold text-white mb-4'>{category}</h3>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
              {items.map(({ img, label, size }) => (
                <div key={label} className='aspect-square flex flex-col items-center justify-center p-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className={size || 'w-20'} src={img} alt={`${label} icon`} />
                  <p className='mt-4 text-sm'>{label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
