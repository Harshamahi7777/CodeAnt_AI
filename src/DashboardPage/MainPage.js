import React from 'react';
import  { useState } from 'react';
import{Link} from 'react-router-dom'
import ButtonComponent from './ButtonComponent';


function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);}


    return (
        <div className='container-fluid'>
          <div className='row'>
          <div
        className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
            <div className={`col-2 ${isMenuOpen?'open':''}`} style={{background:"white",borderRight:"1px solid #e9eaeb",overflow:"hidden",width:"100wh",height:"100vh",justifyContent:"space-between"}}>
              <div className='navigation mt-2' style={{width:"100%",height:"270px",}}>
                <div className='header ' style={{width:"100%",height:"80px",  }}>
                  <div className='frame-9'style={{display:"flex"}}>
                <img src="/imports/Subtract.png"  style={{ width: "20px", height: "25px",marginLeft:"3em"}} alt="Subtract" />
                <p style={{fontSize:"15px",paddingLeft:"2px",marginLeft:"2px",marginTop:"2.5px",fontWeight:"600",color:"#181d27"}}>CodeAnt AI</p></div>
                <form className='dropdown'>
                  <select style={{width:"11em",height:"2em",marginLeft:"0.75em",borderRadius:"0.5em",border:"1px solid #d7d5da"}}>
                <option value="volvo">Harsha_Satya_Sri</option>
                <option value="saab">Renukeswar</option>
                <option value="opel">Mahesh</option>
                <option value="audi">Bhuvan</option>
                </select>
                </form>
                
                </div>
                <div className='navlinks mt-2' style={{width:"100%",height:"12em",}}>
                  <ButtonComponent/>
                </div>

              </div>
              <div className='footer ' style={{width:"100%",height:"40px",marginTop:"13em"}}>
                <Link className='support'style={{display:"flex",textDecoration:"none"}}>
                  <img src='/imports/phone.png' style={{width:"15px",height:"15px",marginLeft:"3em",marginTop:"0.5em"}}></img>
                  <p style={{fontSize:"13px", marginLeft:"1em",marginTop:"0.25em",color:"black"}}> support</p>
                </Link>
                <Link className='logout' style={{display:"flex",textDecoration:"none"}}>
                <img src='/imports/sign-out.png' style={{width:"15px",height:"15px",marginLeft:"3em",marginTop:""}}></img>
                <p style={{fontSize:"13px", marginLeft:"1em",color:"black"}}> logout</p>
                </Link>
              </div>



            </div>
            <div className='col'>
              <div className='frame989' style={{width:"1000px",height:"520px",border:"1px solid #e9eaeb",position:"fixed",marginTop:"1em",marginLeft:"1.5em",borderRadius:"0.25em",background:"#fafafa",}}>
                <div  className='header' style={{width:"100%", height:"100px",borderBottom:"1px solid #e9eaeb"}}>
                  <div className='frame990'style={{width:"95%",height:"3.5em",marginTop:"0.5em",marginLeft:"1.5em",display:"flex"}}>

                  <div className='date-text ' style={{width:"70%"}}>
                    <p  style={{fontSize:"25px",fontWeight:"500",color:"#181d27",fontFamily:"Inter"}}>Repositories</p>
                    <p style={{fontSize:"14px",fontWeight:"500",color:"#181d27",marginTop:"-1.5em",fontFamily:"Inter"}}>33 total repositories</p>
                  </div>
                  <div className='fram1040' style={{width:"30%",marginLeft:"1.5em"}}>
                    <button className='refresh' style={{width:"127px",height:"40px",border:"1px solid #d7d6da",borderRadius:"12px",fontSize:"1em"}}>Refresh All</button>
                    <button className='add_repo'style={{width:"127px",height:"40px",border:"1px solid #d7d6da",borderRadius:"12px",marginLeft:"1.25em",background:"#1570EF",color:"white",fontSize:"0.75em"}}>Add Repository</button>

                  </div>




                  </div>
                  <div className='button' style={{width:"15em",height:"35px",marginLeft:"1.5em",marginTop:"0em"}}>
                    <form>
                      
                  <input class="form-control mr-sm-2" type="search" placeholder="Search Repositories" aria-label="Search" style={{border:"1px solid #d5d7da",paddingLeft:"3em"}}></input>
                  <img
                      src="/imports/search.png" 
                      alt="Search Icon"
                      style={{
                        position: "absolute",
                        left: "3em", 
                        top: "5.3em",
                        transform: "translateY(-50%)",
                        width: "16px",
                        height: "16px",
                        pointerEvents: "none", 
                      }}
                       />                  
                  </form>
                  </div>
                </div>
                <div  className='main'>
                  <div style={{width:"100%",height:"60px",borderBottom:"1px solid #d5d7da"}}>
                    <div style={{width:"100%",height:"2.5em"}}>
                      <div style={{display:"flex"}}>
                      <h6 style={{marginLeft:"1.75em"}}>Design-System</h6>
                      <img src='/imports/public.png' style={{width:"2em",height:"1em",marginTop:"0.25em",marginLeft:"1em"}}></img>
                      </div>
                      <div className='repo'style={{display:"flex"}}>
                        <div style={{display:"flex"}}>
                        <p style={{marginLeft:"2em"}}>React</p>
                        <img src='/imports/Ellipse 1 (1).png'style={{width:"8px",height:"8px",marginLeft:"1em",marginTop:"0.68em"}}></img>
                        </div>
                        <div style={{display:"flex"}}>
                        <img src='/imports/database.png'style={{width:"8px",height:"8px",marginLeft:"3em",marginTop:"0.68em"}}></img>
                        <p style={{marginLeft:"0.5em"}}>7320 KB</p>
                        
                        </div>
                        <div style={{display:"flex"}}>
                        <p style={{marginLeft:"2em"}}>Updated 1 day ago</p>

                        </div>
                        
                      </div>
                    </div>

                      

                  </div>
                  <div style={{width:"100%",height:"60px",borderBottom:"1px solid #d5d7da"}}>
                    <div style={{width:"100%",height:"2.5em"}}>
                      <div style={{display:"flex"}}>
                      <h6 style={{marginLeft:"1.75em"}}>Codeant-ci-app</h6>
                      <img src='/imports/private.png' style={{width:"2em",height:"1em",marginTop:"0.25em",marginLeft:"1em"}}></img>
                      </div>
                      <div className='repo'style={{display:"flex"}}>
                        <div style={{display:"flex"}}>
                        <p style={{marginLeft:"2em"}}>Javascript</p>
                        <img src='/imports/Ellipse 1 (1).png'style={{width:"8px",height:"8px",marginLeft:"1em",marginTop:"0.68em"}}></img>
                        </div>
                        <div style={{display:"flex"}}>
                        <img src='/imports/database.png'style={{width:"8px",height:"8px",marginLeft:"3em",marginTop:"0.68em"}}></img>
                        <p style={{marginLeft:"0.5em"}}>5871 KB</p>
                        
                        </div>
                        <div style={{display:"flex"}}>
                        <p style={{marginLeft:"2em"}}>Updated 2 day ago</p>

                        </div>
                        
                      </div>
                    </div>

                      

                  </div>
                  <div style={{width:"100%",height:"60px",borderBottom:"1px solid #d5d7da"}}>
                    <div style={{width:"100%",height:"2.5em"}}>
                      <div style={{display:"flex"}}>
                      <h6 style={{marginLeft:"1.75em"}}>analytics-dashboard</h6>
                      <img src='/imports/private.png' style={{width:"2em",height:"1em",marginTop:"0.25em",marginLeft:"1em"}}></img>
                      </div>
                      <div className='repo'style={{display:"flex"}}>
                        <div style={{display:"flex"}}>
                        <p style={{marginLeft:"2em"}}>python</p>
                        <img src='/imports/Ellipse 1 (1).png'style={{width:"8px",height:"8px",marginLeft:"1em",marginTop:"0.68em"}}></img>
                        </div>
                        <div style={{display:"flex"}}>
                        <img src='/imports/database.png'style={{width:"8px",height:"8px",marginLeft:"3em",marginTop:"0.68em"}}></img>
                        <p style={{marginLeft:"0.5em"}}>4521 KB</p>
                        
                        </div>
                        <div style={{display:"flex"}}>
                        <p style={{marginLeft:"2em"}}>Updated 5 days ago</p>

                        </div>
                        
                      </div>
                    </div>

                      

                  </div>
                  <div style={{width:"100%",height:"60px",borderBottom:"1px solid #d5d7da"}}>
                    <div style={{width:"100%",height:"2.5em"}}>
                      <div style={{display:"flex"}}>
                      <h6 style={{marginLeft:"1.75em"}}>mobile-app</h6>
                      <img src='/imports/public.png' style={{width:"2em",height:"1em",marginTop:"0.25em",marginLeft:"1em"}}></img>
                      </div>
                      <div className='repo'style={{display:"flex"}}>
                        <div style={{display:"flex"}}>
                        <p style={{marginLeft:"2em"}}>swift</p>
                        <img src='/imports/Ellipse 1 (1).png'style={{width:"8px",height:"8px",marginLeft:"1em",marginTop:"0.68em"}}></img>
                        </div>
                        <div style={{display:"flex"}}>
                        <img src='/imports/database.png'style={{width:"8px",height:"8px",marginLeft:"3em",marginTop:"0.68em"}}></img>
                        <p style={{marginLeft:"0.5em"}}>3096 KB</p>
                        
                        </div>
                        <div style={{display:"flex"}}>
                        <p style={{marginLeft:"2em"}}>Updated 3 days ago</p>

                        </div>
                        
                      </div>
                    </div>

                      

                  </div>
                  <div style={{width:"100%",height:"60px",borderBottom:"1px solid #d5d7da"}}>
                    <div style={{width:"100%",height:"2.5em"}}>
                      <div style={{display:"flex"}}>
                      <h6 style={{marginLeft:"1.75em"}}>e-commerce-platform</h6>
                      <img src='/imports/private.png' style={{width:"2em",height:"1em",marginTop:"0.25em",marginLeft:"1em"}}></img>
                      </div>
                      <div className='repo'style={{display:"flex"}}>
                        <div style={{display:"flex"}}>
                        <p style={{marginLeft:"2em"}}>Java</p>
                        <img src='/imports/Ellipse 1 (1).png'style={{width:"8px",height:"8px",marginLeft:"1em",marginTop:"0.68em"}}></img>
                        </div>
                        <div style={{display:"flex"}}>
                        <img src='/imports/database.png'style={{width:"8px",height:"8px",marginLeft:"3em",marginTop:"0.68em"}}></img>
                        <p style={{marginLeft:"0.5em"}}>6210 KB</p>
                        
                        </div>
                        <div style={{display:"flex"}}>
                        <p style={{marginLeft:"2em"}}>Updated 4 days ago</p>

                        </div>
                        
                      </div>
                    </div>

                      

                  </div>
                  <div style={{width:"100%",height:"60px",borderBottom:"1px solid #d5d7da"}}>
                    <div style={{width:"100%",height:"2.5em"}}>
                      <div style={{display:"flex"}}>
                      <h6 style={{marginLeft:"1.75em"}}>blog-website</h6>
                      <img src='/imports/public.png' style={{width:"2em",height:"1em",marginTop:"0.25em",marginLeft:"1em"}}></img>
                      </div>
                      <div className='repo'style={{display:"flex"}}>
                        <div style={{display:"flex"}}>
                        <p style={{marginLeft:"2em"}}>HTML/CSS</p>
                        <img src='/imports/Ellipse 1 (1).png'style={{width:"8px",height:"8px",marginLeft:"1em",marginTop:"0.68em"}}></img>
                        </div>
                        <div style={{display:"flex"}}>
                        <img src='/imports/database.png'style={{width:"8px",height:"8px",marginLeft:"3em",marginTop:"0.68em"}}></img>
                        <p style={{marginLeft:"0.5em"}}>1876 KB</p>
                        
                        </div>
                        <div style={{display:"flex"}}>
                        <p style={{marginLeft:"2em"}}>Updated 4 days ago</p>

                        </div>
                        
                      </div>
                    </div>

                      

                  </div>
                  <div style={{width:"100%",height:"60px"}}>
                    <div style={{width:"100%",height:"2.5em"}}>
                      <div style={{display:"flex"}}>
                      <h6 style={{marginLeft:"1.75em"}}>Social-network</h6>
                      <img src='/imports/private.png' style={{width:"2em",height:"1em",marginTop:"0.25em",marginLeft:"1em"}}></img>
                      </div>
                      <div className='repo'style={{display:"flex"}}>
                        <div style={{display:"flex"}}>
                        <p style={{marginLeft:"2em"}}>PHP</p>
                        <img src='/imports/Ellipse 1 (1).png'style={{width:"8px",height:"8px",marginLeft:"1em",marginTop:"0.68em"}}></img>
                        </div>
                        <div style={{display:"flex"}}>
                        <img src='/imports/database.png'style={{width:"8px",height:"8px",marginLeft:"3em",marginTop:"0.68em"}}></img>
                        <p style={{marginLeft:"0.5em"}}>5432 KB</p>
                        
                        </div>
                        <div style={{display:"flex"}}>
                        <p style={{marginLeft:"2em"}}>Updated 7 days ago</p>

                        </div>
                        
                      </div>
                    </div>

                      

                  </div>
                  
                  
                  

                </div>


              </div>


            </div>
          </div>
        </div>
      );
}

export default MainPage;