import { Lang } from "../const/lang"
import { Page } from "../const/page"

export abstract class Translation {
    get(key: string): string {
        switch (key) {

        case "username":
            return this.getUsername()
        case "logIn":
            return this.getLogIn()

        case "operation":
            return this.getOperation()

        case "homePage":
            return this.getHomePage()
        case "byDatePage":
            return this.getByDatePage()
        case "allPage":
            return this.getAllPage()

        case "backMainButton":
            return this.getBackMainButton()
        case "logOut":
            return this.getLogOut()

        case "roomField":
            return this.getRoomField()
        case "sectionField":
            return this.getSectionField()
        case "descriptionField":
            return this.getDescriptionField()
        case "periodicityField":
            return this.getPeriodicityField()
        case "actionsField":
            return this.getActionsField()
        case "doneField":
            return this.getDoneField()

        case "updateButton":
            return this.getUpdateButton()
        case "deleteButton":
            return this.getDeleteButton()
        case "cancelButton":
            return this.getCancelButton()
        case "sureWarning":
            return this.getSureWarning()
        case "createButton":
            return this.getCreateButton()

        case "confirmButton":
            return this.getConfirmButton()

        case "selectFile":
            return this.getSelectFile()
        case "uploadFile":
            return this.getUploadFile()
        case "downloadFile":
            return this.getDownloadFile()

        case "periodicityDaily":
            return this.getPeriodicityDaily()
        case "periodicityTwiceAWeek":
            return this.getPeriodicityTwiceAWeek()
        case "periodicityWeekly":
            return this.getPeriodicityWeekly()
        case "periodicityBiweekly":
            return this.getPeriodicityBiweekly()
        case "periodicityMonthly":
            return this.getPeriodicityMonthly()
        case "periodicityQuarterly":
            return this.getPeriodicityQuarterly()

        case "yearField":
            return this.getYearField()
        case "monthField":
            return this.getMonthField()
        case "dayField":
            return this.getDayField()

        case "setToday":
            return this.getSetToday()

        case "dateFormError":
            return this.getDateFormError()

        case "informationPage":
            return this.getInformationPage()

        case "errorPage":
            return this.getErrorPage()


        default:
            return "Missing_translation"
        }
    }

  abstract getUsername(): string
  abstract getLogIn(): string

  abstract getOperation(): string

  abstract getHomePage(): string;
  abstract getByDatePage(): string;
  abstract getAllPage(): string;

  abstract getBackMainButton(): string
  abstract getLogOut(): string

  abstract getRoomField(): string
  abstract getSectionField(): string
  abstract getDescriptionField(): string
  abstract getPeriodicityField(): string
  abstract getActionsField(): string
  abstract getDoneField(): string

  abstract getUpdateButton(): string;
  abstract getDeleteButton(): string;
  abstract getCancelButton(): string;
  abstract getSureWarning(): string;
  abstract getCreateButton(): string;
  
  abstract getConfirmButton(): string;

  abstract getSelectFile(): string;
  abstract getUploadFile(): string;
  abstract getDownloadFile(): string;

  abstract getPeriodicityDaily(): string;
  abstract getPeriodicityTwiceAWeek(): string;
  abstract getPeriodicityWeekly(): string;
  abstract getPeriodicityBiweekly(): string;
  abstract getPeriodicityMonthly(): string;
  abstract getPeriodicityQuarterly(): string;

  abstract getYearField(): string;
  abstract getMonthField(): string;
  abstract getDayField(): string;
  
  abstract getSetToday(): string;

  abstract getDateFormError(): string;

  abstract getInformationPage(): string;

  abstract getErrorPage(): string;
}

class TranslationEn extends Translation {

    getUsername(): string {
        return "Username"
    }
    getLogIn(): string {
        return "Log in"
    }

    getOperation(): string {
        return "Operation"
    }

    getHomePage(): string {
        return "Main page"
    }
    getByDatePage(): string {
        return "See chores scheduled for a date"
    }
    getAllPage(): string {
        return "See all chores"
    }

    getBackMainButton(): string {
        return "Back"
    }
    getLogOut(): string {
        return "Log out"
    }

    getRoomField(): string {
        return "Room"
    }
    getSectionField(): string {
        return "Section"
    }
    getDescriptionField(): string {
        return "Description"
    }
    getPeriodicityField(): string {
        return "Periodicity"
    }
    getActionsField(): string {
        return "Actions"
    }
    getDoneField(): string {
        return "Done"
    }

    getUpdateButton(): string {
        return "Update"
    }
    getDeleteButton(): string {
        return "Delete"
    }
    getCancelButton(): string {
        return "Cancel"
    }
    getSureWarning(): string {
        return "Sure?"
    }
    getCreateButton(): string {
        return "Create"
    }

    getConfirmButton(): string {
        return "Confirm"
    }

    getSelectFile(): string {
        return "Select file"
    }
    getUploadFile(): string {
        return "Upload file"
    }
    getDownloadFile(): string {
        return "Download file"
    }

    getPeriodicityDaily(): string {
        return "Daily"
    }
    getPeriodicityTwiceAWeek(): string {
        return "Twice a week"
    }
    getPeriodicityWeekly(): string {
        return "Weekly"
    }
    getPeriodicityBiweekly(): string {
        return "Biweekly"
    }
    getPeriodicityMonthly(): string {
        return "Monthly"
    }
    getPeriodicityQuarterly(): string {
        return "Quarterly"
    }

    getYearField(): string {
        return "Year"
    }
    getMonthField(): string {
        return "Month"
    }
    getDayField(): string {
        return "Day"
    }

    getSetToday(): string {
        return "Set today"
    }

    getDateFormError(): string {
        return "Invalid data"
    }

    getInformationPage(): string {
        return "Information"
    }

    getErrorPage(): string {
        return "Something went wrong. Our apologies."
    }
}

class TranslationEs extends Translation {

    getUsername(): string {
        return "Usuario"
    }
    getLogIn(): string {
        return "Iniciar sesión"
    }

    getOperation(): string {
        return "Operación"
    }

    getHomePage(): string {
        return "Menú principal"
    }
    getByDatePage(): string {
        return "Ver las tareas programadas para una fecha"
    }
    getAllPage(): string {
        return "Ver todas las tareas"
    }

    getBackMainButton(): string {
        return "Atrás"
    }
    getLogOut(): string {
        return "Cerrar sesión"
    }

    getRoomField(): string {
        return "Habitación"
    }
    getSectionField(): string {
        return "Sección"
    }
    getDescriptionField(): string {
        return "Descripción"
    }
    getPeriodicityField(): string {
        return "Periodicidad"
    }
    getActionsField(): string {
        return "Acciones"
    }
    getDoneField(): string {
        return "Hecho"
    }

    getUpdateButton(): string {
        return "Actualizar"
    }
    getDeleteButton(): string {
        return "Eliminar"
    }
    getCancelButton(): string {
        return "Cancelar"
    }
    getSureWarning(): string {
        return "¿Seguro?"
    }
    getCreateButton(): string {
        return "Crear"
    }

    getConfirmButton(): string {
        return "Confirmar"
    }

    getSelectFile(): string {
        return "Seleccionar archivo"
    }
    getUploadFile(): string {
        return "Subir archivo"
    }
    getDownloadFile(): string {
        return "Descargar archivo"
    }

    getPeriodicityDaily(): string {
        return "Diario"
    }
    getPeriodicityTwiceAWeek(): string {
        return "Dos veces por semana"
    }
    getPeriodicityWeekly(): string {
        return "Semanal"
    }
    getPeriodicityBiweekly(): string {
        return "Quincenal"
    }
    getPeriodicityMonthly(): string {
        return "Mensual"
    }
    getPeriodicityQuarterly(): string {
        return "Trimestral"
    }

    getYearField(): string {
        return "Año"
    }
    getMonthField(): string {
        return "Mes"
    }
    getDayField(): string {
        return "Día"
    }

    getSetToday(): string {
        return "Hoy"
    }

    getErrorPage(): string {
        return "Algo ha ido mal. Sentimos las molestias."
    }

    getInformationPage(): string {
        return "Información"
    }

    getDateFormError(): string {
        return "Datos inválidos"
    }
}





const langMap: Map<Lang, Translation> = new Map()
langMap.set(Lang.EN, new TranslationEn())
langMap.set(Lang.ES, new TranslationEs())


export const getTranslation = (lang: Lang, key: string): string => {
    return langMap.has(lang)
        ? langMap.get(lang)!.get(key)
        : "Missing_translation"
}

export const getLangTranslation = (lang: Lang): string => {
    switch (lang) {
    case Lang.EN:
        return "English"
    case Lang.ES:
        return "Español"
    default:
        return ""
    }
}

export const getPageForTranslation = (page: Page): string => {
    switch(page) {
    case Page.HOME:
        return "homePage"
    case Page.OPERATION:
        return "operationPage"
    case Page.BY_DATE:
        return "byDatePage"
    case Page.ALL:
        return "allPage"
    case Page.INFORMATION:
        return "informationPage"
    default:
        return ""
    }
}