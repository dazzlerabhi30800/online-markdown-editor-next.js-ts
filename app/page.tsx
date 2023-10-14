"use client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

export default function Home() {
  const [value, setValue] = useState<string>("");


  return (
    <div className="flex min-h-screen p-5">
      <textarea
        name="markdown"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-slate-900 fullheight w-full relative outline-none text-white border-0 p-2 "
      ></textarea>
      <div className="bg-slate-800 p-2 h-full w-full text-white editor">
        <ReactMarkdown children={value} remarkPlugins={[remarkGfm]} />
        {/* {value} */}
      </div>
    </div >
  );
}
