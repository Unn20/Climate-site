import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarComponent} from './navbar.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            imports: [RouterTestingModule, TranslateModule.forRoot()]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should change logo as response to site width', () => {
        component.innerWidth = 1600;
        component.setLogo();
        const oldLogoPath = component.logoPath;
        component.innerWidth = 1200;
        component.setLogo();
        expect(component.logoPath).toEqual(oldLogoPath);
        component.innerWidth = 699;
        component.setLogo();
        expect(component.logoPath).not.toEqual(oldLogoPath);
    });
});
