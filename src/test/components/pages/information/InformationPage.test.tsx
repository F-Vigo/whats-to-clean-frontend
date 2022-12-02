import { render } from "@testing-library/react"
import { InformationPage } from "../../../../main/components/pages/information/InformationPage"

describe("InformationPage component", () => {

    test("", () => {
        const component = render(<InformationPage />)
        component.getByText("User guide")
    })
})