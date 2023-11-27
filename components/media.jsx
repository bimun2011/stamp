import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Active from "../public/pecsetek/Media-act.svg";
import Normal from "../public/pecsetek/Media-norm.svg";

export default function MediaComp({ isActive }) {
  return (
    <>
      <Box position="relative" w="100%" h="100%">
        {isActive ? (
          <Image src={Active} alt="Media active" />
        ) : (
          <Image src={Normal} alt="Media normal" />
        )}
      </Box>
    </>
  );
}
