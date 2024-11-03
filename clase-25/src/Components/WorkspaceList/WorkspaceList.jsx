import React from 'react'
import WorkspaceItem from '../WorkspaceItem/WorkspaceItem'
import './WorkspaceList.css'

const WorkspaceList = ({workspaces}) => {
    let WorkspaceListJSX = workspaces.map(
        (workspace) => {
            return <WorkspaceItem
            title={workspace.title}
            id={workspace.id}
            miembros={workspace.miembros}
            img={workspace.img}
            key={workspace.id}/>
        }
    ) 
    return(
        <div><h1>Tus espacios de trabajo</h1>
            <div>{WorkspaceListJSX}</div>
            </div>
    )
}

export default WorkspaceList