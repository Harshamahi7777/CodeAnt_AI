import React from 'react';
import {Link} from 'react-router-dom'

function MainSignup() {
    return (
        <div className="container-fluid" style={{ overflow:"hidden",width:"100wh",height:"100vh"}}>
            <div className="row">
                {/* Left Half */}
                <div className="col-6 " style={{}}>
                <div className='group-1  '>
                        <div className="totalEmails  ">
                        <div className=' Frame120 '>
                        <img src="/imports/Subtract.png"  style={{ width: "28px", height: "31px",border:"0.15px" }} alt="Subtract" />
                        <div className='matter'  style={{width:"278px",height:"27px",fontSize:"16px",fontWeight:"700"}}>Ai to detect & autofix bad code</div> 
                            </div>
                            <hr className='line1'></hr>

                        <div className='frames' style={{display:"flex"}}>

                        <div className='frame111' style={{ width:"123px",height:"47px",top:"94.5px",paddingLeft:"20px"}}>
                            <p style={{width:"37px",height:"27px",fontSize:"18px",lineHeight:"27px",fontWeight:"700"}}>30k</p>
                            <p style={{width:"123px",height:"20px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",}}>Language support</p>
                        </div>   
                        <div className='frame112' style={{ width:"85px",height:"47px",top:"94.5px",paddingLeft:"70px"}}>
                            <p style={{width:"58px",height:"27px",fontSize:"18px",lineHeight:"27px",fontWeight:"700"}}>10k</p>
                            <p style={{width:"85px",height:"20px",fontSize:"14px",lineHeight:"20px",fontWeight:"400"}}>Developers</p>
                        </div> 
                        <div className='frame113' style={{ width:"85px",height:"47px",top:"94.5px",paddingLeft:"120px"}}>
                            <p style={{width:"58px",height:"27px",fontSize:"18px",lineHeight:"27px",fontWeight:"700"}}>100k</p>
                            <p style={{width:"85px",height:"20px",fontSize:"14px",lineHeight:"20px",fontWeight:"400"}}>Hours saved</p>
                        </div> 
                        </div>
                        
                        
                        
                        
                        </div>
                    <div className='card10' style={{width:"270px",height:"164px",marginTop:"-20px",marginLeft:"200px",borderRadius:"24px",background:"white",border:"1px solid #ddd",position:"relative"}}>
                        <div className='group8 '>
                        <div className='group6' style={{width:"108px",height:"60px",top:"88px",left:"33"}}>
                        <p style={{width:"125px",height:"20px",paddingTop:"100px",paddingLeft:"33px",lineHeight:"20px",fontSize:"14px",fontWeight:"700"}}>issues fixed</p>
                            <p style={{width:"108px",height:"32px",paddingTop:"18px",paddingLeft:"33px",fontWeight:"700",fontSize:"32px",lineHeight:"3px"}}>500k</p>
                           
                        </div>
                            <div className='wrap-text ' style={{position: "absolute", top: "30px", right: "45px",display: "flex", alignItems: "center"}} >
                            <img src="/imports/small right 2.png " alt="Small Right" style={{  position:"relative",width: "30px", height: "30px",marginTop:"-0.8em"}} />
                            <p  style={{fontSize:"14px",marginLeft:"2px",fontWeight:"700",color:"#0049c6"}}>14%</p>
                            </div>
                            <div><p style={{fontSize:"13px",fontWeight:"700px",paddingLeft:"170px"}}>This week</p></div>
                            
                            <div className='group4' style={{width:"56px",height:"56px",top:"15px",left:"32px"}}>
                                    <img src='/imports/Ellipse 1.png' style={{width:"56px",height:"56px",marginTop:"-7em",marginLeft:"3em"}}></img>
                                    <img src='/imports/ant-design_pie-chart-filled.png' style={{width:"28px",height:"28px",marginTop:"-10em",marginLeft:"4em"}}></img>
                            </div>
                        </div>

                    </div>

                    </div>
                    <div style={{position:"absolute",bottom:"0",right:"0"}}>
                        <img src='/imports/Subtract -1.png' style={{width:"250px",height:"300px",marginRight:"1000px",opacity:"40%"}}></img>
                    </div>
                </div>  
            
                
                {/* Right Half */}
                <div className="col-6" style={{ background:"#fafafa" }}>
                    <div className='calender mb-3' style={{width:"500px",height:"420px",border:"1px solid #e9eaeb ",margin:"3em 4em ",borderRadius:"0.5em"}}>

                    <div className='content mb-2' style={{width:"500px",height:"175px",padding:"18px 24px 36px 20px",borderBottom:"1px solid #d5d7da",boxSizing:"border-box",overflow:"hidden"}}>

                       <div className='date-time'style={{width:"375px",height:"80px",marginLeft:"2em"}}>
                        
                        <div className='header 'style={{width:"120px",height:"35px",border:"1px ",marginTop:"0.5em",marginLeft:"7em",display:"flex"}}>
                        <img src="/imports/Subtract.png"  style={{ width: "20px", height: "25px",marginLeft:"6px"}} alt="Subtract" />
                        <p style={{fontSize:"15px",paddingLeft:"2px",marginLeft:"2px",marginTop:"2.5px",fontWeight:"600",color:"#181d27"}}>CodeAnt AI</p>
                        </div>
                        <p style={{fontSize:"20px",fontWeight:"600",marginTop:"0.5em",marginLeft:"4em"}}>Welcome to Codeant AI</p>
                        
                        </div> 
                       <div className='horizontal-tabs mt-3 ' style={{width:"375px",height:"40px",border:"1px solid #e9eaeb",marginLeft:"2em", marginTop:" 0.5em",borderRadius:"0.25em"}}>
                       <Link to="/Saas"><button type="button" class="btn btn-primary btn"style={{width:"187.5px",fontWeight:"600"}} >SAAS</button></Link>
                       <Link to="/Self_hosted"><button type="button" class="btn btn-light"style={{width:"185px",borderRadius:"0px",fontWeight:"600"}}>Self Hosted</button></Link>



                       </div>


                    </div>
                    <div className='main ' style={{width:"500px",height:"225px",overflow:"visible",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>

                    <button type='button' className=' btn btn-light '  style={{width:"275px",height:"40px",border:"1px solid #d8dad5",marginLeft:"6em",display:"flex" ,justifyContent:"space-around"}}>
                            <img src='/imports/github.png' style={{width:"20px",height:"24px",marginTop:"0.3em",marginLeft:"2em"}}></img>
                            <p style={{fontSize:"12px", padding:"0em 1.25em",fontWeight:"600"}}>Sign In With Github</p>
                        </button>
                        <button type='button' className=' btn btn-light '  style={{width:"275px",height:"40px",border:"1px solid #d8dad5",marginLeft:"6em",display:"flex" ,justifyContent:"space-around"}}>
                            <img src='/imports/bitbucket.png' style={{width:"20px",height:"24px",marginTop:"0.3em",marginLeft:"2em"}}></img>
                            <p style={{fontSize:"12px", padding:"0em 1.25em",fontWeight:"600"}}>Sign In With Bitbucket</p>
                        </button>
                        <button type='button' className=' btn btn-light '  style={{width:"275px",height:"40px",border:"1px solid #d8dad5",marginLeft:"6em",display:"flex",justifyContent:"space-around"}}>
                            <img src='/imports/azure.png' style={{width:"20px",height:"24px",marginTop:"0.3em",marginLeft:"2em"}}></img>
                            <p style={{fontSize:"12px", padding:"0em 1.25em",fontWeight:"600"}}>Sign In With Azure devops</p>
                        </button>
                        <button type='button' className=' btn btn-light '  style={{width:"275px",height:"40px",border:"1px solid #d8dad5",marginLeft:"6em",display:"flex",justifyContent:"space-around"}}>
                            <img src='/imports/gitlab.png' style={{width:"20px",height:"24px",marginTop:"0.3em",marginLeft:"2em"}}></img>
                            <p style={{fontSize:"12px", padding:"0em 1.25em",fontWeight:"600"}}>Sign In With GitLab</p>
                        </button>
                            
                        
                    </div>
                    </div>
                    <p  className=" footer"style={{fontSize:"16px",fontWeight:"400",marginLeft:"9em"}}>By signing up you agree to the <span style={{fontWeight:"700"}}>privacy policy</span></p>
                </div>
            </div>
        </div>
    );
}

export default MainSignup;
