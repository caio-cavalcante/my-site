function Educacao(){
    return(
        <>
            <section id="cursos">
                <h4>Cursos</h4>
                <ol>
                    <li>5º Semestre BSI - IFBA</li>
                    <li>StartSe &lt;tech/academy&gt;</li>
                    <li>Lógica de Programação Senai</li>
                    <li>Lógica de Programação Fundação Bradesco</li>
                    <li>Ensino Médio no Colégio Helyos, FSA - BA</li>
                </ol>
            </section>

            <section id="horario"> {/* significado das siglas */}
                <h4>Meu horário esse semestre</h4>
                <table align="center">
                    <tr>
                        <th>Horário</th>
                        <th>SEG</th>
                        <th>TER</th>
                        <th>QUA</th>
                        <th>QUI</th>
                        <th>SEX</th>
                    </tr>
            
                    <tr align="center">
                        <td>13:20 - 14:10</td>
                        <td>TGA</td>
                        <td>TGA</td>
                        <td>ING</td>
                        <td>BD2</td>
                        <td>SOC</td>
                    </tr>
            
                    <tr align="center">
                        <td>14:10 - 15:00</td>
                        <td>TGA</td>
                        <td>TGA</td>
                        <td>ING</td>
                        <td>BD2</td>
                        <td>SOC</td>
                    </tr>
            
                    <tr align="center">
                        <td>15:00 - 15:10</td>
                        <td>-----</td>
                        <td>-----</td>
                        <td>-----</td>
                        <td>-----</td>
                        <td>-----</td>
                    </tr>
            
                    <tr align="center">
                        <td>15:10 - 16:00</td>
                        <td>RC2</td>
                        <td>WEB</td>
                        <td>PDS</td>
                        <td>BD2</td>
                    </tr>
            
                    <tr align="center">
                        <td>16:00 - 16:50</td>
                        <td>RC2</td>
                        <td>WEB</td>
                        <td>PDS</td>
                        <td>BD2</td>
                    </tr>
            
                    <tr align="center">
                        <td>16:50 - 17:40</td>
                        <td>RC2</td>
                        <td>WEB</td>
                        <td>PDS</td>
                        <td>SOC</td>
                    </tr>
                    
                    <tr align="center">
                        <td>17:40 - 18:30</td>
                        <td>RC2</td>
                        <td>WEB</td>
                        <td>PDS</td>
                        <td>SOC</td>
                    </tr>
                </table>
            </section>
        </>
    );
}

export default Educacao;