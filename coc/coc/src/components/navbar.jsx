const Navbar = () => {
    return (
        <nav class="site-nav">
        <div class="logo">
          <a href="#" class="text-white">SRHR tool<span class="text-black">.</span></a>
        </div>
        <div class="row align-items-center">
          
          
          <div class="col-12 col-sm-12 col-lg-12 site-navigation text-center">
            <ul class="js-clone-nav d-none d-lg-inline-block text-left site-menu">
              <li><a href="#">Home</a></li>
              <li class="has-children">
                <a href="#">Info</a>
                <ul class="dropdown">
                  <li><a href="#">HIV</a></li>
                  <li><a href="#">STIs</a></li>
                </ul>
              </li>
              <li><a href="#">Register</a></li>
            </ul>

            <ul class="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right menu-absolute">
              <li class="cta-button"><a href="#" target="_blank">Book a call</a></li>
            </ul>

            <a href="#" class="burger light ml-auto site-menu-toggle js-menu-toggle d-block d-lg-none" data-toggle="collapse" data-target="#main-navbar">
              <span></span>
            </a>

          </div>

        </div>  
      </nav>
      );
}
 
export default Navbar;