import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getInvitation, editInvitation } from './api.js';
import './App.css'
import './css/animate.css'
import './css/bootstrap.min.css'
import './css/magnific-popup.css'
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'
import './css/style.css'
import './css/themify-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './js/jquery.min.js'
// import './js/modernizr-2.6.2.min.js'
//import './js/jquery.easing.1.3.js'
import './js/bootstrap.min.js'
import './js/jquery.waypoints.min.js'
import './js/sticky-kit.min.js'
// import './js/isotope.js'
import './js/jquery.magnific-popup.min.js'
import './js/owl.carousel.min.js'
import './js/main.js'
import { Flex, Button} from '@chakra-ui/react';


function Confirm() {


    const { id } = useParams();
    const [invitation, setInvitation] = useState([]);
  
    useEffect(() => {
      async function fetchInvitation() {
        const data = await getInvitation(id);
        setInvitation(data[0]);
      }
      fetchInvitation();
    }, []);

    useEffect(() => {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          500: {
            items: 2
          },
          700: {
            items: 3
          }
        }
      });
    }, []);

    const handleActualizar = async (e, id, answer) => {
        e.preventDefault();
        
        const confirmacion = window.confirm(answer ? '¿Confirmas tu asistencia?' : '¿Declinas tu asistencia?');
        if (confirmacion) {
          const formData = { ...invitation, asistencia: answer, pendiente: false };
          await editInvitation(id, formData);
        }
      };


  return (
    <>
      <div className="preloader">
        <div className="lds-heart">
          <div></div>
        </div>
      </div>
      <div id="oliven-page"> <a href="#" className="js-oliven-nav-toggle oliven-nav-toggle"><i></i></a>
        <aside id="oliven-aside">
          <div className="oliven-logo">
            <a href="index.html">
              <img src="/src/images/logo.png" alt="" />
              <span>Olivia <small>&</small> Brandon</span>
              <h6>15.11.2024</h6>
            </a>
          </div>
          <nav className="oliven-main-menu">
            <ul>
              <li><a href="index.html#home">Home</a></li>
              <li><a href="index.html#couple">Couple</a></li>
              <li><a href="index.html#story">Our Story</a></li>
              <li><a href="index.html#friends">Friends</a></li>
              <li><a href="index.html#organization">Organization</a></li>
              <li><a href="index.html#gallery">Gallery</a></li>
              <li><a href="index.html#whenwhere">When & Where</a></li>
              <li><a href="index.html#rsvp">R.S.V.P</a></li>
              <li><a href="index.html#gift">Gift Registry</a></li>
              <li><a href="blog.html">Blog</a></li>
            </ul>
          </nav>
          <div className="footer1"> <span className="separator"></span>
            <p>Olivia & Brandon<br />15 de Diciembre 2024, Monterrey</p>
          </div>
        </aside>
        <div id="oliven-main">
          <header id="home" className="header valign bg-img parallaxie">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center caption">
                  <h1 className="animate-box" data-animate-effect="fadeInUp">Olivia & Brandon</h1>
                  <h5 className="animate-box" data-animate-effect="fadeInUp">15 de Diciembre, 2024 – Monterrey</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="arrow bounce text-center">
                    <a href="index.html#couple"> <i className="ti-heart"></i> </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div id="couple" className="bridegroom clear section-padding bg-pink">
            <div className="container">
              <div className="row mb-60">
                <div className="col-md-6">
                  <div className="item toright mb-30 animate-box" data-animate-effect="fadeInLeft">
                    <div className="img"> <img src="/src/images/bride.jpg" alt="" /> </div>
                    <div className="info valign">
                      <div className="full-width">
                        <h6>Olivia Martin <i className="ti-heart"></i></h6> <span>The Bride</span>
                        <p>Olivia fringilla dui at elit finibus viverra thenec a lacus seda themo the miss druane semper non the fermen.</p>
                        <div className="social">
                          <div className="full-width">
                            <a href="#0" className="icon"> <i className="ti-facebook"></i> </a>
                            <a href="#0" className="icon"> <i className="ti-twitter"></i> </a>
                            <a href="#0" className="icon"> <i className="ti-instagram"></i> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30 animate-box" data-animate-effect="fadeInRight">
                    <div className="img"> <img src="/src/images/groom.jpg" alt="" /> </div>
                    <div className="info valign">
                      <div className="full-width">
                        <h6>Brandon Danilo <i className="ti-heart"></i></h6> <span>The Groom</span>
                        <p>Brandon fringilla dui at elit finibus viverra thenec a lacus seda themo the miss druane non the fermen.</p>
                        <div className="social">
                          <div className="full-width">
                            <a href="#0" className="icon"> <i className="ti-facebook"></i> </a>
                            <a href="#0" className="icon"> <i className="ti-twitter"></i> </a>
                            <a href="#0" className="icon"> <i className="ti-instagram"></i> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center animate-box" data-animate-effect="fadeInUp">
                  <h3 className="oliven-couple-title">Are getting married!</h3>
                  <h4 className="oliven-couple-subtitle">15 de Diciembre, 2024 — Monterrey, Nuevo León</h4>
                </div>
              </div>
            </div>
          </div>
          <div id="countdown" className="section-padding bg-img bg-fixed" style={{backgroundImage: `url(/src/images/banner-1.jpg)`}}>
            <div className="container">
              <div className="row">
                <div className="section-head col-md-12">
                  <h4>We will become a family in</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li><span id="days"></span>Days</li>
                    <li><span id="hours"></span>Hours</li>
                    <li><span id="minutes"></span>Minutes</li>
                    <li><span id="seconds"></span>Seconds</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div id="story" className="story section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-5 mb-30">
                  <div className="story-img animate-box" data-animate-effect="fadeInLeft">
                    <div className="img"> <img src="/src/images/story.jpg" className="img-fluid" alt="" /> </div>
                    <div className="story-img-2 story-wedding" style={{backgroundImage: 'url(images/wedding-logo.png)'}}></div>
                  </div>
                </div>
                <div className="col-md-7 animate-box" data-animate-effect="fadeInRight">
                  <h4 className="oliven-story-subtitle">Our love.</h4>
                  <h3 className="oliven-story-title">Our Story</h3>
                  <p>Curabit aliquet orci elit genes tristique lorem commodo vitae. Tuliaum tincidunt nete sede gravida aliquam, neque libero hendrerit magna, sit amet mollis lacus ithe maurise. Dunya erat volutpat edat themo the druanye semper.</p>
                  <p>Luality fringilla duiman at elit vinibus viverra nec a lacus themo the druanye sene sollicitudin mi suscipit non sagie the fermen.</p>
                  <p>Phasellus viverra tristique justo duis vitae diam neque nivamus ac est augue artine aringilla dui at elit finibus viverra nec a lacus. Nedana themo eros odio semper soe suscipit non. Curabit aliquet orci elit genes tristique.</p>
                  <h4>Dec 5th, 2024, We Said Yes!</h4>
                  <p>Luality fringilla duiman at elit finibus viverra nec a lacus themo the druanye sene sollicitudin mi suscipit non sagie the fermen.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="friends" className="friends section-padding bg-pink">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-30">
                  <span className="oliven-title-meta">Our best friends ever</span>
                  <h2 className="oliven-title mb-30">Thanks for being there</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="img"> <img src="/src/images/friends/b1.jpg" alt="" /> </div>
                      <div className="info valign">
                        <div className="full-width">
                          <h6>Eleanor Chris</h6><span>Bridesmaids</span>
                          <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="img"> <img src="/src/images/friends/w1.jpg" alt="" /> </div>
                      <div className="info valign">
                        <div className="full-width">
                          <h6>Stefano Smiht</h6><span>Groomsmen</span>
                          <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="img"> <img src="/src/images/friends/b2.jpg" alt="" /> </div>
                      <div className="info valign">
                        <div className="full-width">
                          <h6>Vanessa Brown</h6><span>Bridesmaids</span>
                          <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="img"> <img src="/src/images/friends/w2.jpg" alt="" /> </div>
                      <div className="info valign">
                        <div className="full-width">
                          <h6>Matthew Brown</h6><span>Groomsmen</span>
                          <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="img"> <img src="/src/images/friends/b3.jpg" alt="" /> </div>
                      <div className="info valign">
                        <div className="full-width">
                          <h6>Fredia Halle</h6><span>Bridesmaids</span>
                          <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="img"> <img src="/src/images/friends/w3.jpg" alt="" /> </div>
                      <div className="info valign">
                        <div className="full-width">
                          <h6>Pablo Dante</h6><span>Groomsmen</span>
                          <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="seeyou" className="seeyou section-padding bg-img bg-fixed" style={{backgroundImage: `url(/src/images/banner-3.jpg)`}}>
            <div className="container">
              <div className="row">
                <div className="section-head col-md-12 text-center">
                  <span><i className="ti-heart"></i></span>
                  <h4>Looking forward to see you!</h4>
                  <h3>15.11.2024</h3>
                </div>
              </div>
            </div>
          </div>

          <div id="organization" className="organization section-padding bg-pink">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-30">
                  <span className="oliven-title-meta">Wedding</span>
                  <h2 className="oliven-title">Organization</h2>
                </div>
              </div>
              <div className="row bord-box bg-img" style={{backgroundImage: `url(/src/images/slider.jpg)`}}>
                <div className="col-md-3 item-box">
                  <h2 className="custom-font numb">01</h2>
                  <h6 className="title">Ceremony</h6>
                  <p>Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera.</p>
                </div>
                <div className="col-md-3 item-box">
                  <h2 className="custom-font numb">02</h2>
                  <h6 className="title">Lunch Time</h6>
                  <p>Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera.</p>
                </div>
                <div className="col-md-3 item-box">
                  <h2 className="custom-font numb">03</h2>
                  <h6 className="title">Party</h6>
                  <p>Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera.</p>
                </div>
                <div className="col-md-3 item-box">
                  <h2 className="custom-font numb">04</h2>
                  <h6 className="title">Cake Cutting</h6>
                  <p>Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="gallery" className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-30">
                  <span className="oliven-title-meta">Gallery</span>
                  <h2 className="oliven-title">Our Memories</h2>
                </div>
              </div>
              <div className="row">
                <ul className="col list-unstyled list-inline mb-0 gallery-menu" id="gallery-filter">
                  <li className="list-inline-item"><a className="active" data-filter="*">All</a></li>
                  <li className="list-inline-item"><a className="" data-filter=".ceremony">Ceremony</a></li>
                  <li className="list-inline-item"><a className="" data-filter=".party">Party</a></li>
                </ul>
              </div>
            </div>
            <div className="container">
              <div className="row gallery-filter mt-3">
                <div className="col-md-4 gallery-item ceremony">
                  <a href="images/gallery/1.jpg" className="img-zoom">
                    <div className="gallery-box">
                      <div className="gallery-img"> <img src="/src/images/gallery/1.jpg" className="img-fluid mx-auto d-block" alt="" /> </div>
                      <div className="gallery-detail">
                        <h4 className="mb-0">Wedding Ceremony</h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 gallery-item party">
                  <a href="images/gallery/2.jpg" className="img-zoom">
                    <div className="gallery-box">
                      <div className="gallery-img"> <img src="/src/images/gallery/2.jpg" className="img-fluid mx-auto d-block" alt="" /> </div>
                      <div className="gallery-detail">
                        <h4 className="mb-0">Wedding Party</h4> </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 gallery-item ceremony">
                  <a href="images/gallery/3.jpg" className="img-zoom">
                    <div className="gallery-box">
                      <div className="gallery-img"> <img src="/src/images/gallery/3.jpg" className="img-fluid mx-auto d-block" alt="" /> </div>
                      <div className="gallery-detail">
                        <h4 className="mb-0">Wedding Ceremony</h4> </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 gallery-item party">
                  <a href="images/gallery/4.jpg" className="img-zoom">
                    <div className="gallery-box">
                      <div className="gallery-img"> <img src="/src/images/gallery/4.jpg" className="img-fluid mx-auto d-block" alt="" /> </div>
                      <div className="gallery-detail">
                        <h4 className="mb-0">Wedding Party</h4> </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 gallery-item ceremony">
                  <a href="images/gallery/5.jpg" className="img-zoom">
                    <div className="gallery-box">
                      <div className="gallery-img"> <img src="/src/images/gallery/5.jpg" className="img-fluid mx-auto d-block" alt="" /> </div>
                      <div className="gallery-detail">
                        <h4 className="mb-0">Wedding Ceremony</h4> </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 gallery-item party">
                  <a href="images/gallery/6.jpg" className="img-zoom">
                    <div className="gallery-box">
                      <div className="gallery-img"> <img src="/src/images/gallery/6.jpg" className="img-fluid mx-auto d-block" alt="" /> </div>
                      <div className="gallery-detail">
                        <h4 className="mb-0">Wedding Party</h4> </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="whenwhere" className="whenwhere section-padding bg-pink">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-30"> <span className="oliven-title-meta">Questions</span>
                  <h2 className="oliven-title">When & Where</h2> </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="whenwhere-img"> <img src="/src/images/whenwhere/3.jpg" alt="" /></div>
                      <div className="content">
                        <h5>Wedding Ceremony</h5>
                        <p><i className="ti-location-pin"></i> 175  Broadway,  Fortune Brooklyn, New York 11244, USA: </p>
                        <p><i className="ti-time"></i> <span>12:00am – 13:00pm</span></p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="whenwhere-img"> <img src="/src/images/whenwhere/1.jpg" alt="" /></div>
                      <div className="content">
                        <h5>Weddding Party</h5>
                        <p><i className="ti-location-pin"></i> Fortune Brooklyn restaurant, 149 Broadway, Brooklyn, NY, USA</p>
                        <p><i className="ti-time"></i> <span>14:00pm</span></p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="whenwhere-img"> <img src="/src/images/whenwhere/2.jpg" alt="" /></div>
                      <div className="content">
                        <h5>Accomodations</h5>
                        <p><i className="ti-direction-alt"></i> Hotel and distance from wedding party restaurant:</p>
                        <p><i className="ti-direction"></i> The William Vale (7 min)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="rsvp" className="section-padding bg-img bg-fixed" style={{backgroundImage: `url(/src/images/banner-2.jpg)`}}>
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3 bg-white p-40"> <span className="oliven-title-meta text-center">Will you attend?</span>
                  <h2 className="oliven-title text-center">R.S.V.P</h2>
                  <br />
                  <form className="contact__form" >

                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-success contact__msg" style={{display: 'none'}} role="alert">
                          Your message was sent successfully.
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input name="name" type="text" className="form-control" placeholder={invitation?.name} required readOnly/> </div>
                      </div>
                      {/* <div className="col-md-12">
                        <div className="form-group">
                          <input name="email" type="email" className="form-control" value={invitation.nombre} placeholder="Email" required /> </div>
                      </div> */}
                      <div className="col-md-12">
                        <div className="form-group">
                          <input name="guests" type="text" className="form-control" placeholder={invitation?.numberOfGuests}  required readOnly/> </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                        </div>
                      </div>
                      <Flex className="col-md-12" style={{'gap':'30px'}}>
                        <Button name="submit" type="submit" onClick={(e)=> handleActualizar(e, invitation.id, true)} backgroundColor= {'#BD945A'} style={{ 'color':'#fff', 'fontFamily':'Nunito Sans, sans-serif','padding':'15px 30px','fontWeight':'400','letterSpacing':'2px', 'borderRadius':'0px'}}  _hover={{backgroundColor: "blue.700"}}  _active={{backgroundColor: "#FFF"}}>CONFIRM</Button>
                        <Button name="submit" type="submit"  onClick={(e)=> handleActualizar(e, invitation.id, false)} backgroundColor= {'#BD945A'} style={{ 'color':'#fff', 'fontFamily':'Nunito Sans, sans-serif','padding':'15px 30px','fontWeight':'400','letterSpacing':'2px', 'borderRadius':'0px'}}  _hover={{backgroundColor: "blue.700"}} _active={{backgroundColor: "#FFF"}} >DECLINE</Button>
                      </Flex>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div id="gift" className="gift-section gift">
            <div className="container">
              <div className="row">
                <div className="col-md-3 mb-30">
                  <br /> <span className="oliven-title-meta">Gift</span>
                  <h2 className="oliven-title">Gift Registry</h2>
                </div>
                <div className="col-md-9">
                  <div className="owl-carousel">
                    <div className="client-logo">
                      <a href="#"><img src="/src/images/gift/1.jpg" alt="" /></a>
                    </div>
                    <div className="client-logo">
                      <a href="#"><img src="/src/images/gift/2.jpg" alt="" /></a>
                    </div>
                    <div className="client-logo">
                      <a href="#"><img src="/src/images/gift/3.jpg" alt="" /></a>
                    </div>
                    <div className="client-logo">
                      <a href="#"><img src="/src/images/gift/4.jpg" alt="" /></a>
                    </div>
                    <div className="client-logo">
                      <a href="#"><img src="/src/images/gift/5.jpg" alt="" /></a>
                    </div>
                    <div className="client-logo">
                      <a href="#"><img src="/src/images/gift/6.jpg" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer2">
            <div className="oliven-narrow-content">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2>
                    <a href="index.html"><img src="/src/images/logo.png" alt="" /><span>Olivia <small>&</small> Brandon</span></a>
                  </h2>
                  <p className="copyright">December 15, 2024 – Monterrey, Nuevo León</p>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* <script src="js/jquery.min.js"></script>
        <script src="js/modernizr-2.6.2.min.js"></script>
        <script src="js/jquery.easing.1.3.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.waypoints.min.js"></script>
        <script src="js/sticky-kit.min.js"></script>
        <script src="js/isotope.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/main.js"></script>  */}
      </div>
    </>
  )
}

export default Confirm
