"use client";


import ButtonToChange from "@/components/Button";
import ChangeHeader from "@/components/Header";
import TextChangeInput from "@/components/input";
import { useEffect, useState } from "react";

export default function Home() {
    const [text, setText] = useState<string>("Hello World");
    const [input, setInput] = useState<string|null>(null);
    return (
    <>

        <ChangeHeader text={text}/>

        <ButtonToChange setText={setText} input={input}/>

        <TextChangeInput setInput={setInput}/>
    </>
    )
}
