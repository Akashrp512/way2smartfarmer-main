import React from 'react'

const About = () => {
  return (
    <div>
        <section id="">
      <div className="container navafter">
        <div className="title-area">
          <br />
          <h2 className="tittle first">Way2Agribusiness India Pvt. Ltd. (Way2ABI)</h2>
          <span className="tittle-line"></span>
        </div>
        <p className="ptext">
          Way2Agribusiness India Pvt. Ltd. is a social enterprise, incorporated in March 2014, address the issue of agribusiness exposure and market knowledge on agri commodities and trading in agri-tech products and agricultural produce. Our core focus
          is to assist transformation of agriculture or farming activities into agribusiness. Our objective is to be a one-stop solution provider for farmers and agribusiness enterprises with a mission is to enhance the business competitiveness of participants
          in agri and allied sectors mainly farmers and agri-entrepreneurs through our enabling products and services.
        </p>
      </div>
    </section>
    {/* Accordion  */}
    <section id="online">
        <div class="container">
            <div className='title-area'><br />
                <h2 className='tittle'>Our Vision & Mission </h2>
                <span className='tittle-line'></span>

            </div>
            <div id="accordion" class="col-md-12 col-lg-12 col-sm-12 text-center  ">
                <h3 class="accord">Our Vision</h3>
                <div>To be a one-stop solution provider for farmers and whole gamut of agribusiness enterprises.</div>
                <h3 class="accord">Our Mission</h3>
                <div>To enhance the business competitiveness of participants in agri and allied sectors mainly farmers and agri-entrepreneurs through our enabling products and services.</div>
                <h3 class="accord">Our Objectives</h3>
                <div>a Provide research based consultancy services and contemporary solutions to the clients in agribusiness sector b Facilitate project implementation and management for seamless agribusiness operations c) Undertake trading operations of
                    selected agri outputs and inputs incl. implements & machineries.</div>
                <h3 class="accord">Our Differentiators</h3>
                <div>a Robust understanding of farming conditions in Karnataka and knowledge repository b Strong network with agribusiness participants, industry and the Govt. institutions c) Innovative and wholesome services in all key areas agri projects,
                    output and inputs d Online services, scalable and impactful services e Also engaged in physical trading operations</div>
            </div>

        </div>
    </section>
    <section id="cont">
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <h4 style={{fontWeight: 'bold', marginTop: '50px'}}>
                <center>FIVE for FIVE</center>
              </h4>
              <div className="about wow fadeInLeft text-center">
                <img src="https://www.way2agribusiness.com/images/5%20of%205.png" alt="dr soil price" width="100%" />
                <button className="button0 button3 brochure" data-hover="Download Way2ABI Brochure" style={{color: '#ffc100', marginTop: '30px'}}><a style={{color: '#ffc100'}} href="https://www.way2agribusiness.com/downloads/Way2ABI%20Brochure.pdf">Download Way2ABI Brochure</a></button>
              </div>
            </div>
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="about-right wow fadeInRight">
                <div className="title-area">
                  <h2 className="tittle">Idea Origin</h2>
                </div>
                <span className="tittle-line"></span>
                <p style={{textAlign: 'justify', color: '#215d0e'}}>How to transform agriculture into agribusiness? What are the professional services will evolve in this transformation process? And how best a start-up can engage and contribute in a niche manner to assist this transformation process? These were thought provoking questions faced by the founder of Way2Agribusiness India Pvt Ltd. With the past experience as a agribusiness scholar, farmer, agribusiness analyst, working at different capacities at agribusiness entities and Knowledge Partner to the Govt. initiative, Dr. Prasanna Dyavegowda (Director & CEO, Way2ABI), who holds doctoral degree in agribusiness management, working to assist transform of agriculture into agribusiness in a niche manner through Way2ABI products & services.
                  <br /><br />Origin of our idea and innovation started with the work experience of Dr. Prasanna, who is instrumental in implementation of Way2ABI’s concept “Five for Five”. He brought out this concept after relevant experience in various agribusiness entities in different capacities and also being experienced as a Resident Project Manager from the team of “Knowledge Partner cum Transaction Advisor by Mahindra and PWC” for the Govt. of Karnataka initiative “Bounteous Karnataka (Agri Investors Meet)” under Dept. of Agriculture. Our concept “Five for Five” indicates five innovative products &amp; services for five stakeholders in agribusiness sector including the farmers, agri entrepreneurs, trading community, agri-tech product suppliers and Govt. Depts. Five products &amp; services are Way2Agritech (agri inputs), Way2Foods (agri output), Way2ABI Agri FBI (market intelligence App), Way2Market Agri CM (trading platform App) and PMC (agri project services). Our innovation can be termed as a combination of product, service and business model innovation mainly in the area of agribusiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default About