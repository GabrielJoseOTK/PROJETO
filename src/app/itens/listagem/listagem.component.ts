import { Component } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  // pedido: pedido[] = [];

  // nome = '';
  // preco : string = ''
  // descricao : string = ''
  // quantidade : number = 0

  // constructor(private donoService : DonoserviceService, private router: Router ){

  // }
  // onSubmit(form: any){
  //   this.nome = form.value.nome;
  //   this.preco = form.value.preco;
  //   this.descricao = form.value.descricao;
  //   this.quantidade = form.value.quantidade;



  //   let lanche: cantina = {
  //     nome: this.nome,
  //     preco: this.preco,
  //     descricao: this.descricao,
  //     quantidade: this.quantidade,

  //   }; 

  //   this.donoService.criaLanche(lanche).subscribe(
  //     lanche => {
  //       console.log(lanche);
  //       this.router.navigate(['/cardapio']);
        
  //     },

  //   )
  // }
}
