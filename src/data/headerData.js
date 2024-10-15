import { useContext, useEffect, useState } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";

const useHeaderData = () => {
    const { selectedLanguage, changeLanguage } = useContext(LanguageContext);
    const [headerData, setHeaderData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const data = [
                { title: "Work & Travel", description: getText("headerSwiperParagraph2"), headerLink: '/student-transfer', bgImage: "/img/travel.png", mobBgImage: "/img/travel.png" },
                { title: "Work & Travel", description: getText("headerSwiperParagraph1"), headerLink: '/work-and-travel', bgImage: "https://wallpapers.com/images/hd/travel-wallpaper-s4-wallpaper-ibackgroundwallpaper-9oel6c93nep4tpfd.jpg", mobBgImage: "https://wallpapers.com/images/hd/travel-wallpaper-s4-wallpaper-ibackgroundwallpaper-9oel6c93nep4tpfd.jpg" },

            ];
            setHeaderData(data);
        };

        fetchData();
    }, [changeLanguage, selectedLanguage]);

    return headerData;
};

export default useHeaderData;