import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { InscriptionComponent } from './inscription'
import { ReactComponent } from './react';
import { ProfileComponent } from './profile';
import { EvenementComponent } from './evenement';
// import { angularProfileCard } from '../../components/main-profile/index';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'posts', loadChildren: './posts#PostsModule' },
  { path: 'profile', component: ProfileComponent },
  { path: 'react', component: ReactComponent },
  { path: 'evenement', component: EvenementComponent },
  { path: '**',    component: NoContentComponent },
];
