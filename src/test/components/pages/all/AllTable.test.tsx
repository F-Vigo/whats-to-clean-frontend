import { render } from "@testing-library/react"
import { AllTable } from "../../../../main/components/pages/all/table/AllTable"

describe("AllTable component", () => {

    test("", () => {
        const mock = jest.fn()
        const component = render(<AllTable choreList={[]} changeChoreList={mock} />)
        component.getByText("Room")
        component.getByText("Section")
        component.getByText("Description")
        component.getByText("Periodicity")
        component.getByText("Actions")
        component.getByRole("button")
    })
})