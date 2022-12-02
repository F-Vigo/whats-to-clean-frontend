
import "./HomePage.scss"
import { FC, useContext } from "react"
import { Page } from "../../../const/page"
import { getTranslation } from "../../../service/lang_utils"
import { callBackend } from "../../../service/util"
import { logInEndpoint } from "../../../service/endpoints"
import { LangContext } from "../../../context/LangContext"

interface HomePageProps {
    changeActivePage: (lang: Page) => void
}

export const HomePage: FC<HomePageProps> = ({changeActivePage}) => {

    const {activeLang} = useContext(LangContext)

    const setUsername = (user_index: string): void => {
        window.localStorage.setItem("user_index", user_index)
    }

    const logIn = (): void => {
        
        const baseCall: () => Promise<any> = () => logInEndpoint().then(response => setUsername(response.data.toString()))
        const isDevProfile: boolean = process.env.REACT_APP_ENV === "LOCAL"
        const call: () => Promise<any> = isDevProfile
            ? () => baseCall().finally(() => changeActivePage(Page.OPERATION))
            : () => baseCall().then(() => changeActivePage(Page.OPERATION))

        callBackend(call)
    }

    return(
        <div id="home_page">
            <h1>What&apos;s to clean?</h1>
            <div>
                <button type="button" onClick={logIn}> {getTranslation(activeLang, "logIn")} </button>
            </div>
        </div>
    )
}