import { useRouteError } from "react-router-dom";

const ErrorHandel = () => {
    const error = useRouteError();
    
return (
    <div style={
        {
            position:"absolute",
            alignItems:"center",
            justifyContent:"center"
        }
    }>
    <h3>Opps !!!!</h3>
    <h3>{error?.status} {error?.statusText} </h3>

    <img src={"https://api.time.com/wp-content/uploads/2015/05/404-errors26.jpg"} style={{width:"40%",position:"relative",justifyContent:"center",alignItems:"center"}} alt="not found"/>
    </div>
)

}

export default ErrorHandel;