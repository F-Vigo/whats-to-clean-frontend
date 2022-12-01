import "./OperationPage.scss"
import { FC, useContext } from "react"
import { pageList, Page } from "../../../const/page"

import { getPageForTranslation, getTranslation } from "../../../service/lang_utils"
import { LangContext } from "../../../context/LangContext"


interface OperationPageProps {
  changeActivePage: (page: Page) => void
}

export const OperationPage: FC<OperationPageProps> = ({ changeActivePage }) => {

    const {activeLang} = useContext(LangContext)

    return (
        <div id="operation_wrapper">
            {
                pageList
                    .filter(page => page !== Page.OPERATION && page !== Page.HOME)
                    .map(page =>
                        <div className="flex_item_wrapper" key={page}>
                            <button className="app_button operation_button" onClick={() => changeActivePage(page)}>
                                {getTranslation(activeLang, getPageForTranslation(page))}
                            </button>
                        </div>
                    )
            }
        </div>
    )
}
