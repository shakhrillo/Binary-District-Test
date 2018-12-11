import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { JumbotronComponent } from './shared/components/jumbotron/jumbotron.component';
import { CardComponent } from './shared/components/card/card.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NewsDetailComponent } from './views/news-detail/news-detail.component';
import { NewsListComponent } from './views/news-list/news-list.component';
import { RoutesModule } from './routes.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    CardComponent,
    FooterComponent,
    NewsDetailComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
