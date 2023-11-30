import { useState, useEffect } from 'react';
import { Screen_1, Screen_2, Screen_3, Screen_4 } from './screens';
import { request_object_model } from "./simple_reusable_components"


export const App = () => {

    const [screen_active, setScreen_active] = useState(<h1>loading</h1>);
    
    function go_to_1(info){
        setScreen_active(<Screen_1 go_to_2={go_to_2} request_object={info}/>);
    }
    function go_to_2(info){
        setScreen_active(<Screen_2 go_to_1={go_to_1} go_to_3={go_to_3} request_object={info}/>);
    }
    function go_to_3(info){
        setScreen_active(<Screen_3 go_to_4={go_to_4} go_to_2={go_to_2} request_object={info}/>);
    }
    function go_to_4(info){
        setScreen_active(<Screen_4 go_to_1={go_to_1} request_object={info}/>);
    }

    useEffect(()=>{
        setScreen_active(<Screen_1 go_to_2={go_to_2} request_object={request_object_model}/>);
        //setScreen_active(<Screen_3 go_to_1={go_to_1} go_to_2={go_to_2} request_object={request_object_model}/>);
    }, [])

    return <div className="app_container">
        {screen_active}
    </div>
}

