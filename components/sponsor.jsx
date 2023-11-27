import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Active from "../public/pecsetek/Sponzi-act.svg";
import Normal from "../public/pecsetek/Sponzi-norm.svg";

export default function SponsorComp({ isActive }) {
  return (
    <>
      <Box position="relative" w="100%" h="100%">
        {isActive ? (
          <Image src={Active} alt="Sponsor active" />
        ) : (
          <Image src={Normal} alt="Sponsor normal" />
        )}
      </Box>
    </>
  );
}
