import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from './Layout/Navbar'
import { useParams, withRouter } from 'react-router-dom';
import { getUserDetails } from '../Actions/index';
import { connect } from 'react-redux';


function UserDetails(props) {
    const { UserID } = useParams();
    useEffect(() => {
        //code here
        console.log(UserID, "UserIDUserIDUserIDUserIDUserID")
    }, [])
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
const mapDispatchToProps = {
    getUsersDetails: getUserDetails
}
export default connect(null, mapDispatchToProps)(withRouter(UserDetails))
