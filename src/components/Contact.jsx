import React from 'react'
// import GoogleMapReact from 'google-map-react';

const Contact = () => {
  return (
    <div className='Contact'>
        <div className='Contact-left'>
        <iframe className="position-relative rounded w-100 h-60" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.906301463088!2d3.289109114268475!3d7.136833317710321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4dbce81f969d%3A0x44921051ae337c5b!2sOke-Ata%20Housing%20Estate!5e0!3m2!1sen!2sng!4v1674478903476!5m2!1sen!2sng" width="800" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            frameborder="0" style={{minheight: 20, border:0}} allowfullscreen="" aria-hidden="false"
                            tabindex="0" title="myMap">

                    
        </iframe>
      
               </div>
        <div className='Contact-right'>
        <div className="col-md-10">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-19">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: 150}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="send" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default Contact