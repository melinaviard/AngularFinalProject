import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResaServiceService } from '../services/resa-service.service';

@Component({
  selector: 'app-resa2',
  templateUrl: './resa2.component.html',
  styleUrls: ['./resa2.component.css']
})
export class Resa2Component implements OnInit {

  constructor(private resaService: ResaServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }


  // Boutons du menu
  // Accueil
  public goAccueil(): void {
    this.router.navigateByUrl('');
  }
   // LouerVehicule
   public goResa(): void {
    this.router.navigateByUrl('louerVehicule');
  }
   // Contact
   public goContact(): void {
    this.router.navigateByUrl('contact');
  }
   // QuiSommesNous
   public goQuisommesnous(): void {
    this.router.navigateByUrl('infos');
  }
  // Voir ou Modifier Resa
  public goUpdateResa(): void {
    this.router.navigateByUrl('modifResa');
  }
   // se loger
   public goLogin(): void {
    this.router.navigateByUrl('login');
  }

}
