// openai.service.ts

import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OpenAIService {
  private apiUrl: any = environment.API_URL
  private apiKey: any  = environment.API_KEY;

  constructor() {}

  async getResponse(prompt: string): Promise<any> {
    console.log('Making request to OpenAI API')
    console.log(this.apiKey, this.apiUrl)
    console.log(prompt)
    try {
      const response = await axios.post(
        this.apiUrl,
        {
          prompt: prompt,
          max_tokens: 100, // You can adjust the parameters as needed
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error making request to OpenAI API', error);
      throw error;
    }
  }
}
