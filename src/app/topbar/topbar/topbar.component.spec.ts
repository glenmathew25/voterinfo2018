import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TopbarComponent } from "./topbar.component";
import { MockComponent } from "ng2-mock-component";
import { By } from "@angular/platform-browser";
import { DebugElement } from "../../../../node_modules/@angular/core";

describe("TopbarComponent", () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopbarComponent,
        MockComponent({ selector: "app-status" }),
        MockComponent({ selector: "app-menu" }),
        MockComponent({ selector: "mat-toolbar" })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  /* it("should have an 'app-menu' component", async(() => {
    expect(element.query(By.css("app-menu"))).not.toBeNull();
  }));
  it("should have an 'app-status' component", async(() => {
    expect(element.query(By.css("app-status"))).not.toBeNull();
  }));*/

  it("should have an 'mat-toolbar' component", async(() => {
    expect(element.query(By.css("mat-toolbar"))).not.toBeNull();
  }));
});
