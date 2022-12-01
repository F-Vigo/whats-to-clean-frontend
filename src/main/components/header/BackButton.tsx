import { FC, useContext } from "react"
import { Page } from "../../const/page"
import { logOutEndpoint } from "../../service/endpoints"
import { getTranslation } from "../../service/lang_utils"
import { callBackend } from "../../service/util"
import { LangContext } from "../../context/LangContext"

interface BackButtonProps {
    activePage: Page
    changeActivePage: (page: Page) => void
}

export const BackButton: FC<BackButtonProps> = ({ activePage, changeActivePage }) => {

    const {activeLang} = useContext(LangContext)


    const isOperation: boolean = activePage === Page.OPERATION

    const opacity: string =
    activePage === Page.HOME
        ? "0"
        : "1"

    const onClickFunction = (): void => {
        isOperation
            ? logOut()
            : backToOperation()
    }

    const logOut = (): void => {
        callBackend(() => logOutEndpoint())
        window.localStorage.removeItem("user_index")
        changeActivePage(Page.HOME)
    }

    const backToOperation = (): void => {
        changeActivePage(Page.OPERATION)
    }

    const text: string = getTranslation(activeLang, isOperation ? "logOut" : "backMainButton")

    return(
        <button className="app_button" id="back_button" style={{opacity: opacity}} onClick={onClickFunction}>{text}</button>
    )
}