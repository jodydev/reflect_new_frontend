import Logo from "../assets/images/logo.webp";
import Bitcoin from "../assets/images/bitcoin.webp";
import Ethereum from "../assets/images/ethereum.webp";

//TODO sostituire con immagini corrette
const options = [
  { id: 0, value: "Reflect", label: "Reflect", img: Logo },
  { id: 1, value: "Bitcoin", label: "Bitcoin", img: Bitcoin },
  { id: 2, value: "Ethereum", label: "Ethereum", img: Ethereum },
];

const optionsDate = [
  { id: 0, value: "3 month", label: "3 month" },
  { id: 1, value: "6 month", label: "6 month" },
  { id: 2, value: "12 month", label: "12 month" },
]

const optionsLogo = [
  { id: 0, img: Logo },
  { id: 1,  img: Bitcoin },
  { id: 2,  img: Ethereum },
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


export { options, optionsDate, optionsLogo, cardData };