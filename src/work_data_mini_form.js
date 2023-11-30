export const Work_data_mini_form = ({ n, work_name, work_units, work_price }) => {

    function clear_numeric_inputs(input){
        const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
        input.value = input.value.split("").filter((char, id) => numbers.includes(char) && (char !== "." || id === input.value.indexOf(char))).join("");
    }

    return <div className="work_data_mini_form">
        <input type="text" placeholder="trabajo" defaultValue={work_name} className="work_name_input" id={"work_name_input_" + n} max={200}/>
        <input inputMode="numeric" placeholder="cantidad" defaultValue={work_units} className="work_units_input" id={"work_units_input_" + n} onChange={(e)=>{clear_numeric_inputs(e.target)}}/>
        <input inputMode="numeric" placeholder="precio" defaultValue={work_price} className="work_price_input" id={"work_price_input_" + n} onChange={(e)=>{clear_numeric_inputs(e.target)}}/>
        <p className="optional_label">(opcional)</p>
    </div>
}

export const Work_data_mini_list = ({ work_name, work_units, work_price }) => {
    return <div className="work_data_mini_list">
        <h4>{work_name}</h4>
        <p>{work_units}{work_price ? " x $" + work_price.toString() : ""}</p>
    </div>
}