import { Periodicity } from "../const/periodicity"

export class ChoreAndDone {
    constructor(
        chore: Chore,
        done: boolean
    ) {
        this.chore = chore
        this.done = done
    }
    chore: Chore
    done: boolean

    toggle() {
        this.done = !this.done
    }
}

export class Chore {
    constructor(
        section: Section,
        description: string,
        periodicity: Periodicity
    ) {
        this.section = section
        this.description = description
        this.periodicity = periodicity
    }
    section: Section
    description: string
    periodicity: Periodicity
}

export class Room {
    constructor(
        name: string
    ) {
        this.name = name
    }
    name: string
}

export class Section {
    constructor(
        name: string,
        room: Room
    ) {
        this.name = name
        this.room = room
    }
    name: string
    room: Room
}
