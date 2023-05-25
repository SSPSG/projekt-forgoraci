import React from 'react';
import './Recenze.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Recenze(props) {
    
    return(
        <div>
            {/* <div className='Card border rounded p-4' style={{width:"15rem"}}>
                <div className='image-n-title'>
                    <img class="card-img-top" src={props.image} alt="Card image cap"></img>
                    <h5 class="card-title">{props.title}</h5>
                </div>
                <div class="card-body">
                    
                    <p class="card-text">{props.article}</p>
                    <a href={props.href} target="_blank" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
            <Card>
                <Card.Header>{props.title}</Card.Header>
                <Card.Body>
                    <Card.Title>Hodnocení: {props.rating}</Card.Title>
                    <Card.Text id='review-text-img'>
                        <img className='d-flex' alt=' ' src={props.image}></img>
                        {props.article}
                    </Card.Text>
                    <Button variant="primary"><a target='_blank' rel="noreferrer" href={props.href}>Stránka ČSFD</a></Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Recenze;