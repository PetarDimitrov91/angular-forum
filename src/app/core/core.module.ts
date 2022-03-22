import {Inject, NgModule, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser, isPlatformServer} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AsideComponent} from './aside/aside.component';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from "@angular/router";
import {LocalStorage} from "./injection-token";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
  ],
  providers: [
    {
      provide: LocalStorage,
      useFactory: (platformId: Object) => {
        if (isPlatformBrowser(platformId)) {
          return window.localStorage;
        }

        if (isPlatformServer(platformId)) {
          return class implements Storage {

            length = 0;
            private data: Record<string, string> = {};

            clear(): void {
              this.data = {};
            }

            getItem(key: string): string | null {
              return this.data[key];
            }

            key(index: number): string | null {
              throw new Error("Method not implemented");
            }

            removeItem(key: string): void {
              const {[key]: removedItem, ...others} = this.data;
              this.data = others;
            }

            setItem(key: string, value: string): void {
              this.data[key] = value;
            }
          }
        }
        throw Error('Not Implemented')
      },
      deps: [PLATFORM_ID]
      // useValue: window.localStorage
    }
  ]
})

export class CoreModule {
}
