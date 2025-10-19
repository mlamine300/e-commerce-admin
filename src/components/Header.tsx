"use client";
import Link from "next/link";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Myaccount from "./header/Myaccount";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-end gap-4 w-full m-2  ">
      <Link className="text-sm font-semibold" href={"/"}>
        Dashboard
      </Link>
      <Button
        variant={"outline"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Moon /> : <Sun />}
      </Button>
      <Myaccount />
    </header>
  );
};

export default Header;
