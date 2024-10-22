import Logo from "../assets/images/logo.webp";
import Bitcoin from "../assets/images/bitcoin.webp";
import Ethereum from "../assets/images/ethereum.webp";
import Amazon from "../assets/images/amazon.png";
import Apple from "../assets/images/apple.png";
import Google from "../assets/images/google.png";

const options = [
  { id: 0, value: "gAMZN", label: "gAMZN", img: Amazon },
  { id: 1, value: "gAAPL", label: "gAAPL", img: Apple },
  { id: 2, value: "gGOOGL", label: "gGOOGL", img: Google },
];

const optionsRatio = [
  { id: 0, value: "120%", label: "120%" },
  { id: 1, value: "150%", label: "150%" },
  { id: 2, value: "200%", label: "200%" },
]

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
    subtitle: "Effortlessly exchange unique assets with minimal fees",
  },
  {
    id: 1,
    title: "Create",
    subtitle: "Earn investing in new assets by depositing collateral securely",
  },
  {
    id: 2,
    title: "Stake",
    subtitle: "Stake your tokens to earn rewards and passive income",
  },
];


export { options, optionsDate, optionsRatio, optionsLogo, cardData };