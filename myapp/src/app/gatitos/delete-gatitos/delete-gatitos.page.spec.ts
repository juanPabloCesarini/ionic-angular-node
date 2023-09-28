import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteGatitosPage } from './delete-gatitos.page';

describe('DeleteGatitosPage', () => {
  let component: DeleteGatitosPage;
  let fixture: ComponentFixture<DeleteGatitosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteGatitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
