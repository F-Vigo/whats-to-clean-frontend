import "./AllFile.scss"
import { FC, useContext } from "react"
import { callBackend } from "../../../../service/util"
import { getFileEndpoint, postFileEndpoint } from "../../../../service/endpoints"
import { getTranslation } from "../../../../service/lang_utils"
import { LangContext } from "../../../../context/LangContext"

interface AllFileProps {
    updateChoreList: () => void
}

export const AllFile: FC<AllFileProps> = ({updateChoreList}) => {

    const {activeLang} = useContext(LangContext)

    const updateFileName = (event: React.SyntheticEvent): void => {
        const files = (event.target as HTMLInputElement).files
        const name: string = files!.length > 0 ? files![0].name : ""
        document.getElementById("file_name")!.innerText = name
    }

    const uploadFile = (): void => {
        
        const fileInput: HTMLInputElement = document.getElementById("file_input") as HTMLInputElement
        const files: FileList = (document.getElementById("file_input") as HTMLInputElement).files!
        const fileName: HTMLParagraphElement = document.getElementById("file_name") as HTMLParagraphElement

        if (files !== null && files !== undefined && files.length > 0) {
            
            const data = new FormData()
            data.append("file", files[0])
           
            fileInput.value = ""
            fileName.innerText = ""
            
            callBackend(() => postFileEndpoint(data)
                .then(updateChoreList)
            )
        }
    }

    const downloadFile = (): void => {
        callBackend(() => getFileEndpoint()
            .then((response: any) => doDownloadFile(response.data))
        )
    }

    const doDownloadFile = (fileContent: string): void => {
        const element = document.createElement("a")
        element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent))
        element.setAttribute("download", "Whats_to_clean.txt")
        element.style.display = "none"
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }



    return(
        <div id="file_div">

            <div className="flex_item_wrapper">
                <div>
                    <div id="upload_wrapper">
                        <button id="file_search_button">
                            <label htmlFor="file_input" id="file_search_label">{getTranslation(activeLang, "selectFile")}</label>
                        </button>
                        <p id="file_name"></p>
                        <input id="file_input" type="file" onChange={updateFileName} style={{display: "none"}} accept="text/plain"/>
                        <button type="button" onClick={uploadFile}>{getTranslation(activeLang, "uploadFile")}</button>
                    </div>
                </div>
            </div>
        
            <div className="flex_item_wrapper">
                <div id="download_wrapper">
                    <button type="button" onClick={downloadFile}>{getTranslation(activeLang, "downloadFile")}</button>
                </div>
            </div>
        </div>
    )
}