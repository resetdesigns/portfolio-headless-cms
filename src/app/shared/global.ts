import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class Global {
  public static contentfulUrl: string = `https://graphql.contentful.com/content/v1/spaces/1q8fb1hdekqp/explore?access_token=${environment.contentful.accessToken}`;
}
