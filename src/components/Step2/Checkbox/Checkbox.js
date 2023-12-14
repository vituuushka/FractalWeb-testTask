export const [checkboxText1, checkboxText2, checkboxText3] = ["1", "2", "3"];

const Checkbox = ({ onChange, register, checkboxValues}) => {
  return (
    <div className="step-input">
      <label>Checkbox группа</label>
      <div className="checkbox-input">
        <input
          type="checkbox"
          value={checkboxText1}
          {...register("checkbox1")}
          checked={checkboxValues[checkboxText1]}
          onChange={() => onChange(checkboxText1)}
        />
        <label>1</label>
      </div>
      <div className="checkbox-input">
        <input
          type="checkbox"
          value={checkboxText2}
          {...register("checkbox2")}
          checked={checkboxValues[checkboxText2]}
          onChange={() => onChange(checkboxText2)}
        />
        <label>2</label>
      </div>
      <div className="checkbox-input">
        <input
          type="checkbox"
          value={checkboxText3}
          {...register("checkbox3")}
          checked={checkboxValues[checkboxText3]}
          onChange={() => onChange(checkboxText3)}
        />
        <label>3</label>
      </div>
    </div>
  );
};

export default Checkbox;
