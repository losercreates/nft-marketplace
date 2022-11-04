# Ethket
A marketplace for buying and selling NFTs on the etherium blockchain

- Support for multiple wallet providers
- Buy and Sell NFTs

[![Run on Repl.it](https://replit.com/badge/github/losercreates/nft-marketplace)](https://replit.com/new/github/losercreates/nft-marketplace)

## Minimal Quickstart

### 1. Git clone the repo
In it's own terminal / command line, run: 

```
https://github.com/losercreates/nft-marketplace.git
cd nft-marketplace
yarn
```
### 2. Add the `NEXT_PUBLIC_SUBGRAPH_URL` in your `.env` file.

```
NEXT_PUBLIC_SUBGRAPH_URL=https://api.studio.thegraph.com/query/37554/nft-marketplace/v0.0.1
```

### 3. Start your UI

Make sure that:
- You have a `NEXT_PUBLIC_SUBGRAPH_URL` in your `.env` file. 

```
yarn dev
```



## Full Start

### 1. Git clone the repo

In it's own terminal / command line, run: 

```
https://github.com/losercreates/nft-marketplace.git
cd nft-marketplace
yarn
```
### 2. Set up the contracts

```
cd nft-marketplace-sol-hardhat
yarn
```

Deploy:

```
yarn hardhat deploy
```
Testing

```
yarn hardhat test
```

#### Deployment to a testnet or mainnet

1. Setup environment variabltes

You'll want to set your `GOERLI_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file, similar to what you see in `.env.example`.

- `PRIVATE_KEY`: The private key of your account (like from [metamask](https://metamask.io/)). **NOTE:** FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.
  - You can [learn how to export it here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).
- `GOERLI_RPC_URL`: This is url of the goerli testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/?a=673c802981)

2. Get testnet ETH

Head over to [faucets.chain.link](https://faucets.chain.link/) and get some tesnet ETH. You should see the ETH show up in your metamask.

3. Get Etherscan API key

Head over to [etherscan.io](https://etherscan.io/) and get n api key for free. This will help you to verify the contract on etherscan
### 2. Deploy to goerli 

After installing dependencies, deploy your contracts to goerli:

```
yarn hardhat deploy --network goerli
```

### 3. Deploy your subgraph

```
cd ..
cd thegraph
yarn
```
1. Install Subgraph CLI

```
yarn global add @graphprotocol/graph-cli
```

2. Log into [the graph UI](https://thegraph.com/studio/subgraph) and create a new Subgraph.

Use Goerli as the network. 

3. Initialize Subgraph

```
graph init --studio nft-marketplace
```

4. Authenticate CLI

```
graph auth  --studio YOUR_DEPLOY_KEY_HERE
```

5. Update your `subgraph.yaml`

- Update the `address` with your NftMarketplace Address
- Update the `startBlock` with the block right before your contract was deployed

6. Build graph locally

```
graph codegen && graph build
```

- `graph codegen`: Generates code in the `generated` folder based on your `schema.graphql`
- `graph build`: Generates the build that will be uploaded to the graph

7. Deploy subgraph

Replace `VERSION_NUMBER_HERE` with a version number like `0.0.1`. 

```
graph deploy --studio nft-marketplace -l VERSION_NUMBER_HERE
```

Then, make a `.env` file in the root directory and place your temporary query URL into it as `NEXT_PUBLIC_SUBGRAPH_URL`.

## 3. Mint and list an NFT
Back in your hardhat project, mint and list an NFT with:

```
cd ..
cd nft-marketplace-sol-hardhat
yarn hardhat run scripts/mint-and-list-item.js --network goerli
cd ..
```


## 4. Start your UI

Make sure that:
- In your `networkMapping.json` you have an entry for `NftMarketplace` on the goerli network with your contract address. 
- You have a `NEXT_PUBLIC_SUBGRAPH_URL` in your `.env` file. 

```
yarn dev
```

