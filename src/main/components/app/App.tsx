import "./App.scss"
import { FC, useState } from "react"
import { Page } from "../../const/page"
import { ActivePage } from "../active/ActivePage"
import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { LangContextProvider } from "../../context/LangContext"

interface AppProps {}

export const App: FC<AppProps> = () => {

    const [activePage, setActivePage] = useState<Page>(Page.HOME)

    const changeActivePage = (page: Page): void => {
        setActivePage(page)
    }

    return (
        <LangContextProvider>
            <div id="App">
                <Header activePage={activePage} changeActivePage={changeActivePage} />
                <div id="active_page">
                    <ActivePage activePage={activePage} changeActivePage={changeActivePage}  />
                </div>
                <Footer />
            </div>
        </LangContextProvider>
    )
}
