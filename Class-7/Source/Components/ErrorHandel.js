import { useRouteError } from "react-router-dom";

const ErrorHandel = () => {
    const error = useRouteError();
    
return (
    <>
    <h3>Opps !!!!</h3>
    <h3>{error?.status} {error?.statusText} </h3>
    </>
)

}

export default ErrorHandel;