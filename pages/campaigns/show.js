import React, {Component} from 'react';
import {Card, Grid, Button} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';


class ComponentShow extends React.Component {

     static async getInitialProps({query}) { 
        var instance = await Campaign(query.address); //  this.props.url.query.address
        var summary = await instance.methods.getSummary().call();
        
        return {
            address: query.address,
            contractBalance: summary[0],
            minimumContribution: summary[1],
            approversCount: summary[2],
            requestsCount: summary[3],
            owner: summary[4]
        };
    }


    renderCards() {
        
        const {
            contractBalance,
            minimumContribution,
            approversCount,
            requestsCount,
            owner
        } = this.props; // destructuring, istead of var contractbalance = this.props.contractBalance, & и всички останали. Много по бързо
        
        
        const items = [
            {
                header: owner,
                meta: "Address of manager",
                description:'the manager created that camapaing and can create request to withdraw money',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: minimumContribution,
                meta: "Minimum Contribution (wei)",
                description:'you must contribute at lest this much wei to become a contributor',
            },
            {
                header: requestsCount,
                meta: "Number of Requests",
                description:'A request tries to withdraw money from the Contract. Request must be approved by the Approvers',
            },
            {
                header: approversCount,
                meta: "Number of Approvers",
                description:'Number of people who have already donated to this campaign',
            },
            {
                header: web3.utils.fromWei(contractBalance, 'ether'),
                meta: "Campaign balance (ether)",
                description:'The balamce left over in the contract',
            }
        ];

        return (<Card.Group items = {items}/>)
    }

    render() {
        return (
            <Layout>
                <h3>Campaign show</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width = {10}>
                            {this.renderCards()}
                                
                        </Grid.Column>
                        <Grid.Column width = {6}>
                            <ContributeForm  address = {this.props.address}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route = {`/campaigns/${this.props.address}/requests`}>    
                                <a>
                                    <Button primary>
                                        View Requests
                                    </Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                    
                </Grid>
               

            </Layout>
            
        ) 
    }
}

export default ComponentShow;