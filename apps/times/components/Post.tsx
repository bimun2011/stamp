import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: string;
  title: string;
  preview: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div
      className="w-full px-8 py-4 mb-4 border border-gray-200 rounded-lg cursor-pointer overflow-hidden bg-white shadow-sm hover:shadow-md duration-300"
      onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}
    >
      <h2 className="mb-0 pb-0">{post.title}</h2>
      <small>Written by {authorName}</small>
      <p>{post.preview}</p>
    </div>
  );
};

export default Post;
