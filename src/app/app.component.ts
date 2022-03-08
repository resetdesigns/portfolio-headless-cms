import { Component, OnInit } from '@angular/core';
import { Global } from './shared/global';

import { Entry } from 'contentful';

import { Page } from './shared/contentful/page';
import { ContentfulApiService } from './shared/contentful/contentful-api.service';

const GET_PAGE_DATA = `
  query GetPageData($slug: String!) {
    structurePageCollection (
      limit:1
      where:{slug: $slug}
    ) {
      items {
        sys {
          id
        }
      }
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio-headless-cms';
  pages: Array<Entry<Page>>;
  fetchComplete: boolean = false;

  constructor(private contentfulApiService: ContentfulApiService) {}

  ngOnInit() {
    // this.getPageData();
    this.contentfulApiService
      .getPages()
      .then((Page) => (this.pages = Page.items));
  }

  getPageData() {
    fetch(Global.contentfulUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        query: GET_PAGE_DATA,
        variables: {
          slug: 'homepage',
        },
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        // Work with JSON data here
        console.log(data);
      })
      .catch((err) => {
        // Do something for an error here
        console.log('Error Reading data ' + err);
      });
    // .then((res) => res.json())
    // .then((result) => {
    //   console.log(result);
    // });
    console.log('test');
  }
}
