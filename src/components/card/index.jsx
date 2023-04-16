import { LiStyled } from "./styled";
import lixeira from "../../assets/drash.png"
import list from "../../assets/check.jpg"

export const Card = (element, filterCheck, addCheck) => {
  return (
    <LiStyled>
      <div>
        <div className={element.type}></div>
        <h2>{element.text}</h2>
      </div>
      <div>
        {addCheck && <img src={list} className="icon-check" onClick={() => addCheck(element)}/>}
        {addCheck && <img onClick={() => filterCheck(element.text)} src={lixeira} alt="" />}
      </div>
    </LiStyled>
  );
};
