import React from 'react';
import Head from 'next/head';
import About from './about/page';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-slate-400">
        <div className="md:text-4xl lg:text-6xl sm:2xl lg:p-7 md:p-6 p-2 font-semibold">
          This Is My First Website.
        </div>
        <div className="lg:p-6 md:p-6 p-2 md:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam consequuntur officiis, sequi omnis voluptates
          voluptate ea, cumque odit cum sunt doloribus ab at reiciendis reprehenderit iste tempore dignissimos amet?
          Optio.
        </div>
      </div>
    </>
  );
}
