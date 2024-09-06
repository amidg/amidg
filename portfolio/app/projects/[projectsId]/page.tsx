"use client";

import React from "react";

const posts: { [key: string]: { title: string; content: string } } = {
  "first-post": {
    title: "The Dawn of Innovation",
    content: "This is the first post content.",
  },
  "second-post": {
    title: "The Digital Revolution",
    content: "This is the second post content.",
  },
  "third-post": {
    title: "The Art of Design",
    content: "This is the third post content.",
  },
  "fourth-post": {
    title: "The Power of Communication",
    content: "This is the fourth post content.",
  },
  "fifth-post": {
    title: "The Pursuit of Knowledge",
    content: "This is the fifth post content.",
  },
  "sixth-post": {
    title: "The Joy of Creation",
    content: "This is the sixth post content.",
  },
  "seventh-post": {
    title: "The Spirit of Adventure",
    content: "This is the seventh post content.",
  },
};

const ProjectSlug = ({ params }: { params: { id: any } }) => {
  return (
    <div className="w-[400px] h-[400px] bg-green-500">
      Hello world
      {params.id}
    </div>
  );
};

export default ProjectSlug;
