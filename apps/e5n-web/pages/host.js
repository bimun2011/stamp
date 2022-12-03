import React, { useState } from "react";
import BGOverlay from "../components/bg-overlay";
import {
  Flex,
  Box,
  Heading,
  Select,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Host() {
  const [one, setOne] = useState(1);
  const [two, setTwo] = useState(1);
  const [three, setThree] = useState(1);
  const [four, setFour] = useState(1);
  const [five, setFive] = useState(1);
  const [six, setSix] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleBack() {
    let pecsetek = localStorage.getItem("pecsetek");
    if (pecsetek == undefined) {
      localStorage.setItem(
        "pecsetek",
        JSON.stringify({
          supviz: false,
          host: true,
          staff: false,
          press: false,
          media: false,
          creative: false,
          sponsor: false,
          socmed: false,
        })
      );
    } else {
      pecsetek = JSON.parse(pecsetek);
      pecsetek.host = true;
      localStorage.setItem("pecsetek", JSON.stringify(pecsetek));
    }
    window.location.href = "/";
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Készen vagy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Készen is vagy, mutatasd meg a pontszámot a standosoknak, ők pedig
              segítenek, hogyan tovább. <br />
              <strong>Elért pontszámod:</strong>{" "}
              {one + two + three + four + five + six}
            </p>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} variant={"ghost"} mr={3}>
              Bezárás
            </Button>
            <Button onClick={handleBack}>Vissza a pecsétekhez</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <BGOverlay />
      <Flex
        w={"100vw"}
        h={"10vh"}
        bgGradient={"linear(to-b, rgb(20, 21, 67), rgb(23, 27, 38))"}
        justify={"center"}
        align={"center"}
      >
        <Image
          width={163 * 0.7}
          height={50 * 0.7}
          fit={"cover"}
          src={"https://www.bimun.hu/img/bimun_logo_navbar.png"}
          alt={"BIMUN Logo"}
        ></Image>
      </Flex>
      <Box width={"100vw"} bgColor={"rgb(23, 27, 38)"} color={"white"}>
        <Heading align={"center"}>HOST - Ki illik legjobban hozzád?</Heading>
        <Box m={5} p={5} rounded={15} bgColor={"rgba(256,256,256,0.15)"}>
          <Heading size={"lg"} pb={2}>
            Mit csinálsz a legszívesebben egy péntek estén?
          </Heading>
          <Select
            value={one}
            onChange={(e) => setOne(parseInt(e.target.value))}
          >
            <option value={1}>Ibolya</option>
            <option value={2}>Tanulok</option>
            <option value={3}>Edzés</option>
            <option value={4}>Barátokkal vagyok</option>
          </Select>
        </Box>
        <Box m={5} p={5} rounded={15} bgColor={"rgba(256,256,256,0.15)"}>
          <Heading size={"lg"} pb={2}>
            Mit csinálsz átlagosan a hétvégén?
          </Heading>
          <Select
            value={two}
            onChange={(e) => setTwo(parseInt(e.target.value))}
          >
            <option value={1}>Kirándulok</option>
            <option value={2}>Tanulok</option>
            <option value={3}>Alszom</option>
            <option value={4}>Elmegyek kikapcsolódni</option>
          </Select>
        </Box>
        <Box m={5} p={5} rounded={15} bgColor={"rgba(256,256,256,0.15)"}>
          <Heading size={"lg"} pb={2}>
            Melyik országba mennél a legszívesebben?
          </Heading>
          <Select
            value={three}
            onChange={(e) => setThree(parseInt(e.target.value))}
          >
            <option value={1}>Franciaország</option>
            <option value={2}>Irán</option>
            <option value={3}>Olaszország</option>
            <option value={4}>Törökország</option>
          </Select>
        </Box>
        <Box m={5} p={5} rounded={15} bgColor={"rgba(256,256,256,0.15)"}>
          <Heading size={"lg"} pb={2}>
            Véleményed szerint melyik a legjobb kiegészítő?
          </Heading>
          <Select
            value={four}
            onChange={(e) => setFour(parseInt(e.target.value))}
          >
            <option value={1}>Sapka</option>
            <option value={2}>Szemüveg</option>
            <option value={3}>Kendő</option>
            <option value={4}>Egyéb</option>
          </Select>
        </Box>
        <Box m={5} p={5} rounded={15} bgColor={"rgba(256,256,256,0.15)"}>
          <Heading size={"lg"} pb={2}>
            Ha este mész haza átlagosan hányra érsz haza?
          </Heading>
          <Select
            value={five}
            onChange={(e) => setFive(parseInt(e.target.value))}
          >
            <option value={1}>22 körül</option>
            <option value={2}>21 körül</option>
            <option value={3}>0:00 után</option>
            <option value={4}>Sötétedés előtt</option>
          </Select>
        </Box>
        <Box m={5} p={5} rounded={15} bgColor={"rgba(256,256,256,0.15)"}>
          <Heading size={"lg"} pb={2}>
            Ha valamit süthetnél a hostodnak mi lenne az?
          </Heading>
          <Select
            value={six}
            onChange={(e) => setSix(parseInt(e.target.value))}
          >
            <option value={1}>Gulyásleves</option>
            <option value={2}>Palacsinta</option>
            <option value={3}>Paprikás krumpli</option>
            <option value={4}>Nem sütnék, túró rudit adnék</option>
          </Select>
        </Box>
        <Flex justify={"center"} pb={16}>
          <Button onClick={onOpen} colorScheme={"green"}>
            Beküldés
          </Button>
        </Flex>
      </Box>
    </>
  );
}
