import React,{useState,useEffect} from 'react'
import './Nav.css'

function Nav() {

    const[show, handleShow] = useState(false);

    const transitionNavBar=()=>{
        if(window.scrollY>100){
            handleShow(true)
        }else {
            handleShow(false)
        }

    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar)
        return () => window.removeEventListener('scroll',transitionNavBar) // cleaning up after running transition nav bar
    },[])



    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
            <img className='nav_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix logo" />
            <img className='nav_avatar' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="avatar" />
            {/* <h1>this is a nav</h1> */}
            
            </div>
        </div>
    )
}

export default Nav

