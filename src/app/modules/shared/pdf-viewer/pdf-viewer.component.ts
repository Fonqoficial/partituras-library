// src/app/modules/shared/pdf-viewer/pdf-viewer.component.ts
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
})
export class PdfViewerComponent {
  @ViewChild('pdfCanvas') pdfCanvas!: ElementRef;
  @Input() pdfUrl!: string;

  async ngAfterViewInit() {
    if (this.pdfUrl) {
      const loadingTask = pdfjsLib.getDocument(this.pdfUrl);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = this.pdfCanvas.nativeElement;
      const context = canvas.getContext('2d');
      
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      
      page.render({ canvasContext: context, viewport });
    }
  }
}