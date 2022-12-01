import "./DateForm.scss"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { FC } from "react"
import { getTranslation } from "../../../../service/lang_utils"
import { LangContext } from "../../../../context/LangContext"
import { buildRange, totalDays } from "../../../../service/util"

interface DateFormProps {
  setResultParams: (day: string, month: string, year: string) => void
}

export const DateForm: FC<DateFormProps> = ({ setResultParams }) => {

    const {activeLang} = useContext(LangContext)

    const [yearValue, setYearValue] = useState<string>("-")
    const [monthValue, setMonthValue] = useState<string>("-")
    const [dayValue, setDayValue] = useState<string>("-")

    const toToday = () => {
        const today = new Date()
        setYearValue(today.getFullYear().toString())
        setMonthValue((today.getMonth()+1).toString())
        setDayValue(today.getDate().toString())
    }

    useEffect(toToday, [])

    const fields: string[] = ["yearField", "monthField", "dayField"]

    const updateYearValue = (value: string): void => {
        setYearValue(value)
        updateMonthValue("-")
    }

    const updateMonthValue = (value: string): void => {
        setMonthValue(value)
        setDayValue("-")
    }

    const changeErrorOpacity = (shouldShow: boolean) => {
    document.getElementById("date_form_error")!.style.opacity =
      shouldShow ? "1" : "0"
    }

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if ([yearValue, monthValue, dayValue].includes("-")) {
            changeErrorOpacity(true)
        }
        else {
            setResultParams(dayValue, monthValue, yearValue)
        }
    }

    const yearRange: string[] = buildRange(2020, new Date().getFullYear()+1)
    const monthRange: string[] = yearValue === "-" ? ["-"] : buildRange(1, 12)
    const dayRange: string[] = [yearValue, monthValue].includes("-")
        ? ["-"]
        : buildRange(1, totalDays(parseInt(yearValue), parseInt(monthValue)))


    return (
        <form onSubmit={submitForm}  id="date_form_form">

            <div id="date_form_error_wrapper">
                <div id="date_form_error" style={{opacity: "0"}} >
                    <p>{getTranslation(activeLang, "dateFormError")}</p>
                    <button type="button" onClick={() => changeErrorOpacity(false)}>×</button>
                </div>
            </div>


            <table id="date_form_table">
                <tbody>

                    <tr>
                        {fields.map(field => <th className="date_form_header" key={field}><label>{getTranslation(activeLang, field)}</label></th>)}
                    </tr>

                    <tr>

                        <td>
                            <select value={yearValue} onChange={(event) => updateYearValue(event.target.value)}>
                                {yearRange.map((year: string) => <option key={year}>{year}</option>)}
                            </select>
                        </td>

                        <td>
                            <select id="month_select" value={monthValue} onChange={(event) => updateMonthValue(event.target.value)}>
                                {monthRange.map((month: string) => <option key={month}>{month}</option>)}
                            </select>
                        </td>

                        <td>
                            <select value={dayValue} onChange={(event) => setDayValue(event.target.value)}>
                                {dayRange.map((day: string) => <option key={day}>{day}</option>)}
                            </select>
                        </td>

                    </tr>
                    <tr>
                        <td  colSpan={3}>
                            <div id="date_form_buttons">
                                <button className="table_button" type="button" onClick={toToday}>{getTranslation(activeLang, "setToday")}</button>
                                <button className="table_button" type="submit">{getTranslation(activeLang, "confirmButton")}</button>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </form>
    )
}