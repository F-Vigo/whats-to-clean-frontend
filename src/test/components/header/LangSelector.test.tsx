import { fireEvent, render } from "@testing-library/react"
import { LangSelector } from "../../../main/components/header/LangSelector"

describe("LangSelector component", () => {

    test("", () => {
        const component = render(<LangSelector />)
        component.getByRole("button")
        expect(component.getAllByText("English")).toHaveLength(2)
        expect(component.getAllByText("Español")).toHaveLength(1)
    })
})