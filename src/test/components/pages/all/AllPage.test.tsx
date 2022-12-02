import { render } from "@testing-library/react"
import { AllPage } from "../../../../main/components/pages/all/All"

describe("AllPage component", () => {

    test("", () => {
        const component = render(<AllPage />)
        component.getByText("Room")
        component.getByText("Download file")
    })
})