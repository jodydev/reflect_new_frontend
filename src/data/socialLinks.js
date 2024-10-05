import { BsTwitterX, BsDiscord, FaTelegramPlane } from "../utils/icons";
import React from "react";

const socialLinks = [
  {
    icon: React.createElement(BsTwitterX, { className: "h-5 w-5 md:h-6 md:w-6" }),
    url: "https://x.com/?lang=it",
  },
  {
    icon: React.createElement(BsDiscord, { className: "h-5 w-5 md:h-6 md:w-6" }),
    url: "https://discord.com/",
  },
  {
    icon: React.createElement(FaTelegramPlane, { className: "h-5 w-5 md:h-6 md:w-6" }),
    url: "https://web.telegram.org/k/",
  },
];

export { socialLinks };
