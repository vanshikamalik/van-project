import React from 'react';
import Navbar from './Layout/Navbar'
import Container from 'react-bootstrap/Container';


export default function Home() {
    return (<>
        <div>
            <Navbar />
            <Container>
                <h1 className="title is-1">This is the Home Page</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
                    risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
                    nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
                    lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
             </p>
            </Container>
        </div>
    </>)
}