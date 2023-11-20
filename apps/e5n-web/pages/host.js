import React, { useState } from "react";

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
  Text,
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
    let pecsetek = localStorage.getItem("pecsetek-bimunday");
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
      localStorage.setItem("pecsetek-bimunday", JSON.stringify(pecsetek));
    }
    window.location.href = "/";
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded={"2xl"}>
          <ModalHeader>Sikeres kitöltés</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Készen is vagy, mutatasd meg a pontszámot a standosoknak, ők pedig
              segítenek, hogyan tovább.
            </p>
            <br />
            <Text textAlign={"center"}>
              <strong>Elért pontszámod:</strong>
            </Text>
            <Box
              w={"full"}
              rounded={"2xl"}
              bgColor={"gray.800"}
              color={"white"}
              textAlign={"center"}
              py={8}
            >
              <Heading size={"lg"}>
                {one + two + three + four + five + six}
              </Heading>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={onClose}
              variant={"outline"}
              rounded={"full"}
              mr={3}
            >
              Bezárás
            </Button>
            <Button onClick={handleBack} rounded={"full"}>
              Vissza a pecsétekhez
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex
        w={"100vw"}
        h={"10vh"}
        bgGradient={
          "linear(to-b, transparent, white), linear-gradient(90deg, hsla(196, 100%, 47%, 1) 0%, hsla(324, 100%, 47%, 1) 25%, hsla(101, 52%, 52%, 1) 50%, hsla(52, 98%, 50%, 1) 75%, hsla(357, 86%, 52%, 1) 100%)"
        }
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
      <Box width={"100vw"} bgColor={"white"} color={"black"}>
        <Heading align={"center"}>
          Melyik delegált illik legjobban hozzád?
        </Heading>
        <Box p={5} rounded={15} bgColor={"rgba(256,256,256,0.15)"}>
          <Heading size={"lg"} pb={2}>
            Mivel ütöd el az időt legszívesebben egy péntek estén?
          </Heading>
          <Select
            rounded={"full"}
            value={one}
            onChange={(e) => setOne(parseInt(e.target.value))}
          >
            <option value={1}>
              Egy kevésbé kultúrális, annál közösségibb eseményen veszek részt
              (ibolya)
            </option>
            <option value={2}>Tanulok</option>
            <option value={3}>Edzek</option>
            <option value={4}>Pihenek a családommal</option>
          </Select>
        </Box>
        <Box p={5} rounded={15} bgColor={"rgba(256,256,256,0.15)"}>
          <Heading size={"lg"} pb={2}>
            Mit csinálsz átlagosan a hétvégén?
          </Heading>
          <Select
            rounded={"full"}
            value={two}
            onChange={(e) => setTwo(parseInt(e.target.value))}
          >
            <option value={2}>Tanulok</option>
            <option value={3}>Alszom</option>
            <option value={1}>Kirándulok</option>
            <option value={4}>
              Sorozatmaratont tartok a kedvenc "Dóra a felfedező" részeimből
            </option>
          </Select>
        </Box>
        <Box p={5} rounded={15} bgColor={"rgba(256,256,256,0.15)"}>
          <Heading size={"lg"} pb={2}>
            Melyik országot látogatnád meg a legszívesebben?
          </Heading>
          <Select
            rounded={"full"}
            value={three}
            onChange={(e) => setThree(parseInt(e.target.value))}
          >
            <option value={1}>Franciaország</option>
            <option value={2}>Irán</option>
            <option value={3}>Olaszország</option>
            <option value={4}>Törökország</option>
          </Select>
        </Box>
        <Box p={5} rounded={15} bgColor={"rgba(256,256,256,0.15)"}>
          <Heading size={"lg"} pb={2}>
            Véleményed szerint melyik a legjobb kiegészítő?
          </Heading>
          <Select
            rounded={"full"}
            value={four}
            onChange={(e) => setFour(parseInt(e.target.value))}
          >
            <option value={2}>Szemüveg</option>
            <option value={3}>Kendő</option>
            <option value={1}>Sapka</option>
            <option value={4}>Fülbevaló</option>
          </Select>
        </Box>
        <Box p={5} rounded={15} bgColor={"rgba(256,256,256,0.15)"}>
          <Heading size={"lg"} pb={2}>
            Amikor este indulsz haza, átlagosan hányra érsz biztonságos
            otthonodba?
          </Heading>
          <Select
            rounded={"full"}
            value={five}
            onChange={(e) => setFive(parseInt(e.target.value))}
          >
            <option value={2}>20 körül</option>
            <option value={4}>Sötétedés előtt</option>
            <option value={3}>0:00 után</option>
            <option value={1}>21 körül</option>
          </Select>
        </Box>
        <Box p={5} rounded={15} bgColor={"rgba(256,256,256,0.15)"}>
          <Heading size={"lg"} pb={2}>
            Ha valamit süthetnél a delegáltadnak, mi lenne az?
          </Heading>
          <Select
            rounded={"full"}
            value={six}
            onChange={(e) => setSix(parseInt(e.target.value))}
          >
            <option value={1}>Gulyásleves</option>
            <option value={3}>Paprikás krumpli</option>
            <option value={4}>Nem sütnék, túró rudit adnék</option>
            <option value={2}>Palacsinta</option>
          </Select>
        </Box>
        <Flex justify={"center"} pb={16}>
          <Button
            onClick={onOpen}
            colorScheme={"green"}
            w={"full"}
            mx={5}
            rounded={"full"}
          >
            Beküldés
          </Button>
        </Flex>
      </Box>
    </>
  );
}
