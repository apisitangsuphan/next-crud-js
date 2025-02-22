"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  const [postData, setPostData] = useState([]);
  return (
    <main className="container mx-auto my-5 p-10">

      <h1>Next CRUD + MongoDB</h1>
      <hr className="my-3" />
      <Link href="/create">
        {" "}
        <button className="bg-green-500 p-3 text-white rounded">
          Create Post
        </button>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-2">
        <div className="shadow-xl my-10 px-10 py-5 rounded-xl">
          <h4>Post Title</h4>
          <Image
            alt="House"
            src="/public/assets/img/premium_photo-1721597102419-629da328872f.avif"
            width={100}
            height={100}
          ></Image>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, esse.
          </p>
          <div className="mt-5 flex justify-between">
            <Link
              href="/edit"
              className="bg-gray-500 text-white border px-6 py-2 rounded-md text-lg mt-2"
            >Edit</Link> 
            <Link
              href="/delete"
              className="bg-red-500 text-white border px-6 py-2 rounded-md text-lg mt-2"
            >Delete</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
