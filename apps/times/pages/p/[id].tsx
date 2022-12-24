import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Router from "next/router";
import { PostProps } from "../../components/Post";
import { useSession } from "next-auth/react";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: post,
  };
};

async function publishPost(id: string): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: "PUT",
  });
  await Router.push("/");
}

async function deletePost(id: string): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: "DELETE",
  });
  Router.push("/");
}

const Post: React.FC<PostProps> = (props) => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Authenticating ...</div>;
  }
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === props.author?.email;
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>Written by {props?.author?.name || "Unknown author"}</p>
        <div
          className="w-full bg-white my-6 px-6 py-6 rounded-lg shadow-sm border border-gray-200"
          dangerouslySetInnerHTML={{ __html: props?.content }}
        ></div>
        <div className="w-full flex gap-2">
          {!props.published && userHasValidSession && postBelongsToUser && (
            <button
              className="w-full bg-blue-500 py-3 px-4 text-white rounded-lg"
              onClick={() => publishPost(props.id)}
            >
              Publish
            </button>
          )}
          {userHasValidSession && postBelongsToUser && (
            <button
              className="w-full bg-red-500 py-3 px-4 text-white rounded-lg"
              onClick={() => deletePost(props.id)}
            >
              Delete
            </button>
          )}
        </div>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Post;
