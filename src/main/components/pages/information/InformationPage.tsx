import "./InformationPage.scss"
import { FC, useContext } from "react"
import { Lang } from "../../../const/lang"
import { InformationPageES } from "./lang/InformationPageES"
import { LangContext } from "../../../context/LangContext"
import { InformationPageEN } from "./lang/InformationPageEN"

interface InformationPageProps {}

export const InformationPage: FC<InformationPageProps> = () => {

    const {activeLang} = useContext(LangContext)

    switch(activeLang) {
    case Lang.EN:
        return <InformationPageEN />
    case Lang.ES:
        return <InformationPageES />
    }
}