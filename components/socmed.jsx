import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Active from "../public/pecsetek/SocMed-act.svg";
import Normal from "../public/pecsetek/SocMed-norm.svg";

export default function SocMedComp({ isActive }) {
  return (
    <>
      <Box position="relative" w="100%" h="100%">
        {isActive ? (
          <Image src={Active} alt="SocMed active" />
        ) : (
          <Image src={Normal} alt="SocMed normal" />
        )}
      </Box>
    </>
  );
}
