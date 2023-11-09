import './App.css';
import { React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {imageUrl} from "./ImageUrl";
import  {Name} from "./Name";
import {Description}from "./Description";
import { Price } from "./Price";



/* user name variable try to swich betwen them */
let username = "Marwen Bengayed";
//let username = "";
function App() {
  return (
    <div style={{ margin: "50px 50px" }}>
      <Card border='success' style={{ width: '30rem'}}>
      <Card.Img variant='top' src={imageUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tesla_Roadster_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg/220px-Tesla_Roadster_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg")} />
        <Card.Body>
          <Card.Title>{Name()}</Card.Title> {/*  cant do  <Name/> */}
          <Card.Text>{Description()}</Card.Text> {/*  cant do  <Description/> */}
          <h5>
          <Badge bg="secondary">{Price()}</Badge> {/* cant do  <Price/> */}
          </h5>
        </Card.Body>
      </Card>
      <div>
        {
          username ?
            /* if username is provided */
            <div>
              <h2>Hello {username}</h2>
              <img src='https://img.freepik.com/free-photo/3d-rendering-cartoon-like-barista_23-2150797638.jpg' width="200" height="200" alt='simple like' />
            </div>
            /* if username is not provided */
            : <h2>Hello there!</h2>
        }
      </div>
    </div>
  );
}

export default App;