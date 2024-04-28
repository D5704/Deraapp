import { NgModule } from '@angular/core'; // Importation du décorateur NgModule
import { BrowserModule } from '@angular/platform-browser'; // Importation du module de navigateur
import { FormsModule } from '@angular/forms'; // Ajout de FormsModule pour les formulaires
import { AppRoutingModule } from './app-routing.module'; // Module de routage
import { AppComponent } from './app.component'; // Composant racine
import { DeraComponent } from './dera/dera.component'; // Autre composant
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Module de Bootstrap

@NgModule({
  declarations: [
    AppComponent, // Déclaration du composant racine
    DeraComponent // Déclaration d'un autre composant
  ],
  imports: [
    BrowserModule, // Permet à Angular de fonctionner dans un navigateur
    AppRoutingModule, // Module de routage
    NgbModule, // Module pour Bootstrap
    FormsModule // Module pour la gestion des formulaires
  ],
  providers: [], // Utilisé pour l'injection de dépendances
  bootstrap: [AppComponent] // Composant qui démarre l'application
})
export class AppModule {} // Fermeture correcte de la classe
