import myImage from "../assets/profile_pic.JPEG"
function Home(){
    return (
        <section className="portfolio-section">
            <div className="profile-container">
                <h1 className="header">Full Stack Developer</h1>
                <div className='profile-display'>
                    <div><h1 className="header">Nicholas</h1></div>
                    <div className="image-holder">
                        <img src={myImage} className="profile_pic"/> 
                    </div>
                    <div><h1 className="header">George</h1></div>
                </div>
                <div className="contact-info">
                    <button>Resume</button>
                    <img className="contact-links" src="src/assets/linkedin-logo-linkedin-icon-transparent-free-png.webp"></img>
                    <img id="mail-link" className="contact-links" src="src/assets/gmail-new.png"></img>
                </div>
                <div className="bio">
                    <p>Full Stack Developer based in Philadelphia with 2.5+ years of hands-on experience building modern web apps. Self-taught, driven, and ready to contribute to real-world teams while continuing to grow.</p>
                </div>
            </div>
        </section>
    );
}
export default Home;