import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    /*
    { path: '/exemplo', component: LayoutComponent },
    { path: 'home', component: LayoutComponent } */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class BackgroundRoutingModule { }
