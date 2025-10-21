import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const UserInformation = () => {
  const userInfo = {
    userName: "John Doe",
    email: "john.doe@gmail.com",
    phone: "+1 234 5678",
    location: "New York, NY",
    Role: "Admin",
    "joined on": "2025-10-10",
  };
  return (
    <Card className="flex flex-col p-2 border-0">
      <CardContent className="flex flex-col p-2 gap-5">
        <div className="flex justify-between">
          <CardTitle className="text-xl ">User Information </CardTitle>
          <Button>Edit User</Button>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">Profile completion</p>
          <div className="h-2 w-full rounded-full bg-muted">
            <p className="h-full w-10/12  rounded-full bg-foreground"></p>
          </div>
        </div>
        {Object.entries(userInfo).map((e) => (
          <p key={e[0]} className="flex capitalize">
            <span className="font-semibold mr-1">{e[0] + ": "}</span>
            {e[1]}
          </p>
        ))}
      </CardContent>
    </Card>
  );
};

export default UserInformation;
