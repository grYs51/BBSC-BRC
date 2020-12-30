import { TestBed } from '@angular/core/testing';

import { DiscordLoginService } from './discord-login.service';

describe('DiscordLoginService', () => {
  let service: DiscordLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscordLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
