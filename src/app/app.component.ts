import { Component, OnInit } from '@angular/core';
import { DataGridModule } from './data-grid';
//Importing Services
import { MockService } from './services/services';
import 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MockService]
})
export class AppComponent {
  gridData: any;
  currentPage: string = 'test';
  selected: any;
  menuExpanded: boolean = true;
  userName: string = 'Admin';
  userImg: string = 'assets/img/profile.png';
  menuList: any = [
    {
      name: 'Angular',
      link: 'test',
      icon: './assets/img/group-58.svg',
      subMenu: [
        {
          name: 'Angular',
          link: 'http://localhost:4200/',
          icon: './assets/img/group-58.svg'
        },
        {
          name: 'Angular',
          link: '',
          icon: './assets/img/group-58.svg'
        }
      ]
    },
    {
      name: 'Angular',
      link: '',
      icon: './assets/img/group-58.svg',
      subMenu: [
        {
          name: 'Angular',
          link: '',
          icon: './assets/img/group-58.svg'
        }
      ]
    },
    {
      name: 'Angular',
      link: '',
      icon: './assets/img/group-58.svg',
      subMenu: [
        {
          name: 'Angular',
          link: '',
          icon: './assets/img/group-58.svg'
        }
      ]
    },
    {
      name: 'Angular',
      link: '',
      icon: './assets/img/group-58.svg',
      subMenu: []
    }
  ];
  href: string = window.location.href;
  constructor(public mockService: MockService) {}

  select(item) {
    this.selected = this.selected === item ? null : item;
  }
  isActive(item) {
    return this.selected === item;
  }

  showConfig() {
    //this.mockService.getMock().subscribe(data => this.gridData = data);
    this.mockService.getMock().subscribe((result: any) => {
      this.gridData = result.providers;
    });
  }

  //toggle menu
  menuToggle() {
    this.menuExpanded = !this.menuExpanded;
  }
  linkMenuExpand() {
    if (!this.menuExpanded) {
      this.menuExpanded = !this.menuExpanded;
    }
  }

  ngOnInit() {
    //this.href = this.router.url;
    //console.log(this.location);
    this.showConfig();
  }
}
