import React, { useState, useRef } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { Editor } from "@tinymce/tinymce-react";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState("");
  const editorRef = useRef(null);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content, preview };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1 className="mb-4">Create a new draft</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full my-1 py-3 px-4 rounded-lg border border-gray-200 shadow-sm"
            type="text"
            value={title}
          />
          <textarea
            placeholder="Preview description"
            className="w-full my-1 py-3 px-4 rounded-lg border border-gray-200 shadow-sm"
            onChange={(e) => setPreview(e.target.value)}
            value={preview}
          ></textarea>
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYAPI}
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<h3>Write something fun and happy here. 😀</h3>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor image | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <input
            type="button"
            value="Generate post"
            className="w-full my-1 py-3 px-4 rounded-lg border border-gray-200 shadow-sm bg-blue-500 text-white font-semibold cursor-pointer"
            onClick={() => {
              setContent(editorRef.current.getContent());
              console.log(content);
            }}
          />
          <div className="flex justify-evenly w-full gap-2 mb-14">
            <input
              disabled={!content || !title || !preview}
              type="submit"
              value="Save post"
              className="w-full my-1 py-3 px-4 rounded-lg border border-gray-200 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed bg-green-500 text-white font-semibold cursor-pointer"
            />
            <button
              className="w-full my-1 py-3 px-4 rounded-lg border border-gray-200 shadow-sm bg-red-500 text-white font-semibold cursor-pointer"
              onClick={() => Router.push("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: 10rem;
        }
      `}</style>
    </Layout>
  );
};

export default Draft;
