/**
 * This model represents our Page content type in Contentful and
 * the expected response type from their API. Each property
 * in this model corresponds to a "name" of a field in our Page
 * content type.
 */
export interface Page {
  internalTitle: string;
  slug: string;
  rows: Array<string>;
}
