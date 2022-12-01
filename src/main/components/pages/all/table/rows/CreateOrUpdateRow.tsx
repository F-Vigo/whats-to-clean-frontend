import { FC, useContext, useState } from "react"
import { Periodicity, periodicityList } from "../../../../../const/periodicity"
import { LangContext } from "../../../../../context/LangContext"
import { Chore } from "../../../../../domain/chore"
import { getTranslation } from "../../../../../service/lang_utils"
import { fetchPeriodicityValue, periodicityForTranslation } from "../../../../../service/util"

interface CreateOrUpdateRowProps {
    i: number
    chore: Chore
    f: (i: number, roomName: string, sectionName: string, description: string, periodicity: Periodicity) => void
    buttonText: string
    isCreate: boolean
  }
  
  
export const CreateOrUpdateRow: FC<CreateOrUpdateRowProps> = ({ i, chore, f, buttonText, isCreate }) => {
  
    const {activeLang} = useContext(LangContext)

    const [roomFieldValue, setRoomFieldValue] = useState<string>(chore.section.room.name)
    const [sectionFieldValue, setSectionFieldValue] = useState<string>(chore.section.name)
    const [descriptionFieldValue, setDescriptionFieldValue] = useState<string>(chore.description)
    const [periodicityFieldValue, setPeriodicityFieldValue] = useState<Periodicity>(chore.periodicity)
  
    const createOrUpdate = (): void => {
        f(i, roomFieldValue, sectionFieldValue, descriptionFieldValue, periodicityFieldValue)
        setRoomFieldValue(chore.section.room.name)
        setSectionFieldValue(chore.section.name)
        setDescriptionFieldValue(chore.description)
        setPeriodicityFieldValue(chore.periodicity)
    }
  
    return(
        <tr id={`${buttonText === "createButton" ? "all_create_row" : "all_update_row"}`}>
            <td className={isCreate ? "create_td" : "update_td" }>
                <input value={roomFieldValue} onChange={(event) => setRoomFieldValue(event.target.value)} />
            </td>
            <td className={isCreate ? "create_td" : "update_td" }>
                <input value={sectionFieldValue} onChange={(event) => setSectionFieldValue(event.target.value)} />
            </td>
            <td className={isCreate ? "create_td" : "update_td" }>
                <input value={descriptionFieldValue} onChange={(event) => setDescriptionFieldValue(event.target.value)} />
            </td>
            <td className={isCreate ? "create_td" : "update_td" }>
                <select value={getTranslation(activeLang, periodicityForTranslation(periodicityFieldValue))} onChange={(event) => setPeriodicityFieldValue(fetchPeriodicityValue(activeLang, event.target.value))}>
                    {periodicityList.map(value => <option key={value}>{getTranslation(activeLang, periodicityForTranslation(value))}</option>)}
                </select>
            </td >
            <td className={`all_button_cell ${isCreate ? "create_td" : "update_td"}`}>
                <button className="table_button" onClick={createOrUpdate}>{getTranslation(activeLang, buttonText)}</button>
            </td>
        </tr>
    )
}