import { render } from "@testing-library/react"
import { DateForm } from "../../../../main/components/pages/date/form/DateForm"

describe("DateForm component", () => {

    test("", () => {
        const component = render(<DateForm setResultParams={jest.fn()} />)
        component.getByText("Year")
        component.getByText("Month")
        component.getByText("Day")
        expect(component.getAllByRole("button")).toHaveLength(3)
    })
})