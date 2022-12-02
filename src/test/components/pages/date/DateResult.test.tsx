import { render } from "@testing-library/react"
import { DateResult } from "../../../../main/components/pages/date/result/DateResult"

describe("DateResult component", () => {

    test("", () => {
        const component = render(<DateResult year={""} month={""} day={""} />)
        component.getByText("Room")
        component.getByText("Section")
        component.getByText("Description")
        component.getByText("Periodicity")
        component.getByText("Done")
    })
})