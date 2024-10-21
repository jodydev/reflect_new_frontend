import { BsTwitterX, BsDiscord, FaTelegramPlane } from "../utils/icons";
import React from "react";

const socialLinks = [
  {
    icon: React.createElement(BsTwitterX, { className: "h-5 w-5 md:h-6 md:w-6" }),
    url: "https://x.com/RFLOnBase",
  },
  {
    icon: React.createElement(BsDiscord, { className: "h-5 w-5 md:h-6 md:w-6" }),
    url: "https://discord.com/invite/rflonbase",
  },
  {
    icon: React.createElement(FaTelegramPlane, { className: "h-5 w-5 md:h-6 md:w-6" }),
    url: "https://t.me/reflect_rfl",
  },
];

export { socialLinks };
