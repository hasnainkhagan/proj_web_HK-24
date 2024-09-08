"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileMenu() {
  const location = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);
  return (
    <Sheet open={open} onOpenChange={(state) => setOpen(state)}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="border-2">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-5 flex px-2 space-y-1 flex-col tracking-tighter">
          <Link
            href="/"
            className={cn(
                "link hover:bg-muted hover:bg-opacity-75",
              "group flex items-center px-4 py-2 text-md font-semibold rounded-md uppercase text-[#131313] border-2"
            )}
          >Home</Link>
          <Link
            href="/guestbook"
            className={cn(
                "link hover:bg-muted hover:bg-opacity-75",
              "group flex items-center px-4 py-2 text-md font-semibold rounded-md uppercase text-[#131313] border-2"
            )}
          >Guestbook</Link>
          <Link
            href="/projects"
            className={cn(
                "link hover:bg-muted hover:bg-opacity-75",
              "group flex items-center px-4 py-2 text-md font-semibold rounded-md uppercase text-[#131313] border-2"
            )}
          >Projects</Link>
        </div>
        <SheetFooter className="mt-5 px-2">
          <SheetClose asChild>
            <Button type="submit" className="uppercase tracking-tighter">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
