/* eslint-disable react/no-unescaped-entities */
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

function TRStories() {
    return (
        <div className="container" style={{ paddingTop: "150px" }}>
            <Heading as="h2" size="xl" mb={6} textAlign="start" color="black">
                Gerçek Hikayeler
            </Heading>
            <Accordion allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                            <Box flex="1" textAlign="left" fontWeight="bold" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                Ali'nin New York Macerası
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize={19}>
                        <Text>
                            "Work & Travel programına katılmadan önce, Amerika'da çalışmanın ve seyahat etmenin hayalini kuruyordum. Bu program sayesinde hayalim gerçek oldu! New York'ta bir otelde çalıştım ve işten arta kalan zamanlarımda şehri keşfetme şansım oldu. Central Park’ta piknik yapmak, Times Square’in renkli ışıkları altında yürümek, hatta Broadway'de bir müzikal izlemek unutulmaz deneyimlerdi. Bu program bana sadece para kazanma fırsatı değil, aynı zamanda Amerika’yı derinlemesine keşfetme şansı sundu."
                        </Text>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                            <Box flex="1" textAlign="left" fontWeight="bold" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                Zeynep’in California Rüyası
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize={19}>
                        <Text>
                            "California'da geçirdiğim yaz, hayatımın en güzel yazlarından biriydi. Work & Travel programı sayesinde burada bir restoranda çalıştım ve boş zamanlarımda Pasifik Okyanusu’nun tadını çıkardım. San Francisco’daki Golden Gate Köprüsü’nden geçmek ve Los Angeles’ta Hollywood'u ziyaret etmek, programın bana sunduğu en harika anılardan sadece birkaç tanesi."
                        </Text>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                            <Box flex="1" textAlign="left" fontWeight="bold" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                Mehmet’in Dil Gelişimi Yolculuğu
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize={19}>
                        <Text>
                            "İngilizce konuşma becerilerimi geliştirmek istiyordum ve Work & Travel benim için en doğru tercih oldu. Boston’da bir kafede çalışırken, günlük hayatın içinde İngilizce’yi aktif olarak kullanma şansı buldum. İlk başlarda zorlandım ama zamanla akıcı konuşmaya başladım."
                        </Text>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                            <Box flex="1" textAlign="left" fontWeight="bold" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                Ayşe’nin Kültürel Keşif Serüveni
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize={19}>
                        <Text>
                            "Work & Travel programına katılmadan önce Amerika’da çalışmanın bu kadar farklı kültürlerle tanışmamı sağlayacağını bilmiyordum. Miami'de bir plajda çalışırken dünyanın dört bir yanından insanlarla tanıştım."
                        </Text>
                    </AccordionPanel>
                </AccordionItem>

                {/* Sonuç: Neden Bizimle Work and Travel? */}
                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={{ bg: "#F0E68C", color: "black", borderRadius: "10px" }}>
                            <Box flex="1" textAlign="left" fontWeight="bold" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                Sonuç: Neden Bizimle Work and Travel?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize={19}>
                        <UnorderedList spacing={2}>
                            <ListItem style={{listStyle: "inside"}}>Deneyimli ekibimiz, süreç boyunca tüm adımlarda size destek olur.</ListItem>
                            <ListItem style={{listStyle: "inside"}}>Hem Amerika hem de Almanya’da geniş bir iş ağına sahibiz.</ListItem>
                            <ListItem style={{listStyle: "inside"}}>Vize süreçlerinizde profesyonel rehberlik sağlıyoruz.</ListItem>
                            <ListItem style={{listStyle: "inside"}}>Kişiselleştirilmiş bir deneyim sunarak sizi başarıya hazırlıyoruz.</ListItem>
                        </UnorderedList>
                        <Text mt={4}>
                            Her yolculuk bir adımla başlar; sizin adımınız bizimle olsun!
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default TRStories;
