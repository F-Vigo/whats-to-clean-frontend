import "./AllTable.scss"
import { FC, useContext, useEffect, useState } from "react"
import { Periodicity } from "../../../../const/periodicity"
import { Chore, Room, Section } from "../../../../domain/chore"
import { UpdateOrDeleteTuple } from "../../../../domain/tuple"
import { changeShowUpdateOrDeleteRow, createChore, deleteChore, updateChore, updateTuples } from "../../../../service/all_utils"
import { getTranslation } from "../../../../service/lang_utils"
import { CreateOrUpdateRow } from "./rows/CreateOrUpdateRow"
import { TableRow } from "./rows/TableRow"
import { LangContext } from "../../../../context/LangContext"

interface AllTableProps {
    choreList: Chore[]
    changeChoreList: (newChoreList: Chore[]) => void
}

export const AllTable: FC<AllTableProps> = ({choreList, changeChoreList}) => {

    const {activeLang} = useContext(LangContext)
  
    const [showUpdateOrDeleteRowArray, setShowUpdateOrDeleteRowArray] = useState<UpdateOrDeleteTuple[]>([])

    const changeShowUpdateOrDeleteRowArray = (tupleList: UpdateOrDeleteTuple[]): void => {
        setShowUpdateOrDeleteRowArray(tupleList)
    }

    useEffect(() => updateTuples(choreList, changeShowUpdateOrDeleteRowArray), [choreList])


    const changeShowUpdateOrDeleteRowComp = (i: number, isUpdate: boolean): void => {
        return changeShowUpdateOrDeleteRow(i, isUpdate, showUpdateOrDeleteRowArray, changeShowUpdateOrDeleteRowArray)
    }

    const updateChoreComp = (
        i: number,
        roomName: string,
        sectionName: string,
        description: string,
        periodicity: Periodicity
    ): void => {
        return updateChore(i, roomName, sectionName, description, periodicity, choreList, changeChoreList)
    }

    const deleteChoreComp = (i: number): void => {
        return deleteChore(i, choreList, changeChoreList)
    }

    const createChoreComp = (
        i: number,
        roomName: string,
        sectionName: string,
        description: string,
        periodicity: Periodicity,
    ): void => {
        createChore(i, roomName, sectionName, description, periodicity, changeChoreList)
    }

    const fields: string[] = ["roomField", "sectionField", "descriptionField", "periodicityField"]


    return(
        <table id="all_table">
            <tbody>

                <tr>
                    {fields.map(field => <th className="header" key={field}>{getTranslation(activeLang,field)}</th>)}
                    <th className="header"><div>{getTranslation(activeLang, "actionsField")}</div></th>
                </tr>

                {choreList.map((chore: Chore, i: number) =>
                    <TableRow
                        key={`${chore.section.room.name}-${chore.section.name}-${chore.description}`}
                        i={i}
                        chore={chore}
                        showUpdateOrDeleteRow={showUpdateOrDeleteRowArray[i]}
                        changeShowUpdateOrDeleteRowComp={changeShowUpdateOrDeleteRowComp}
                        updateChoreComp={updateChoreComp}
                        deleteChoreComp={deleteChoreComp}
                    />
                )}
            
                <CreateOrUpdateRow
                    i={choreList.length}
                    chore={new Chore(new Section("", new Room("")), "", Periodicity.DAILY)}
                    f={createChoreComp}
                    buttonText={"createButton"}
                    isCreate={true}
                />

            </tbody>
        </table>
    )
}