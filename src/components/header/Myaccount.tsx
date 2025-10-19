import React from "react";

import Image from "next/image";
import avatar from "../../../public/boy.png";
import DropdownMenu, {
  ButtonTrigger,
  ContentItem,
  ContentMenu,
} from "../ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
const Myaccount = () => {
  return (
    <div className="relative">
      <DropdownMenu>
        <ButtonTrigger>
          <Image
            src={avatar}
            width={50}
            height={50}
            className="w-10 h-10 rounded-full"
            alt="avatar"
          />
        </ButtonTrigger>
        <ContentMenu position="left">
          <div className="w-32 px-2 flex flex-col gap-2">
            <h3 className="text-sm font-semibold">My account</h3>
            <p className="h-px bg-primary/20 my-1"></p>
            <ContentItem className="flex gap-3 items-center">
              <User size={20} />
              <p>Profile</p>
            </ContentItem>
            <ContentItem className="flex gap-3 items-center">
              <Settings size={20} />
              <p>Settings</p>
            </ContentItem>

            <ContentItem className="flex gap-3 items-center text-red-500">
              <LogOut size={20} />
              <p>Logout</p>
            </ContentItem>
          </div>
        </ContentMenu>
      </DropdownMenu>
    </div>
  );
};

export default Myaccount;
