const Footer  = () => {
    return (  
    <div className="site-footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="widget">
              <h3>About</h3>
              <p>Your one stop destination for all mayters SRHR</p>
            </div>
            <div className="widget">
              <h3>Connect with us</h3>
              <ul className="social list-unstyled">
                <li><a href="#"><span className="icon-facebook"></span></a></li>
                <li><a href="#"><span className="icon-twitter"></span></a></li>
                <li><a href="#"><span className="icon-instagram"></span></a></li>
                <li><a href="#"><span className="icon-dribbble"></span></a></li>
                <li><a href="#"><span className="icon-linkedin"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-12">
                <div className="widget">
                  <h3>Navigations</h3>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <div className="widget">
                  <ul className="links list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">HIV</a></li>
                    <li><a href="#">STI</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <div className="widget">
                  <ul className="links list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Privacy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center text-center copyright">
          <div className="col-md-8">
            <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script>. 
            </p> <br/> 
            
          </div>
        </div>
      </div>
    </div>
    );
    
}
 
export default Footer ;