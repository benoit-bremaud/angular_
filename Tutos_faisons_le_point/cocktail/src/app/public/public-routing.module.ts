// Import des modules Angular nécessaires.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import des composants associés à chaque route.
import { HomeComponent } from './home/home.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { ContactComponent } from './contact/contact.component';

// Définition des routes avec leur chemin et composant associé.
const routes: Routes = [
  // Redirection de l'URL racine ('') vers la page d'accueil ('home') lorsque l'URL est vide ('').
  // Cela signifie que si l'utilisateur accède à l'URL racine, il sera redirigé vers la page d'accueil.
  { path: '', redirectTo: 'home', pathMatch: 'full'},

  // Route pour la page d'accueil avec le composant 'HomeComponent'.
  { path: 'home', component: HomeComponent},   // Route pour la page d'accueil

  // Route pour la page des cocktails avec le composant 'CocktailComponent'.
  { path: 'cocktail', component: CocktailComponent},  // Route pour la page des cocktails

  // Route pour la page de contact avec le composant 'ContactComponent'.
  { path: 'contact', component: ContactComponent}   // Route pour la page de contact
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Configuration des routes pour le module
  exports: [RouterModule]  // Export du module de routage pour utilisation dans d'autres parties de l'application
})

// Définition du module de routage public.
export class PublicRoutingModule { }
