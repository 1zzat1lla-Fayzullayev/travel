import { useContext, useEffect, useState } from "react";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";

const useHeaderData = () => {
    const { selectedLanguage, changeLanguage } = useContext(LanguageContext);
    const [headerData, setHeaderData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const data = [
                { title: "Work & Travel", description: getText("headerSwiperParagraph2"), headerLink: '/student-transfer', bgImage: "https://files.oaiusercontent.com/file-u23bXQkhMbqrueTjNsEOHlOz?se=2024-10-15T10%3A09%3A43Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dfe0a69a6-b50f-4166-ac91-d48b7fb4060e.webp&sig=3qGTe4WCunlWD8LcqZmhAbTsyLIMDxqOYogYsnNbDdk%3D", mobBgImage: "https://files.oaiusercontent.com/file-u23bXQkhMbqrueTjNsEOHlOz?se=2024-10-15T10%3A09%3A43Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dfe0a69a6-b50f-4166-ac91-d48b7fb4060e.webp&sig=3qGTe4WCunlWD8LcqZmhAbTsyLIMDxqOYogYsnNbDdk%3D" },
                { title: "Work & Travel", description: getText("headerSwiperParagraph1"), headerLink: '/work-and-travel', bgImage: "https://wallpapers.com/images/hd/travel-wallpaper-s4-wallpaper-ibackgroundwallpaper-9oel6c93nep4tpfd.jpg", mobBgImage: "https://wallpapers.com/images/hd/travel-wallpaper-s4-wallpaper-ibackgroundwallpaper-9oel6c93nep4tpfd.jpg" },

            ];
            setHeaderData(data);
        };

        fetchData();
    }, [changeLanguage, selectedLanguage]);

    return headerData;
};

export default useHeaderData;