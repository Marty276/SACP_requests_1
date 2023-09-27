export const Work_data_mini_form = ({ n }) => {
    return <div className="work_data_mini_form" key={"work_data_mini_form_" + n} id={"work_data_mini_form_" + n}>
        <input type="text" placeholder="trabajo" className="work_name_input" id={"work_name_input_" + n} max={200}/>
        <input type="number" placeholder="cantidad" className="work_units_input" id={"work_units_input_" + n} />
        <input type="number" placeholder="precio" className="work_price_input" id={"work_price_input_" + n} />
        <p className="optional_label">(opcional)</p>
    </div>
}