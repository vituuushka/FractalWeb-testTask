
const [radioValue1, radioValue2, radioValue3] = ["1", "2", "3"];

const Radio = ({ register, onChange, actualValue }) => {
    return (
        <div className="step-input">
        <label>Radio группа</label>
        <div className="checkbox-input">
          <input
            type="radio"
            value={radioValue1}
            checked={actualValue == radioValue1}
            {...register("radio")}
            onChange={() => onChange(radioValue1)}
          />
          <label>{radioValue1}</label>
        </div>
        <div className="checkbox-input">
          <input
            type="radio"
            value={radioValue2}
            checked={actualValue == radioValue2}
            {...register("radio")}
            onChange={() => onChange(radioValue2)}
          />
          <label>{radioValue2}</label>
        </div>
        <div className="checkbox-input">
          <input
            type="radio"
            value={radioValue3}
            checked={actualValue == radioValue3}
            {...register("radio")}
            onChange={() => onChange(radioValue3)}
          />
          <label>{radioValue3}</label>
        </div>
      </div>
    )
}

export default Radio