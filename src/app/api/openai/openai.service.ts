// // openai.service.ts

// import { Injectable } from '@angular/core';
// import OpenAI from "openai";
// import axios from 'axios';
// import { environment } from '../../../environments/environment';

// @Injectable({
//   providedIn: 'root',
// })
// export class OpenAIService {
//   public openai: any = new OpenAI();
//   // private apiUrl: any = environment.API_URL
//   // private apiKey: any  = environment.API_KEY;

//   constructor() {}


//   async getResponse(prompt: string) {
//     console.log('Making request to OpenAI API')
//     console.log(prompt)
//     const completion = await this.openai.chat.completions.create({
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful assistant."
//         }
//       ],
//       model: "gpt-3.5-turbo-16k",
//     });
//     console.log(completion.choices[0]);
//     return completion
//   }

// }
// //   async getResponse(prompt: string): Promise<any> {
// //     console.log('Making request to OpenAI API')
// //     console.log(this.apiKey, this.apiUrl)
// //     console.log(prompt)
// //     try {
// //       const response = await axios.post(
// //         this.apiUrl,
// //         {
// //           prompt: prompt,
// //           max_tokens: 100, // You can adjust the parameters as needed
// //         },
// //         {
// //           headers: {
// //             'Content-Type': 'application/json',
// //             'Authorization': `Bearer ${this.apiKey}`,
// //           },
// //         }
// //       );
// //       return response.data;
// //     } catch (error) {
// //       console.error('Error making request to OpenAI API', error);
// //       throw error;
// //     }
// //   }
// // }
// // import OpenAI from "openai";

// // const openai = new OpenAI({
// //   apiKey: process.env.OPENAI_API_KEY,
// // });

// // const response = await openai.chat.completions.create({
// //   model: "gpt-3.5-turbo-16k",
// //   messages: [
// //     {
// //       "role": "system",
// //       "content": [
// //         {
// //           "text": "You are to translate all phrases to spanish.",
// //           "type": "text"
// //         }
// //       ]
// //     }
// //   ],
// //   temperature: 1,
// //   max_tokens: 256,
// //   top_p: 1,
// //   frequency_penalty: 0,
// //   presence_penalty: 0,
// // });