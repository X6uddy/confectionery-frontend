import img from './error.gif'

const ErrorMessage = () => {
    return (
        <img style = {{display: 'block', width: '300px', height: '280px', objectFit: 'contain', margin: '0 auto', 'marginTop': '50px'}} src={img} alt='error'/>
    )
}
export default ErrorMessage;