import { FC, useContext } from "react"
import { Periodicity } from "../../../../../const/periodicity"
import { LangContext } from "../../../../../context/LangContext"
import { Chore } from "../../../../../domain/chore"
import { UpdateOrDeleteTuple } from "../../../../../domain/tuple"
import { getTranslation } from "../../../../../service/lang_utils"
import { periodicityForTranslation } from "../../../../../service/util"
import { CreateOrUpdateRow } from "./CreateOrUpdateRow"
import { DeleteRow } from "./DeleteRow"

interface TableRowProps {
    i: number
    chore: Chore
    showUpdateOrDeleteRow: UpdateOrDeleteTuple
    changeShowUpdateOrDeleteRowComp: (i: number, isUpdate: boolean) => void
    updateChoreComp: (i: number, roomName: string, sectionName: string, description: string, periodicity: Periodicity) => void
    deleteChoreComp: (i: number) => void
  }
  
export const TableRow: FC<TableRowProps> = ({ i, chore, showUpdateOrDeleteRow, changeShowUpdateOrDeleteRowComp, updateChoreComp, deleteChoreComp }) => {
  

    const {activeLang} = useContext(LangContext)


    const getShowUpdate = (): boolean => showUpdateOrDeleteRow === undefined ? false : showUpdateOrDeleteRow.showUpdate
    const getShowDelete = (): boolean => showUpdateOrDeleteRow === undefined ? false : showUpdateOrDeleteRow.showDelete
  
    return (
        <>
            <tr className="item_row">
                <td>{chore.section.room.name}</td>
                <td>{chore.section.name}</td>
                <td>{chore.description}</td>
                <td>{getTranslation(activeLang, periodicityForTranslation(chore.periodicity))}</td>
  
                <td className="all_button_cell">
                    <button className="table_button" onClick={() => changeShowUpdateOrDeleteRowComp(i, true)}>
                        { getShowUpdate() ? getTranslation(activeLang, "cancelButton") : getTranslation(activeLang, "updateButton") }
                    </button>
                    <button className="table_button" onClick={() => changeShowUpdateOrDeleteRowComp(i, false)}>
                        { getShowDelete() ? getTranslation(activeLang, "cancelButton") : getTranslation(activeLang, "deleteButton") }
                    </button>
                </td>
            </tr>
            {
                getShowUpdate()
                    ? <CreateOrUpdateRow i={i} chore={chore} f={updateChoreComp} buttonText={"confirmButton"} isCreate={false}  />
                    : null
            }
            {
                getShowDelete()
                    ? <DeleteRow i={i} f={deleteChoreComp} />
                    : null
            }
        </>
    )
}