import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
    state = {
        address:'',
        inputValue: '',
        loading: false,
        error: ''
    }

    

    onSubmit = async (event) => {
        event.preventDefault();
        
        this.setState({loading: true, error:''});

        var instance = await Campaign(this.props.address);
        var account = await web3.eth.getAccounts();
        try {
            await instance.methods.contribute().send({from:account[0], value: web3.utils.toWei(this.state.inputValue, 'ether')});
            Router.replaceRoute(`/campaigns/${this.props.address}`);
        } catch (error) {
            this.setState({error: error.message});
        }
        this.setState({loading: false, inputValue: ''});
      
    }

    

    render () {
        return (
            <Form error = {!!this.state.error} onSubmit = {this.onSubmit}>
                <Form.Field>
                    <label>Amount to contribute</label>
                    <Input label = "Ether" 
                    labelPosition = "right"
                    value = {this.state.inputValue}
                    onChange = {(event) => this.setState({inputValue: event.target.value})}
                    />
                </Form.Field>
                <Message error header = 'Oops' content = {this.state.error}></Message>
                <Button primary loading = {this.state.loading} > Contribute </Button>
            </Form>
        )
    }
}

export default ContributeForm;