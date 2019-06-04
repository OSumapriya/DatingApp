import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MesaggesComponent } from './mesagges/mesagges.component';
import {Routes} from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_gaurds/auth.guard';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';


export const appRoutes: Routes = [
 { path: 'home', component: HomeComponent},
 {
   path: '',
   runGuardsAndResolvers: 'always',
   canActivate: [AuthGuard],
   children: [
    { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver} },
    {path: 'members/:id', component: MemberDetailComponent,
    resolve: {user: MemberDetailResolver}},
    { path: 'messages', component: MesaggesComponent},
    { path: 'lists', component: ListsComponent},
     ]
 },
 { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

