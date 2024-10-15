/* eslint-disable no-unused-vars */
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Heading, UnorderedList, ListItem, Image } from "@chakra-ui/react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
// import travelImage from '/path/to/image.png'; 

function Destinations() {
    const { selectedLanguage, selectedFlag, changeLanguage } =
        useContext(LanguageContext);
    return (
        <div className="container destinations">
            <div style={{ flex: 1, marginRight: '20px' }}>
                <Heading as="h2" size="xl" mb={6} textAlign="start" color="black">
                    {getText("DestinationsPageTitle")}
                </Heading>

                <Accordion allowMultiple mb={4}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                                <Box flex="1" textAlign="left" fontWeight="bold" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("DestinationsPageAccordionTitle1")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <UnorderedList spacing={2}>
                                <ListItem fontSize="lg">
                                    <strong>{getText("DestinationsPageAccordionStrong1Title1")}</strong> {getText("DestinationsPageAccordionP1Text1")}
                                </ListItem>
                                <ListItem fontSize="lg">
                                    <strong>{getText("DestinationsPageAccordionStrong2Title1")}</strong> {getText("DestinationsPageAccordionP1Text2")}
                                </ListItem>
                            </UnorderedList>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                                <Box flex="1" textAlign="left" fontWeight="bold" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("DestinationsPageAccordionTitle2")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <UnorderedList spacing={2}>
                                <ListItem fontSize="lg">
                                    <strong>{getText("DestinationsPageAccordionStrong1Title2")}</strong> {getText("DestinationsPageAccordionP2Text1")}
                                </ListItem>
                                <ListItem fontSize="lg">
                                    <strong>{getText("DestinationsPageAccordionStrong2Title2")}</strong> {getText("DestinationsPageAccordionP2Text2")}
                                </ListItem>
                            </UnorderedList>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Image section */}
            <div>
                <Image src={"https://turonworld.uz/files/imgonline-com-ua-Resize-9NfjgGbLcCo_335362xo.jpg"} className="destinations_img" />
            </div>
        </div>
    );
}

export default Destinations;
