"use client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

export default function Home() {
  const [value, setValue] = useState<string>("");


  // console.log(value);
  return (
    <main className="flex min-h-screen p-10">
      <textarea
        name="markdown"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-slate-900 fullheight w-full relative outline-none text-white border-0 pt-6 "
      ></textarea>
      <div className="bg-slate-900 h-full w-full text-white editor">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {value}
        </ReactMarkdown>
      </div>
    </main >
  );
}
