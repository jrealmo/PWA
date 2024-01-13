import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() series: any;
  @Output() navigateToDetailClick: EventEmitter<void> =
    new EventEmitter<void>();

  getImageUrl(): string {
    if (this.series && this.series.images && this.series.images.jpg) {
      return this.series.images.webp
        ? this.series.images.webp.image_url
        : this.series.images.jpg.image_url;
    }
    return '';
  }

  navigateToDetail() {
    this.navigateToDetailClick.emit();
  }
}
