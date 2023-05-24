# Deploying ERC20 Token With Hardhat: A Step-by-Step Guide

In this article, we’ll be deploying ERC20 Token using Hardhat. Hardhat is a development environment specifically designed for Ethereum smart contract development. It offers a comprehensive toolset that simplifies the process of building, testing, and deploying smart contracts while ensuring reliability and security.


## Setting up the Development Environment

In this lesson, we will utilize VS Code to establish our development environment. To begin, open the integrated terminal in VS Code and execute the command `npm init -y` to prepare our project and generate the package.json file for the installation of libraries we will use. The usage of the `-y` flag in the npm command allows us to automatically respond "yes" to any prompts that would typically arise during the execution of the command.


After completing the installation of Hardhat by running the command `npm i --save-dev hardhat`, you will need to execute Hardhat to generate the necessary files and folders for the development environment. To do this, go to your project folder in the terminal and run `npx hardhat`. When you invoke Hardhat, a few questions will appear in the terminal. Simply press the enter key to accept the default answers. The image below provides a visual representation of the process of invoking Hardhat.



![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684327900236_Screenshot+2023-05-17+at+1.47.48+PM.png)


Once hardhat is invoked in our project folder, you will observe that all the generated files are located in the main directory of our project, as demonstrated in the example below.

![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684328131617_Screenshot+2023-05-17+at+1.55.05+PM.png)



The files displayed in the image above include the following list that we will utilize for deploying our smart contract:

- The contract folder will hold the Solidity Token contract and any other contracts can be stored there.
- The test folder will be used for writing unit tests for our Token before deploying it. This will help prevent any potential errors in the future.
- The Scripts folder contains a `deply.js` file, which we will modify later in this article by writing some hardhat script. This script will be responsible for deploying our smart contract and setting the cap.
- The `hardhat.config.js` file will be used to configure hardhat in this article, and we will configure it with Infura.


Two additional packages need to be installed: [OpenZeppelin](https://www.openzeppelin.com/) and [Chai](https://www.chaijs.com/). OpenZeppelin is a well-known open-source library that provides secure and audited smart contract implementations for Ethereum. It offers ready-made contract templates and tools to improve development speed and ensure security. On the other hand, Chai will be utilized for testing purposes, specifically for writing unit tests for the Token that will be deployed. To install OpenZeppelin and Chai into our project folder, you can execute the code provided below in your terminal.

```shell
npm i @openzeppelin/contracts chai
```




## Creating the ERC20 Token

Within the Smart Contract directory, you will find a file called "Lock.sol”. As it is not needed, please remove it and create a new Solidity file in its place called “MyToken.sol”. Once the file has been created, you can simply copy and paste the code below, which represents our Token code, into the newly created file.


```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract MyToken is ERC20Capped, ERC20Burnable {
    address payable public owner;
    uint256 public blockReward;

    constructor(
        uint256 cap,
        uint256 reward
    ) ERC20("MyToken", "MYT") ERC20Capped(cap * (10 ** decimals())) {
        owner = payable(msg.sender);
        _mint(owner, 50000000 * (10 ** decimals()));
        blockReward = reward * (10 ** decimals()); // Setting block reward for first deploy
    }

    // Setting miner reward
    function _mintMinerReward() internal {
        _mint(block.coinbase, blockReward);
    }

    // block.conbase validation for rewarding the minder; prevents miner from manipulating teh token
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 value
    ) internal virtual override {
        if (
            from != block.coinbase &&
            to != block.coinbase &&
            block.coinbase != address(0)
        ) {
            _mintMinerReward();
        }
        super._beforeTokenTransfer(from, to, value);
    }

    function _mint(
        address account,
        uint256 amount
    ) internal virtual override(ERC20Capped, ERC20) {
        require(
            ERC20.totalSupply() + amount <= cap(),
            "ERC20Capped: cap exceeded"
        );
        super._mint(account, amount);
    }

    //Destroying the contract
    function destroyContract() public onlyOwner {
        selfdestruct(owner);
    }

    // Set block rewards
    function setBlockReward(uint256 reward) public onlyOwner {
        blockReward = reward * (10 ** decimals());
    }

    //reusable modifier
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }
}
```

**The Code Structure**
The above code is a Solidity smart contract that establishes a custom ERC20 token titled "MyToken." It inherits three [OpenZeppelin ERC20-related contracts](https://docs.openzeppelin.com/contracts/4.x/erc20): [ERC20Capped](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20Capped), [ERC20Burnable](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20Burnable), and [ERC20](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20). These contracts set a maximum token supply, permit tokens to be burned, and provide basic functionality for an ERC20 token.

The contract includes two public state variables: `owner` and `blockReward`. The `owner` variable signifies the owner of the contract, while the `blockReward` variable denotes the amount of tokens awarded to the miner who mines the block containing a transfer. The [contract's constructor function](https://docs.soliditylang.org/en/v0.8.17/contracts.html?highlight=constructor#constructors) receives two arguments: `cap` and `reward`. `cap` represents the maximum token supply for the token, while `reward` represents the reward given to miners who mine the block that includes a transfer. The constructor assigns the `owner` variable to the `msg.sender`, mints 70,000,000 tokens to the owner, and sets the `blockReward` variable to the reward multiplied by 10 to the power of the decimals which is 18 zeros (000000000000000000) for the token. The decimals() function in the OpenZeppelin ERC-20 token standard defines the token's decimal precision and always returns a value of 18. This means that the token can be broken down into up to 10^18 (1 followed by 18 zeros) individual units, allowing for precise fractional ownership and enabling small transactions.

Moreover, the contract has two internal functions: `_mintMinerReward()` and `_mint()`.
_mintMinerReward()` is triggered when a transfer is executed and mints the `blockReward` amount of tokens to the miner who mined the block including the transfer. `_mint()` overrides the `_mint()` function from `ERC20Capped` and `ERC20` and ensures that the total token supply does not exceed the cap. The contract includes a [public function](https://docs.soliditylang.org/en/v0.8.17/control-structures.html?highlight=public%20function#external-function-calls) `destroyContract()` that enables the owner to terminate the contract and recover any remaining funds. It also includes a public function `setBlockReward()` that enables the owner to modify the `blockReward` value. Finally, the contract features a `modifier onlyOwner` that restricts access to certain functions to the contract's owner.



## Configuring the Solidity

In this article, we will be utilizing the stable version of Solidity. The configuration of the Solidity version will be performed in the `hardhat.config.js` file, as demonstrated in the following example:


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684475629677_Screenshot+2023-05-19+at+6.53.09+AM.png)


It is crucial to indicate the version to avoid encountering compilation errors when running our code. Additionally, please ensure that the version specified in your code aligns with the version specified in `hardhat.config.js`.


## Compiling Hardhat

To compile your code, all you need to do is execute the command `npx hardhat compile` in your project's terminal. During the compilation process, any errors in your code will be displayed in the terminal as red-colored text, while warning messages will be shown in yellow. In our case, when compiling hardhat, there were no errors, and we received a successful message as the output of the compilation process.


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684487702617_Screenshot+2023-05-19+at+10.14.40+AM.png)


`
After the compilation of the code, a directory named "artifacts" will be generated, consisting of multiple files. This "artifacts" folder acts as a repository for the compiled contract artifacts. Within this directory, you will find separate JSON files for each compiled contract. In our scenario, we only have a single contract file. These files in the “artifacts” folder contain crucial information necessary for deploying and interacting with the contracts on the blockchain.


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684488214098_Screenshot+2023-05-19+at+10.23.19+AM.png)





## Writing Unit Test for the ERC20 Token

To begin, navigate to the test directory and remove the Lock.js file. Replace it with a new file called "MyToken.js". Our test will be written in JavaScript using the Chai libraries. Below, you'll find the code we'll use to test our Token, and I'll provide an explanation within the code to help you understand its functionality.


```javascript
const { expect } = require("chai");
const hre = require("hardhat");
describe("MyToken contract", function () {
  // global vars
  let Token;
  let myToken;
  let owner;
  let addr1;
  let addr2;
  let tokenCap = 100000000;
  let tokenBlockReward = 50;
  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    Token = await ethers.getContractFactory("MyToken");
    [owner, addr1, addr2] = await hre.ethers.getSigners();
    myToken = await Token.deploy(tokenCap, tokenBlockReward);
  });
  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await myToken.owner()).to.equal(owner.address);
    });
    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await myToken.balanceOf(owner.address);
      expect(await myToken.totalSupply()).to.equal(ownerBalance);
    });
    it("Should set the max capped supply to the argument provided during deployment", async function () {
      const cap = await myToken.cap();
      expect(Number(hre.ethers.utils.formatEther(cap))).to.equal(tokenCap);
    });
    it("Should set the blockReward to the argument provided during deployment", async function () {
      const blockReward = await myToken.blockReward();
      expect(Number(hre.ethers.utils.formatEther(blockReward))).to.equal(
        tokenBlockReward
      );
    });
  });
  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      // Transfer 50 tokens from owner to addr1
      await myToken.transfer(addr1.address, 50);
      const addr1Balance = await myToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(50);
      // Transfer 50 tokens from addr1 to addr2
      // We use .connect(signer) to send a transaction from another account
      await myToken.connect(addr1).transfer(addr2.address, 50);
      const addr2Balance = await myToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });
    it("Should fail if sender doesn't have enough tokens", async function () {
      const initialOwnerBalance = await myToken.balanceOf(owner.address);
      // Try to send 1 token from addr1 (0 tokens) to owner (1000000 tokens).
      // `require` will evaluate false and revert the transaction.
      await expect(
        myToken.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
      // Owner balance shouldn't have changed.
      expect(await myToken.balanceOf(owner.address)).to.equal(
        initialOwnerBalance
      );
    });
    it("Should update balances after transfers", async function () {
      const initialOwnerBalance = await myToken.balanceOf(owner.address);
      // Transfer 100 tokens from owner to addr1.
      await myToken.transfer(addr1.address, 100);
      // Transfer another 50 tokens from owner to addr2.
      await myToken.transfer(addr2.address, 50);
      // Check balances.
      const finalOwnerBalance = await myToken.balanceOf(owner.address);
      expect(finalOwnerBalance).to.equal(initialOwnerBalance.sub(150));
      const addr1Balance = await myToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(100);
      const addr2Balance = await myToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });
  });
});
```


**The Test Code Structure**
The provided code above consists of a JavaScript test script that utilizes the Chai assertion library to test the Ethereum smart contracts. The script focuses on evaluating the functionalities of a token contract we created named "MyToken". Let's proceed to examine the code step by step in a detailed manner.

**Importing Dependencies:**

```javascript
const { expect } = require("chai");
const hre = require("hardhat");
```

This code snippet includes the import statements for the Chai library, specifically the `expect` assertion function, and the Hardhat library. Chai is utilized for asserting test conditions, while Hardhat serves as a development environment and testing framework for Ethereum.


**Test Description:**

```javascript
describe("MyToken contract", function() {
    // ...
});
```


The code begins by creating a test suite named "MyToken contract". Within this test suite, there are several test cases that validate various aspects of the token contract.

**Global Variables and Setup:**


```javascript
let Token;
let myToken;
let owner;
let addr1;
let addr2;
let tokenCap = 100000000;
let tokenBlockReward = 50;

beforeEach(async function () {
  // Get the ContractFactory and Signers here.
  Token = await ethers.getContractFactory("MyToken");
  [owner, addr1, addr2] = await hre.ethers.getSigners();

  myToken = await Token.deploy(tokenCap, tokenBlockReward);
});
```
 


The `beforeEach` function is invoked prior to every individual test case in the test suite. Its purpose is to configure the required variables and deploy the MyToken contract using the provided `tokenCap` and `tokenBlockReward` values. The `ethers.getContractFactory` function is employed to retrieve the contract factory for the "MyToken" contract, while `hre.ethers.getSigners()` is utilized to obtain the Ethereum addresses for the owner as well as two extra accounts (addr1 and addr2).



**Deployment Tests:**

```javascript
describe("Deployment", function () {
  // ...
});
```

The test suite contains a nested test suite named "Deployment," which specifically aims to test the token contract's deployment.

I**ndividual Deployment Test Cases:**

```javascript
it("Should set the right owner", async function () {
  expect(await myToken.owner()).to.equal(owner.address);
});

it("Should assign the total supply of tokens to the owner", async function () {
  const ownerBalance = await myToken.balanceOf(owner.address);
  expect(await myToken.totalSupply()).to.equal(ownerBalance);
});

it("Should set the max capped supply to the argument provided during deployment", async function () {
  const cap = await myToken.cap();
  expect(Number(hre.ethers.utils.formatEther(cap))).to.equal(tokenCap);
});

it("Should set the blockReward to the argument provided during deployment", async function () {
  const blockReward = await myToken.blockReward();
  expect(Number(hre.ethers.utils.formatEther(blockReward))).to.equal(
    tokenBlockReward
  );
});
```

The test cases validate various characteristics of the deployed token contract. They ensure that the owner is assigned correctly, the total supply of tokens is allocated to the owner, the maximum capped supply aligns with the specified argument during deployment, and the block reward corresponds to the provided argument during deployment.

**Transaction Tests:**

```javascript
describe("Transactions", function () {
  // ...
});
```


There is an additional nested test suite named "Transactions" that specifically targets the testing of the token transfer feature.


**Individual Transaction Test Cases:**


```javascript
it("Should transfer tokens between accounts", async function () {
  // Transfer 50 tokens from owner to addr1
  await myToken.transfer(addr1.address, 50);
  const addr1Balance = await myToken.balanceOf(addr1.address);
  expect(addr1Balance).to.equal(50);

  // Transfer 50 tokens from addr1 to addr2
  // We use .connect(signer) to send a transaction from another account
  await myToken.connect(addr1).transfer(addr2.address, 50);
  const addr2Balance = await myToken.balanceOf(addr2.address);
  expect(addr2Balance).to.equal(50);
});

it("Should fail if sender doesn't have enough tokens", async function () {
  const initialOwnerBalance = await myToken.balanceOf(owner.address);
  // Try to send 1 token from addr1 (0 tokens) to owner (1000000 tokens).
  // `require` will evaluate false and revert the transaction.
  await expect(
    myToken.connect(addr1).transfer(owner.address, 1)
  ).to.be.revertedWith("ERC20: transfer amount exceeds balance");

  // Owner balance shouldn't have changed.
  expect(await myToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
});

it("Should update balances after transfers", async function () {
  const initialOwnerBalance = await myToken.balanceOf(owner.address);

  // Transfer 100 tokens from owner to addr1.
  await myToken.transfer(addr1.address, 100);

  // Transfer another 50 tokens from owner to addr2.
  await myToken.transfer(addr2.address, 50);

  // Check balances.
  const finalOwnerBalance = await myToken.balanceOf(owner.address);
  expect(finalOwnerBalance).to.equal(initialOwnerBalance.sub(150));

  const addr1Balance = await myToken.balanceOf(addr1.address);
  expect(addr1Balance).to.equal(100);

  const addr2Balance = await myToken.balanceOf(addr2.address);
  expect(addr2Balance).to.equal(50);
});
```

    


The following test cases focus on examining the functionality of token transfer within the token contract. These cases aim to validate the behavior of the "MyToken" contract:


1. The first case involves transferring 50 tokens from the owner to `**addr1**`, and then from `**addr1**` to `**addr2**`. The balances of `**addr1**` and `**addr2**` are verified to ensure correctness.
2. The second case tests a failed transfer scenario where the sender, `**addr1**`, does not possess enough tokens. An attempt is made to transfer 1 token from `**addr1**` to the owner, who currently holds a balance of 1,000,000 tokens. The expected outcome is an error message indicating insufficient balance, and it confirms that the owner's balance remains unchanged.
3. The third case ensures the accurate updating of balances after transfers. It involves transferring 100 tokens from the owner to `**addr1**`, followed by a transfer of 50 tokens from the owner to `**addr2**`. The balances of the owner, `**addr1**`, and `**addr2**` are compared against the expected values to confirm correctness.


## Running The Test Script

To execute the test script in this section, please run the provided code below in your terminal:

```shell
npx hardhat test
```

After executing the aforementioned code, the output will be displayed in your terminal as presented below:


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684494617700_Screenshot+2023-05-19+at+12.08.57+PM.png)


Based on the displayed result, the test script was executed successfully, indicating that our code is ready for deployment. The result confirms that there were seven tests that passed.


## Configuring our Project for Deployment

In this section, we will set up the deployment configuration for our project in the `hardhat.config.js` file. Prior to starting, it is necessary to have a `.env` file in order to safeguard our MetaMask private key and Infura Sepolia Endpoint from being directly exposed in our code. To achieve this, we can install the dotenv package by executing the command `npm i dotenv` in our project terminal. Once the installation is complete, we can create the `.env` file in our project folder, following the example provided below.



![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684495542702_Screenshot+2023-05-19+at+12.25.21+PM.png)


We need to copy and paste two environmental variables in the .env file, which will be referenced in the `hardhat.config.js file.` Simply copy the provided code and paste it into your `.env` file.


```
PRIVATE_KEY=
INFURA_SEPOLIA_ENDPOINT=
```
    

We’ll be discussing short-while on how to get the MetaMask private key and to set up an Infura account but let’s navigate to our `hardhat.config.js` file to call the two environmental variables.

In the `hardhat.config.js`, we’ll be setting up the configuration object in this section which will be including the Sepolia test network. Below is a full configuration object for deploying our token.


```javascript
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: process.env.INFURA_SEPOLIA_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
```
   

The above configuration object contains the network information that Hardhat should connect to for deploying and testing contracts. In the given code snippet, there is a network configuration specifically for the Sepolia testnet.

The Sepolia object defines the name of the network configuration. It is possible to define multiple network configurations for different networks, but we are only providing one network configuration, which is for the Sepolia testnet. The Sepolia object includes the following details:

- **url**: This is the URL of the Sepolia network endpoint. The value is obtained from the `INFURA_SEPOLIA_ENDPOINT` environment variable.
- **accounts**: An array that contains the private keys of the Ethereum accounts to be used for deploying and interacting with contracts on the Sepolia network. The private key is obtained from the `PRIVATE_KEY` environment variable, which will be retrieved from our MetaMask.




## Getting your MetaMask Private Key 

In this section, we will discuss how to access the private key of your MetaMask wallet. If you don't have MetaMask installed as a browser extension, you can [click here](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) to install it. I will provide instructions on accessing your MetaMask private key and funding your wallet using the Sepolia test network at no cost.


**Step 1**
To begin, access your MetaMask in your web browser. Once opened, you will observe the user interface depicted in the image provided. Please click on the three vertical dot symbols (ellipsis) indicated by the arrow in the image.

![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684648664181_Screenshot+2023-05-21+at+6.56.50+AM.png)


**Step 2**
Once you click on the three-dot icon, a small modal will appear, displaying the following information. To access a new interface containing our MetaMask wallet address and the scan code image for your MetaMask, simply select "Account Details.".

![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684648745002_Screenshot+2023-05-21+at+6.58.35+AM.png)


**Step 3**
To access your private key, all you need to do is click on the button labeled "Explore private key."

![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684648813113_Screenshot+2023-05-21+at+6.59.37+AM.png)


**Step 4**
The private key is a protected key that does not require disclosure. To access it, you must enter your MetaMask login password.
  

![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684648889612_Screenshot+2023-05-21+at+7.01.01+AM.png)


**Step 5**
Once you enter your MetaMask password and click the confirm button, a new interface will appear, revealing your MetaMask secret key. It is crucial to safeguard this key by avoiding any form of exposure. 


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684649012141_Screenshot+2023-05-21+at+7.02.25+AM.png)


Once you have copied your secret key, please open the `.env` file and insert the secret key into the private key environmental variable as demonstrated below:


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684649101002_Screenshot+2023-05-21+at+7.04.18+AM.png)


After obtaining our Private Key, we can proceed to fund our MetaMask account. In my situation, I currently possess 0.5 Sepolia ETH in my wallet. To fund your account, please visit [https://sepoliafaucet.com/](https://sepoliafaucet.com/) to receive 0.5 Sepolia ETH at no cost.


## Getting Sepolia Endpoint in Infura

In this part, we will obtain the Sepolia endpoint from Infura, which we will use to set up hardhat. To begin, please go to [https://www.infura.io/](https://www.infura.io/) and create an account or sign in if you already have one. The following steps will assist you in creating an Infura endpoint that will be utilized to configure hardhat for deploying the Token.


**Step 1**
Once you have successfully signed up or signed in, you will be directed to your dashboard, which is displayed below. To create an endpoint, click the "CREATE NEW API KEY" button


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684590951314_Screenshot+2023-05-20+at+2.43.44+PM.png)




**Step 2**
After selecting the button shown above, a modal window will emerge, showing a form where you can generate a new API key. To generate the key, select the Web3 API from the options provided in the Network form. Furthermore, enter a name for the endpoint you wish to create. For consistency, we recommend using the same name used when creating the token to prevent any naming confusion. Once you have entered the desired name, kindly click on the “CREATE” button to generate your API key.


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684590960764_Screenshot+2023-05-20+at+2.49.17+PM.png)


**Step 3**
Once you have successfully created your account, you will be automatically directed to the settings page of the API endpoint that was generated. However, since we are not using this page, you can simply click the endpoint button indicated by the red arrow in the image below.


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684590970065_Screenshot+2023-05-20+at+2.51.04+PM.png)


**Step 4**
We are utilizing Ethereum as the Blockchain for our project on the endpoint page. The image provided shows three arrows: the first arrow indicates that you should click on the select dropdown and choose Sepolia, which is the network we will be using for this project. Lastly, the third arrow indicates the copy icons; simply click on these icon to copy the endpoint to the clipboard. 


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684649262818_Screenshot+2023-05-21+at+7.06.13+AM.png)


Once you have copied the API endpoint, navigate to your `.env` file and insert it as the value for `INFURA_SEPOLIA_ENDPOINT`, following the example provided in the accompanying image.


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684825903811_Screenshot+2023-05-23+at+8.08.59+AM.png)



## Creating Our Deploy Script 

In this section, we will develop our deployment script for deploying the contract of our Token. The deploy script can be found in the script folder within our project directory. To begin, navigate to the `deploy.js` file and delete certain sections of code, as we will be writing our deployment code.



![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684644282409_Screenshot+2023-05-21+at+5.44.12+AM.png)


Now, let's explore our primary function and create some code. Initially, we must refer to our contract and establish the deployment parameter by defining the starting cap and block reward. Provided below is a  code for deploying the Token.


```javascript
const hre = require("hardhat");
async function main() {
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(100000000, 50);
  await myToken.deployed();

  console.log("Ocean token deployed: ", myToken.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```
 
    

Within the `**main**` function, the code uses the `hre.ethers.getContractFactory` method to obtain the contract factory for the contract named "MyToken". This method returns a ContractFactory object, which is used to deploy new instances of the contract.

The line `const myToken = await MyToken.deploy(100000000, 50);` deploys an instance of the "MyToken" contract using the `deploy` method provided by the contract factory. The `deploy` method takes constructor arguments if the contract has any. In this case, the arguments provided are `**100000000**` and `**50**`.

The line `await` `****``myToken.deployed();` waits for the deployment of the contract instance to be confirmed. The `deployed()` function is a promise that resolves when the deployment is completed.

Finally, the line `console.log("Ocean token deployed: ", myToken.address)``**;**` logs the address of the deployed contract to the console. The `myToken.address` property returns the Ethereum address of the deployed contract.




## Deploying The Token’s Contract  to Sepolia

In this part, we will use Hardhat to deploy our Token Contract to Sepolia. Before proceeding, it is important to ensure that you have enough funds in your MetaMask wallet. If your wallet does not have sufficient funds, a transaction error will occur, and you will see a message indicating the insufficient funds on your terminal. To prevent this error, please make sure to fund your account by following this [link](https://sepoliafaucet.com/).

To initiate the deployment of your contract, execute the code below within your terminal.


```shell
 npx hardhat run --network sepolia scripts/deploy.js
```
 

Upon the completion of a successful deployment, the contract wallet address that has been newly generated will be visible to you in the manner demonstrated below.


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684654476516_Screenshot+2023-05-21+at+8.34.08+AM.png)


Kindly ensure that you preserve the wallet address by copying and pasting it into a secure memo. We will require it to observe the contract transaction on Etherscan and use the address to import the token to MeetaMask.




## Verifying the Contract on Etherscan

You can confirm the successful deployment of the contract to the Ethereum blockchain by verifying the address on Etherscan. Etherscan offers a publicly accessible and transparent log of all transactions and contract deployments on the Ethereum network. Here is a step-by-step guide to verifying your recently created contract on Etherscan using the [Sepolia Etherscan](https://sepolia.etherscan.io/).

**Step 1**
Take the contract address that we mentioned earlier in our terminal and paste it into the search field of Sepolia Etherscan.


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684658543763_Screenshot+2023-05-21+at+8.48.44+AM.png)


**Step 2**
Next, you will encounter a fresh interface that displays the contract you have deployed. Referring to the image below, the upper arrow indicates the contract name, while the lower arrow highlights the Transaction hash. To access the transaction details of the deployed contract, simply click on the transaction hash.



![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684658567502_Screenshot+2023-05-21+at+8.50.01+AM.png)


Finally, the image below presents the transaction details, including the 50 million tokens we have created.

![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684659764924_Screenshot+2023-05-21+at+8.54.04+AM.png)





<h2 id="import-token">Importing the token to MetaMask</h2>

When you import your token to MetaMask, you gain the ability to engage with your token through the MetaMask wallet interface. MetaMask is a well-known browser extension and wallet that allows users to handle their Ethereum accounts on the Ethereum network.

By utilizing MetaMask to import your token, you gain the ability to engage in different activities, including checking your token balance, initiating token transfers, and reviewing transaction records.
Within this segment, I will demonstrate the process of importing the token using MetaMask, enabling us to execute transactions and send tokens between wallets. To begin, let's import our recently created token.

**Step 1**
To begin, access the MetaMask extension within your web browser and select the option to import a token. 

![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684677583649_Screenshot+2023-05-21+at+2.49.46+PM.png)


**Step 2**
Once you click on the import token option, you will be redirected to a different interface where you can enter the recently deployed address. This address is the one we previously copied from the terminal in this article. All you have to do is paste the wallet address into the designated field labeled "Token contract address" and patiently wait for a few seconds. Eventually, you will observe the token's abbreviated name appearing in the second field. To finalize the process of adding your token to MetaMask, click on the "Add custom token" button.




![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684677609076_Screenshot+2023-05-21+at+2.51.34+PM.png)


**Step 3**
Once you have followed the instructions mentioned earlier and clicked the button, a new interface will appear showing your token information, including the Balance and the abbreviated name we assigned to it. To import the token into MetaMask, all you need to do is click the "Import tokens" button.


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684677816592_Screenshot+2023-05-21+at+2.53.28+PM.png)


Finally, once you have clicked on the import button, you will be able to view your token along with its balance. At this point, you are fully prepared to engage in transactions using your token, specifically by transferring it from one wallet to another. We will delve into the details of this process in the following section of this article.


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684678073472_Screenshot+2023-05-21+at+2.54.52+PM.png)




## Transferring Tokens with MetaMask

In order to perform token transactions, it is essential to switch between accounts in MetaMask. Therefore, it is required that you have a second account configured within your MetaMask or you can utilize any other MetaMask Wallet. There is no necessity to utilize a different web browser for this transaction since MetaMask has simplified the process of switching accounts. In this section, we will provide instructions on how to create a second MetaMask account. To accomplish this, simply click on the circular icon positioned at the upper right corner of your MetaMask interface, as illustrated in the image below.



![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684680777150_Screenshot+2023-05-21+at+3.47.26+PM.png)


To initiate the process of creating a new account within your MetaMask, click on the "Create account" button.

![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684680791400_Screenshot+2023-05-21+at+3.50.39+PM.png)



I have multiple accounts in my MetaMask and I will switch between them in this section. To proceed, ensure that your second account is prepared. Once the second account has been successfully created, you can easily copy the public address as displayed below in the image. We will utilize this copied address from Account 2 in Account 1 to send tokens to the second address, which to Account 2.

![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684681385471_Screenshot+2023-05-21+at+4.02.25+PM.png)


Once you have copied the address, proceed to account 1 and use the copied address from the clipboard to send 2 million tokens to the second address associated with the second account.

In the assets section of account 1, locate the token we have created and click on it. This will enable us to initiate transactions by sending tokens to our second account, which is referred to as account 2.

![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684681702578_Screenshot+2023-05-21+at+4.07.45+PM.png)


Once you click, a different interface will appear. Select the "Send" button, and you will be directed to another interface where you can complete a transaction, which is depicted below. All you need to do is paste the account 2 address and specify the desired number of tokens, indicated by the second arrow. Finally, click the "Next" button to proceed to the confirmation page.


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684682161793_Screenshot+2023-05-21+at+4.13.30+PM.png)


Once you click the "Next" button, you will be directed to the confirmation page where the transaction details you are about to make will be displayed. Please click the "Confirm" button to continue with sending the token.


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684682654424_Screenshot+2023-05-21+at+4.21.25+PM.png)



Once you click the button, your transaction will enter a pending state for a duration of approximately less than 30 seconds. It is probable that you will observe the following output before the transaction is successfully completed.



![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684831512465_Activity.png)


Our transaction has been successfully completed, and as a result, 2 million tokens have been deducted from our wallet, leaving us with a total of 48,000,000 tokens. The following shows our current token balance.


![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684683362344_Screenshot+2023-05-21+at+4.35.43+PM.png)



## Checking Account 2 Balance

After completing the transaction successfully, we need to verify the balance of account 2. However, if you attempt to check the balance of your second account, you will not see the token since we have not yet imported it. To resolve this, simply copy the contract address that was generated in the terminal and import the token into the second account. We will not go into detail about importing tokens into our MetaMask second account in this section, as it has already been discussed in the article on how to import tokens to MetaMask. To review the instructions on token importation into MetaMask, [click here](#import-token) and scroll to the section above that discussed the token importation into MetaMask.
Below is the balance of my second account in MetaMask after transferring 2 million tokens from the first account.




![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684748454106_Screenshot+2023-05-22+at+10.40.04+AM.png)



After verifying the successful completion of the transaction, we can proceed to examine the transaction by accessing Sepolia Etherscan. Presented below is a record displaying the details of the transaction.



![](https://paper-attachments.dropboxusercontent.com/s_C33589B593C41A3F8C92440EE01F3840BE550FCC792DC35FA862F3B0DA74D151_1684749214698_Screenshot+2023-05-22+at+10.43.44+AM.png)


By referring to the provided image, it is evident that the arrow indicates the quantity transferred from the address associated with account 1 to the address linked with account 2.



## Conclusion

I hope you enjoyed this article, where we simplified and covered everything you need to know about deploying your ERC20 token smart contract on the Ethereum Blockchain. With this article, you will deploy any Solidity smart contract to the Ethereum Blockchain. Additionally, you can access the project file related to this article on GitHub by following this [link](https://github.com/GabrielDelight/ERC20-Token-Semaphore). If you encounter any difficulties or have any inquiries about specific sections of this article, please feel free to comment in the comment section. Thank you for taking the time to read through it!


