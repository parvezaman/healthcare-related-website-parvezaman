import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">Left</button>
            <button type="button" class="btn btn-primary">Middle</button>
            <button type="button" class="btn btn-primary">Right</button>
            </div>



            <ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>
        </div>
    );
};

export default Home;