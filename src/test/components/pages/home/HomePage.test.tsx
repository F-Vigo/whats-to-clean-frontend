import { render } from "@testing-library/react"
import { HomePage } from "../../../../main/components/pages/home/HomePage"

describe("HomePage component", () => {

    test("", () => {
        const component = render(<HomePage changeActivePage={jest.fn()} />)
        component.getByText("What's to clean?")
        component.getByRole("button")
    })
})