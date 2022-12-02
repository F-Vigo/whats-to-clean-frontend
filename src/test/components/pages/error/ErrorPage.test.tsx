import { render } from "@testing-library/react"
import { ErrorPage } from "../../../../main/components/pages/error/ErrorPage"
import { Lang } from "../../../../main/const/lang"
import { getTranslation } from "../../../../main/service/lang_utils"

describe("ErrorPage component", () => {

    test("", () => {
        const component = render(<ErrorPage />)
        component.getByText(getTranslation(Lang.EN, "errorPage"))
    })
})