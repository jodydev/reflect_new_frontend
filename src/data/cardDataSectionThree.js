import Logo from "../assets/images/logo.webp";
import Bitcoin from "../assets/images/bitcoin.webp";
import Ethereum from "../assets/images/ethereum.webp";

const options = [
  { id: 0, value: "Reflect", label: "Reflect", img: Logo },
  { id: 1, value: "Bitcoin", label: "Bitcoin", img: Bitcoin },
  { id: 2, value: "Ethereum", label: "Ethereum", img: Ethereum },
];

const cardData = [
  {
    id: 0,
    title: "Swap",
    subtitle: "Effortlessly exchange assets with minimal fees",
  },
  {
    id: 1,
    title: "Create",
    subtitle: "Mint new assets by depositing collateral securely",
  },
  {
    id: 2,
    title: "Stake",
    subtitle: "Stake your tokens to earn rewards and passive income",
  },
];


export { options, cardData };