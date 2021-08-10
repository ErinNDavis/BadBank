import { Card } from 'react-bootstrap'; 
//import { userContext } from '../userContext';
import React from 'react';

function Home(){
    
    return (
        
        <Card className="bg-dark text-white">
            <Card.Img src="./bank.png" alt="Banking image" />
            <Card.ImgOverlay>
                <Card.Title>Welcome To BadBank</Card.Title>
                <Card.Text>
                    Let us help you with all your banking needs!
                </Card.Text>
            </Card.ImgOverlay>
        </Card>

    );
}

export default Home;