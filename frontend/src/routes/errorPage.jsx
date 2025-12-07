import { isRouteErrorResponse, useRouteError } from "react-router"



export default function ErrorPage() {
    const error = useRouteError()

    return (
        <div className="min-h-screen min-w-screen">
            <h1 className="text-4xl place-center font-extrabold text-black">
                {isRouteErrorResponse(error) ? 
                    `Error ${error.status}: ${error.statusText || error.data}` :
                    "Unexpected error occured while loading the page."
                }
            </h1>
        </div>
    )    
}