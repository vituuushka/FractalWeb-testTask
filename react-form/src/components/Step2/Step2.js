import React, { useState } from "react";
import "./Step2.css";
import stepper2 from "../../assets/images/stepper2.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useData } from "../../DataContext";
import Advantages from "./Adavantages/Advantages";

const radioValue1 = '1'
const radioValue2 = '2'
const radioValue3= '3'
const [checkboxText1, checkboxText2, checkboxText3] = ['1', '2', '3']

const generateAdvantageName = (i) => `advantage-${i + 1}`;

const Step2 = () => {
  const { setValues, data: globalData } = useData();
  const navigate = useNavigate();

  const defaultValues = {
    checkbox1: globalData.checkbox?.[checkboxText1],
    checkbox2: globalData.checkbox?.[checkboxText2],
    checkbox3: globalData.checkbox?.[checkboxText3],
    radio: globalData.radio,
  };

  const defaultAdvantages = globalData.advantages;
  if (defaultAdvantages?.length) {
    for (let i = 0; i < defaultAdvantages.length; i++) {
      const advantageName = generateAdvantageName(i);
      defaultValues[advantageName] = defaultAdvantages[i];
    }
  }
  const [advantages, setAdvantages] = useState(defaultAdvantages || []);
  // const [text, setText] = useState("");
  const shape = {};
  for (let i = 0; i < advantages.length; i++) {
    const advantageName = generateAdvantageName(i);
    shape[advantageName] = yup.string().required("Обязательное поле");
  }
  const schema = yup.object().shape(shape);

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues,
  });
  const onSubmit = (data) => {
    setValues({  ...data, advantages });
    navigate("/step3");
  };

  

  
  const addAdvantage = () => {
    setAdvantages([...advantages, ""]);
  };

  const removeAdvantage = (targetIndex) => {
    const newADv = advantages.filter((value, index) => index !== targetIndex);
    setAdvantages(newADv);
  };
  const onTextChange = (index, value) => {
    advantages[index] = value;
    setAdvantages([...advantages]);
  };


  const [radio, setRadio] = useState(globalData.radio);
  const onRadioChange = (value) => {
    setRadio(value)
  }

  const [checkbox, setCheckbox] = useState(globalData.checkbox || {});
  const onCheckboxChange = (checkboxNumber) => {
    setCheckbox({ ...checkbox, [checkboxNumber]: !checkbox[checkboxNumber]})
  }


  const goBack = () => {
    setValues({ advantages, radio, checkbox });
    navigate("/step1");
  };


  return (
    <div className="background background-step2">
      <div className="stepper">
        <img src={stepper2} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="step-form">
        <div className="step-input">
          <label className="adv-label">Преимущества</label>
          <Advantages
            advantages={advantages}
            addAdvantage={addAdvantage}
            removeAdvantage={removeAdvantage}
            generateAdvantageName={generateAdvantageName}
            onTextChange={onTextChange}
            errors={errors}
            register={register}
          />
        </div>

        <div className="step-input">
          <label>Checkbox группа</label>
          <div className="checkbox-input">
            <input type="checkbox" value={checkboxText1} {...register("checkbox1")} checked={checkbox[checkboxText1]} onChange={() => onCheckboxChange(checkboxText1)}/>
            <label>1</label>
          </div>
          <div className="checkbox-input">
            <input type="checkbox" value={checkboxText2} {...register("checkbox2")} checked={checkbox[checkboxText2]}  onChange={() => onCheckboxChange(checkboxText2)}/>
            <label>2</label>
          </div>
          <div className="checkbox-input">
            <input type="checkbox" value={checkboxText3} {...register("checkbox3")} checked={checkbox[checkboxText3]}   onChange={() => onCheckboxChange(checkboxText3)}/>
            <label>3</label>
          </div>
        </div>

        <div className="step-input">
          <label>Radio группа</label>
          <div className="checkbox-input">
            <input type="radio"
            value={radioValue1}
            checked={radio == radioValue1}
            {...register("radio")}
            onChange={() => onRadioChange(radioValue1)} />
            <label>{radioValue1}</label>
          </div>
          <div className="checkbox-input">
          <input type="radio"
            value={radioValue2}
            checked={radio == radioValue2}
            {...register("radio")}
            onChange={() => onRadioChange(radioValue2)} />
            <label>{radioValue2}</label>
          </div>
          <div className="checkbox-input">
          <input type="radio"
            value={radioValue3}
            checked={radio == radioValue3}
            {...register("radio")}
            onChange={() => onRadioChange(radioValue3)} />
            <label>{radioValue3}</label>
          </div>
        </div>

        <div className="step-buttons">
          <button onClick={goBack} type="button" className="button-back">
            Назад
          </button>
          <button type="submit" className="button-next">
            Далее
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
