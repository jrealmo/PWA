import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() series: any;
  @Output() navigateToDetailClick: EventEmitter<void> =
    new EventEmitter<void>();

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  constructor(private router: Router) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource([this.series]);
  }

  getImageUrl(): string {
    if (this.series && this.series.images && this.series.images.jpg) {
      return this.series.images.jpg.small_image_url;
    }
    return '';
  }

  navigateToDetail() {
    this.navigateToDetailClick.emit();
  }
}
