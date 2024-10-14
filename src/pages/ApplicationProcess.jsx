import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Heading } from "@chakra-ui/react";

function ApplicationProcess() {
    return (
        <div className="container" style={{ paddingTop: "150px" }}>
            <Heading as="h2" size="xl" mb={6} textAlign="start" color="black">
                Başvuru Süreci
            </Heading>

            <Accordion allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                            <Box flex="1" textAlign="left" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                1. Adım: Bilgilendirme Toplantısı
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="lg">
                        Work and Travel programımız hakkında kapsamlı bilgi alabileceğiniz toplantılar düzenliyoruz. Bu toplantılarda, ABD ve Almanya’da çalışma şartlarını ve kazanç fırsatlarını öğreniyorsunuz.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                            <Box flex="1" textAlign="left" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                2. Adım: Başvuru Formu ve Dokümanlar
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="lg">
                        Gerekli belgeleri ve başvuru formlarını sizlere sağlıyoruz. Süreç boyunca her adımda yanınızda oluyoruz.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                            <Box flex="1" textAlign="left" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                3. Adım: Vize Süreci
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="lg">
                        Vize başvurunuzda uzman ekibimiz tarafından destekleniyorsunuz. Konsolosluk görüşmesine hazırlanmak için detaylı rehberlik hizmeti sunuyoruz.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                            <Box flex="1" textAlign="left" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                4. Adım: Yerleşim ve Uçuş
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="lg">
                        Programınız onaylandığında, çalışacağınız şehirde konaklama ve diğer lojistik detaylarla ilgileniyoruz. Uçak biletinizden yerleştirme hizmetlerinize kadar her şey bizim kontrolümüzde.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={{ bg: "#7BA6FF", color: "black", borderRadius: "10px" }}>
                            <Box flex="1" textAlign="left" style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>
                                5. Adım: Yeni Deneyiminize Başlayın!
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="lg">
                        Artık Amerika ya da Almanya’daki yeni hayatınıza başlayabilirsiniz! Yolculuğunuzda her adımda destek sağlıyoruz.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default ApplicationProcess;
