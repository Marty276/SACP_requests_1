import { Logo_and_text, Help_footer, SACP_title, Home_footer } from './simple_reusable_components';
import { Work_data_mini_form } from './work_data_mini_form'
import { useState, useEffect } from 'react';

export const Screen_1 = ({ request_object, go_to_2 }) => {

    
    
    return <>
        <Logo_and_text text = "Registra tu trabajo para Creative Construction & Remodeling"/>
        
        <div className="name_input_box">
            <p>Escriba su nombre a continuación:</p>
            <input defaultValue={request_object.worker_name} id="name_input" type='text' maxLength={200} placeholder='Nombre...' onChange={(e)=>{request_object.worker_name = e.target.value}}/>
            <button type='button' id="submit_name_button" className='continue_button' onClick={()=>{go_to_2(request_object)}}>Continuar <img/></button>
        </div>

        <Help_footer/>
    </>
}

export const Screen_2 = ({ request_object, go_to_1, go_to_3 }) => {


    const [mini_forms, setMini_forms] = useState([0]);

    function add_mini_form(){
        setMini_forms(mini_forms.concat([mini_forms.length]));
    }

    return <>
        <SACP_title/>

        <div className='work_data_input_box'>
            <p className='address_label'>Dirección del trabajo:</p>
            <input id='address_input' type='text' maxLength={200} className='address_input' placeholder='Escribe aquí...'/>

            <p className='work_data_label'>ingrese la información del trabajo en los siguientes campos</p>
        
            {mini_forms.map((id) => {
                return <Work_data_mini_form n = {id} key = {id}/>
            })}

            <button className='add_new' onClick={()=>add_mini_form()}>Agregar nuevo <img/></button>

            <button id="submit_work_data_button" className='continue_button'>Continuar <img/></button>
            
            

        </div>

        <Home_footer request_object={request_object} go_to_1={go_to_1}/>
        
        <Help_footer/>
    </>
}