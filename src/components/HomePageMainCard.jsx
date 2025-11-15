import './HomePageMainCard.css';

function HomePageMainCard() {
    return (
        <div className='main-card-container mt-3'>
            <img src="/img/free-essentials.jpeg" alt="Woman shopping" className='main-card-img image-border'></img>
            <div className='main-card-text'>
                <h1>Free Essentials.<br></br>Powered by community.</h1>
                <p>Donate what you're not using.<br></br>Request what you need.<br></br>Everyone wins.</p>
            </div>
        </div>
    );
};

export default HomePageMainCard;