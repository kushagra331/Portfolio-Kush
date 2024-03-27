import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                This is Kushagra, <span>React Developer</span>
            </div>
            <div className="des">
            React.js developer with over three years of experience, I specialize in React, Redux,
            JavaScript, and frontend technologies. I am proficient in state management,
            performance optimization, and mentoring junior team members
                </div>
            
            <a href="/KushagraReactCV1.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/ava.jpg" alt="" />
                {/* <div className="info">
                    <div>Developer</div>
                    <div>India</div>
                    <div>03/12</div>
                    <div>Male</div>
                </div> */}
            </div>
        </div>
    </section>
    )
}

export default Home
