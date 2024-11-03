import React from 'react'
import './WorkspaceItem.css'

const WorkspaceItem = ({img, title, miembros, id}) => {
    return(
    <div className="workspace-item">
        <img src={img}/>
        <h2>{title}</h2>
        <span>Hay {miembros.length} miembros</span>
  
    
    </div>
    )

}

export default WorkspaceItem