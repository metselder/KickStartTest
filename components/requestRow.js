import React, {Component} from 'react';
import {Table, Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {

    onApprove = async (event) => {
        event.preventDefault();
        var accounts = await web3.eth.getAccounts();
        const campaign = await Campaign(this.props.address);
        await campaign.methods.approveRequest(this.props.id).send({from: accounts[0]});
    }

    onFinalize = async (event) => {
        event.preventDefault();
        var accounts = await web3.eth.getAccounts();
        const campaign = await Campaign(this.props.address);
        await campaign.methods.finalizeRequest(this.props.id).send({from: accounts[0]});
    }


    render() {
        const {Row, Cell} = Table;
        const {id, request, approversCount} = this.props;
        const readyToFinalize = request.approvalsCount > approversCount / 2;
       
        return(
            <Row disabled = {request.complete} positive = {readyToFinalize && !request.complete}>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.amount, 'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{`${request.approvalsCount} / ${approversCount}`}</Cell>
                <Cell>
                    { request.complete ? false : 
                        (
                            <Button color = "green" basic onClick = {this.onApprove}>
                            Approve</Button>
                        )
                    }
                </Cell>
                <Cell>
                    {
                        request.complete ? false : 
                        (
                            <Button color = "teal" basic onClick = {this.onFinalize}>
                                Finalize
                            </Button>
                        )
                    }
                    
                </Cell>

            </Row>
        )
    }
}

export default RequestRow;