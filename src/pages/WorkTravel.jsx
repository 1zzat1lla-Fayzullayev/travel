/* eslint-disable react/no-unescaped-entities */
import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading, Text } from "@chakra-ui/react";

function WorkTravel() {
    return (
        <>
            <Box className="container" pt="150px" px="20px">
                <Heading as="h1" size="xl" mb="20px" textAlign="start">
                    Work & Travel Programı
                </Heading>
                
                <Text fontSize="lg" mb="20px" textAlign="start">
                    Work & Travel, üniversite öğrencilerine Amerika’da çalışma ve seyahat etme imkanı sunan eşsiz bir deneyimdir. 
                    Bu program sayesinde, yaz tatilinizde hem dil becerilerinizi geliştirip, hem de farklı kültürleri yakından tanıma 
                    fırsatı elde edersiniz.
                </Text>
                
                <Text fontSize="lg" mb="20px" textAlign="start">
                    Amerika’nın farklı bölgelerinde çeşitli işlerde çalışarak hem para kazanabilir hem de unutulmaz anılar biriktirebilirsiniz. 
                    Aynı zamanda yeni arkadaşlıklar kurarak, uluslararası çevre edinme şansı yakalayacaksınız. Work & Travel ile yalnızca 
                    Amerika'yı keşfetmekle kalmayacak, gelecekteki kariyerinize önemli katkılarda bulunacaksınız.
                </Text>

                <Heading as="h2" size="lg" mb="10px" textAlign="start">
                    Program Avantajları:
                </Heading>

                <Accordion allowToggle>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" style={{ color: "black", fontWeight: "600", fontSize: "24px", }}>
                                Kültürel Değişim
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} fontSize={19}>
                            Yeni insanlarla tanışarak farklı kültürleri keşfetme fırsatı.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" style={{ color: "black", fontWeight: "600", fontSize: "24px", }}>
                                İngilizce Gelişimi
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} fontSize={19}>
                            İngilizce dil becerilerinizi pratik yaparak geliştirin.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" style={{ color: "black", fontWeight: "600", fontSize: "24px", }}>
                                Gezip Görme
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} fontSize={19}>
                            Amerika'nın en ünlü şehirlerini ve turistik yerlerini gezin.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" style={{ color: "black", fontWeight: "600", fontSize: "24px", }}>
                                Kariyer Fırsatları
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} fontSize={19}>
                            Uluslararası deneyimle CV’nizi güçlendirin.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Text fontSize="lg" mt="20px" textAlign="start">
                    Sen de hayalini kurduğun bu maceraya katıl ve hayatına unutulmaz bir deneyim ekle!
                </Text>
            </Box>
        </>
    );
}

export default WorkTravel;
