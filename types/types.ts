type MediaDetailsSize = {
  sourceUrl: string;
  width: string;
  height: string;
};

type MediaDetails = {
  file: string;
  sizes: MediaDetailsSize[];
};

type FeaturedImageNode = {
  mediaDetails: MediaDetails;
};

type CategoryNode = {
  name: string;
  slug: string;
};

export type PostNode = {
  date: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    node: FeaturedImageNode;
  };
  categories: {
    nodes: CategoryNode[];
  };
};

export type Posts = {
  nodes: PostNode[];
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
  };
};

export type Data = {
  posts: Posts;
};

type DebugLog = {
  type: string;
  message: string;
};

type Extensions = {
  debug: DebugLog[];
};

type GraphQLResponse = {
  data: Data;
  extensions: Extensions;
};

export type Taxonomy = {
  key: string
  value: string
} | null