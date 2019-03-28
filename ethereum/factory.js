import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(CampaignFactory.abi, '0xAAB6FB6cc0269a2EEa026320a6806d5105B4E8D3'); 

export default instance;