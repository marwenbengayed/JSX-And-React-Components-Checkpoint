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
        <Card.Img variant="top" src={imageUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tesla_Roadster_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg/220px-Tesla_Roadster_-_Flickr_-_Alexandre_Pr%C3%A9vot_%281%29.jpg")} />
        <Card.Body>
          <Card.Title>{Name()}</Card.Title> {/* w cant do  <ProductName/> */}
          <Card.Text>{Description()}</Card.Text> {/* w cant do  <ProductDescription/> */}
          <h5>
          <Badge bg="secondary">{Price()}</Badge> {/* w cant do  <ProductPrice/> */}
          </h5>
        </Card.Body>
      </Card>
      <div>
        {
          username ?
            /* if username is provided */
            <div>
              <h2>Hello {username}</h2>
              <img src='https://img.freepik.com/free-vector/like-icon-3d-vector-illustration-heart-symbol-red-bubble-social-media-applications-cartoon-style-isolated-white-background-online-communication-digital-marketing-concept_778687-1695.jpg?w=740&t=st=1695371746~exp=1695372346~hmac=7f69584978f749cdd56deae3e2deefcbd7d5d741ad285e8cd69eb8e14a70dd67' width="200" height="200" alt='simple like' />
            </div>
            /* if username is not provided */
            : <h2>Hello there!</h2>
        }
      </div>
    </div>
  );
}

export default App;