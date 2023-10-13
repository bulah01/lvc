import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    { src: 'assets/images/java.png', alt: 'Image 1' },
    { src: 'assets/images/c.png', alt: 'Image 2' },
    { src: 'assets/images/python.png', alt: 'Image 3' },
    { src: 'assets/images/sql.png', alt: 'Image 4' }
  ];
}
