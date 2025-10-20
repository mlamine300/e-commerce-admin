import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";

const CardList = ({
  title,
  list,
}: {
  title: string;
  list: {
    id: number;
    title: string;
    badge: string;
    image: string;
    count: number;
  }[];
}) => {
  /**
     *    id: 1,
      title: "JavaScript Tutorial",
      badge: "Coding",
      image:
        "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 4300,
     */
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold my-2">{title} </h3>
      {list.map((item) => (
        <Card key={item.id} className=" p-2 ">
          <CardContent className=" rounded-lg flex gap-4 items-center py-1 px-2">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className="rounded w-12 h-12 object-cover "
            />
            <div className="flex flex-col gap-2">
              <CardTitle>{item.title} </CardTitle>
              <CardDescription>
                <Badge variant={"secondary"}>{item.badge}</Badge>
              </CardDescription>
            </div>
            <h3 className="ml-auto">{item.count / 1000}k </h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
