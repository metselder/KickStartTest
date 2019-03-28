pragma solidity ^0.5.5;

contract Campaign {
    
    struct Request {
        string description; // why the request is being created
        uint amount; // amount of money that the owner wants to send to the third party
        address payable recipient; // address who is going to receive some amount of money
        bool complete; // true if the request has already been completed
        mapping (address => bool) approvals; // track who has voted
        uint approvalsCount; // track number of approvals
    }
    
    Request[] public requests;
    mapping (bytes32 => uint) requestsIndex;
    address owner;
    uint minimumContribution;
    mapping(address => bool) approvers;
    uint approversCount;
    
    modifier onlyOwner () {
        require (msg.sender == owner);
        _;
    }
    
    constructor (uint minimum, address creator) public {
        owner = creator;
        minimumContribution = minimum;
    }
    
    function contribute () public payable {
        require (msg.value > minimumContribution, "insufficient amount provided for this transaction");
        
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string memory _description, uint _amount, address payable _recipient) public onlyOwner {
        //Request  newRequest = Request(_descriptionm, _value, _address< false); // it could be done like this as well  
        
        Request memory newRequest = Request({
            description: _description,
            amount: _amount,
            recipient: _recipient,
            complete: false,
            approvalsCount: 0
        });
        requests.push(newRequest);
    }
    
   function getRequestDetails (string memory _description) public view returns (string memory, uint, address, bool) {
       bytes32 descrHash = keccak256(abi.encodePacked(_description));
       require (requestsIndex[descrHash] > 0);
       
       uint index = requestsIndex[descrHash] - 1;
       Request memory test = requests[index];
       
       return (test.description, test.amount, test.recipient, test.complete);
   }
   
   function approveRequest(uint _index) public {
       Request storage request = requests[_index]; //mark this thing as a storage variable.
        //Very important because we want to manipulate the copy of the struct that exists inside of storage.
        //We don't want to make a copy of it over to memory and we'll call it request and that's going to be coming
        //from requests.
    
       require(approvers[msg.sender]);
       require(!request.approvals[msg.sender]);
       
       
       request.approvals[msg.sender] = true;
       request.approvalsCount++;
   }
   
   function finalizeRequest(uint _index) public onlyOwner {
       Request storage request = requests[_index]; //Don't forget to also add in the storage keyword right here because we want to specifically say that
        //this is a variable that should be looking at the same copy of the request that already exists inside
        //of storage.
        
        require(request.approvalsCount > (approversCount / 2));
        require(!request.complete);
        
        request.recipient.transfer(request.amount);
        
        request.complete = true;
   }

   function getSummary() public view returns (uint _contractBalance, uint _minimumContribution, uint _approversCount, uint _requests, address _owner) {
       return (
           address(this).balance,
           minimumContribution,
           approversCount,
           requests.length,
           owner
       );
   }
    
    function getRequestCount() public view returns (uint) {
        return requests.length;
    }

}