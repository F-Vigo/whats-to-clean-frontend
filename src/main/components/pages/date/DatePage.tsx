import { FC, useState } from "react"
import { DateForm } from "./form/DateForm"
import { DateResult } from "./result/DateResult"

interface DatePageProps {}

export const DatePage: FC<DatePageProps> = () => {

    const [hasResult, setHasResult] = useState<boolean>(false)
    const [dayValue, setDayValue] = useState<string>("-")
    const [monthValue, setMonthValue] = useState<string>("-")
    const [yearValue, setYearValue] = useState<string>("-")

    const setResultParams = (day: string, month: string, year: string): void => {
        setDayValue(day)
        setMonthValue(month)
        setYearValue(year)
        setHasResult(true)
    }


    return (
        <div>
            {
                hasResult
                    ? <DateResult year={yearValue} month={monthValue} day={dayValue} />
                    : <DateForm setResultParams={setResultParams} />
            }
        </div>
    )
}