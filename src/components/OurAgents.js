import React, { Component } from 'react';
import DisplayAgentCard from './DisplayAgentCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faHome, faStar} from "@fortawesome/free-solid-svg-icons";

function OurAgents(props) {



    const directory = props.agentProps.map(agent => {

        return (
            <div key={agent.id} className="col-md-4 d-flex align-items-stretch">
                <DisplayAgentCard agent={agent} />
            </div>
        );
    });


    return (
        <React.Fragment>
            <div className="container ourAgents">
                {/* <div className="row" style="text-align: center; padding-bottom: 20px"> */}
                <div className="row">
                    <div className="col">
                        <h3>Our Agents</h3>
                    </div>
                </div>
                <div className="row">
                    {directory}
                </div>
            </div>

            <div className="container-fluid" id="whyChooseUs">
                <div className="row" >
                    <div className="col-12" >
                        <h2>Why Choose Us</h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 choose-us-col">
                            {/* <i className="fa fa-lightbulb-o fa-5x"></i> */}
                            <FontAwesomeIcon icon={faLightbulb} size="4x"/>
                            <h3>Extensive Knowledge</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ducimus delectus facere explicabo
                            adipisci ipsum sed accusantium. Assumenda voluptatem accusamus ipsam fugit reprehenderit voluptatum
            perferendis corrupti esse voluptatibus nulla. Unde! </p>
                        </div>
                        <div className="col-sm-4 choose-us-col">
                            {/* <i className="fa fa-home fa-5x"></i> */}
                            <FontAwesomeIcon icon={faHome}  size="4x"/>
                            <h3>Wide Selection of Properties</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum id omnis molestias aut quos nobis quod
                            doloremque eligendi consequatur mollitia dignissimos optio rem vero, saepe distinctio neque, itaque
            repudiandae doloribus.</p>
                        </div>
                        <div className="col-sm-4 choose-us-col">
                            {/* <i className="fa fa-star fa-5x"></i> */}
                            <FontAwesomeIcon icon={faStar}  size="4x"/>
                            <h3>20 Years of Experience</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id optio omnis ad natus velit repellendus
                            voluptate. Fugit suscipit repudiandae optio doloribus expedita, voluptate eveniet, ex, pariatur eum facilis
            atque nemo.</p>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>



    );

}

export default OurAgents;