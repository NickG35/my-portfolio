import React, { useState, useEffect, useRef } from "react";
import Home from './Home';
import Projects from './Projects';

const sections = [
    { id: "home", label: "Home", component: <Home /> },
    { id: "projects", label: "Projects", component: <Projects /> },
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
                    <button key={section.id} onClick={() => navClick(index)} style={{
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
