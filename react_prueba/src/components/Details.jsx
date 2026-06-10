import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Details = ({users}) => {
    const user = users.find((u) => u.username === username)
    const [searchParams] = useSearchParams()
    
    if (!user) return <Typography sx={{ m: 4 }}>Usuario no encontrado.</Typography>

    return(
        <div>Details
            <p>valor de la variable username: {username}</p>
            <p>valor del paramtro react = {searchParams.get("react")}</p>
        </div>
    )
}

export default Details