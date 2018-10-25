import english from "./languages/eng.json";
import swedish from "./languages/swe.json";

import Storage from "src/types/Storage"
import StorageKey from "../types/StorageKey";


const loadLanguage = () => {
    if (Storage.getItem(StorageKey.LANGUAGE) === "eng.json") {
        return english;
    }
    else if (Storage.getItem(StorageKey.LANGUAGE) === "swe.json") {
        return swedish;
    }
}

const language: LanguageTemplate = loadLanguage();

export default language
