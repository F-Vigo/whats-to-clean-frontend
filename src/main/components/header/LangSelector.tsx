import { FC, useContext, useState } from "react"
import { Lang, langList } from "../../const/lang"
import { getLangTranslation } from "../../service/lang_utils"
import { LangContext } from "../../context/LangContext"


interface LangSelectorProps {}

export const LangSelector: FC<LangSelectorProps> = () => {

    const {activeLang, changeActiveLang} = useContext(LangContext)

    const [pressed, setPressed] = useState<boolean>(false)
    const classNamePressed = pressed ? "pressed" : "unpressed"

    const langSelected = (lang: Lang): void => {
        setPressed(false)
        changeActiveLang(lang)
    }

    window.addEventListener("click", function(e){   
        if (pressed && !document.getElementById("lang_selector")!.contains(e.target as HTMLDivElement)) {
            setPressed(false)
        }
    })


    return ( // TO DO
        <div id="lang_selector">
            <div id="lang_button" className={classNamePressed} onClick={() => setPressed(!pressed)}>
                <p id="world_icon">🌍</p>
                <p id="lang_p">{getLangTranslation(activeLang)}</p>
            </div>
      

            {/*       <select id="lang_select" value={getLangTranslation(activeLang)} onChange={(event) => changeActiveLang(fetchLangValue(event.target.value))}>
        {langList.map(lang => <option className="option_lang" key={lang}>{getLangTranslation(lang)}</option>)}
      </select> */}
            <ul id="lang_ul" className={classNamePressed} >
                {langList.map(lang => <li key={lang} onClick={() => langSelected(lang)}>{getLangTranslation(lang)}</li>)}
            </ul>
        </div>
    )
}