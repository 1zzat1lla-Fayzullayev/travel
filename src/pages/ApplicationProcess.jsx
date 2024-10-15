/* eslint-disable no-unused-vars */
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Heading, Image } from "@chakra-ui/react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

function ApplicationProcess() {
    const { selectedLanguage, selectedFlag, changeLanguage } =
        useContext(LanguageContext);
    return (
        <div className="container application-process">
            {/* Accordion Section */}
            <div style={{ flex: 1 }}>
                <Heading as="h2" size="xl" mb={6} textAlign="start" color="black">
                    {getText("ApplicationProcessTitle")}
                </Heading>

                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                                <Box flex="1" textAlign="left" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("ApplicationProcessAccordionTitle1")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontSize="lg">
                            {getText("ApplicationProcessAccordionP1")}
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                                <Box flex="1" textAlign="left" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("ApplicationProcessAccordionTitle2")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontSize="lg">
                            {getText("ApplicationProcessAccordionP2")}
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                                <Box flex="1" textAlign="left" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("ApplicationProcessAccordionTitle3")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontSize="lg">
                            {getText("ApplicationProcessAccordionP3")}
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                                <Box flex="1" textAlign="left" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("ApplicationProcessAccordionTitle4")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontSize="lg">
                            {getText("ApplicationProcessAccordionP4")}
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                                <Box flex="1" textAlign="left" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("ApplicationProcessAccordionTitle5")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontSize="lg">
                            {getText("ApplicationProcessAccordionP5")}                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Image Section */}
            <div>
                <Image src={"/img/Application.png"} className="application-process_img" />
            </div>
        </div>
    );
}

export default ApplicationProcess;
