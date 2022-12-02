import "./ErrorPage.scss"
import { FC, useContext } from "react"
import { getTranslation } from "../../../service/lang_utils"
import { LangContext } from "../../../context/LangContext"

interface ErrorPageProps {}

export const ErrorPage: FC<ErrorPageProps> = () => {

    const {activeLang} = useContext(LangContext)

    return (
        <div id="error_page">
            <p><span>{getTranslation(activeLang, "errorPage")}</span> <span>😢</span></p>
        </div>
    )
}