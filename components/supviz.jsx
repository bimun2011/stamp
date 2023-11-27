import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Active from "../public/pecsetek/Supviz-act.svg";
import Normal from "../public/pecsetek/Supviz-norm.svg";

export default function SupvizComp({ isActive }) {
  return (
    <>
      <Box position="relative" w="100%" h="100%">
        {isActive ? (
          <Image src={Active} alt="Supviz active" />
        ) : (
          <Image src={Normal} alt="Supviz normal" />
        )}
      </Box>
    </>
  );
}
