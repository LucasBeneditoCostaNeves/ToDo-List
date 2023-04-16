import { Card } from "../card"
import { DivStyled } from "./styled"

export const List = ({title,array,filterCheck,addCheck}) => {

    return(
     <DivStyled>
        <h1>{title}</h1>
        {array.length == 0 && <h2>Sem nenhuma Tarefa!</h2>}
        <ul>
        {array && array.map((element) => Card(element,filterCheck,addCheck))}    
        </ul>        
     </DivStyled>   
    )
}