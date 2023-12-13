import React from "react";
import Advantage from "./Advantage";

const Advantages = (props) => {
    return (
        <div>
            {props.advantages.map(
                (adv,index) => <Advantage
                    name={props.generateAdvantageName(index)}
                    key={index} 
                    id={index}
                    removeAdvantage={props.removeAdvantage}
                    onTextChange={props.onTextChange}
                    advantage={adv}/>
                )}
                <button type="button" onClick={props.addAdvantage} >+</button>
        </div>
    )
}
export default Advantages;