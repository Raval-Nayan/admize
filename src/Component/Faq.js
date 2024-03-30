import React from 'react'
import avtar from '../image/avatar21.png'
const Faq = () => {
  return (
    <div className='' id='faqs' >  <div class= 
    "container shadow-lg my-5 rounded     p-5  text-center">
            <h1 className='gradient-text  '>Need Help?<img className='img-fluid h-25' src={avtar} alt='avtar'></img></h1>
            <div class="accordion  rounded  shadow-lg" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header p-2 service_p">
                        <button class="accordion-button"
                            type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                          Why Should i choose Adymize over other agencies?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body text-start service_ps">
                            
                            Choosing Adymize means choosing a results-driven, client-focused, and technologically advanced digital marketing partner.
                            With a proven track record, personalized strategies, and a commitment to transparent communication, we are confident in our ability to elevate your online presence and drive sustainable business growth.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header p-2 service_p">
                        <button class="accordion-button collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                            aria-expanded="false" aria-controls="collapseTwo">
                            What sets Adymize apart from the competition?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body text-start service_ps">
                        Adymize stands out in the crowded digital advertising landscape by offering a potent combination of advanced technology, customization options, data-driven insights, and a proven track record.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header p-2 service_p text-black">
                        <button class="accordion-button collapsed"
                            type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            How can Adymize guarantee accurate reporting?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body text-start service_ps">
                        Adymize's commitment to accuracy is upheld through advanced technology, real-time validation, transparency, a knowledgeable team, and a rigorous quality control process.
                        By choosing Adymize, clients can trust that their reporting is reliable and reflects the most accurate and current data available.
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
  )
}

export default Faq