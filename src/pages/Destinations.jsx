/* eslint-disable react/no-unescaped-entities */

import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

function Destinations() {
    return (
        <div className="container" style={{ paddingTop: "150px" }}>
            <Heading as="h2" size="xl" mb={6} textAlign="start" color="black">
                Seyahat Destinasyonları
            </Heading>

            <Accordion allowMultiple mb={4}>
                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                            <Box flex="1" textAlign="left" fontWeight="bold" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                Amerika Birleşik Devletleri (ABD)
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList spacing={2}>
                            <ListItem fontSize="lg">
                                <strong>Sonsuz Fırsatlar Ülkesi:</strong> Amerika, farklı kültürlerle tanışmanın, dünyanın en büyük şirketlerinde staj yapmanın ve dil becerilerinizi geliştirmenin en ideal destinasyonu. Work and Travel programı ile Amerika’da hem çalışıp hem de ülkeyi gezme fırsatı yakalayacaksınız. New York’un gökdelenlerinden, Kaliforniya’nın plajlarına kadar eşsiz bir deneyim sizleri bekliyor.
                            </ListItem>
                            <ListItem fontSize="lg">
                                <strong>Çalışırken Gezme İmkanı:</strong> Los Angeles’tan Miami’ye kadar Amerika’nın çeşitli şehirlerinde hem çalışıp para kazanacak hem de boş zamanlarınızda ülkenin tarihi ve doğal güzelliklerini keşfedeceksiniz.
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
                                Almanya
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList spacing={2}>
                            <ListItem fontSize="lg">
                                <strong>Avrupa’nın Kalbinde Bir Deneyim:</strong> Almanya, Avrupa’nın en güçlü ekonomisine sahip ülkelerinden biridir. Work and Travel ile dilinizi geliştirirken aynı zamanda bu büyük ekonominin bir parçası olacaksınız. Berlin’in kültürel mirası, Münih’in tarihi dokusu ve Frankfurt’un modern iş dünyası ile tanışın.
                            </ListItem>
                            <ListItem fontSize="lg">
                                <strong>Avrupa Turu Fırsatı:</strong> Almanya’da çalışırken Avrupa’nın diğer ülkelerine de seyahat etme fırsatı yakalayacaksınız. Komşu ülkeleri trenle keşfetmek va' kaliturer interexperiencen's  klaninestror .
                            </ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Destinations;
