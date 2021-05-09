import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOperationsComponent } from './post-operations.component';

describe('PostOperationsComponent', () => {
  let component: PostOperationsComponent;
  let fixture: ComponentFixture<PostOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
