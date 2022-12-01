import "./ActivePage.scss"
import { Page } from "../../const/page"
import { FC } from "react"
import { ErrorPage } from "../pages/error/ErrorPage"
import { AllPage } from "../pages/all/All"
import { DatePage } from "../pages/date/DatePage"
import { HomePage } from "../pages/home/HomePage"
import { OperationPage } from "../pages/operation/OperationPage"
import { InformationPage } from "../pages/information/InformationPage"


interface ActivePageProps {
  activePage: Page
  changeActivePage: (page: Page) => void
}


export const ActivePage: FC<ActivePageProps> = ({ activePage, changeActivePage }) => {
    switch (activePage) {
    case Page.HOME:
        return <HomePage changeActivePage={changeActivePage} />
    case Page.OPERATION:
        return <OperationPage  changeActivePage={changeActivePage} />
    case Page.BY_DATE:
        return <DatePage />
    case Page.ALL:
        return <AllPage  />
    case Page.INFORMATION:
        return <InformationPage  />
    default:
        return <ErrorPage  />
    }
}