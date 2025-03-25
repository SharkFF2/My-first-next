"use client";


import ButtonToChange from "@/components/Button";
import ChangeHeader from "@/components/Header";
import TextChangeInput from "@/components/input";
import { ProgressDemo } from "@/components/my-progress";
import MyHeader from "@/components/ui/my-header";
import { useEffect, useState } from "react";

export default function Home() {
    const [text, setText] = useState<string>("Hello World");
    const [input, setInput] = useState<string|null>(null);
    return (
    <>
        <MyHeader></MyHeader>
        
        <ProgressDemo></ProgressDemo>
    </>
    )
}
