import { render } from "@testing-library/react"
import { AllFile } from "../../../../main/components/pages/all/file/AllFile"

describe("AllFile component", () => {

    test("", () => {
        const component = render(<AllFile updateChoreList={jest.fn()} />)
        expect(component.getAllByRole("button")).toHaveLength(3)
    })
})