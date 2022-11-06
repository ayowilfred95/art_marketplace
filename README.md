Here we have defined the following:
itemCounter: A public variable that is used to uniquely identify each NFT that is listed in the smart contract.
owner: This variable stores the address of the owner of the smart contract. We use the keyword payable that denotes that the address stored in this variable can receive payment (MATIC in our case) directly from the smart contract. This is needed because the owner of the smart contract is going to receive a small commission for all the NFTs listed in the smart contract.
listingPrice: This variable is used to define the amount charged as commission by the owner of the smart contract for listing of the NFT.
MarketItem: We have used the struct keyword to define a composite datatype know as structures. A structure is a datatype which is made using more than one primary datatypes. In this case, MarketItem is a datatype that is used to denote an NFT that is listed in the contract. It consists of the following primary datatypes:
itemId: Each NFT listed in the smart contract is assigned an unique itemId.
nftContractAddress: This variable stores the contract address of the smart contract to which the listed NFT belongs to. Conversely we can also say that, this variable is used to store the contract address of the smart contract used to mint the NFT that is listed.
tokenId: This variable stores the tokenId of the NFT that is listed on the platform.
seller: This is the address of the account that is selling the NFT. This address is also defined as payable, because the seller will be receiving the amount paid by the buyer.
owner: This variable will store the account that owns the NFT once the NFT is bought from our Marketplace smart contract.
price: This stores the price of the NFT. This price is set by the account that is listing the NFT for sale.
isSold: This variable stores whether the NFT is sold or not.
isPresent: Since we will be using a mapping to map itemId to individual listed NFTs, this variable will be helpful for checking if there is an NFT for the passed itemId.
marketItems: This is a mapping that is used to map an uint256 data type to a MarketItem datatype. This variable is used to store the mapping between the itemId of a listed NFT to the details of that NFT stored in the structure MarketItem.
event MarketItemListed: In smart contracts it is not possible to write/output something to the console or log data in a log file. So in order to maintain a record of important actions performed by the smart contract we use event .
An event can have various parameters that provide additional details about that event. The indexed keyword is used to refer to a certain parameter in an event that can be used as a query parameter.
Finally we initialise the following variables in the constructor:
itemCounter: The itemCounter variable is initialised to 0.
owner: By default the account deploying the smart contract (address of the deploying account is returned by msg.sender keyword) is set as the owner of the smart contract. We use the keyword payable while assigning the value to typecast the address returned by msg.sender to an address type that can receive payment from the smart contract.
listingPrice: A price is charged for listing each NFT on the smart contract. We specify this price in the listingPrice variable. The default value is set to 0.01 ether which means 0.01 Matic has to be paid for listing an NFT. ether is a special type of unit defined in Solidity. You can read more about the unit ether in the official documentation.

Now lets understand the code:
The function takes in 3 parameters: nftContractAddress, tokenId and price which represents the contract address of the NFT, the tokenId of the NFT and the price the seller wants to sell it for respectively. It is a public function which means anyone can call this function. The payable keyword is used because in order to use this function, the user must attach payment for the listing fees.
msg.value returns the amount of payment sent while calling the function. The amount sent must be equal to the listing price set by the owner of the smart contract. The require(msg.value == listingPrice, "Must pay the listing price"); checks this and returns an error if the amount of token sent (MATIC in our case) is not equal to the specified listing price.
The next require statement makes sure that the selling price set for the contract is not 0.
Here we have created a new object of type MarketItem and mapped it to the value of itemCounter using the marketItems mapping, that we have defined earlier. The present value of the itemCounter becomes the itemId for our NFT. The account calling this function (returned by msg.sender) is set as the seller of the NFT. We set a null address (represented by address(0)) as the owner of the NFT. This will be changed when someone buys the NFT.
Here we first create an Object of type ERC721 using the IERC721 interface that we imported. The interface needs the address of the ERC721 contract. IERC721(nftContractAddress) returns the reference to the ERC721 contract deployed at the address stored in the nftContractAddress variable. The transferFrom function of the ERC721 contract is used to transfer the NFT from the user (the address returned by msg.sender) to the smart contract (the address returned by address(this)).
