export const Work_data_mini_form = ({ n, work_name, work_units, work_price }) => {
    return <div className="work_data_mini_form">
        <input type="text" placeholder="trabajo" defaultValue={work_name} className="work_name_input" id={"work_name_input_" + n} max={200}/>
        <input type="number" placeholder="cantidad" defaultValue={work_units} className="work_units_input" id={"work_units_input_" + n} />
        <input type="number" placeholder="precio" defaultValue={work_price} className="work_price_input" id={"work_price_input_" + n} />
        <p className="optional_label">(opcional)</p>
    </div>
}

export const Work_data_mini_list = ({ work_name, work_units, work_price }) => {
    return <div className="work_data_mini_list">
        <h4>{work_name}</h4>
        <p>{work_units}{work_price ? " x $" + work_price.toString() : ""}</p>
    </div>
}