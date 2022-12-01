import { render, screen } from "@testing-library/react"
import { App } from "../main/components/app/App"

test("renders learn react link", () => {
    render(<App />)
    const linkElement = screen.getByText("What's to clean?")
    expect(linkElement).toBeInTheDocument()
})
