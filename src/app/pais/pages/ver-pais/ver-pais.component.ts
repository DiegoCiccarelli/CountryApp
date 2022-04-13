import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  public pais!: Country
  

  constructor( 
    private activateRoute: ActivatedRoute,
    private paisService: PaisService ) { }

  ngOnInit(): void {
    
    

    this.activateRoute.params
    .pipe(
      switchMap(params =>  this.paisService.buscarPaisPorAlpha(params.id) )
    )
    .subscribe(pais => this.pais = pais)
    
    

  }

}
