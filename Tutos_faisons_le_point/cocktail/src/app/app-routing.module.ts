// Import des modules Angular nécessaires.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './_utils/error/error.component';
import { AuthGuard } from './_helpers/auth.guard';

// Définition des routes avec leurs paramètres.
const routes: Routes = [
  {
    path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) 
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AuthGuard]
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuration des routes pour le module racine.
  exports: [RouterModule] // Export du module de routage pour utilisation dans d'autres parties de l'application.
})
export class AppRoutingModule { } // Définition du module de routage principal.
