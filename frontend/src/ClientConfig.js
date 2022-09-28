import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class ClientConfig extends Component {

    constructor(props) {
        super(props);
        this.state = {configs: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/clients/config')
            .then(response => response.json())
            .then(data => this.setState({configs: data}));
    }

    async remove(id) {
        await fetch(`/clients/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.configs].filter(i => i.id !== id);
            this.setState({configs: updatedClients});
        });
    }

    render() {
        const {configs} = this.state;

        const clientList = configs.map(config => {
            return <tr key={config.id}>
                <td style={{whiteSpace: 'nowrap'}}>{config.keyParams}</td>
                <td>{config.value}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/clients/" + config.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(config.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/clients/config/new">Add Config</Button>
                    </div>
                    <h3>Configurations</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Key</th>
                            <th width="30%">Value</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {clientList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default ClientConfig;