"use client";
import { FunctionComponent, useState, useEffect } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from 'remark-gfm';
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import Navbar from "@/Components/Navbar";




const customRenderers: any = {
  const({ node, inline, className, children, ...props }: any) {
    const { value } = node;
    const match = /language-(\w+)/.exec(className || "")
    return !inline && match ? (
      <SyntaxHighlighter
        // children={String(children).replace(/\n$/, '')}
        children={value}
        style={atomDark}
        language={match[1]}
        {...props}
      />

    )
      :
      (
        <code className={className} {...props}>
          {children}
        </code>
      )
  }
}




interface Iprops {
  content: string,
}

const Home: FunctionComponent = () => {
  const [value, setValue] = useState<string>("");


  useEffect(() => {
    setValue(localStorage.getItem("value") || "");
  }, [])


  return (
    <main className="min-h-screen">
      <Navbar valueString={value} />
      <div className="flex min-h-[calc(100vh-63.6094px)] p-5">
        <textarea
          name="markdown"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-slate-900 h-inherit w-full relative outline-none text-white border-0 p-2 "
        ></textarea>
        {value.length > 0 &&
          <div className="bg-slate-800 p-2 h-inherit w-full text-white editor">
            <ReactMarkdown children={value} components={customRenderers} remarkPlugins={[remarkGfm]} />
          </div>
        }
      </div>
    </main>

  )


}

export default Home;