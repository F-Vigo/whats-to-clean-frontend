import { render } from "@testing-library/react"
import { Footer } from "../../../main/components/footer/Footer"

describe("Footer component", () => {

    test("", () => {
        const component = render(<Footer />)
        component.getByText("— F. Vigo —")
    })
})