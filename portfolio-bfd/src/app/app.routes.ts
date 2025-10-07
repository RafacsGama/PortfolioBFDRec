import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Experiences } from './components/experiences/experiences';
import { Contact } from './components/contact/contact';
import { NgModule } from '@angular/core';
export const routes: Routes = [
    { path: '', component: Home },
    { path: 'experiences', component: Experiences },
    { path: 'contact', component: Contact },
];


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Isso faz a mágica
  anchorScrolling: 'enabled' // Opcional: permite rolar até âncoras com #id
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
