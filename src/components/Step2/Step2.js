import React, { useState } from "react";
import "./Step2.css";
import stepper2 from "../../assets/images/stepper2.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useData } from "../../DataContext";
import Advantages from "./Adavantages/Advantages";
import Checkbox, {
  checkboxText1,
  checkboxText2,
  checkboxText3,
} from "./Checkbox/Checkbox";
import Radio from "./Radio/Radio";

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

  

  const goBack = () => {
    setValues({ advantages, radio, checkbox });
    navigate("/step1");
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
    setRadio(value);
  };

  const [checkbox, setCheckbox] = useState(globalData.checkbox || {});
  const onCheckboxChange = (checkboxNumber) => {
    setCheckbox({ ...checkbox, [checkboxNumber]: !checkbox[checkboxNumber] });
  };


  const onSubmit = (data) => {
    setValues({ ...data, advantages, checkbox });
    navigate("/step3");
  };
 

  return (
    <div className="background background-step2">
      <div className="stepper">
        <img src={stepper2} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="step-form">
        <div className="step-input">
          <span className="adv-label">Преимущества</span>
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

        <Checkbox
          onChange={onCheckboxChange}
          checkboxValues={checkbox}
          register={register}
        />

        <Radio
          onChange={onRadioChange}
          actualValue={radio}
          register={register}
        />

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
