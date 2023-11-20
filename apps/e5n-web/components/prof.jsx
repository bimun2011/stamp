import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Active from "../public/pecsetek/Prof-act.svg";
import Normal from "../public/pecsetek/Prof-norm.svg";

export default function ProfComp({ isActive }) {
  return (
    <>
      <Box position="relative" w="100%" h="100%">
        {isActive ? (
          <Image src={Active} alt="Prof active" />
        ) : (
          <Image src={Normal} alt="Prof normal" />
        )}
      </Box>
    </>
  );
}
