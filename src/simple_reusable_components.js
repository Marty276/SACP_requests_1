export const request_object_model = {
    "address" : "",
    "work_data" : {request_details : {}},
    "worker_name" : "",
    "status" : "requested",
    "dates" : {request_date : ""},
    "totals" : {}
}

export const Logo_and_text = ({text}) => {
    return <div className="logo_and_text_cont">
        <img src="logo.svg"/>
        <h1>SACP</h1>
        <p>{text}</p>
    </div>
}
export const SACP_title = () => {
    return <div className="title_cont">
    <h1>SACP</h1>
</div>
}

export const Help_footer = () => {
    return <div className="help_footer">
        <p>¿Necesita ayuda?</p>
        <p><a href="#">contáctese con nosotros</a></p>
    </div>
}

export const Home_footer = ({ go_to_1, request_object }) => {
    return <button onClick={()=>{go_to_1(request_object)}} className="home_footer" id="home_footer" type="button"> volver a la pantalla de inicio</button>
}