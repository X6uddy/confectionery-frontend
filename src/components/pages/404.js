import {Link} from 'react-router-dom';

import ErrorMessage from "../errorMessage/ErrorMessage";

const Page404 = () => {
    return (
        <div style={{'paddingBottom': '100px'}}>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '20px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '23px', 'marginTop': '20px'}} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;