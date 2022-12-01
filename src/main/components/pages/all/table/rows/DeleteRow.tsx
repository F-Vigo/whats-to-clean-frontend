import { FC, useContext } from "react"
import { LangContext } from "../../../../../context/LangContext"
import { getTranslation } from "../../../../../service/lang_utils"

interface DeleteRowProps {
    i: number
    f: (i: number) => void
  }
  
  
export const DeleteRow: FC<DeleteRowProps> = ({ i, f }) => {

    const {activeLang} = useContext(LangContext)

    return(
        <tr id="all_delete_row">
            <td id="all_delete_sure" className="delete_td" colSpan={4}>
                {getTranslation(activeLang, "sureWarning")}
            </td>
  
            <td className="all_button_cell delete_td">
                <button id="all_delete_confirm" onClick={() => f(i)}>{getTranslation(activeLang, "confirmButton")}</button>
            </td>
        </tr>
    )
}