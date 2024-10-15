/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
  Button,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import useListData from "../../data/allLists";
import { getText } from "../../locales";
import { LanguageContext } from "../../context/LanguageContext";

function AccordionUI() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [lists, setLists] = useState([]);
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  const allListData = useListData();

  const handleTekrarClick = () => {
    const extractedLists = Array.from(document.querySelectorAll("li")).map(
      (item) => item.innerText
    );
    setLists(extractedLists);
    onOpen();
  };
  return (
    <div className="accordion_ui">
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="accerdionHeading"
              >
                Vize nasıl alınır?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <div style={{ color: "#666666" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >


              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"

                className="accerdionHeading"
              >
                Programa katılım için minimum yaş sınırı nedir?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <div style={{ color: "#666666" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >


              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"

                className="accerdionHeading"
              >
                Çalışma süresince konaklama nasıl ayarlanır?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <div style={{ color: "#666666" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >


              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"

                className="accerdionHeading"
              >
                Çalışırken dil öğrenmek zor mu?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} mt={3} color={"#666666"}>
            <div style={{ color: "#666666" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >


              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>

      </Accordion>

      <Modal isOpen={isOpen} onClose={onClose} size="lg" className="modall">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{getText("questionModalTitle")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={3} align="start">
              {allListData.map((item, index) => (
                <Box key={index} p={2} borderRadius="md" bg="gray.50" w="full">
                  {item.linkName}
                </Box>
              ))}
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              {getText("linkButton")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AccordionUI;
