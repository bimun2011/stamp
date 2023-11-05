import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  useToast,
  Heading,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";
import SupvizComp from "../components/supviz";
import HostComp from "../components/host";
import StaffComp from "../components/staff";
import PressComp from "../components/press";
import MediaComp from "../components/media";
import SponsorComp from "../components/sponsor";
import SocMedComp from "../components/socmed";
import CreativeComp from "../components/creative";

import BGOverlay from "../components/bg-overlay";
import Link from "next/link";

function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast({ variant: "subtle" });
  const [isGetDataRun, setIsGetDataRun] = useState(false);

  const [Supviz, setSupviz] = useState(false);
  const [Host, setHost] = useState(false);
  const [Staff, setStaff] = useState(false);
  const [Press, setPress] = useState(false);
  const [Media, setMedia] = useState(false);
  const [Creative, setCreative] = useState(false);
  const [Sponsor, setSponsor] = useState(false);
  const [SocMed, setSocMed] = useState(false);

  const [ModalTitle, setModalTitle] = useState("");
  const [ModalBodyText, setModalBodyText] = useState("");
  const [ModalPassword, setModalPassword] = useState("");
  const [ModalType, setModalType] = useState("");

  const [ModalPasswordInput, setModalPasswordInput] = useState("");

  useEffect(() => {
    if (!isGetDataRun) {
      return;
    }
    const pecsetek = {
      supviz: Supviz,
      host: Host,
      staff: Staff,
      press: Press,
      media: Media,
      creative: Creative,
      sponsor: Sponsor,
      socmed: SocMed,
    };
    localStorage.setItem("pecsetek", JSON.stringify(pecsetek));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Supviz, Host, Staff, Press, Media, Creative, Sponsor, SocMed]);

  useEffect(() => {
    const pecsetek = JSON.parse(localStorage.getItem("pecsetek"));
    if (pecsetek) {
      setSupviz(pecsetek.supviz);
      setHost(pecsetek.host);
      setStaff(pecsetek.staff);
      setPress(pecsetek.press);
      setMedia(pecsetek.media);
      setCreative(pecsetek.creative);
      setSponsor(pecsetek.sponsor);
      setSocMed(pecsetek.socmed);
    }
    setIsGetDataRun(true);
  }, []);

  function closeModal() {
    onClose();
    setModalTitle("");
    setModalBodyText("");
    setModalPassword("");
    setModalType("");
    setModalPasswordInput("");
  }

  function checkPassword() {
    if (ModalPasswordInput === ModalPassword) {
      switch (ModalType) {
        case "kavezo":
          setSupviz(false);
          setHost(false);
          setStaff(false);
          setPress(false);
          setMedia(false);
          setCreative(false);
          setSponsor(false);
          setSocMed(false);
          break;
        case "supviz":
          setSupviz(!Supviz);
          break;
        case "host":
          setHost(!Host);
          break;
        case "staff":
          setStaff(!Staff);
          break;
        case "press":
          setPress(!Press);
          break;
        case "media":
          setMedia(!Media);
          break;
        case "creative":
          setCreative(!Creative);
          break;
        case "sponsor":
          setSponsor(!Sponsor);
          break;
        case "socmed":
          setSocMed(!SocMed);
          break;
      }

      switch (ModalType) {
        case "kavezo":
          toast({
            title: "Helyes kávézójelszó",
            description: "Remléjük, hogy jól érezted magad nálunk!",
            status: "success",
            duration: 10000,
            isClosable: true,
          });
          break;
        default:
          toast({
            title: "Helyes standjelszó.",
            description: "Megkaptad a pecsétet. Gratulálok!",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          break;
      }
      closeModal();
    } else {
      toast({
        title: "Helytelen standjelszó!",
        description: "Kérlek próbáld újra.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setModalPasswordInput("");
    }
  }

  function openModal(stand) {
    switch (stand) {
      case "kavezo":
        setModalTitle("Kávézó");
        setModalBodyText(
          "Sikeresen megszerezted az összes pecsétet! Menj a kávézóba és mutasd be nekünk a pecséteket, hogy megkapd a jutalmadat!"
        );
        setModalPassword(process.env.NEXT_PUBLIC_KAVEZO_PASS);
        setModalType("kavezo");
        onOpen();
        break;
      case "supviz":
        setModalTitle("Supervisor stand");
        setModalBodyText(
          "Szeretsz hirtelen helyzeteket megoldani? Fel tudod ismerni, miről készült a kép? Ha igen, akkor ez a stand neked való! Próbáld ki magad a Supervisor standon!"
        );
        setModalPassword(process.env.NEXT_PUBLIC_SUPVIZ_PASS);
        setModalType("supviz");
        onOpen();
        break;
      case "staff":
        setModalTitle("Staff stand");
        setModalBodyText(
          "Látogass el a Staff standhoz és próbáld ki, milyen egy igazi staff napja. A rövid akadálypályán vicces és változatos feladatokban lesz részed és a pecsét is a tiéd lesz."
        );
        setModalPassword(process.env.NEXT_PUBLIC_STAFF_PASS);
        setModalType("staff");
        onOpen();
        break;
      case "host":
        setModalTitle("Host stand");
        setModalBodyText(
          "Nézd meg a Host standot és derítsd ki, melyik delegált illene bele legjobban a te életedbe. Válaszolj a kérdésekre és rögtön kiderül. Természetesen a pecsétet is megkapod!"
        );
        setModalPassword(process.env.NEXT_PUBLIC_HOST_PASS);
        setModalType("host");
        onOpen();
        break;
      case "press":
        setModalTitle("Press stand");
        setModalBodyText(
          "Gyertek el a Pressesekhez megismerni milyen is a sajtóban dolgozni! Tesztelhetitek tudásotokat az újságírásról és társasozhattok is velünk csapatban a barátaitokkal vagy szólóban is!"
        );
        setModalPassword(process.env.NEXT_PUBLIC_PRESS_PASS);
        setModalType("press");
        onOpen();
        break;
      case "media":
        setModalTitle("Media stand");
        setModalBodyText(
          "Ugorj el a Media standhoz és találd meg a hibákat régi BIMUN képeinken."
        );
        setModalPassword(process.env.NEXT_PUBLIC_MEDIA_PASS);
        setModalType("media");
        onOpen();
        break;
      case "creative":
        setModalTitle("Creative stand");
        setModalBodyText(
          "Hozzatok létre a barátaiddal közösen egy megnyerő plakátot!"
        );
        setModalPassword(process.env.NEXT_PUBLIC_CREATIVE_PASS);
        setModalType("creative");
        onOpen();
        break;
      case "sponsor":
        setModalTitle("Sponsorship stand");
        setModalBodyText(
          "Gyere és győzz meg minket egy együttműködésre! Válassz a kártyákon lévő feladatok közül és próbáld ki magad sponsorship managerként!"
        );
        setModalPassword(process.env.NEXT_PUBLIC_SPONSOR_PASS);
        setModalType("sponsor");
        onOpen();
        break;
      case "socmed":
        setModalTitle("Social media stand");
        setModalBodyText(
          "Gyere és ismerkedj meg a social media oldalainkkal és alkosd újra a BIMUN legkülönlegesebb képeit!"
        );
        setModalPassword(process.env.NEXT_PUBLIC_SOCMED_PASS);
        setModalType("socmed");
        onOpen();
        break;
    }
  }

  return (
    <>
      <BGOverlay />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="3xl">
          <ModalHeader>{ModalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{ModalBodyText}</p>
            {ModalType === "host" ? (
              <></>
            ) : (
              <Input
                type="text"
                placeholder="Standjelszó"
                rounded={"full"}
                mt={2}
                value={ModalPasswordInput}
                onChange={(e) => setModalPasswordInput(e.target.value)}
              />
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={closeModal}
              variant="ghost"
              mr={3}
              rounded={"full"}
            >
              Mégse
            </Button>
            {ModalType === "host" ? (
              <Link href="/host">
                <Button mt={2} mb={2} rounded={"full"}>
                  Kérdőív megnyitása
                </Button>
              </Link>
            ) : (
              <Button
                colorScheme="whatsapp"
                onClick={checkPassword}
                rounded={"full"}
              >
                Pecsét hozzáadása
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>

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
        <Heading align={"center"}>Eötvös Napok - Pecsétgyűjtés</Heading>
        {Supviz &&
        Host &&
        Staff &&
        Press &&
        Media &&
        Creative &&
        SocMed &&
        Sponsor ? (
          <Box
            align={"center"}
            bgColor="blue.900"
            margin={2}
            marginY={10}
            rounded={10}
            textColor="white"
            padding={2}
          >
            <Heading fontSize={"xl"}>
              Megszerezted az összes pecsétet! Gratulálok!
            </Heading>
            <Text>Menj a BIMUN Kávézóba, hogy megkapd a jutalmadat!</Text>
            <Button
              onClick={() => openModal("kavezo")}
              colorScheme={"green"}
              rounded={"full"}
              px={10}
              mt={2}
            >
              Ajándék beváltása
            </Button>
          </Box>
        ) : (
          <></>
        )}
        <Flex wrap={"wrap"} justify={"space-around"} rowGap={"6"} mt={"4"}>
          <Box
            align={"center"}
            w={"40%"}
            onClick={() => {
              openModal("supviz");
            }}
          >
            <SupvizComp isActive={Supviz}></SupvizComp>
          </Box>
          <Box
            align={"center"}
            w={"40%"}
            onClick={() => {
              openModal("host");
            }}
          >
            <HostComp isActive={Host}></HostComp>
          </Box>
          <Box
            align={"center"}
            w={"40%"}
            onClick={() => {
              openModal("staff");
            }}
          >
            <StaffComp isActive={Staff}></StaffComp>
          </Box>
          <Box
            align={"center"}
            w={"40%"}
            onClick={() => {
              openModal("press");
            }}
          >
            <PressComp isActive={Press}></PressComp>
          </Box>
          <Box
            align={"center"}
            w={"40%"}
            onClick={() => {
              openModal("media");
            }}
          >
            <MediaComp isActive={Media}></MediaComp>
          </Box>
          <Box
            align={"center"}
            w={"40%"}
            onClick={() => {
              openModal("creative");
            }}
          >
            <CreativeComp isActive={Creative}></CreativeComp>
          </Box>
          <Box
            align={"center"}
            w={"40%"}
            onClick={() => {
              openModal("socmed");
            }}
          >
            <SocMedComp isActive={SocMed}></SocMedComp>
          </Box>
          <Box
            align={"center"}
            w={"40%"}
            onClick={() => {
              openModal("sponsor");
            }}
          >
            <SponsorComp isActive={Sponsor}></SponsorComp>
          </Box>
        </Flex>
      </Box>
      <Flex
        w={"100vw"}
        h={"10vh"}
        bgGradient={"linear(to-t, rgb(20, 21, 67), rgb(23, 27, 38))"}
        justify={"center"}
        align={"center"}
        color={"white"}
      >
        <Text align={"center"}>
          <strong>Minden jog fenntartva © 2023 BIMUN</strong>
        </Text>
      </Flex>
    </>
  );
}

export default Index;
