## mineable_colors - a full-stack mineable NFT starter template

# What is a mineable NFT?

A mineable NFT is an NFT that must be mined to mint. Mining is the process of discovering an arbitrary number (called a "nonce") that beats the mining problem - in this case, the nonce must produce a number that is lower than some target number. Once you discover a valid nonce, you are able to mint the NFT.

# What does this template provide?

This template is a full-stack example of a simple mineable NFT. It includes a `contract` and an `app` package, which is controlled in-sync at the top-level package. The contract is the smart contract that is responsible for minting the NFTs and rendering the metadata on-chain. The app is the website that will mine for nonces and interact with the smart contract. More specifically:

Contract:

- based on OpenZeppelin's ERC-721 contract
- implements mint function that requires the mined nonce
- renders image metadata on-chain
- includes basic tests

App:

- React
- uses web workers to mine for nonces in the browser
- wallet connection
- wiring for different Ethereum environments
- minting functional
- renders images from on-chain data
- barebones UI for easy extension

# Getting started

Run `npm run start` at the top-level package to automatically set up a local node, deploy your contract, inject generated contract types into the app, and hook the app up to the local contract.

For more granular control:
`npm run local-node` - starts up local node
`npm run deploy-local` - deploys your contract to the local node. Automatically updates the app's .env.local to the new contract
`npm run compile` - compiles your contract and injects the generated types into the app
`npm run start-app` - starts the web app, restart the app if you change the contract deployment!
