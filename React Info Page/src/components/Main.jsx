import React from "react"

export default function Main() {
    return (
        <main>
            <header class="intro">
                <h1> Dhruv Rawat </h1>
                <h3> UX Developer</h3>
                <a href="" className="btn btn-light">
                    <span className="fa fa-envelope"></span>Email</a>
                <a href="" className="btn btn-accent">
                    <span className="fa fa-linkedin"></span>Linkedin</a>
            </header>
            <section class="about">
                <h2>About</h2>
                <p className="About">
                    I am a UX Developer having prior working experience in both designing sleek and modern designs meant 
                    for humans, and then implementing them in via tech in real life having prior. Being in this unique 
                    position allows me to be in the intersection of design and tech.
                </p>
            </section>
            <section class="interests">
                <h2> Interests </h2>
                <p className="Interests">
                    I love to sketch character portraits and various landscapes on my tablet. I also love to slow travel
                    and with it comes my interest of clicking my perfect landscapes of both cities and natures alike.
                    I am learning to play some drums as well. I'm also a avid gamer and love to be on both the developing 
                    and playing end of it.
                </p>
            </section>
        </main>
    )
}