import './ErrorCard.css'


const ErrorCard = () => {
    return (
        <div className='no-page-container'>
            <div className='arrow'>
            </div>
            <div className="no-page">
                <h1>404</h1>
                <p>The page does not exist. Check your spelling</p>
                <p>Click logo to go home</p>
            </div> 
        </div>
        
    )
}

export default ErrorCard;