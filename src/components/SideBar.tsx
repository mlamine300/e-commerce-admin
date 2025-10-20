/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarMenuSub,
} from "./ui/sidebar";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Projector,
  Plus,
  ChevronDown,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import avatar from "../../public/boy.png";
import Image from "next/image";
import { CollapsibleTrigger } from "./ui/collapsible";
import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];
const realProjects: { title: string; icon: any; url: string }[] = [];
const projects = [
  ...realProjects,
  { title: "See All Projects", icon: Projector, url: "/projects" },
  { title: "Add Project", icon: Plus, url: "/projects/new" },
];
const userName = "laoufi mohamed lamine";
const SideBar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href={"/profile"}>
              <Image
                src={avatar}
                alt="avatar"
                width={50}
                height={50}
                className="rounded-full w-6 h-6"
              />
              <span>{userName}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
      <p className="h-px w-f bg-primary/10 mx-2"></p>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>
        {/* ********** */}
        <SidebarGroup>
          <SidebarGroupLabel asChild>Projects</SidebarGroupLabel>
          <SidebarGroupAction title="Add Project">
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          {projects.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>
        {/* ********** */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Collapsable Projects
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              {projects.map((project) => (
                <SidebarMenuItem key={project.title}>
                  <SidebarMenuButton asChild>
                    <Link href={project.url}>
                      <project.icon />
                      <span>{project.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        {/* ********** */}
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/projects"}>
                <Projector />
                <span>{"See All Projects"}</span>
              </Link>
            </SidebarMenuButton>
            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link href={"/projects/new"}>
                    <Plus />
                    <span>{"Add Project"}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>

              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link href={"/projects/new"}>
                    <Plus />
                    <span>{"Add Category"}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p className="bg-primary/10 p-px"></p>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href={"/logout"}>
              <LogOut />
              <span>Logout</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBar;
