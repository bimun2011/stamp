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
import ProfComp from "../components/prof";
import SponsorComp from "../components/sponsor";
import SocMedComp from "../components/socmed";
import CreativeComp from "../components/creative";

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
  const [Prof, setProf] = useState(false);

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
      prof: Prof,
    };
    localStorage.setItem("pecsetek-bimunday", JSON.stringify(pecsetek));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Supviz, Host, Staff, Press, Media, Creative, Sponsor, SocMed]);

  useEffect(() => {
    const pecsetek = JSON.parse(localStorage.getItem("pecsetek-bimunday"));
    if (pecsetek) {
      setSupviz(pecsetek.supviz);
      setHost(pecsetek.host);
      setStaff(pecsetek.staff);
      setPress(pecsetek.press);
      setMedia(pecsetek.media);
      setCreative(pecsetek.creative);
      setSponsor(pecsetek.sponsor);
      setSocMed(pecsetek.socmed);
      setProf(pecsetek.prof);
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
    if (ModalPasswordInput.toLowerCase() === ModalPassword.toLowerCase()) {
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
          setProf(false);
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
        case "prof":
          setProf(!Prof);
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
          "Supervisorként mindig készen kell állni a különböző problémák megoldására. Ennél a standnál letesztelhetitek talpraesettségeteket és problémamegoldó képességeteket. Válaszoljatok helyesen a kérdésekre és tartsatok életben minden delegáltat, sok sikert!"
        );
        setModalPassword(process.env.NEXT_PUBLIC_SUPVIZ_PASS);
        setModalType("supviz");
        onOpen();
        break;
      case "staff":
        setModalTitle("Staff stand");
        setModalBodyText(
          "Pörgess a szerencsekeréken és játssz izgalmas, szórakoztató játékokkal, amelyek bemutatják a BIMUN jellegét, illetve a staffok feladatát."
        );
        setModalPassword(process.env.NEXT_PUBLIC_STAFF_PASS);
        setModalType("staff");
        onOpen();
        break;
      case "host":
        setModalTitle("Host stand");
        setModalBodyText(
          "Kíváncsi vagy, hogy milyen feladatai vannak egy host-nak? Szeretsz új embereket megismerni? Esetleg angol nyelvtudásodat szeretnéd fejleszteni? Akkor nézz el a standunkhoz, és tudj meg többet a hostolás varázsáról!"
        );
        setModalPassword(process.env.NEXT_PUBLIC_HOST_PASS);
        setModalType("host");
        onOpen();
        break;
      case "press":
        setModalTitle("Press stand");
        setModalBodyText(
          "Részt vennél az Eötvös legnagyobb rendezvényén, a BIMUN-on? Érdekel az újságírás? Tudd meg, milyen egy nemzetközi konferencia részesének lenni, és játssz a barátaiddal a Press standnál!"
        );
        setModalPassword(process.env.NEXT_PUBLIC_PRESS_PASS);
        setModalType("press");
        onOpen();
        break;
      case "media":
        setModalTitle("Media stand");
        setModalBodyText(
          "Pár kezdő médiás rosszul szerkesztette meg képeit. Rátok vár a feladat, hogy segítsetek nekik, és ki javítsátok ezeket a hibákat. Gyertek, játszatok velünk! Ez egy remek lehetősèg, hogy betekintést nyerjetek a munkánkba. Várunk titeket szeretettel!"
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
      case "prof":
        setModalTitle("Professional stand");
        setModalBodyText(
          "Te tudod mi az Egyesült Államok legfőbb jellegzetességei? És Kínáé? Ha olvastok különböző cikkeket adott országokról, láthatjátok, hogy mindegyiknek van néhány jellegzetes vonása. De mennyire ismered ezeket?Látogass el a Prof Teamhez a szünetekben, ahol egy izgalmas párosítós feladatban kipróbálhatod a tudásodat az országok közti kapcsolatokról és azok jellegzetességeiről. Ha részt szeretnél venni szakmailag BIMUN-on, érdekel a politika és a nemzetközi kapcsolatok, akkor jelentkezz bátran rapporteurnak és nézz be a Prof teamhez a szünetben!:)"
        );
        setModalPassword(process.env.NEXT_PUBLIC_PROF_PASS);
        setModalType("prof");
        onOpen();
        break;
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="2xl">
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
              variant="outline"
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
        bgGradient={
          "linear(to-b, transparent, white), linear-gradient(90deg, hsla(196, 100%, 47%, 1) 0%, hsla(324, 100%, 47%, 1) 25%, hsla(101, 52%, 52%, 1) 50%, hsla(52, 98%, 50%, 1) 75%, hsla(357, 86%, 52%, 1) 100%)"
        }
        justify={"center"}
        align={"center"}
        border={"none"}
      >
        <Image
          width={163 * 0.7}
          height={50 * 0.7}
          fit={"cover"}
          src={"https://www.bimun.hu/img/bimun_logo_navbar.png"}
          alt={"BIMUN Logo"}
        ></Image>
      </Flex>
      <Box width={"100vw"} bgColor={"white"} color={"black"} minH={"80vh"}>
        <Heading align={"center"}>BIMUN DAY - Pecsétgyűjtés</Heading>
        {Host && Staff && Press && Media && Supviz && Prof ? (
          <Box
            align={"center"}
            border={"1px solid "}
            borderColor={"gray.500"}
            margin={2}
            marginY={5}
            rounded={"3xl"}
            textColor="black"
            padding={2}
          >
            <Heading fontSize={"xl"}>
              Megszerezted az összes pecsétet! Gratulálunk!
            </Heading>
            <Text>Menj a BIMUN Kávézóba, hogy megkapd a jutalmadat!</Text>
            <Button
              onClick={() => openModal("kavezo")}
              colorScheme={"green"}
              rounded={"full"}
              w={"full"}
              mt={2}
            >
              Ajándék beváltása
            </Button>
          </Box>
        ) : (
          <></>
        )}
        <Flex wrap={"wrap"} justify={"space-around"} rowGap={"6"} mt={"4"}>
          <Box align={"center"} w={"40%"} onClick={() => openModal("supviz")}>
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
              openModal("prof");
            }}
          >
            <ProfComp isActive={Prof}></ProfComp>
          </Box>
        </Flex>
      </Box>
      <Flex
        w={"100vw"}
        h={"10vh"}
        bgGradient={
          "linear(to-t, transparent, white), linear-gradient(90deg, hsla(196, 100%, 47%, 1) 0%, hsla(324, 100%, 47%, 1) 25%, hsla(101, 52%, 52%, 1) 50%, hsla(52, 98%, 50%, 1) 75%, hsla(357, 86%, 52%, 1) 100%)"
        }
        justify={"center"}
        align={"center"}
        color={"black"}
        mt={5}
      >
        <Text align={"center"}>
          <strong>Minden jog fenntartva © 2023 BIMUN</strong>
        </Text>
      </Flex>
    </>
  );
}

export default Index;
