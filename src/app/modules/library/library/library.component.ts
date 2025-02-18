// src/app/modules/library/library.component.ts
import { Component } from '@angular/core';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
})
export class LibraryComponent {
  scores: any[] = [];

  constructor(private supabase: SupabaseService) {}

  async ngOnInit() {
    this.scores = await this.supabase.getScores();
  }
}