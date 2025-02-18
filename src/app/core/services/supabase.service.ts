// src/app/core/services/supabase.service.ts
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabase: SupabaseClient;
          client:SupabaseClient;
  constructor() {
    this.client = createClient(
      'SUPABASE_URL',
      'SUPABASE_ANON_KEY'
    );
    this.supabase = createClient(
      'SUPABASE_URL',
      'SUPABASE_ANON_KEY'
    );
  }

  // Ejemplo: Obtener partituras
  async getScores() {
    const { data, error } = await this.supabase
      .from('scores')
      .select('*');
    return data || [];
  }
}