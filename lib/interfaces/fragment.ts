export interface FragmentAttributes {
  href: string;
  cache: string | null;
  primary: boolean;
}

export interface ParsedFragment {
  fragment: string;
  attributes: FragmentAttributes;
}

export interface FragmentResponse {
  id: string,
  content: string,
}
