/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { ReactElement, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const UserEditForm = ({ initUser, setUser }: any) => {
  const close = useRef<HTMLButtonElement | null>(null);

  const formSchema = zod.object({
    username: zod
      .string()
      .min(3, "Name must be at least 3 characters.")
      .max(35, "Name must be at most 35 characters."),
    email: zod.email(),
    phone: zod
      .string()
      .regex(/^\d{10,15}$/, "Phone number must contain 10–15 digits"),
    location: zod
      .string()
      .min(3, "Location must be at least 3 characters.")
      .max(100, "Location must be at most 100 characters."),
    role: zod.enum(["Admin", "User"]),
  });
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initUser,
  });

  const handleChange = (data: zod.infer<typeof formSchema>) => {
    if (close.current) close.current.click();
    setUser((user: any) => {
      return { ...data, "joined on": user["joined on"] };
    });

    // setX(1);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Edit Form</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit User</SheetTitle>
        </SheetHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleChange)}
            className="space-y-8 p-3 flex flex-col gap-4 overflow-auto h-full"
          >
            {Object.entries(initUser).map((info, index) => (
              <FormField
                key={index + ""}
                control={form.control}
                name={info[0] as any}
                render={({ field }) => (
                  <FormItem className=" m-0">
                    <FormLabel className="capitalize">{info[0]}</FormLabel>
                    <FormControl>
                      <Input placeholder="...." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              //   onClick={() =>
              //     handleChange({
              //       username: "qddqs",
              //       email: "eazeazeaz",
              //       phone: "fdfsd",
              //       location: "ghjkldsqdq",
              //       role: "Admin",
              //     })
              //   }
              className="m-0 mt-auto "
              type="submit"
            >
              Save changes
            </Button>
            <SheetClose className="m-0" ref={close} asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default UserEditForm;
