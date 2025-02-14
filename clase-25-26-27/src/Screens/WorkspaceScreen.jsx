import React from "react"
import { useParams } from "react-router-dom"

const WorkspaceScreen = () => {
    const {workspace_id} = useParams()
    // const workspace_id = params.workspace_id //les devolvera un objeto con los parametros de busqueda de esa url {workspace_id: "1"}
    
    const workspace_found = workspaces.find(
        (workpace) => {
            return workpace.id == workspace_id
        }
    )
    
    
    return (
        <div>
            <h1>Workspace con id {workspace_id}</h1>
        </div>
    )
}


const DummyComponent = () => {
    const params = useParams()
    console.log({params})
    return (
        <div>Hola</div>
    )
}
export default WorkspaceScreen