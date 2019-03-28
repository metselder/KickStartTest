import React, {Component} from 'react';

import { Card, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';


// function Home() {
//     return <h1>Welcome to the home page</h1>
// }

// export default Home


class CampaignIndex extends Component {

    static async getInitialProps() {
        const deployedCampaigns = await factory.methods.getDeployedCampaigns().call();
        return { deployedCampaigns };
    }

    renderCampaigns() {
        const items = this.props.deployedCampaigns.map( address => { //We pass a function into map. That function will then be called one time for every element inside of this
            //array that function we pass in also gets called with each element in the array. And then whatever we
            //return from that inner function will eventually be assigned to the items variable over here.
            return {
                header: address,
                description:(
                    <Link route = {`/campaigns/${address}`}>
                        <a> View Campaign</a>
                    </Link>
                ) ,
                fluid: true
            };
        });
        return <Card.Group items = {items} />
    }

    createButton() {
        return <Button>click Here</Button>
    }

    click() {
        console.log('kuro mi');
    }
    
    //primary it's just an options from semantic UI that makes the button blue 
    render () {
       return(
        <Layout>
            <div>
                <h3>Open Campaigns</h3>
                <Link route = '/campaigns/new'>
                    <a>
                        <Button floated = 'right' content ="Create Campaign" icon = "add circle" primary/> 
                    </a>
                </Link>
                
                {this.renderCampaigns()}
            </div>
        </Layout>
      
       )
    }
}

export default CampaignIndex;