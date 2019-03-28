import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import {Button, Table} from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/requestRow';

class RequestIndex extends Component {

    static async getInitialProps({query}) {
        const { address } = query;
        const campaign = await Campaign(address);

        const requestCount = await campaign.methods.getRequestCount().call();
        const summary = await campaign.methods.getSummary().call();
        const approversCount = summary[2];
        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((el, index) => {
                return campaign.methods.requests(index).call();
            })
        );
            
        return {address, requests, requestCount, approversCount};
    }


    renderRows() {
        return this.props.requests.map((request, index) => {
            return (
                <RequestRow 
                 key = {index}
                 id = {index}
                 request = {request}
                 address = {this.props.address}
                 approversCount = {this.props.approversCount}
                />
            )
        })
    }


    render() {
        const {Header, Body, Row, HeaderCell} = Table; // es 2015 destructring. Instead of constantly using Table.Body, Table.Row etc

        return (
            <Layout>
                <h3>Request List</h3>
                <Link route = {`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary floated = 'right' style = {{marginBottom: 10}}>
                            Create a request
                        </Button>
                    </a>
                </Link>
                <Table>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>Approval Count</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                    <Body>
                        {this.renderRows()}
                    </Body>
                </Table>
                <div>Found {this.props.requestCount} requests!</div>
            </Layout>
        );
    }
}

export default RequestIndex;