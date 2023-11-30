// import { OpenAI } from "langchain/llms/openai";
// import {
//   ChatPromptTemplate,
//   HumanMessagePromptTemplate,
//   PromptTemplate,
//   SystemMessagePromptTemplate,
// } from "langchain/prompts";
// import { LLMChain } from "langchain/chains";
// import { ChatOpenAI } from "langchain/chat_models/openai";


// export async function promptTemplateCall(product: string, openaikey: string){


//     try{
//         const model = new OpenAI({openAIApiKey: openaikey, temperature: 0.1 });
//         const template = `The GPT is designed to create imaginative prompts for Stable Diffusion, using GRE vocabulary words as inspiration. It describes either real or fictional animals, or fusions of animals, in an anime pixel art style, 
//         which are ideal for Stable Diffusion and game development. The output should be a JSON:

//         {{
//             "prompt": "Image of a Pokémon-like animal in anime pixel art style on a transparent background, [prompt with details of the real life animal or fusion of animals, include characteristics, colors and details for image generation]",
//             "name": "[Imaginary name of the creature related to the meaning of the word]",
//             "description": "[Brief, imaginative description of the creature, highlighting unique features or abilities]",
//             "actual_meaning": "[The GRE word and its definition]",
//             "sentence": "[The GRE word used in a creative sentence]",
//             "product": "{product}"
//           }}
        
//         The GPT maintains a casual, engaging tone and seeks clarification on ambiguous words to ensure the essence of the GRE word is effectively captured in the concept of the animal.

//         Generate the output for {product}
//         `;
//         const prompt = new PromptTemplate({ template, inputVariables: ["product"] });
//         const chainA = new LLMChain({ llm: model, prompt });
//         const res = await chainA.call({ product: product });
//         return res.text;

//     }


//   catch (error: any){
//     return "Error: " + error.message
//   }
// };

import { OpenAI } from "openai";

export async function promptTemplateCall(product: string, openaiKey: string) {
    try {
        const openai = new OpenAI({apiKey: openaiKey, dangerouslyAllowBrowser: true});

        const prompt = `The GPT is designed to create imaginative prompts for Stable Diffusion, using GRE vocabulary words as inspiration. It describes either real or fictional animals, or fusions of animals, in an anime pixel art style, 
        which are ideal for Stable Diffusion and game development. The output should be a JSON:

        {{
            "prompt": "Image of a Pokémon-like animal in anime pixel art style on a transparent background, [prompt with details of the real life animal or fusion of animals, include characteristics, colors and details for image generation]",
            "name": "[Imaginary name of the creature related to the meaning of the word]",
            "description": "[Brief, imaginative description of the creature, highlighting unique features or abilities]",
            "actual_meaning": "[The GRE word and its definition]",
            "sentence": "[The GRE word used in a creative sentence]",
            "product": "${product}"
        }}
        
        The GPT maintains a casual, engaging tone and seeks clarification on ambiguous words to ensure the essence of the GRE word is effectively captured in the concept of the animal.

        Generate the output for ${product}
        `;

        const response = await openai.completions.create({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.1,
            max_tokens: 150, // Adjust this value as needed
        });

        return response.choices[0].text;
    } catch (error: any) {
        return "Error: " + error.message;
    }
}
