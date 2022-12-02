import { render } from "@testing-library/react"
import { Header } from "../../../main/components/header/Header"
import { Page } from "../../../main/const/page"

describe("Header component", () => {

    test("", () => {
        const mock = jest.fn()
        const component = render(<Header activePage={Page.HOME} changeActivePage={mock} />)
        expect(component.getAllByText("English")).toHaveLength(2)
        component.getAllByText("Back")
    })
})