import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from './Layout/Navbar'

export default function UserDetails() {
    return (<>
        <Navbar />
        <Container>
            <h2>User Details Are Here</h2>
            <hr />
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    </>)
}