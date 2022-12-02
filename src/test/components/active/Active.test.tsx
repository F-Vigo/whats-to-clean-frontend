import { render } from "@testing-library/react"
import { ActivePage } from "../../../main/components/active/ActivePage"
import { Page } from "../../../main/const/page"

describe("ActivePage component", () => {

    const changeActivePageMock = jest.fn()
    const renderActivePage = (activePage: Page) => {
        return render(<ActivePage activePage={activePage} changeActivePage={changeActivePageMock} />)
    }

    test("HomePage", () => {
        const component = renderActivePage(Page.HOME)
        component.getByText("What's to clean?")
    })

    test("OperationPage", () => {
        const component = renderActivePage(Page.OPERATION)
        component.getByText("See all chores")
        component.getByText("See chores scheduled for a date")
        component.getByText("Information")
    })

    test("DatePage", () => {
        const component = renderActivePage(Page.BY_DATE)
        component.getByText("Set today")
    })

    test("AllPage", () => {
        const component = renderActivePage(Page.ALL)
        component.getByText("Download file")
    })

    test("InformationPage", () => {
        const component = renderActivePage(Page.INFORMATION)
        component.getByText("User guide")
    })
})