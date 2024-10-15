/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Heading, Text, UnorderedList, ListItem, Image } from "@chakra-ui/react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

function TRStories() {
    const { selectedLanguage, selectedFlag, changeLanguage } =
        useContext(LanguageContext);
    return (
        <div className="container tr_stories">
            <div className="tr_stories_accordion">

                <Heading as="h2" size="xl" mb={6} textAlign="start" color="black">
                    {getText("TRStoriesTitle")}
                </Heading>


                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                                <Box flex="1" textAlign="left" fontWeight="bold" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("TRStoriesAccordionTitle1")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontSize={19}>
                            <Text>
                                {getText("TRStoriesAccordionP1")}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                                <Box flex="1" textAlign="left" fontWeight="bold" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("TRStoriesAccordionTitle2")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontSize={19}>
                            <Text>
                                {getText("TRStoriesAccordionP2")}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                                <Box flex="1" textAlign="left" fontWeight="bold" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("TRStoriesAccordionTitle3")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontSize={19}>
                            <Text>
                                {getText("TRStoriesAccordionP3")}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                                <Box flex="1" textAlign="left" fontWeight="bold" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("TRStoriesAccordionTitle4")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontSize={19}>
                            <Text>
                                {getText("TRStoriesAccordionP4")}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: "#F0E68C", color: "black", borderRadius: "10px" }}>
                                <Box flex="1" textAlign="left" fontWeight="bold" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                    {getText("TRStoriesAccordionTitle5")}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontSize={19}>
                            <UnorderedList spacing={2}>
                                <ListItem style={{ listStyle: "inside" }}>{getText("TRStoriesAccordionList1")}</ListItem>
                                <ListItem style={{ listStyle: "inside" }}>{getText("TRStoriesAccordionList2")}</ListItem>
                                <ListItem style={{ listStyle: "inside" }}>{getText("TRStoriesAccordionList3")}</ListItem>
                                <ListItem style={{ listStyle: "inside" }}>{getText("TRStoriesAccordionList4")}</ListItem>
                            </UnorderedList>
                            <Text mt={4}>{getText("TRStoriesAccordionListEnd")}</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
            <Image
                src="https://etimg.etb2bimg.com/photo/98465947.cms"
                className="tr_stories_img"
            />
        </div>

    );
}

export default TRStories;
