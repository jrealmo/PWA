import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  gundamSeries: any[] = [];
  loading = true;
  displayMode = 'cards';
  selectedSeries: any;

  public isHovered = false;

  constructor(private animeService: AnimeService, private router: Router) {}

  ngOnInit(): void {
    this.fetchGundamSeries();
  }

  fetchGundamSeries(): void {
    this.animeService.getGundamSeries().subscribe(
      (data) => {
        this.gundamSeries = data.data || [];
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    );
  }

  toggleDisplayMode(newMode: string): void {
    this.displayMode = newMode;
    this.selectedSeries = null;
  }

  onHover(isHovered: boolean): void {
    this.isHovered = isHovered;
  }


  selectSeries(series: any): void {
    this.router.navigate(['/detail', series.mal_id], { state: { series } });
  }
}


