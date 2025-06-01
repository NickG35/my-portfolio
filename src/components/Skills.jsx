import pythonLogo from "../assets/python.png"
import jsLogo from "../assets/js.png"
import htmlLogo from "../assets/html.png"
import cssLogo from "../assets/css.png"
import reactLogo from "../assets/react.png"
import flaskLogo from "../assets/flask.png"
import djangoLogo from "../assets/django.png"
import bootstrapLogo from "../assets/bootstrap.png"
import gitLogo from "../assets/git.png"
import githubLogo from "../assets/github.png"
import vscodeLogo from "../assets/vscode.png"
import restapiLogo from "../assets/restapi.png"

const languageStack = [
    {name: 'Python', logo: pythonLogo},
    {name: 'Javascript', logo: jsLogo},
    {name: 'HTML', logo: htmlLogo},
    {name: 'CSS', logo: cssLogo},
];

const frameworkStack = [
    {name: 'React', logo: reactLogo},
    {name: 'Flask', logo: flaskLogo},
    {name: 'Django', logo: djangoLogo},
    {name: 'Bootstrap', logo: bootstrapLogo},
    {name: 'Git', logo: gitLogo},
    {name: 'GitHub', logo: githubLogo},
    {name: 'Vscode', logo: vscodeLogo},
    {name: 'RestApi', logo: restapiLogo},
]


function Skills(){
    return(
        <section className="portfolio-section">
            <h2>My Skills</h2>
            <h3>Technical Languages</h3>
            <div className="skillRow">
                {languageStack.map(({name, logo}) => (
                    <div className="language-div">
                        <img className="language-logo" src={logo} alt={`${name} logo`}></img>
                    </div>
                ))}
            </div>
            <h3>Frameworks and Technologies</h3>
            <div className="skillRow">
                {frameworkStack.map(({name, logo}) => (
                    <div className="language-div">
                        <img className="language-logo" src={logo} alt={`${name} logo`}></img>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Skills;