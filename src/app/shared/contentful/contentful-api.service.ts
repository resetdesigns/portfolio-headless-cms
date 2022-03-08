import { Injectable } from '@angular/core';
import {
  ContentfulClientApi,
  Entry,
  EntryCollection,
  createClient,
} from 'contentful';

import { environment } from '../../../environments/environment';
import { Page } from './page';

@Injectable({
  providedIn: 'root',
})
export class ContentfulApiService {
  private clientApi: ContentfulClientApi;

  constructor() {
    this.clientApi = createClient({
      space: environment.contentful.space,
      accessToken: environment.contentful.accessToken,
    });
  }

  /**
   * Get a page by its slug
   *
   * @param slug The slug for the page
   */
  getPage(slug: string): Promise<Entry<Page>> {
    return this.getPages({
      'fields.slug': slug,
    }).then((response) => response.items[0]);
  }

  /**
   * Get listing of all pages
   *
   * @param query Filter object
   */
  getPages(query?: object): Promise<EntryCollection<Page>> {
    return this.clientApi.getEntries<Page>(
      Object.assign({}, query, { content_type: 'structurePage' })
    );
  }
}
