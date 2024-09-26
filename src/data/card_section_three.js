import AppleLogo from "../assets/images/apple_logo.png";
import GoogleLogo from "../assets/images/google_logo.png";
import AmazonLogo from "../assets/images/amazon_logo.png";

const options = [
  { id: 0, value: "option1", label: "gAMZN", img: AmazonLogo },
  { id: 1, value: "option2", label: "gAAPL", img: AppleLogo },
  { id: 2, value: "option3", label: "gGOOGL", img: GoogleLogo },
];

const cardData = [
  {
    id: 0,
    title: "Open Value 1",
    subtitle: "Deposit collateral and mint gAsset 1",
  },
  {
    id: 1,
    title: "Open Value 2",
    subtitle: "Deposit collateral and mint gAsset 2",
  },
  {
    id: 2,
    title: "Open Value 3",
    subtitle: "Deposit collateral and mint gAsset 3",
  },
];

export { options, cardData };