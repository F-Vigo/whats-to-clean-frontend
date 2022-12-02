import { render } from "@testing-library/react"
import { OperationPage } from "../../../../main/components/pages/operation/OperationPage"

describe("OperationPage component", () => {

    test("", () => {
        const component = render(<OperationPage changeActivePage={jest.fn()} />)
        component.getByText("See all chores")
        component.getByText("See chores scheduled for a date")
        component.getByText("Information")
    })
})