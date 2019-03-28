const etherlime = require('etherlime');
const LimeFactory = require('../build/LimeFactory.json');
const Campaign = require('../build/Campaign.json');
const CampaignFactory = require('../build/CampaignFactory.json');
const infuraAPIKey = '705ab18041d44c6aa13e7a73372135b2';

var createCampaignTest;

const deploy = async (network, secret) => {

	//deplpy locally - not needed for testing purposes

	// const deployer = new etherlime.EtherlimeGanacheDeployer();
	// const CampaignFactoryWrapper = await deployer.deploy(CampaignFactory);
	// const CampaignFactoryContract = CampaignFactoryWrapper.contract;

	// await CampaignFactoryContract.createCampaign(10);

	// createCampaignTest = await CampaignFactoryContract.getDeployedCampaigns();
	// console.log(createCampaignTest);



	// Deploy on ropsten
	const deployer = new etherlime.InfuraPrivateKeyDeployer(secret, network, '705ab18041d44c6aa13e7a73372135b2')
	const CampaignFactoryContract = await deployer.deploy(CampaignFactory);
	await CampaignFactoryContract.contract.createCampaign(1414);
	// const CampaignContract = await deployer.deploy(CryptoCars, {}, CryptoCarsTokenContract.contractAddress);
	// const setPriceInitTransaction = cryptoCarsContract.contract.setMinimumfee(1);
};

module.exports = {
	deploy
};