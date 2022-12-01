import React, { useState } from "react"
import { Lang } from "../const/lang"

interface ReactContextProps {
    activeLang: Lang
    changeActiveLang: (newLang: Lang) => void
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const LangContext: React.Context<ReactContextProps> = React.createContext<ReactContextProps>({activeLang: Lang.EN, changeActiveLang: () => {}})

export const LangContextProvider = ({children}: any) => {
    const [activeLang, setActiveLang] = useState(Lang.EN)
    const changeActiveLang = (newLang: Lang): void => setActiveLang(newLang)
    return <LangContext.Provider value = {{activeLang, changeActiveLang}}>{children}</LangContext.Provider>
}