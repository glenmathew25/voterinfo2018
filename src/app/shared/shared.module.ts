import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatDialogModule
} from "@angular/material";

import { SharedRoutingModule } from "./shared-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule
  ],
  declarations: [],
  exports: [MatToolbarModule, MatButtonModule, MatMenuModule, MatDialogModule]
})
export class SharedModule {}
