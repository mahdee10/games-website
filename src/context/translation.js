import { createContext, useState, useContext, useEffect } from "react";
import { I18n} from "i18n-js";
import ar from "../translations/ar.json";
import en from "../translations/en.json";

const TranslationContext = createContext(null);

const TranslationProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");
  const [RTL, setRTL] = useState(false);

  const i18n = new I18n({en, ar});
  const t = i18n.t.bind(i18n);

  i18n.locale = locale;
  i18n.enableFallback = true;
  i18n.defaultLocale = "en";

  useEffect(() => {
    if (locale !== "en") {
      setRTL(true);
    } else {
      setRTL(false);
    }
  }, [locale]);



  return (
    <TranslationContext.Provider value={{ locale, setLocale, i18n, t, RTL }}>
      {children}
    </TranslationContext.Provider>
  );
};

const useTranslation = () => useContext(TranslationContext);

export { TranslationProvider, useTranslation };
