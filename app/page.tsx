import Image from 'next/image';
import smashing from 'public/images/homeh/smashing.jpg';
import summit from 'public/images/homeh/summit.jpg';
import reactathon from 'public/images/homeh/reactathon.jpg';
import meetups from 'public/images/homeh/meetups.jpg';

import ship from 'public/images/homeh/ship.jpg';
import filming from 'public/images/homeh/filming.jpg';


import avatar from 'app/avatar.jpg';






function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}



export default async function Page() {
  const [] = await Promise.all([
    // Add your promises here
    new Promise((resolve) => setTimeout(resolve, 1000)), // Placeholder promise
  ]);

  return (
    <section>
    <h1 className="font-bold text-2xl mb-8 tracking-tighter">
  hey, I&apos;m fardin ahosan👋
</h1>

      <p className="prose prose-neutral dark:prose-invert">
        {`I'm an enthusiastic and dedicated SQA Engineer with expertise in automation and manual testing. I specialize in Selenium Python Testing, BDD, Page Objects, Data-Driven, and End-to-End Frameworks. With a keen eye for UI/UX, I ensure top-notch quality in software applications. Additionally, I have hands-on experience in ReactJS, NodeJS, and Socket.io, having worked on multiple projects. As a result, I bring a holistic perspective to my work and contribute to building robust and reliable software solutions.
 `}
      </p>
      
      
      <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <p>Python</p>
        </div>

        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <p>Selenium</p>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <p>Cypress</p>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">

        <p>Postman</p>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">

        <p>UI/UX</p>
        </div>
      </div>






      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={summit}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={filming}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={reactathon}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={smashing}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={ship}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={meetups}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      
      
      <div className="prose prose-neutral dark:prose-invert">
      <p>
      Over the past four years, I have immersed myself in various tools and technologies, exploring diverse fields such as Level design, Interior design, UI/UX design, and Full Stack development (MERN stack). This multidisciplinary experience has provided me with a strong foundation and a comprehensive understanding of a wide range of technologies. By venturing into different fields, I have developed a versatile mindset that allows me to approach challenges from different angles, think creatively, and find innovative solutions. This diverse experience has also enriched my ability to collaborate effectively with professionals from different domains, fostering a holistic approach to problem-solving.
       </p>

      </div>
















      <div className="prose prose-neutral dark:prose-invert">
      <p>
  I&apos;ve also worked with LAB-AR, ShilpoBari,Rodrigo.EXE
  Debug Studios and open-source communities.
</p>

      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/fardinahosan/"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">follow me on linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/smfardinahosan/"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">follow me in facebook</p>
          </a>
        </li>


        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/fardinahosancse"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">github</p>
          </a>
        </li>



        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto: fardinahosan@gmail.com
            "
          >
            <ArrowIcon />
            <p className="h-7 ml-2">email me</p>
          </a>
        </li>



      </ul>
    </section>
  );
}
