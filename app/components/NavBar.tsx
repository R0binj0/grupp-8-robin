'use client'

import Link from "next/link";

export default function Navbar() {

  return (
    <div className=" flex justify-between align-center bg-blue-500 border-b border-gray-200 text-white p-4 text-right">
      <Link rel="stylesheet" href="/">
        <img  className='h-28' src="/img/logo.png" alt="logo" />
      </Link>
      <div className="ml-4 flex flex-col justify-center align-center">
          <p className="text-2xl font-bold"><a href="https://www.112.ee" className="text-white">HÄDAABI NUMBER 112</a></p>
          <p className="text-xl"><a href="https://1220.ee" className="text-white">PEREARSTI INFOTELEFON 1220</a></p>
      </div>
    </div>
  );
}