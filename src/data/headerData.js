const isMobile = window.innerWidth < 768; 
const headerDropdownOptions = ["Swap", "Create", "Stake"];

const headerOptions = [
  { name: "How it works?", link: isMobile ? "#card_section_one" : "#section_one" },
  { name: "News", link: "#card-news" },
  { name: "Partners", link: "#section_six" },
  { name: "Contact", link: isMobile ? "#social" : "#footer" },
];

export { headerOptions, headerDropdownOptions };