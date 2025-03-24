"use client";

import TextChangeInput from "@/components/input";
import { useEffect, useState } from "react";

export default function Home() {
    const [text, setText] = useState<string>("Hello World");
    const [input, setInput] = useState<string|null>(null);
    return (
    <>
        <h1 className="text-7xl">Hello!</h1>
        <p>Hello this is a text.</p>
        <div className="bg-red-500 p-4">This is a div</div>
        <p>{text} Is my new text</p>




        <button className="m-4 w-25 h-25 bg-blue-400" onClick={
            () => {
            input ?  setText(input) : setText("Fuck you AI")
            }
        } >Button</button>

        <TextChangeInput setInput={setInput}/>
    </>
    )
}
