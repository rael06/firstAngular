import { Component, OnInit } from "@angular/core";
import { DonneesService } from '../../services/donnees.service';

@Component({
	selector: "app-utilisateur",
	templateUrl: "./utilisateur.component.html",
	styleUrls: ["./utilisateur.component.sass"]
})
export class UtilisateurComponent implements OnInit {
	
	nom: string;
	age: number;
	email: string;
	hobby: hobby;
	
	constructor(private donnees: DonneesService) { 
		this.nom = "Rael";
		this.age = 36;
		this.email = "rael06@hotmail.fr";
		this.hobby = {
			hobbyUn: 'Basket',
			hobbyDeux: 'lire',
			hobbyTrois: 'apprendre'
		}
	}

	ngOnInit() {}

	onClick() {
		alert("Aucune information supplémentaire pour le moment");
	}

}

interface hobby {
	hobbyUn: string;
	hobbyDeux: string;
	hobbyTrois: string;
}
