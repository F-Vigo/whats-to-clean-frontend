import { fireEvent, render } from "@testing-library/react"
import { BackButton } from "../../../main/components/header/BackButton"
import { Page } from "../../../main/const/page"

describe("BackButton component", () => {

    const mock = jest.fn()
    const renderBackButton = (activePage: Page) => render(<BackButton activePage={activePage} changeActivePage={mock} />)

    test("OperationPage", () => {
        const component = renderBackButton(Page.OPERATION)
        const button = component.getByRole("button")
        component.getByText("Log out")
        fireEvent.click(button)
        expect(mock).toHaveBeenCalled()
    })

    test.each([
        [Page.HOME, Page.ALL, Page.BY_DATE, Page.INFORMATION]
    ])("%p page", (activePage: Page) => {
        const component = renderBackButton(activePage)
        const button = component.getByRole("button")
        component.getByText("Back")
        fireEvent.click(button)
        expect(mock).toHaveBeenCalled()
    })
})