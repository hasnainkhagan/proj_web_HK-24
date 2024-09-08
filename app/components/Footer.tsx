"use client";

import Link from "next/link";
export function Footer() {
    return (
        <footer className="my-12">
            <ul className="flex flex-wrap justify-center uppercase">
                <div className="px-5 py-2 space-x-4 tracking-[-.1em]">
                    <Link
                        href="/"
                        className="text-muted-foreground hover:text-[#131313] transition-all ease-in-out duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        href="/guestbook"
                        className=" text-muted-foreground hover:text-[#131313] transition-all ease-in-out duration-200"
                    >
                        Guestbook
                    </Link>
                    <Link
                        href="/projects"
                        className="text-muted-foreground hover:text-[#131313] transition-all ease-in-out duration-200"
                    >
                        Projects
                    </Link>
                </div>
            </ul>
            <p className="GAP mt-2 text-center text-muted-foreground cursor-default capitalize tracking-tighter">
                &copy; <span className="special text-[.85em]">2024</span> <span className="text-primary">HK.</span> All Rights Reserved.
            </p>
        </footer>
    );
}