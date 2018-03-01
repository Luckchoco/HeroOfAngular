import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { HeroDetailComponent } from './components/app/hero-detail.component';


import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './components/app/dashboard.component';
import { HeroesComponent } from './components/app/heroes.component';
import { HeroService } from './components/app/hero.service';
import { AppRoutingModule } from './components/app/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        HeroDetailComponent,

        DashboardComponent,
        HeroesComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,

        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModuleShared {
}
