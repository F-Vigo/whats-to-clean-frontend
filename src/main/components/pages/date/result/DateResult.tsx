import "./DateResult.scss"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { FC } from "react"
import { Chore, ChoreAndDone } from "../../../../domain/chore"
import { getByDateEndpoint } from "../../../../service/endpoints"
import { callBackend, periodicityForTranslation, unique } from "../../../../service/util"
import { getTranslation } from "../../../../service/lang_utils"
import { LangContext } from "../../../../context/LangContext"


interface DateResultProps {
  year: string
  month: string
  day: string
}

export const DateResult:FC<DateResultProps> = ({ year, month, day }) => {

    const {activeLang} = useContext(LangContext)

    const [choreAndDoneList, setChoreAndDoneList] = useState<ChoreAndDone[]>([])
    const [roomPressed, setRoomPressed] = useState<string>("")
    const [sectionPressed, setSectionPressed] = useState<string>("")

    useEffect(
        () => {
            callBackend(() => getByDateEndpoint(year, month, day)
                .then(response => {
                    setChoreAndDoneList(response.data.map((chore: Chore) => new ChoreAndDone(chore, false)))
                })
            )      
        },
        []
    )

    const changeRoomPressed = (roomName: string): void => {
        setSectionPressed("")
        setRoomPressed(roomName)

        const elem = document.getElementById("column_flex_section")!
        elem.style.transition = "all 0ms"
        elem.style.transform = "translateX(-100px)"
        elem.style.opacity = "0"
        setInterval(() => {
            elem.style.transition = "all 200ms"
            elem.style.transform = "translateX(0)"
            elem.style.opacity = "1"
        }, 1)
    }

    const changeSectionPressed = (sectionName: string): void => {
        setSectionPressed(sectionName)

        Array.prototype.map.call(document.getElementsByClassName("column_flex_chore")!, elem => {
            elem.style.transition = "all 0ms"
            elem.style.transform = "translateX(-100px)"
            elem.style.opacity = "0"
            setInterval(() => {
                elem.style.transition = "all 200ms"
                elem.style.transform = "translateX(0)"
                elem.style.opacity = "1"
            }, 1)
        }) 
    }

    const roomList: string[] = unique(choreAndDoneList.map(choreAndDone => choreAndDone.chore.section.room.name))
    const sectionList: string[] = unique(choreAndDoneList
        .filter(choreAndDone => choreAndDone.chore.section.room.name === roomPressed)
        .map(choreAndDone => choreAndDone.chore.section.name)
    )
    const actualChoreList: ChoreAndDone[] = choreAndDoneList
        .filter(choreAndDoneList => choreAndDoneList.chore.section.room.name === roomPressed && choreAndDoneList.chore.section.name === sectionPressed)

    const fields: string[] = ["roomField", "sectionField", "descriptionField", "periodicityField", "doneField"]

    const toggle = (choreAndDone: ChoreAndDone): void => {
        setChoreAndDoneList(
            choreAndDoneList.map(
                choreAndDoneItem => choreAndDoneItem === choreAndDone
                    ? new ChoreAndDone(choreAndDone.chore, !choreAndDone.done)
                    : choreAndDoneItem
            )
        )
    }
  

    return (
        <div id="date_result_div">

            <div className="date_result_column">
                <div className="date_result_header_item" >{getTranslation(activeLang, fields[0])}</div>
                <div className="column_flex">{roomList.map(room => <div key={room} className={`column_flex_room_item ${roomPressed === room ? "room_pressed" : ""}`} onClick={() => changeRoomPressed(room)}>{room}</div>)}</div>
            </div>

            <div className="date_result_column">
                <div className="date_result_header_item" >{getTranslation(activeLang, fields[1])}</div>
                <div id="column_flex_section" className="column_flex">{sectionList.map(section => <div key={section} className={`column_flex_section_item ${sectionPressed === section ? "section_pressed" : ""}`} onClick={() => changeSectionPressed(section)}>{section}</div>)}</div>
            </div>

            <div className="date_result_column">
                <div className="date_result_header_item" >{getTranslation(activeLang, fields[2])}</div>
                <div className="column_flex column_flex_chore">{actualChoreList.map(choreAndDone => <div key={choreAndDone.chore.description} className="actual_chore">{choreAndDone.chore.description}</div>)}</div>
            </div>

            <div className="date_result_column">
                <div className="date_result_header_item" >{getTranslation(activeLang, fields[3])}</div>
                <div className="column_flex column_flex_chore">{actualChoreList.map(choreAndDone => <div key={choreAndDone.chore.description} className="actual_chore">{getTranslation(activeLang, periodicityForTranslation(choreAndDone.chore.periodicity))}</div>)}</div>
            </div>
            <div className="date_result_column">
                <div className="date_result_header_item" >{getTranslation(activeLang, fields[4])}</div>
                <div className="column_flex column_flex_chore">{actualChoreList.map(choreAndDone => <div key={choreAndDone.chore.description}>{<input type="checkbox" defaultChecked={choreAndDone.done} onChange={() => toggle(choreAndDone)}  /> }</div>)}</div>
            </div>

        </div>
    )
}