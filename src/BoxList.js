import './Boxlist.css'
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import React, { useState } from 'react';

function BoxList (){
    const [boxes, setBoxes] = useState([{color:"blue", width: 20, height:30,id:1},{color:"red", width: 30, height: 20,id:2}])

    const addBox = (formData) => {
        setBoxes(currboxes => [...currboxes, {...formData}])
    }

    return (
        <div className='boxlist'>
            <h4>Boxes:</h4>
            {boxes.map(({color,width,height, id}) => <Box color = {color} width = {width} height = {height} id = {id} key = {id}/>)}
            <NewBoxForm addItem = {addBox}/>
        </div>
    )
}

export default BoxList