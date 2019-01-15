import { TestBed } from '@angular/core/testing';

import { LinksApiClientService } from './links-api-client.service';

describe('LinksApiClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinksApiClientService = TestBed.get(LinksApiClientService);
    expect(service).toBeTruthy();
  });
});
