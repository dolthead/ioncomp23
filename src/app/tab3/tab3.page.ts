import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private http: HttpClient) {
  }

  url = 'https://pokeapi.co/api/v2/pokemon?limit=1000'; // download all 964!
  list: any[] = [];
  filteredList: any[] = [];
  searchTerm = '';
  isLoading = false;

  ngOnInit() {
    this.isLoading = true;
    this.http.get<any>(this.url)
      .pipe(take(1))
      .subscribe(pokeData => {
        this.list = pokeData.results;
        this.list.sort((a: any, b: any) => a.name > b.name ? 1 : -1);
        this.filteredList = structuredClone(this.list);
        this.isLoading = false;
      });
  }

  filterItems(event: any) {
    console.log('filtering items...');
    this.isLoading = true;
    const text = event.srcElement.value.trim().toLowerCase();
    this.filteredList = text
      ? this.list.filter(item => item.name.toLowerCase().includes(text))
      : structuredClone(this.list);
    this.isLoading = false;
    // this.filteredList = this.searchTerm.trim()
    //   ? this.list.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    //   : structuredClone(this.list);
    // this.filteredList.forEach(item => item.hideMe = this.searchTerm.trim() // if search term is empty, include all items
    //   && !item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
