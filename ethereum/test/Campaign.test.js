const etherlime = require('etherlime');
const ethers = require('ethers');
const Campaign = require('../build/Campaign.json');
const CampaignFactory = require('../build/CampaignFactory.json');
const BigNumber = require('bignumber.js');

let campaignContractAddress;
let campaignContract;

let caimpaignFactoryWrapper;
let campaignFactory;

let ownerWallet;
let accountOneWallet;
let accountTwoWallet;

const ONE_ETHER = ethers.utils.bigNumberify('1000000000000000000');

describe('Campaign',  () => {


    let owner = accounts[0];
    let deployer;
    let provider;
    let accountZeroWallet;
    let port = 8545;
    let defaultOverrideOptions = {
        gasLimit: 4000000
    }

    const FIVE_ETHERS = ethers.utils.bigNumberify('5000000000000000000');
    const TEN_ETHERS = ethers.utils.bigNumberify('10000000000000000000');

    
    beforeEach( async() => {
        deployer = new etherlime.EtherlimeGanacheDeployer(owner.secretKey, port, defaultOverrideOptions);
        provider = deployer.provider;
        
        ownerWallet = new ethers.Wallet(accounts[0].secretKey, provider);
        accountOneWallet = new ethers.Wallet(accounts[1].secretKey, provider );
        accountTwoWallet = new ethers.Wallet(accounts[2].secretKey, provider)
        
        caimpaignFactoryWrapper = await deployer.deploy(CampaignFactory)
        campaignFactory = caimpaignFactoryWrapper.contract; 

        await campaignFactory.createCampaign('888');

        //get the first element of the array
        [campaignContractAddress] = await campaignFactory.getDeployedCampaigns();
        campaignContract = new ethers.Contract(campaignContractAddress, Campaign.abi, ownerWallet)

    })

    describe('Anything could happen', () => {
        let accountOneCampaignInstance;
        let accountTwoCampaignInstance;
        
        let hasContributedOnFirst, hasContributedOnSecond;
        
        it.only('playground', async () => {

            //Create two instances
            await campaignFactory.createCampaign(20);
            await campaignFactory.createCampaign(77); 
            
            console.log(Campaign.abi);
            
            
            /* 
            var deployedInstances = await campaignFactory.getDeployedCampaigns();
            console.log(deployedInstances);
            
            //Alternative way of setting value to a variable from array. Instad of assigning accountOneCampaignInstance = deployedInstances[0], etc, we could do it like below
            [accountOneCampaignInstance, accountTwoCampaignInstance] = await campaignFactory.getDeployedCampaigns();
            console.log(accountOneCampaignInstance);
            console.log(accountTwoCampaignInstance);
            */
            
            //Connect differents accounts to the same instance
            //accountOneCampaignInstance = new ethers.Contract(deployedInstances[0], Campaign.abi, accountOneWallet);
            //accountTwoCampaignInstance = new ethers.Contract(deployedInstances[0], Campaign.abi, accountTwoWallet);

            
            // console.log(accountOneWallet.address);
            //console.log(accountTwoCampaignInstance);
            
            //console.log(`deployed instances address ${deployedInstances[0]}`);
            // var test = await firstCampaignInstance.minimumContribution();
            // console.log(`minimum contribution should be 20:   ${test.toString()}`);
            


            //get money spent from account one 
                /*let balanceBefore = await provider.getBalance(accountOneWallet.address);
                await accountOneCampaignInstance.contribute({value: FIVE_ETHERS});
                let balanceAfter = await provider.getBalance(accountOneWallet.address); 
                console.log(`balance before: ${balanceBefore.toString()} &&&&& balance after: ${balanceAfter.toString()}`);
                var test = new BigNumber(balanceBefore).minus(balanceAfter)
                console.log(test.toString())
                */

            //get contract Balance after contributing some money
                /*await accountOneCampaignInstance.contribute({value: FIVE_ETHERS});
                var contractBalance = await provider.getBalance(accountOneCampaignInstance.address);
                console.log(contractBalance.toString());
                */

            //parse ETHER
                /*var parse = ethers.utils.parseEther("1");
                console.log(parse.toString());
                */

                console.log(JSON.stringify(CampaignFactory.abi));
                

        })

        it('deploys factory and campaign', () => {
            assert.ok(campaignFactory.address);
            assert.ok(campaignContract.address);
        });

        it('should do the test from udemy', async () => {
            let contract;
            //Create two instances
            await campaignFactory.createCampaign(20);
            await campaignFactory.createCampaign(77); 

            [accountOneCampaignInstance] = await campaignFactory.getDeployedCampaigns();
            
            contract = new ethers.Contract(accountOneCampaignInstance, Campaign.abi, accountOneWallet);
        });

        it('marks the caller as the campaign owner', async () => {
            const manager = await campaignContract.owner();
            
            assert.equal(manager, owner.wallet.address, 'kuro mi' )
        });

        it('allows people to contribute money and mark them as approvers', async () => {
            const accountOneInstance = new ethers.Contract(campaignContractAddress, Campaign.abi, accountOneWallet);
            var isContributor;

            await accountOneInstance.contribute({value: ONE_ETHER});
            isContributor = await accountOneInstance.approvers(accountOneWallet.address)
            
            assert(isContributor);
        });

        it('requires minimum contribution', async () => {
            await assert.revert(campaignContract.contribute({value: 20}))
        });

        it('allows a manager to create a payment request', async () => {
            await campaignContract.createRequest('first request', '100', accountTwoWallet.address );
            var request = await campaignContract.requests(0);

            assert.equal('first request', request.description, 'Description does not match');
            
        });

        it('processes request', async () => {
            let accountTwoBefore, accountTwoAfter;
            let contractBalanceBefore, contractBalanceAfter;
            let contractDiff, accountDiff;
            //all done by the owner
            accountTwoBefore = await provider.getBalance(accountTwoWallet.address);

            await campaignContract.contribute({value: TEN_ETHERS})
            contractBalanceBefore = await provider.getBalance(campaignContract.address);
            
            await campaignContract.createRequest('first request', FIVE_ETHERS, accountTwoWallet.address );
            await campaignContract.approveRequest(0);
            await campaignContract.finalizeRequest(0);

            accountTwoAfter = await provider.getBalance(accountTwoWallet.address);
            contractBalanceAfter = await provider.getBalance(campaignContract.address);

            accountDiff = new BigNumber(accountTwoAfter).minus(accountTwoBefore);
            assert.equal(FIVE_ETHERS, accountDiff.toString());

            contractDiff = new BigNumber(contractBalanceBefore).minus(contractBalanceAfter);
            assert.equal(FIVE_ETHERS, contractDiff.toString());
        })
    })
    
}) 