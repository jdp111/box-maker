import './Box.css'

function Box({color, width, height,id}) {
    const styleString = `color:${color}; width:${width}; height:${height}`
    
    return <div className = 'box' style = {{backgroundColor:color, width:width+'px', height:height + 'px'}}>{id}</div>
}

export default Box