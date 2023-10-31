import photo from './cinema3.jpg';

function Contact() {
    return (
        <div>
            <div className='cont'>
                <h2>Contact</h2>
            </div>
            <div>
                <img className='homePhoto' src={photo} alt="cinema" width="100%" />
            </div>
        </div>
    )
}

export default Contact;