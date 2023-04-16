import { HeaderStyled } from "./styled";
import img from "../../assets/logo5.png";
import { Input } from "../input";
import { useForm } from "react-hook-form";

export const Header = () => {
  const { handleSubmit, register } = useForm();

  const test = (data) => {
    console.log(data);
  };
  return (
    <HeaderStyled>
      <img src={img} alt="" />
    </HeaderStyled>
  );
};
