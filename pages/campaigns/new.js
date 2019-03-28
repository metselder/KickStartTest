import React, {Component} from 'react';
import '../../components/Layout';
import Layout from '../../components/Layout';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import { Router } from "../../routes";

import factoryInstance from '../../ethereum/factory';
import web3 from '../../ethereum/web3'

class CampaignNew extends Component {

    state = {
        minimumContribution: '',
        errorMessage: '',
        isLoading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();
        // And remember whenever we do a form submittal in the browser, the browser is going to attempt to automatically
        // submit the form to our backend server.
        // And that's definitely behavior that we do not want to have.
        // So we're going to take the event object that our event handler right here is automatically called with
        // and we will call the event.preeventDefault function on it.
        // And that's going to keep the browser from attempting to submit the form.

        this.setState({isLoading: this.setLoader(), errorMessage: ''})
        try {
            var accounts = await web3.eth.getAccounts();
            await factoryInstance.methods.createCampaign(this.state.minimumContribution).send({from: accounts[0]});
            Router.pushRoute('/');
            
        } catch (err) {
            this.setState({errorMessage: err.message}); // нарочно се прави ново пропърти на state-a, защото тук като се извикаме метода setState, това ще update-не стейта, което от своя страна ще rerender-не формата 
        }
        this.setState({isLoading: this.setLoader()});
        
        
        
    }

    setLoader = () => 
        !this.state.isLoading;
    

    render() {
        return (
            <Layout>
                <h1>Create a new Campaign</h1> 

                <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage}> 
                    <Form.Field>
                        <label>Minimum contribution</label>
                        <Input label='Wei' 
                        placeholder = 'kurevi glavi' 
                        labelPosition ='right' 
                        value = {this.state.minimumContribution}
                        onChange = {event => this.setState({ minimumContribution: event.target.value })}
                        />
                    </Form.Field>
                    <Message error header = 'Oops' content = {this.state.errorMessage} />
                    <Button loading={this.state.isLoading} primary >Create!</Button>
                </Form>
            </Layout>
        )
    }
}

export default CampaignNew;