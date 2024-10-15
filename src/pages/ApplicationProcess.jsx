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
                <Image src={"https://files.oaiusercontent.com/file-XaaMH95W7rEqoDdNl2uMO53Y?se=2024-10-15T10%3A17%3A58Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De0c65967-b679-48cc-b43a-f21bcfd55412.webp&sig=2061hNabVA/uavOmVnwgduCqhOv%2BdS2sdnmNRl%2BElBw%3D"} className="application-process_img" />
            </div>
        </div>
    );
}

export default ApplicationProcess;
