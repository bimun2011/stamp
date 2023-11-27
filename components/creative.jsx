import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Active from "../public/pecsetek/Creative-act.svg";
import Normal from "../public/pecsetek/Creative-norm.svg";

export default function CreativeComp({ isActive }) {
  return (
    <>
      <Box position="relative" w="100%" h="100%">
        {isActive ? (
          <Image src={Active} alt="Creative active" />
        ) : (
          <Image src={Normal} alt="Creative normal" />
        )}
      </Box>
    </>
  );
}
