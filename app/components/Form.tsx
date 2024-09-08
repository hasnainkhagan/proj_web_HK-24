'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { postData } from "../actions";
import { useRef } from "react";

export function Form() {
    const formRef = useRef<HTMLFormElement>(null);
    return (
        <form ref={formRef} action={async (formData) => {
            await postData(formData);
            formRef.current?.reset();
        }} className="flex justify-between gap-4 flex-col md:flex-row">
            <Input type="text" name="message" maxLength={80} minLength={1} placeholder="Your Message Here..." className="input" required />
            <SubmitButton />
        </form>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <>
            {pending ? (
                <Button disabled>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Please Wait
                </Button>
            ) : (
                <Button type="submit" className="uppercase tracking-[-.1em] border-2 border-[#131313]">Sign for Free</Button>
            )}
        </>
    )
}