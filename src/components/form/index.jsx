import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Input } from "../input";
import { DivStyled } from "./styled";

export const Form = ({data, setData}) => {
  const { handleSubmit, register } = useForm();
    console.log(data)

  const addData = (newData) => {
    if(newData.text.length == 0){
       return toast.error("Adicionei o Título da Tarefa!")
    } 
    toast("😎 Tarefa Adicionada!")
    setData([...data,newData])
  };

  return (
    <DivStyled>
      <h1>Inserir Tarefa</h1>
      <form onSubmit={handleSubmit(addData)}>
        <Input type="text" placeholder="Digitar Título da Tarefa" register={register("text")}/>
        <select {...register("type")}>
            <option value='curto'>Prazo: Curto</option>
            <option value='medio'>Prazo: Médio</option>
            <option value='longo'>Prazo: Longo</option>
        </select>
        <button type="submit">Adicionar</button>
      </form>
    </DivStyled>
  );
};