import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { BuildCarFormComponent } from './components/build-car-form/build-car-form.component';
import { ButtonBlockComponent } from './components/form/button-block/button-block.component';
import { CardComponent } from './components/form/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ExteriorComponent } from './components/form/exterior/exterior.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { CustomImageComponent } from './custom-image/custom-image.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuildCarFormComponent,
    ButtonBlockComponent,
    CardComponent,
    CarouselComponent,
    ExteriorComponent,
    ProgressbarComponent,
    CustomImageComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
