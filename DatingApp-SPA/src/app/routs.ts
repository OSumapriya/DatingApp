import { MesaggesComponent } from './mesagges/mesagges.component';
import {Routes} from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { AuthGuard } from './_gaurds/auth.guard';


export const appRoutes: Routes = [
 { path: 'home', component: HomeComponent},
 {
   path: '',
   runGuardsAndResolvers: 'always',
   canActivate: [AuthGuard],
   children: [
    { path: 'members', component: MemberListComponent },
    { path: 'messages', component: MesaggesComponent},
    { path: 'lists', component: ListsComponent},
     ]
 },
 { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

