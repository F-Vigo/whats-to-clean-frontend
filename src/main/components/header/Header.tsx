import "./Header.scss"
import { FC } from "react"
import { Page } from "../../const/page"
import { BackButton } from "./BackButton"
import { LangSelector } from "./LangSelector"

interface HeaderProps {
    activePage: Page
    changeActivePage: (page: Page) => void
}

export const Header: FC<HeaderProps> = ({ activePage, changeActivePage }) => {    
    return(
        <header>
            <div>
                <LangSelector />
                <BackButton activePage={activePage} changeActivePage={changeActivePage} />
            </div>
            <p style={{opacity: activePage===Page.HOME ? "0" : "1"}}>What&apos;s to clean?</p>
        </header>
    )
}