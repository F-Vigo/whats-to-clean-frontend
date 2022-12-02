import { fireEvent, render } from "@testing-library/react"
import { DatePage } from "../../../../main/components/pages/date/DatePage"

describe("DatePage component", () => {

    test("", () => {
        const component = render(<DatePage />)
        component.getByText("Set today")
        fireEvent.click(component.getByText("Confirm"))
        component.getByText("Room")
    })
})