"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
function CreatePost() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !img || !content) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, img, content }),
      });
      if (res.ok) {
        useRouter.push("/");
      } else {
        throw new Error("Failed to create post");
      }
    } catch (error) {}
    const post = { title, img, content };
    console.log(post);
  };
  return (
    <div className="container mx-auto p-10">
      <h3 className="text-3xl font-bold"> Create Post</h3>
      <hr className="my-3" />
      <Link
        href="/"
        className="bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2"
      >
        Go Back
      </Link>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Post Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Post Img Url"
          onChange={(e) => setImg(e.target.value)}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Post Content"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="bg-green-500 text-white border py-2 px-3 rounded my-2">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
