type landingData = {
  src: string;
  title: string;
  description: string;
};

type landingDataWithLink = landingData & {
  linkText: string;
  linkHref: string;
};

export const FEATURE_DATA: landingDataWithLink[] = [
  {
    src: "/landing-search3.png",
    title: "Trustworthy and Verified Listings",
    description:
      "Discover the best rental options with user reviews and ratings.",
    linkText: "Explore",
    linkHref: "/explore",
  },
  {
    src: "/landing-search2.png",
    title: "Browse Rental Listings with Ease",
    description:
      "Get access to user reviews and ratings for a better understanding of rental options.",
    linkText: "Search",
    linkHref: "/search",
  },
  {
    src: "/landing-search1.png",
    title: "Simplify Your Rental Search with Advanced",
    description:
      "Find trustworthy and verified rental listings to ensure a hassle-free experience.",
    linkText: "Discover",
    linkHref: "/discover",
  },
];

export const DISCOVER_DATA: landingData[] = [
  {
    src: "/landing-icon-wand.png",
    title: "Search for Properties",
    description:
      "Browse through our extensive collection of rental properties in your desired location.",
  },
  {
    src: "/landing-icon-calendar.png",
    title: "Book Your Rental",
    description:
      "Once you have found the perfect rental property, easily book it online with just a few clicks.",
  },
  {
    src: "/landing-icon-heart.png",
    title: "Enjoy your New Home",
    description:
      "Move into your new rental property and start enjoying your dream home.",
  },
];
