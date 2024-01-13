import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  series: any = {};
  showAllDetailsFlag = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;

    if (params.has('id')) {
      const seriesId = params.get('id');

      if (seriesId) {
        const parsedId = +seriesId;

        if (!isNaN(parsedId)) {
          const seriesFromState = history.state.series;

          if (seriesFromState && seriesFromState.mal_id === parsedId) {
            this.series = seriesFromState;
            console.log('Datos de la serie:', this.series);
          } else {
            console.error('No se proporcionaron datos de la serie en la navegación.');
            // Puedes redirigir a la página principal o manejar de alguna otra manera el caso sin datos
            this.router.navigate(['/']);
          }
        } else {
          console.error('ID de la serie no válido.');
          this.router.navigate(['/']);
        }
      } else {
        console.error('ID de la serie no proporcionado.');
        this.router.navigate(['/']);
      }
    } else {
      console.error('No se proporcionaron parámetros en la URL.');
      this.router.navigate(['/']);
    }
  }

  getImageUrl(size: 'small' | 'large' = 'small'): string {
    if (this.series && this.series.images && this.series.images.webp) {
      return size === 'small' ? this.series.images.webp.small_image_url : this.series.images.webp.large_image_url;
    }
    return '';
  }

  getScorePercentage(): number {
    return this.series ? (this.series.score / 10) * 100 : 0;
  }

  goBack() {
    this.router.navigate(['/']);
  }

  showAllDetails() {
    this.showAllDetailsFlag = true;
  }

  getProducers(): string {
    if (this.series && this.series.producers) {
      return this.series.producers.map((producer: any) => producer.name).join(', ');
    }
    return 'N/A';
  }

  getGenres(): string {
    if (this.series && this.series.genres) {
      return this.series.genres.map((genre: any) => genre.name).join(', ');
    }
    return 'N/A';
  }

}






