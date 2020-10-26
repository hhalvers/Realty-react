import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function DisplayHomeCard(props) {
    if (props.home) {
        return (
            <React.Fragment >
                <Card>
                    <CardImg top src={props.home.img} alt={props.home.address} />
                    <CardTitle><h5>{props.home.address}</h5></CardTitle>
                    <CardBody>
                        <CardText>{props.home.description}</CardText>
                        <CardText>{props.home.price}</CardText>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
    else {
        return <div />;
    }
}


export default DisplayHomeCard;