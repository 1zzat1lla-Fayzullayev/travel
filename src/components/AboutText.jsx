/* eslint-disable no-unused-vars */
import React from "react";
import { getText } from "../locales";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react";

function AboutText() {
  return (
    <>
      <div className="about-texts">
        <p><strong>Work & Travel</strong> programı, gençlere dünyanın farklı yerlerinde seyahat ederken çalışma ve uluslararası deneyim kazanma fırsatı sunan küresel bir girişimdir. Ana amacımız, uluslararası deneyim edinmek isteyen öğrenci ve gençlere destek olmak, onların dünya görüşlerini genişletmek ve farklı kültürlerle yakından tanışma imkanı yaratmaktır.</p>

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton className="about_accordion_btn">
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  style={{ color: "black", fontWeight: "600", fontSize: "24px", }}
                >
                  Neden bizi tercih etmelisiniz?

                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel  color={"#666666"}>
              <ul>
                <li>Çalışma fırsatları: Amerika, Almanya ve diğer ülkelerde restoranlar, oteller, yaz kampları ve eğlence parkları gibi çeşitli alanlarda iş imkânları sunuyoruz.</li>
                <li>Kültürel değişim: Work & Travel programıyla sadece çalışmakla kalmaz, aynı zamanda yeni arkadaşlar edinir ve diğer ülkelerin zengin kültürlerini yakından tanıma fırsatı bulursunuz. Bu deneyim, kişisel ve profesyonel gelişiminize büyük katkı sağlar.</li>
                <li>Destek ve rehberlik: Vize sürecinden lojistik detaylara kadar her adımda size rehberlik ediyor, karşılaşabileceğiniz tüm zorluklarda yanınızda oluyoruz.</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default AboutText;
