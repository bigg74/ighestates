import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule} from '@angular/core';
import { CovalentDataTableModule } from '@covalent/core/data-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogListComponent } from './log-list/log-list.component';
import { MatIconModule } from '@angular/material/icon';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GetLogListService } from './get-log-list/get-log-list.service';
import { CovalentSearchModule } from '@covalent/core/search';
import { MatDividerModule } from '@angular/material/divider';
import { CovalentPagingModule } from '@covalent/core/paging';
import { CovalentCommonModule } from '@covalent/core/common';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NeighborsComponent } from './neighbors/neighbors.component';

@NgModule({
  declarations: [
    AppComponent,
    LogListComponent,
    SideNavComponent,
    AboutComponent,
    HomeComponent,
    NeighborsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentDataTableModule,
    BrowserAnimationsModule,
    CovalentSearchModule,
    MatDividerModule,
    CovalentPagingModule,
    CovalentCommonModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [GetLogListService],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'banwig';
}
