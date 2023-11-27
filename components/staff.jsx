import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Active from "../public/pecsetek/Staff-act.svg";
import Normal from "../public/pecsetek/Staff-norm.svg";

export default function StaffComp({ isActive }) {
  return (
    <>
      <Box position="relative" w="100%" h="100%">
        {isActive ? (
          <Image src={Active} alt="Staff active" />
        ) : (
          <Image src={Normal} alt="Staff normal" />
        )}
      </Box>
    </>
  );
}
