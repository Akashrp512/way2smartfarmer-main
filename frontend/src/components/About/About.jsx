import React from 'react'

const About = () => {
  return (
    <div>
        <section id="">
        <div class="container navafter">

            <div className='title-area'><br />
                <h2 class="tittle first">Way2Agribusiness India Pvt. Ltd. (Way2ABI)</h2>
                <span className='tittle-line'></span>

            </div>
            <p class="ptext">Way2Agribusiness India Pvt. Ltd. is a social enterprise, incorporated in March 2014, address the issue of agribusiness exposure and market knowledge on agri commodities and trading in agri-tech products and agricultural produce. Our core focus
                is to assist transformation of agriculture or farming activities into agribusiness. Our objective is to be a one-stop solution provider for farmers and agribusiness enterprises with a mission is to enhance the business competitiveness
                of participants in agri and allied sectors mainly farmers and agri-entrepreneurs through our enabling products and services.

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
    </div>
  )
}

export default About