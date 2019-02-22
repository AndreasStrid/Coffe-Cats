import english from "./languages/eng.json";
import swedish from "./languages/swe.json";

import Storage from "src/types/Storage"
import StorageKey from "../types/StorageKey";


const loadLanguage = () => {
    // Need to set all objects to their default values if it is the first time a new person uses the website
    Storage.setObjects();
    if (Storage.getItem(loadLanguage.name, StorageKey.LANGUAGE) === "eng.json") {
        return english;
    }
    else if (Storage.getItem(loadLanguage.name, StorageKey.LANGUAGE) === "swe.json") {
        return swedish;
    }
}

const language: LanguageTemplate = loadLanguage();

export default language
