// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "long any trumpet man utility name frame helmet canyon beauty call round",
  "https://rinkeby.infura.io/v3/44e5a45a32eb4befa97a3db8411dcecd"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("list og accounts", accounts[0]);
  const res = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("deployed address: ", res.options.address);
  provider.engine.stop();
};

deploy();
