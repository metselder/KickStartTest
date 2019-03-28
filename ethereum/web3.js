import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in the browser *AND* the user has metaMask running on the browser. THIS IS where web3 is coming from.
    //We are going to take its web3 version as provider so we are sure that we have the same versioning of web3 on its and our side as well
    web3 = new Web3(window.web3.currentProvider);
    console.log('browser')
} else {
    //we are on the server *OR* the user does not have metamask installed
    let provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/705ab18041d44c6aa13e7a73372135b2');
    web3 = new Web3(provider);

    console.log('server');
}

export default web3;