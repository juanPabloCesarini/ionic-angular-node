import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailGatitosPage } from './detail-gatitos.page';

describe('DetailGatitosPage', () => {
  let component: DetailGatitosPage;
  let fixture: ComponentFixture<DetailGatitosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailGatitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
