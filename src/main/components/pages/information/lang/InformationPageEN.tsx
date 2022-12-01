import { FC } from "react"

interface InformationPageENProps {}

export const InformationPageEN: FC<InformationPageENProps> = () => {
    return(
        <div id="information_page">
            <section>
                <h2 id="information_title">What&apos;s to clean</h2>
                <p><i>What&apos;s to clean</i> is the app that centralises housework chores, especially the ones related to cleaning. With this app, you will be able to:</p>
                <ul>
                    <li>Register each chore, sorted by room, and by section within the room.</li>
                    <li>Associate a periodicity to each chore to specify what days they must be carried out on.</li>
                    <li>Filter, given a day, what chore must be fulfilled.</li>
                </ul>
            </section>

            <section>
                <h2>User guide</h2>
                <p>After logging in, there are three pages you can go:</p>
                <ul>
                    <li><i>See all chores</i>.</li>
                    <li><i>See all chores scheduled for a date</i>.</li>
                    <li><i>Information</i>, which is the one you are reading.</li>
                </ul>

                <div>
                    <h3>See all chores</h3>
                    <p>At this page you can manage all tasks in your home. These are displayd as a table where each row represents a chore, and the columns corresponds a room, the section, the description and the associated periodicity. The last row is made up from text fields where you can register a new task. On the right there are two buttons: the first one displays a subrow to edit the corresponding chore, and the second one shows a subrow to delete de chore. You can create the tasks one by one, or you can upload a file. Such file can be downloaded from this same page. The information of the tasks does not persis between sessions, thus it is important to download the file to register the chores in a future session. The memory of the server is also restarted everyday at 02:00 <i>a. m.</i></p>
                </div>

                <div>
                    <h3>See all chores scheduled for a date.</h3>
                    <p>This page is split in two phases:</p>
                    <ol>
                        <li>The first one is a form to select a date.</li>
                        <li>The second one is a list of all chores corresponding with the chosen date.</li>
                    </ol>
                    <p>The chores are sorted by sections, and the sections are sorted by rooms. In this page, you can choose a room to display the associated sections, and next select a section to show the tasks in it. Each chore, besides, comes with a checkbox to allow mark them as done or to do.</p>

                </div>
            </section>

            <section>
                <h2>Periodicity</h2>
                <p>For the moment, the implemented periodicities are the following ones:</p>
                <ul>
                    <li>Daily. Everyday.</li>
                    <li>Twice a week. Tuesday and Friday.</li>
                    <li>Weekly. Weekends.</li>
                    <li>Biweekly. First and third weekend of the month.</li>
                    <li>Monthly. First weekend of the month.</li>
                    <li>Quarterly. First weekend of the term (in the months of January, April, July y October).</li>
                </ul>
            </section>

            <section>
                <h2>Improvements</h2>
                <ul>
                    <li>Extend the available periodicities and promote customization.</li>
                    <li>Allow the persistence of chores between sessions.</li>
                    <li>Improve the sessions system and implement a basic authentication system (username and password).</li>
                    <li>Add other languages.</li>
                </ul>
            </section>
            
            <section>
                <h2>Technical details</h2>
                <ul>
                    <li>Backend: Java (openJDK 17.0.4.1) and Spring Boot (3.0.0).</li>
                    <li>Frontend: Typescript (4.9.3), React (18.2.0) and Node (16.17.1).</li>
                </ul>
            </section>
        </div>
    )
}