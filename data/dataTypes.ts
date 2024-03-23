

interface Social {
  telegram?: string;
  github?: string;
}

interface About {
  name?: string;
  role?: string;
  description?: string;
  resume?: string;
  social?: Social;
}

interface Header {
  homepage: string;
  title?: string;
}

interface Project {
  name: string;
  description: string;
  stack: string[];
  sourceCode: string;
  livePreview: string;
  image?: string;
}

interface Contact {
  email: string;
}

export type { Header, About, Project, Contact };