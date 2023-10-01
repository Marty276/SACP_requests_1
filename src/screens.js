import { Logo_and_text, Help_footer, SACP_title, Home_footer } from './simple_reusable_components';
import { Work_data_mini_form, Work_data_mini_list } from './work_data_mini_form'
import { useState, useEffect } from 'react';

export const Screen_1 = ({ request_object, go_to_2 }) => {

    function submit_name(){
        if (request_object.worker_name != ""){
            go_to_2(request_object);
        }
    }
    
    return <>
        <Logo_and_text text = "Registra tu trabajo para Creative Construction & Remodeling"/>
        
        <div className="name_input_box">
            <p>Escriba su nombre a continuación:</p>
            <input defaultValue={request_object.worker_name} id="name_input" type='text' maxLength={200} placeholder='Nombre...' onChange={(e)=>{request_object.worker_name = e.target.value}}/>
            <button type='button' id="submit_name_button" className='continue_button' onClick={()=>{submit_name()}}>Continuar <img/></button>
        </div>

        <Help_footer/>
    </>
}



export const Screen_2 = ({ request_object, go_to_1, go_to_3 }) => {
    
    let mfi_list = [0];
    let work_data;
    
    if (request_object.work_data){

        mfi_list = new Array;
        work_data = Object.entries(request_object.work_data);

        for (let i = 0, l = Object.entries(request_object.work_data).length; i < l;i++){
            mfi_list.push(i);
        }

    }


    const [mini_forms, setMini_forms] = useState(mfi_list.length > 0 ? mfi_list : [0]);

    function add_mini_form(){
        setMini_forms(mini_forms.concat([mini_forms.length]));
    }

    function submit_work_data(){

        let work_data = new Object;
        let address = document.getElementById("address_input").value;

        for(let i = 0; i < mini_forms.length; i++){
            
            let str_i = i.toString();

            let name = document.getElementById("work_name_input_" + str_i).value;
            let units = parseFloat(document.getElementById("work_units_input_" + str_i).value);
            let price = parseFloat(document.getElementById("work_price_input_" + str_i).value);

            if(name){
                work_data[name] = [units ? units : 1, price ? price : 0];
            }

        }

        if(address && Object.entries(work_data).length != 0){
            request_object.address = address;
            request_object.work_data = work_data;
            go_to_3(request_object);
        }

    }
    
    return <>
        <SACP_title/>

        <div className='work_data_input_box'>
            <p className='address_label'>Dirección del trabajo:</p>
            <input id='address_input' type='text' maxLength={200} className='address_input' placeholder='Escribe aquí...' defaultValue={request_object.address}/>

            <p className='work_data_label'>ingrese la información del trabajo en los siguientes campos</p>

            
            {mini_forms.map((id) => {
                return <Work_data_mini_form 
                    n = {id}
                    key = {id}
                    work_name={work_data[id] ? work_data[id][0] : ""}
                    work_units={work_data[id] ? work_data[id][1][0] : ""}
                    work_price={work_data[id] ? work_data[id][1][1] : ""}
                />
            })}

            <button className='add_new' onClick={()=>add_mini_form()}>Agregar nuevo <img/></button>

            <button id="submit_work_data_button" className='continue_button' onClick={()=>submit_work_data()}>Continuar <img/></button>
            
            

        </div>

        <Home_footer request_object={request_object} go_to_1={go_to_1}/>
        
        <Help_footer/>
    </>
}

export const Screen_3 = ({ request_object, go_to_2, go_to_4 }) => {
    return <>
        <SACP_title/>

        <div className='work_data_checking_list_box'>

            <p className='work_data_label'>confirme que la información es correcta</p>
            
            <div className='work_data_mini_lists'> 

                <h3>{request_object.address}</h3>

                {Object.entries(request_object.work_data).map((work) => {
                    return <Work_data_mini_list key={work[0]} work_name={work[0]} work_units={work[1][0]} work_price={work[1][1]}/>
                })}
            
            </div>

            <p className='is_all_ok_label'>¿Todo es correcto?</p>

            <button id="confirm_and_submit_work_data_button" className='continue_button' onClick={()=>go_to_4(request_object)}>Enviar <img/></button>

            <button className='go_back_and_correct' onClick={()=>go_to_2(request_object)}><img/> Volver y corregir</button>

        </div>

        <Help_footer/>
    </>
}

export const Screen_4 = ({ request_object, go_to_1 }) => {
    
    const [response, setResponse] = useState("");

    console.log(request_object);
    useEffect(()=>{
        fetch("https://sacp-api-v2.onrender.com/api/requests/", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(request_object)
        })
        .then(data => {
            setResponse(data.status);
        })
        .catch(error => {
            console.log(error)
        })
    })

    let request_object_model = {
        address : "",
        work_data : {},
        worker_name : ""
    }

    return <>
        <Logo_and_text text={
            response == ""
            ? "Subiendo registro..."
            : response == 201
            ? "El registro se ha enviado con éxito"
            : "Ha ocurrido un error"
        }/>

        <div className="name_input_box">
            {
                response == ""
                ? <p>Cargando</p>
                : <>
                    <p>¿Qué desea hacer?</p>
                    <button type='button' id="go_to_1" className='continue_button' onClick={()=>{go_to_1(request_object_model)}}>Volver al inicio</button>
                    <button type='button' id="whatsapp_button" className='whatsapp_button'>Enviar confirmación <br/>a whatsapp</button>
                </>
            }
        </div>

        <Help_footer/>
    </>
}