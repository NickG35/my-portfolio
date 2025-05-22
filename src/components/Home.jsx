import myImage from "../assets/profile_pic.JPEG"
function Home(){
    return (
        <section className="portfolio-section">
            <h1>Full Stack Developer</h1>
            <div className="image-holder">
                <img src={myImage} className="profile_pic"/> 
            </div>
            <h1>Nicholas George</h1>
            <p>Full Stack Developer based in Philadelphia with 2.5+ years of hands-on experience building modern web apps. Self-taught, driven, and ready to contribute to real-world teams while continuing to grow.</p>
            <button>Download Resume</button>
        </section>
    );
}
export default Home;