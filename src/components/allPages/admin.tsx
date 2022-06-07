import { FC, CSSProperties } from "react";


interface Props {}

const Admin: FC<Props> = (props) => {
    return (
        <div>
            <h1 style={title}> hello this is Admin page </h1>

        </div>
    )
}


const title: CSSProperties = {
    color: "white"
}




export default Admin 