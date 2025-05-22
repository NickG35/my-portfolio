import React, { useState, useEffect, useRef } from "react";
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Services from './Services';
import Experience from './Experience';
import Contact from './Contact';

const sections = [
    { id: "home", label: "Home", component: <Home /> },
    { id: "projects", label: "Projects", component: <Projects /> },
    { id: "skills", label: "Skills", component: <Skills /> },
    { id: "services", label: "Services", component: <Services /> },
    { id: "experience", label: "Experience", component: <Experience /> },
    { id: "contact", label: "Contact", component: <Contact /> },
];

export default function ScrollSpy() {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRefs = useRef([]);


    const navClick = (index) => {
        sectionRefs.current[index].scrollIntoView({behavior: "smooth"})
    };

    useEffect(() => {
        const observerSettings = {
            root: null, 
            rootMargin: "0px", 
            threshold: 0.6,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = sectionRefs.current.findIndex(
                        (el) => el == entry.target
                    );
                    if (index !== -1) setActiveTab(index);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerSettings);

        sectionRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();

}, []);

    return (
        <div>
            <nav className="section-nav">
                {sections.map((section, index) => (
                    <button className="button-nav" key={section.id} onClick={() => navClick(index)} style={{
                        fontWeight: activeTab === index ? "bold": "normal",
                        padding: "0.5rem 1 rem",
                        cursor: "pointer",
                    }}
                    >
                        {section.label}
                    </button>
                ))}
            </nav>
            <div>
                {sections.map((section, index) => (
                    <div key={section.id} ref={(el) => (sectionRefs.current[index] = el)}>
                        {section.component} 
                    </div>
                ))}
            </div>
        </div>
    );
}
