import React, { Component } from 'react';
import {Form, Button, Message, Input} from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import {Link, Router} from '../../../routes'; // so that we can reference back the user where they were

class NewRequest extends Component {

    state = {
        value:'',
        description:'',
        recipient:'',
        loader: false,
        errorMessage:''
    }

    static async getInitialProps({query}) {
        const {address} = query;
        
        return {address};
    }

    createRequest = async (event) => {
        event.preventDefault();

        this.setState({loader: true, errorMessage:''})

        
        var instance = await Campaign(this.props.address);
        const {description, value, recipient} = this.state;
        try {
            var accounts = await web3.eth.getAccounts();
            await instance.methods.createRequest(description, web3.utils.toWei(value, 'ether'), recipient).send({from: accounts[0]});
            Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } catch (error) {
            this.setState({errorMessage:error.message});
        }

        this.setState({loader: false});
    }



    render() {
        return(
            <Layout>
                <Link route = {`/campaigns/${this.props.address}/requests`}>
                <a>
                    Back
                </a>
                </Link>
                <h3>Create Request</h3>
                <Form onSubmit = {this.createRequest} error = {!!this.state.errorMessage} > 
                    <Form.Field>
                        <label>Description</label>
                        <Input 
                        value = {this.state.description}
                        onChange = {event => this.setState({ description: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Value</label>
                        <Input 
                        value = {this.state.value} 
                        onChange = {event => this.setState({ value: event.target.value })}
                        label = 'Eth' 
                        labelPosition = 'right'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input 
                        value = {this.state.reciptient}
                        onChange = {(event) => this.setState({recipient: event.target.value})} 
                        />
                    </Form.Field>
                    <Message error header = 'Oops' content = {this.state.errorMessage} />
                    <Button loading = {this.state.loader} primary>Create!</Button>
                </Form> 
            </Layout>
               
        )
    }
}

export default NewRequest;