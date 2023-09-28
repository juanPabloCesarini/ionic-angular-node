import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListGatitosPage } from './list-gatitos.page';

describe('ListGatitosPage', () => {
  let component: ListGatitosPage;
  let fixture: ComponentFixture<ListGatitosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListGatitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
