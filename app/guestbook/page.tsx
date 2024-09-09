import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Form } from "../components/Form";
import prisma from "../lib/db";
import { revalidatePath } from "next/cache";
import { Suspense } from "react";
import { GBFormLoading, LoadingMessages } from "../components/LoadingState";
import { unstable_noStore as noStore } from "next/cache";

async function getGBEntry() {
  noStore();
  const data = await prisma.gBEntry.findMany({
    select: {
      User: {
        select: {
          firstname: true,
          profileimage: true,
        },
      },
      message: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 30,
  });

  return data;
}

export default function GuestbookPage() {
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto mb-6">
      <h1 className="sevFont text-4xl lg:text-6xl pt-5">Guestbook</h1>
      <p className="title leading-7 text-muted-foreground lg:mt-2 sm:mt-1 tracking-[-.1em] uppercase lg:text-2xl sm:text-xl">
        Sign my
        <span className="sevFont capitalize tracking-normal">Guestbook</span> !
      </p>

      <Card className="mt-10">
        <CardHeader className="flex flex-col w-full">
          <Label className="mb-2 text-2xl tracking-[-.1em] uppercase">
            Message
          </Label>
          <Suspense fallback={<GBFormLoading/>}>
            <GBForm />
          </Suspense>
          <ul className="pt-7 gap-y-5 flex flex-col">
            <Suspense fallback={<LoadingMessages />}>
              <GBEntries />
            </Suspense>
          </ul>
        </CardHeader>
      </Card>
    </section>
  );
}

async function GBEntries() {
  const data = await getGBEntry();

  if (data.length === 0) {
    return null;
  }

  return data.map((item) => (
    <li key={item.id} className="guests">
      <div className="flex items-center">
        <img
          src={item.User?.profileimage as string}
          alt="User Profile Image"
          className="img w-10 h-10 rounded-lg border-2 border-[#131313]"
        />

        <p className="text-muted-foreground pl-3 break-words">
          {item.User?.firstname} :{" "}
          <span className="text-foreground capitalize">{item.message}</span>
        </p>
      </div>
    </li>
  ));
}

async function GBForm() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (user) {
    return <Form />;
  }

  return (
    <div className="flex justify-between gap-4 flex-col md:flex-row">
      <Input type="text" placeholder="Your Message..." />
      <RegisterLink>
        <Button className="w-full uppercase tracking-[-.1em]">
          Sign for free
        </Button>
      </RegisterLink>
    </div>
  );
}
