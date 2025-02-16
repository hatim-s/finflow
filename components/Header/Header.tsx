"use client";

import { ReactNode } from "react";
import { Button } from "../ui/button";
import { Stack } from "../ui/stack";
import Logo from "./Logo";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Typography } from "../ui/typography";
import Link from "next/link";

type HeaderAction = {
  label: ReactNode;
  onClick: () => void;
};

type HeaderProps = {
  primaryLabel: string;
};

const HEADER_ACTIONS: HeaderAction[] = [
  {
    label: <GithubIcon className="!size-5 text-blue-800" />,
    onClick: () => window.open("https://github.com/hatim-s/finflow", "_blank"),
  },
  {
    label: <LinkedinIcon className="!size-5 text-blue-800" />,
    onClick: () => window.open("https://linkedin.com/in/hatim-s", "_blank"),
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- is okay
export default function Header(props: HeaderProps) {
  return (
    <Stack
      className="px-8 justify-between py-3 flex-row-reverse items-center"
      direction="row"
    >
      <Stack className="items-center" direction="row">
        {HEADER_ACTIONS.map((action, index) => {
          return (
            <Button
              className="hover:bg-blue-100 rounded-full p-2 size-10"
              key={index}
              onClick={action.onClick}
              size="icon"
              variant="ghost"
            >
              {action.label}
            </Button>
          );
        })}
        <Link href="https://github.com/hatim-s/finflow" target="_blank">
          <Logo className="ml-10 text-blue-800 h-10 w-fit" />
        </Link>
      </Stack>
      <Stack className="items-center gap-x-4" direction="row">
        <Typography
          className="text-[14px] font-medium text-blue-800"
          variant="h4"
        >
          Made with ❤️ by{" "}
          <Link
            className="hover:underline"
            href="https://github.com/hatim-s"
            target="_blank"
          >
            @hatim-s
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
}
