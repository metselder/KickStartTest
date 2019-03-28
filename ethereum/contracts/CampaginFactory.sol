pragma solidity ^0.5.5;

import "./Campaign.sol";

contract CampaignFactory {

    Campaign[] public createdCampaigns;
    
    function createCampaign(uint minimumContribution) public {
        Campaign newCampaign = new Campaign(minimumContribution, msg.sender);
        createdCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (Campaign[] memory) {
        return createdCampaigns;
    }
}