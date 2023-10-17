"use client";
import { FunctionComponent, useState } from "react";
import ReactMarkdown, { Components } from "react-markdown";
// import { NormalComponents, SpecialComponents } from 'react-markdown/jf';
import remarkGfm from 'remark-gfm';
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";




const customRenderers: any = {
  const({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "")
    return !inline && match ? (
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
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

const Home: FunctionComponent<Iprops> = ({ content }) => {
  const [value, setValue] = useState<string>("");


  return (
    <div className="flex min-h-[calc(100vh-63.6094px)] p-5">
      <textarea
        name="markdown"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-slate-900 h-inherit w-full relative outline-none text-white border-0 p-2 "
      ></textarea>
      {value.length > 0 &&
        <div className="bg-slate-800 p-2 h-full w-full text-white editor">
          <ReactMarkdown children={value} components={customRenderers} remarkPlugins={[remarkGfm]} />
        </div>
      }
    </div>

  )


}

export default Home;