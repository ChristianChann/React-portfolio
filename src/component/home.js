import "../helperCss/helper.css"
import { Icon } from '@iconify/react';

function Home () {
    return (
        <div className="backgroundImg">
             <div className="flex justify-center">
                <div>
                    
                    <h1 className="text-white font-bold text-7xl tracking-widest nameDiv">CHANN</h1>

                    <h3 className="text-white dev">REACT DEVELOPER</h3>

                    <div className="text-white code"><p>-CODER-</p></div>

                    <p className="text-white text-xs start">STARTED FROM 2021</p>

                </div>
             </div>

             <div><Icon icon="entypo-social:icloud" color="white" className="fb2Icon"/></div>

             <div><Icon icon="entypo-social:google" color="white" className="fb3Icon"/></div>

             <div><Icon icon="devicon:facebook" className="fbIcon"/></div>
        </div>
    )
}

export default Home;