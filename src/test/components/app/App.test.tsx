import { fireEvent, render } from "@testing-library/react"
import { App } from "../../../main/components/app/App"

describe("App component", () => {
    
    test("renders as expected", () => {
        const component = render(<App />)
        expect(component.getAllByText("What's to clean?").length).toBe(2)
        component.getByText("Log in")
        expect(component.getAllByText("English").length).toBe(2)
    })

    test("switches to Spanish", () => {
        const component = render(<App />)
        fireEvent.click(component.getByText("Español"))
        expect(component.getAllByText("English")).toHaveLength(1)
        expect(component.getAllByText("Español")).toHaveLength(2)
        expect(component.queryAllByText("Log in")).toHaveLength(0)
        component.getByText("Iniciar sesión")
    })
})
