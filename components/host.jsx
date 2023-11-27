import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Active from "../public/pecsetek/Host-act.svg";
import Normal from "../public/pecsetek/Host-norm.svg";

export default function HostComp({ isActive }) {
  return (
    <>
      <Box position="relative" w="100%" h="100%">
        {isActive ? (
          <Image src={Active} alt="Host active" />
        ) : (
          <Image src={Normal} alt="Host normal" />
        )}
      </Box>
    </>
  );
}
