import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Active from "../public/pecsetek/Press-act.svg";
import Normal from "../public/pecsetek/Press-norm.svg";

export default function PressComp({ isActive }) {
  return (
    <>
      <Box position="relative" w="100%" h="100%">
        {isActive ? (
          <Image src={Active} alt="Press active" />
        ) : (
          <Image src={Normal} alt="Press normal" />
        )}
      </Box>
    </>
  );
}
