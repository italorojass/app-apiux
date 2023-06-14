import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-apiux';

  list : any= [];
  add(form:any){
    let hoy = new Date();
    this.list.push({...form.value, isEdit : false, fecha : hoy.toLocaleDateString()});
    form.reset();
  }

  del(i:number){
    this.list.splice(i,1);
  }

  saveEdit(item:any){
    item.isEdit=false;
  }

}
