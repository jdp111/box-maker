import { useState } from "react"


function NewBoxForm({addItem}) {
    const [formData, setFormData] = useState({color:'',height:'', width:''})
    const [autoIncrement,setAutoIncrement] = useState(3)
    const handleUpdate = (evt) => {
        const {name , value} = evt.target
        setFormData(currData => ({
            ...currData, 
            [name]:value, 
            id: autoIncrement})
        )
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        setAutoIncrement(() => autoIncrement + 1)
        addItem(formData)
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor = "color">color: </label>
        <input onChange = {handleUpdate} id = "color" name = "color" type = "text" value = {formData.color} placeholder = "ex: 'blue'"></input>
        <br></br>
        <label htmlFor = "color">width (px): </label>
        <input onChange = {handleUpdate} id = "width" name = "width" type = "number" value = {formData.width} placeholder = "Ex: 30"></input>
        <br></br>
        <label htmlFor = "color">height (px): </label>
        <input onChange = {handleUpdate} id = "height" name = "height" type = "number" value = {formData.height} placeholder = "ex: '20'"></input>
        <br></br>
        <input type="submit"></input>
    </form>
}

export default NewBoxForm