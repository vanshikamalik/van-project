import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { getUsers, getUserDetails } from '../Actions/index';
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import constant from '../Constant'
import { useHistory, withRouter } from 'react-router-dom';
import Navbar from './Layout/Navbar';

const marginTop = {
    marginTop: '30px'
}
const setRadius = {
    borderRadius: '50%'
}
function UserList(props) {
    const history = useHistory();
    const { users, getUsers } = props;
    //use effect to dispatch the actions
    useEffect(() => {
        getUsers();
    }, [getUsers]);
    const columns = [
        {
            name: 'id',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Title',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'First Name',
            selector: 'firstName',
            sortable: true,
            right: true,
        },
        {
            name: 'Last Name',
            selector: 'lastName',
            sortable: true,
            right: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
            right: true,
        },
        {
            name: 'Picture',
            selector: 'picture',
            sortable: true,
            right: true,
        },
    ];
    const data = users.map((val, index) => ({
        key: index,
        id: val.id,
        title: val.title,
        firstName: val.firstName,
        lastName: val.lastName,
        email: val.email,
        picture: <img height="70px" width="70px" style={setRadius} src={val.picture}></img>
    }))
    return (
        <>
            <Navbar />
            <Container>
                <div style={marginTop}>
                    <h3>{constant.UserListHeading}</h3>
                </div>
                <Row>
                    <DataTable
                        columns={columns}
                        data={data}
                        highlightOnHover
                        pagination={true}
                        paginationTotalRows={10}
                        paginationPerPage={3}
                        onRowClicked={handleChange}
                    />
                    {/* <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Title</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody> */}

                    {/* {users.map((val, index) => (
                                <tr key={index}>
                                    <td>{val.id}</td>
                                    <td>{val.title}</td>
                                    <td>{val.firstName}</td>
                                    <td>{val.lastName}</td>
                                    <td><img height="50px" width="50px" style={setRadius} src={val.picture}></img></td>
                                </tr>
                            ))} */}
                    {/* </tbody>
                    </Table> */}
                </Row>
            </Container>
        </>)
    //functions 
    function handleChange(props) {
        history.push({
            pathname: 'User/' + props.id,
            data: props
        })
    }
}
const mapDispatchToProps = {
    getUsers: getUsers
}
const mapStateToProps = (state) => ({
    users: state.users,
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserList))
