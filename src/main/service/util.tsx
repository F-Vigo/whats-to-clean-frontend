import { Lang } from "../const/lang"
import { Periodicity, periodicityList } from "../const/periodicity"
import { Chore } from "../domain/chore"
import { getTranslation } from "./lang_utils"

export const periodicityForTranslation = (periodicity: Periodicity) => {

    const actualPeriodicity: Periodicity = getActualPeriodicity(periodicity)

    switch(actualPeriodicity) {
    case Periodicity.DAILY:
        return "periodicityDaily"
    case Periodicity.TWICE_A_WEEK:
        return "periodicityTwiceAWeek"
    case Periodicity.WEEKLY:
        return "periodicityWeekly"
    case Periodicity.BIWEEKLY:
        return "periodicityBiweekly"
    case Periodicity.MONTHLY:
        return "periodicityMonthly"
    case Periodicity.QUARTERLY:
        return "periodicityQuarterly"
    default:
        return ""
    }
}

const getActualPeriodicity = (periodicity: Periodicity): Periodicity => {
    if (typeof(periodicity) === typeof(Periodicity.DAILY)) {
        return periodicity
    } else {
        switch(periodicity as unknown as string) {
        case "DAILY":
            return Periodicity.DAILY
        case "TWICE_A_WEEK":
            return Periodicity.TWICE_A_WEEK
        case "WEEKLY":
            return Periodicity.WEEKLY
        case "BIWEEKLY":
            return Periodicity.BIWEEKLY
        case "MONTHLY":
            return Periodicity.MONTHLY
        case "QUARTERLY":
            return Periodicity.QUARTERLY
        default:
            return Periodicity.DAILY
        }
    }
}

export const fetchPeriodicityValue = (activeLang: Lang, translated: string): Periodicity => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return periodicityList.find((value: Periodicity) => getTranslation(activeLang, periodicityForTranslation(value)) === translated)!
}



export const buildRange = (a: number, b: number): string[] => {
    const range: string[] = ["-"]
    let i: number = a
    while (i <= b) {
        range.push(i.toString())
        i++
    }
    return range
}



export const totalDays = (year: number, month: number): number => {
    if (month === 2) {
        const isLeapYear: boolean = (year % 100 === 0 && year % 400 !== 0) || (year % 4 === 0)
        return isLeapYear ? 29 : 28
    }
    else {
        return ([1, 3, 5, 7, 8, 10, 12].includes(month)) ? 31 : 30
    }
}



export const splitByRoomsAndSections = (choreList: Chore[]): Chore[][][] => {
    return splitByRooms(choreList).map(splitBySections)
}



const splitByRooms = (choreList: Chore[]): Chore[][] => {
    return unique(choreList.map(chore => chore.section.room.name))
        .map(roomName => choreList.filter(chore => chore.section.room.name === roomName))
}


const splitBySections = (choreList: Chore[]): Chore[][] => { // Assumend only one room
    return unique(choreList.map(chore => chore.section.name))
        .map(sectionName => choreList.filter(chore => chore.section.name === sectionName))
}

export const unique = (list: any[]): any[] => {
    return list.filter((item, index, self) => self.indexOf(item) === index)
}



const setLoadingMode = (loading: boolean): void => {
    document.body.style.cursor = loading ? "wait" : "default"
}

export const callBackend = (call: () => Promise<any>): void => {
    setLoadingMode(true)
    call()
        .finally(() => setLoadingMode(false))
}
