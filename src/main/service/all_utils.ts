import { Periodicity } from "../const/periodicity"
import { Chore, Room, Section } from "../domain/chore"
import { UpdateOrDeleteTuple } from "../domain/tuple"
import { deleteChoreEndpoint, postChoreEndpoint, putChoreEndpoint } from "./endpoints"
import { callBackend } from "./util"


export const updateTuples = (
    choreList: Chore[],
    changeShowUpdateOrDeleteRowArray: (listTuple: UpdateOrDeleteTuple[]) => void
): void => {
    const result: UpdateOrDeleteTuple[] = []
    for (let i = 0; i < choreList.length; i++) {
        result.push({ showUpdate: false, showDelete: false })
    }
    changeShowUpdateOrDeleteRowArray(result)
}


export const changeShowUpdateOrDeleteRow = (
    i: number,
    isUpdate: boolean,
    showUpdateOrDeleteRowArray: UpdateOrDeleteTuple[],
    changeShowUpdateOrDeleteRowArray: (listTuple: UpdateOrDeleteTuple[]) => void
): void => {
    changeShowUpdateOrDeleteRowArray(
        showUpdateOrDeleteRowArray.map(
            (updateOrDelete, index) => index === i
                ? isUpdate
                    ? { showUpdate: !updateOrDelete.showUpdate, showDelete: false }
                    : { showUpdate: false, showDelete: !updateOrDelete.showDelete }
                : { showUpdate: false, showDelete: false }
        )
    )
}


export const updateChore = (
    i: number,
    roomName: string,
    sectionName: string,
    description: string,
    periodicity: Periodicity,
    choreList: Chore[],
    changeChoreList: (newChoreList: Chore[]) => void
): void => {
    const newChore: Chore = new Chore(new Section(sectionName, new Room(roomName)), description, periodicity)
    callBackend(() => putChoreEndpoint(choreList[i].section.room.name, choreList[i].section.name, choreList[i].description, newChore)
        .then(response => changeChoreList(response.data))
    )

}


export const deleteChore = (i: number, choreList: Chore[], changeChoreList: (newChoreList: Chore[]) => void): void => {
    callBackend(() => deleteChoreEndpoint(choreList[i].section.room.name, choreList[i].section.name, choreList[i].description)
        .then(response => changeChoreList(response.data))
    )
}


export const createChore = (
    i: number,
    roomName: string,
    sectionName: string,
    description: string,
    periodicity: Periodicity,
    changeChoreList: (newChoreList: Chore[]) => void
): void => {
    const newChore: Chore = new Chore(new Section(sectionName, new Room(roomName)), description, periodicity)
    callBackend(() => postChoreEndpoint(newChore)
        .then(response => changeChoreList(response.data))
    )
}
