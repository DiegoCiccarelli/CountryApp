import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  public termino: string=""
  public hayError: boolean = false
  public paises: Country[] = []
  constructor(private PaisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.termino=termino
    this.hayError = false
    this.PaisService.buscarPais(this.termino)
    .subscribe((resp) => {
      
      this.paises=resp
      console.log(this.paises)
    }

      , (error)=>{
        this.hayError=true
        //console.log(error)
        this.paises=[]

      })
      
     
    
  }

  sugerencias( termino: string){
    this.hayError=false
    
  }

}
