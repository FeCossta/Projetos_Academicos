import { useState } from "react"

import "./ImcCalc.css"


import Button from "./Button"


const ImcCalc = ({calcImc}) => {
    const [height,setHeight] = useState("");
    const [weigth,setWeigth] = useState("");

    const clearForm = (e) => {
        e.preventDefault();

        setHeight("");
        setWeigth("");

    };

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e) => {
        const updatedValue = validDigits(e.target.value);

        setHeight(updatedValue);
    }

    const handleWeigthChange = (e) => {
        const updatedValue = validDigits(e.target.value)

        setWeigth(updatedValue);
    }

    return (
        <div id="calc-container">
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height">Altura: </label>
                        <input type="text" name="height" id="height" placeholder="Exemplo 1,80"  onChange={(e) => handleHeightChange(e)} value={height}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="weigth">Peso: </label>
                        <input type="text" name="weigth" id="weigth" placeholder="Exemplo 80,2" onChange={(e) => handleWeigthChange(e)} value={weigth} />
                    </div>
                </div>
                <div className="action-control">
                
                    <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weigth)}/>
                    <Button id="clear-btn" text="Limpar" action={clearForm}/>
                    
                </div>
            </form>

        </div>
    )
}

export default ImcCalc