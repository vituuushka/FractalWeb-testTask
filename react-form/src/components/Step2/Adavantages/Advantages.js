import React from "react";
import Advantage from "./Advantage";
import s from "./Advantages.module.css";
import addButton from "../../../assets/images/add-adv-button.png";

const Advantages = (props) => {
  return (
    <div>
      {props.advantages.map((adv, index) => (
        <Advantage
          name={props.generateAdvantageName(index)}
          key={index}
          id={index}
          removeAdvantage={props.removeAdvantage}
          onTextChange={props.onTextChange}
          advantage={adv}
          errors={props.errors}
          register={props.register}
        />
      ))}
      <button className={s.button} type="button" onClick={props.addAdvantage}>
        <img src={addButton} />
      </button>
    </div>
  );
};
export default Advantages;
