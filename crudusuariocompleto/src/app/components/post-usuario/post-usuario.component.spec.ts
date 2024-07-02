import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUsuarioComponent } from './post-usuario.component';

describe('PostusuarioComponent', () => {
  let component: PostUsuarioComponent;
  let fixture: ComponentFixture<PostUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
