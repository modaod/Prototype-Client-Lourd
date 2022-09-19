import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { LayoutComponent } from './components/layout/layout.component';
import {SessionRoutingModule} from "./session-routing.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ChatComponent,
    LayoutComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        SessionRoutingModule
    ]
})
export class SessionModule { }
