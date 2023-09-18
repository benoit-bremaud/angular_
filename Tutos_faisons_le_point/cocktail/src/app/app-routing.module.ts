// Import des modules Angular nécessaires.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Définition des routes avec leurs paramètres.
const routes: Routes = [
  {
    path: '', // Chemin correspondant à l'URL racine.

    // loadChildren permet de charger le module de manière paresseuse (à la demande).
    // Il renvoie une fonction qui effectue une importation dynamique du 'PublicModule'.
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)

    // L'importation dynamique ('import()') charge le module à la demande et renvoie une Promise.
    // La méthode 'then' de la Promise se résout au 'PublicModule' lorsqu'il est chargé.
    // 'm => m.PublicModule' associe le module résolu à 'PublicModule'.

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuration des routes pour le module racine.
  exports: [RouterModule] // Export du module de routage pour utilisation dans d'autres parties de l'application.
})
export class AppRoutingModule { } // Définition du module de routage principal.
