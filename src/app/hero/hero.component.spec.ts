import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroComponent } from "./hero.component"

describe ('HeroComponent Tests', () => {

    let fixture: ComponentFixture<HeroComponent>
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    fixture = TestBed.createComponent(HeroComponent);
    fixture.componentInstance.hero = { id:1, name: 'SuperHero', strength: 3};
    fixture.detectChanges();
    });

    it('should have the correct hero', () => {

        expect(fixture.componentInstance.hero.name).toEqual('SuperHero');
    });

    it('should render the hero name in an anchor tag', () => {
        
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperHero');
    })
})