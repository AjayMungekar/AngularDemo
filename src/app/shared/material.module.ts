import { NgModule } from "@angular/core";

import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  imports: [MatTableModule, MatIconModule, MatInputModule],
  exports: [MatTableModule, MatIconModule, MatInputModule]
})
export class MaterialModule {}
