import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function DisplayAgentCard(props) {
    if (props.agent) {
        return (
            <React.Fragment >
                <Card>
                    <CardImg top className="rounded-circle" src={props.agent.img} alt={props.agent.name} />
                    <CardTitle><h4>{props.agent.name}</h4></CardTitle>
                    <CardBody>
                        <CardText id ="agentDescription">{props.agent.description}</CardText>
                        <CardText><h5><a href="mailto:laura@realy.com">{props.agent.email}</a></h5></CardText>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
    else {
        return <div />;
    }
}


export default DisplayAgentCard;