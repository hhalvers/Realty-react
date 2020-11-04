import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function DisplayHomeCard(props) {
    if (props.home) {
        return (
            <div >
                <Card >
                    <Link to={`/${props.type}/${props.home.id}`}>
                    <CardImg top src={props.home.img} alt={props.home.address} />
                    <CardTitle><h5>{props.home.address}</h5></CardTitle>
                    <CardBody>
                        <CardText>{props.home.description}</CardText>
                        <CardText>{props.home.price}</CardText>
                    </CardBody>
                    </Link>
                </Card>
            </div>
        );
    }
    else {
        return <div />;
    }
}


export default DisplayHomeCard;