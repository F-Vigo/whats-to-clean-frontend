import { FC } from "react"

interface InformationPageESProps {}

export const InformationPageES: FC<InformationPageESProps> = () => {
    return(
        <div id="information_page">
            <section>
                <h2 id="information_title">What&apos;s to clean</h2>
                <p><i>What&apos;s to clean</i> es la aplicación que centraliza las tareas domésticas, especialmente las de limpieza. Con esta aplicación puedes:</p>
                <ul>
                    <li>Registrar cada una de las tareas organizadas por estancia, y por sección dentro de la estancia.</li>
                    <li>Asociar a cada tarea una periodicidad para especificar qué días tiene que llevarse a cabo.</li>
                    <li>Filtrar, dado un día, las tareas tienen que relizarse.</li>
                </ul>
            </section>

            <section>
                <h2>Guía de uso</h2>
                <p>Tras iniciar sesión, tienes tres páginas a las que puedes acceder:</p>
                <ul>
                    <li><i>Ver todas las tareas.</i></li>
                    <li><i>Ver todas las tareas programadas para una fecha.</i></li>
                    <li><i>Información</i>, que es esta que estás leyendo.</li>
                </ul>

                <div>
                    <h3>Ver todas las tareas</h3>
                    <p>En esta página puedes gestionar todas las tareas de tu hogar. Estas se muestran en forma de tabla en la que cada fila representa una tarea, y las columnas indican la habitación, la sección, la descripción y la periodicidad asociada. La última fila de esta tabla se compone de campos de texto en los que puedes registrar una nueva tarea. A la derecha de cada fila se encuentran dos botones: el primero de ellos despliegue una subfila para editar la tarea correspondiente, y el segundo, una subfila para eliminar la tarea. Puedes crear las tareas una a una, o puedes subir un fichero para ello. Dicho fichero se puede descargar desde esta misma página. La información de las tareas no persiste te una sesión a otra, de manera que es importante descargar el fichero para poder registrar las tareas en una sesión posterior. La memoria del servidor también se reinicia cada día a las 02:00 <i>a. m.</i></p>
                </div>

                <div>
                    <h3>Ver todas las tareas programadas para una fecha</h3>
                    <p>Esta página está dividida en dos pasos:</p>
                    <ol>
                        <li>El primero es un formulario para seleccionar una fecha.</li>
                        <li>El segundo es un listado de todas los tareas correspondientes a la fecha escogida.</li>
                    </ol>
                    <p>Las tareas se agrupan por secciones, que a su vez se agrupan por habitaciones. En esta página, puedes escoger una habitación para mostrar las secciones asociadas, y seguidamente seleccionar una sección para desplegar las tareas que comprende. Cada tarea, además, está acompañada de un <i>checkbox</i> que permite marcarla como realizada o por hacer.</p>

                </div>
            </section>

            <section>
                <h2>Periodicidad</h2>
                <p>Por el momento, las periodicidades implementadas son las siguientes:</p>
                <ul>
                    <li>Diario. Cada día.</li>
                    <li>Dos veces por semana. Martes y viernes.</li>
                    <li>Semanal. Fin de semana.</li>
                    <li>Quincenal. Primer y tercer fin de semana del mes.</li>
                    <li>Mensual. Primer fin de semana del mes.</li>
                    <li>Trimestral. Primer fin de semana del trimestre (en los meses de enero, abril, julio y octubre).</li>
                </ul>
            </section>

            <section>
                <h2>Mejoras</h2>
                <ul>
                    <li>Extender las periodicidades disponibles y fomentar la personalización.</li>
                    <li>Posibilitar la persistencia de las tareas registradas de una sesión a otra.</li>
                    <li>Mejorar el sistema de sesiones e implementar un sistema de autenticación básica (usuario y contraseña).</li>
                    <li>Añadir otros idiomas.</li>
                </ul>
            </section>
            
            <section>
                <h2>Aspectos técnicos</h2>
                <ul>
                    <li>Backend: Java (openJDK 17.0.4.1) y Spring Boot (3.0.0).</li>
                    <li>Frontend: Typescript (4.9.3), React (18.2.0) y Node (16.17.1).</li>
                </ul>
            </section>
        </div>
    )
}