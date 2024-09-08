'use client'

import Image from "next/image";
import square from "../../public/square.jpg";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// ICONS
import sketch from "../../public/icons/sketch.svg";
import canva from "../../public/icons/canva.svg";
import figma from "../../public/icons/figma.svg";
import chatgpt from "../../public/icons/chatgpt.svg";
import cloud from "../../public/icons/creativecloud.svg";
import framer from "../../public/icons/framer.svg";
import notion from "../../public/icons/notion.svg";
import slack from "../../public/icons/slack.svg";
import discord from "../../public/icons/discord.svg";
import youtube from "../../public/icons/youtube.svg";
import chrome from "../../public/icons/chrome.svg";
import copilot from "../../public/icons/copilot.svg";
// SOCIAL ICONS
import insta from "../../public/icons/insta.svg";
import linkedin from "../../public/icons/linkedin.svg";
import github from "../../public/icons/github.svg";

const icons = [
    sketch,
    canva,
    figma,
    framer,
    chatgpt,
    copilot,
    cloud,
    notion,
    slack,
    discord,
    youtube,
    chrome,
];

const socialMedia = [
    {
        id: 1,
        icon: insta,
        name: "Instagram",
        username: "@hasainkhagan",
        link: "https://instagram.com/hasnainkhagan",
    },
    {
        id: 2,
        icon: github,
        name: "Github",
        username: "@hasainkhagan",
        link: "https://github.com/hasnainkhagan",
    },
    {
        id: 3,
        icon: linkedin,
        name: "Linkedin",
        username: "/hasainkhagan",
        link: "https://www.linkedin.com/in/hasnainkhagan/",
    },
];

export function Section2() {
    return (
      <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10 cursor-default">
        <div className="w-full relative col-span-1">
          <Image
            src={square}
            alt="Square IMG"
            className="img w-full h-full object-fill rounded-[2em]"
          />
        </div>
        <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
          <Card className="bg-gray-100 border-none rounded-[2em]">
            <CardHeader className="uppercase text-[#131313]">
              <CardTitle className="font-bold tracking-[-.1em]">
                explore my stack arsenal
              </CardTitle>
              <CardDescription className="GAP tracking-[-.1em]">
                Check out the <span className="special">tools</span> i use daily
              </CardDescription>
            </CardHeader>
            <CardContent className="stack flex flex-wrap gap-4 relative">
              {icons.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="Icon"
                  className="img zoom-in-100 bg-center w-16 h-16 rounded-[1.5em]"
                />
              ))}
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4 tracking-[-.1em]">
            {socialMedia.map((item) => (
              <Card
                key={item.id}
                className="social p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none rounded-[2em]"
              >
                <Image
                  src={item.icon}
                  alt="Icon"
                  className="img w-16 h-16 rounded-[1.5em]"
                />
                <h1 className="text-2xl font-bold pt-3 uppercase">
                  {item.name}
                </h1>
                <p className="text-muted-foreground lowercase">
                  {item.username}
                </p>
                <Button className="mt-4" size="sm" asChild>
                  <a href={item.link} className="uppercase tracking-tighter">
                    Follow
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
}