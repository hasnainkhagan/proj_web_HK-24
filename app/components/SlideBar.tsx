'use client'

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { MobileMenu } from "./MobileMenu";

export const SlideBarTabs = () => {
    return (
      <nav className="top-0 sticky backdrop-blur-md max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12 items-center z-20">
        <div className="col-span-6 flex md:col-span-3">
          <Link href="/">
            <h1 className="text-3xl font-extrabold tracking-[-.1em]">
              HK<span className="work-status ml-[.075em] text-4xl">.</span>
            </h1>
          </Link>
        </div>
        <div className="hidden sm:flex justify-center col-span-6">
          <SlideTabs />
        </div>
        <div className="flex items-center justify-end md:col-span-3 col-span-6">
          <Button className="uppercase tracking-[-.1em] hidden sm:flex">Contact Me</Button>
          <div className="sm:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    );
};

const SlideTabs = () => {
    const [position, setPosition] = useState<Position>({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative mx-auto flex w-fit rounded-2xl font-bold tracking-[-.1em] bg-gray-100 border-2 border-[#131313] p-1"
        >
            <Tab href="/" setPosition={setPosition}>Home</Tab>
            <Tab href="/guestbook" setPosition={setPosition}>Guestbook</Tab>
            <Tab href="/projects" setPosition={setPosition}>Projects</Tab>

            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({
    children,
    href,
    setPosition,
}: {
    children: string;
    href: string;
    setPosition: Dispatch<SetStateAction<Position>>;
}) => {
    const ref = useRef<null | HTMLLIElement>(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
        >
            <Link href={href} className="w-full h-full block">
                {children}
            </Link>
        </li>
    );
};

const Cursor = ({ position }: { position: Position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 h-7 rounded-2xl bg-[#131313] md:h-12"
        />
    );
};

type Position = {
    left: number;
    width: number;
    opacity: number;
};
