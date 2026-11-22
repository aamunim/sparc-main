/**
 * The apps that live on SPARC subdomains.
 * Edit names, descriptions and URLs here; the homepage and reports page read from this list.
 */
export type SparcApp = {
  slug: string;
  name: string;
  description: string;
  url: string;
};

export const apps: SparcApp[] = [
  {
    slug: "app-one",
    name: "App One",
    description: "Short description of the first app.",
    url: "https://app1.example.com",
  },
  {
    slug: "app-two",
    name: "App Two",
    description: "Short description of the second app.",
    url: "https://app2.example.com",
  },
  {
    slug: "app-three",
    name: "App Three",
    description: "Short description of the third app.",
    url: "https://app3.example.com",
  },
  {
    slug: "app-four",
    name: "App Four",
    description: "Short description of the fourth app.",
    url: "https://app4.example.com",
  },
];
