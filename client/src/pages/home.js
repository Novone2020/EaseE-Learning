export const Home=()=>{
    return(
    <div className="homePage">

        {/* Category */}
        <section style={{background:"#f5f5f5",paddingTop: "30px",paddingBottom: "5px"}}>
            <div>
                <h1 className="cat">Course Catagory</h1>
                <center><span><hr className="hr"/></span></center>
                
                <div className="category">
                    <div className="category-content">
                        <img src="https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBlbmdpbmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                        <p>Computer Engineering</p>
                        <a href="#"><button>View Courses</button></a>
                    </div>

                    <div className="category-content">
                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                        <p>Information Technology</p>
                        <a href="#"><button>View Courses</button></a>
                    </div>

                    <div className="category-content">
                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                        <p>Electronics and Telecommunication</p>
                        <a href="#"><button>View Courses</button></a>
                    </div>

                    <div className="category-content">
                        <img src="https://images.unsplash.com/photo-1619765617659-f3dcb700c27f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lY2hhbmljYWwlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                        <p>Mechanical Engineering</p>
                        <a href="#"><button>View Courses</button></a>
                    </div>

                    <div className="category-content">
                        <img src="https://images.unsplash.com/photo-1625722662233-297060231b85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2l2aWwlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                        <p>Civil Engineering</p>
                        <a href="#"><button>View Courses</button></a>
                    </div>

                    <div className="category-content">
                        <img src="https://plus.unsplash.com/premium_photo-1661877130397-0ed4174532a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXV0b21vYmlsZSUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                        <p>Automobile Engineering</p>
                        <a href="#"><button>View Courses</button></a>
                    </div>
                </div>

            </div>

        </section>
        {/* Category */}
        
        {/* Testimonial */}
        <section >
            <h1 style={{marginTop: "40px"}}>Testimonials</h1>
            <center><span><hr className="hr" style={{marginBottom: "70px"}}/></span></center>
            <div style={{background: "#0082e6"}}>
            <div className="testimonials">
                <div className="test-data">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laboriosam eos porro, fugit ex, eaque aspernatur est deserunt odit iure sapiente dicta dolor facere nisi cumque praesentium fugiat corporis! Dignissimos.</p>
                </div>
                <div className="test-data">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laboriosam eos porro, fugit ex, eaque aspernatur est deserunt odit iure sapiente dicta dolor facere nisi cumque praesentium fugiat corporis! Dignissimos.</p>
                </div>
                <div className="test-data">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laboriosam eos porro, fugit ex, eaque aspernatur est deserunt odit iure sapiente dicta dolor facere nisi cumque praesentium fugiat corporis! Dignissimos.</p>
                </div>
            </div>
        </div>
        </section>
        {/* Testimonial */}

        {/* Footer */}
        <section style={{background: "#2c3e50"}}>
            <div className="footer">
                <div className="footer-content">
                    <div className="icons">
                        <div> 
                            <a href="#">Facebook</a>
                        </div>  
                        
                        <div>
                            <a href="#">Instagram</a>
                        </div>

                        <div>
                            <a href="#">Twitter</a>
                        </div>

                        <div> 
                            <a href="#">Linked IN</a>
                        </div>
                    </div>
                </div>
                <div className="footer-content">
                    <h2>About US </h2><br/><br/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam sapiente, at libero quae, non delectus enim dolor eum error molestias repellat maiores ullam. Voluptatum ipsa porro officia et ducimus nihil ullam maxime, mollitia similique omnis optio quia soluta neque, sed vel officiis minus alias provident eius excepturi blanditiis facere! Ex.</p>
                </div>
            </div>
        </section>
        {/* Footer */}

    </div>
    )
};