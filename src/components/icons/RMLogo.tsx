const RMLogo = () => {
    return(
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="none" />
        {/* Left trinagles */}
        <polygon points="20,20 100,100 20,100" fill="#F5E6D8" />
        <polygon points="20,100 100,180 20,180" fill="#F5E6D8" />

        {/* Right trinagles */}
        <polygon points="110,20 110,90 200,180 280,180" fill="none" stroke="#F5E6D8" stroke-width="2" />
        <polygon points="110,100 110,180 190,180" fill="none" stroke="#F5E6D8" stroke-width="2" />

    </svg>
    );
};

export default RMLogo;