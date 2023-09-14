import {Link} from 'react-router-dom';

import ErrorMessage from "../errorMessage/ErrorMessage";

const Page404 = () => {
    return (
        <div style={{'padding-bottom': '100px'}}>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '30px', 'marginTop': '20px'}} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;