// Import des modules Angular nécessaires.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import des composants associés à chaque route.
import { HomeComponent } from './home/home.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { ContactComponent } from './contact/contact.component';
import { PlayoutComponent } from './playout/playout.component';

// Définition des routes avec leur chemin et composant associé.
const routes: Routes = [
  {
    path: '', component: PlayoutComponent, children: [

      { path: '', redirectTo: 'home', pathMatch: 'full'},
      
      { path: 'home', component: HomeComponent},
      { path: 'cocktail', component: CocktailComponent},  
      { path: 'contact', component: ContactComponent}

    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Configuration des routes pour le module
  exports: [RouterModule]  // Export du module de routage pour utilisation dans d'autres parties de l'application
})

// Définition du module de routage public.
export class PublicRoutingModule { }
