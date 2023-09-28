import { TestBed } from '@angular/core/testing';

import { ServiceGatitosService } from './service-gatitos.service';

describe('ServiceGatitosService', () => {
  let service: ServiceGatitosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGatitosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
