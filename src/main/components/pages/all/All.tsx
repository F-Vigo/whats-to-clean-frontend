import "./All.scss"
import { FC, useEffect, useState } from "react"
import { AllTable } from "./table/AllTable"
import { AllFile } from "./file/AllFile"
import { Chore } from "../../../domain/chore"
import { getAllEndpoint } from "../../../service/endpoints"
import { callBackend } from "../../../service/util"


interface AllPageProps {}

export const AllPage: FC<AllPageProps> = () => {

    const [choreList, setChoreList] = useState<Chore[]>([])

    const changeChoreList = (newChoreList: Chore[]): void => {
        setChoreList(newChoreList)
    }

    const updateChoreList = (): void => {
        callBackend(() => getAllEndpoint()
            .then(response => changeChoreList(response.data))
        )
    }

    useEffect(updateChoreList, [])


    return (
        <div id="all_page">
            <AllTable choreList={choreList} changeChoreList={changeChoreList} />
            <AllFile updateChoreList={updateChoreList} />
        </div>
    )
}