import "./topbar.scss"
import {GitHub,LinkedIn,Mail,Description} from "@material-ui/icons"
// using sass - materialize icons
export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
          <div className="wrapper">
              <div className="left">

              <a href="#intro" className="logo">Todd Granados</a>
                    
                   
                    
                    <div className="itemContainer"> 
                    <Mail className="icon"/>
                    <span>Toddgranados@gmail.com</span>
                    </div>
                   
                    <a href="https://github.com/Thetodd7" rel="noreferrer" target="_blank">
                    <div className="itemContainer"> 
                    <GitHub className="icon"/>
                    <span>GitHub</span>
                    </div>
                    </a>

                    <a href="https://www.linkedin.com/in/todd-granados-26a09b95/" rel="noreferrer" target="_blank" >
                    <div className="itemContainer"> 
                    <LinkedIn className="icon"/>
                    <span>LinkedIn</span>
                    </div>
                    </a>


                    <a href=" " >
                    <div className="itemContainer"> 
                    <Description className="icon"/>
                    <span>Resume</span>
                    </div>
                    </a>
              </div>
              <div className="right">
                  <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>


                  </div>


              </div>
          </div>
        </div>
    )
}
