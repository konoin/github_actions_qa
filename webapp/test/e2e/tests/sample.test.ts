import Input from "sap/m/Input"
import Button from "sap/m/Button"
import { MainPage } from "../pages/main.page"
import CheckBox from "sap/m/CheckBox"
import CustomListItem from "sap/m/CustomListItem";

describe("basic usage", () => {
    it("input for adding todo item is rendered", async () => {

        const inputControl: unknown = await browser.asControl(MainPage.addTodoItemInput)
        await (inputControl as Input).setValue("new task")
        await (inputControl as Input).focus()

        await browser.pause(2000)
        await browser.keys('Backspace')
        await browser.keys('Return')
        await browser.pause(2000)

        const getElement: unknown = await browser.asControl(MainPage.taskText('new tas'))
        const newElement = getElement as CustomListItem
        const checkboxId = await MainPage.getLastCharacter(await newElement.getId())

        const getCheckboxControl: unknown = await browser.asControl(MainPage.testCheckBox(checkboxId))
        const checkBox = getCheckboxControl as CheckBox

        await checkBox.focus()
        await checkBox.setSelected(true)

        const activeButtonControl: unknown = await browser.asControl(MainPage.activeButton())
        const activeButton = activeButtonControl as Button

        await activeButton.focus()
        await activeButton.firePress()

        const compleateButtonControl: unknown = await browser.asControl(MainPage.compleateButton())
        const compleateButton = compleateButtonControl as Button

        await compleateButton.focus()
        await compleateButton.firePress()

        const allButtonControl: unknown = await browser.asControl(MainPage.allButton())
        const allButton = allButtonControl as Button

        await allButton.focus()
        await allButton.firePress()


        await browser.pause(5000)
    })
})