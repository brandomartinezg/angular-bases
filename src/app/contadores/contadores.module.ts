import { NgModule } from "@angular/core";
import { Contador } from "./contador/contado.component";

@NgModule({
    declarations:[
        Contador
    ],
    exports: [
        Contador
    ]
})
export class ContadoresModule{

}