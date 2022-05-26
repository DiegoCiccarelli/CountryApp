import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['americas', 'europe', 'asia', 'africa', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private PaisService: PaisService) {}

  ngOnInit(): void {}

  activarRegion(region: string) {
    if (this.regionActiva !== region) {
      this.regionActiva = region;
      this.paises = [];
      this.buscar();
    }
  }

  getClass(region: string) {
    return region === this.regionActiva
      ? 'btn-seleccionado'
      : 'btn-no-seleccionado';
  }

  buscar() {
    this.PaisService.buscarRegion(this.regionActiva).subscribe(
      (resp) => {
        this.paises = resp;
      },
      (error) => {
        this.paises = [];
      }
    );
  }
}
