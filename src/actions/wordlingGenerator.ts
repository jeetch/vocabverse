import Replicate from "replicate";

const replicate = new Replicate({
  auth: "r8_Tp5tbTxyqKj6Ya3WRwRDqcMmWM4P6u74GMMaB"
});



export async function wordlingGenerator(input_prompt: string){


    try{

      let prediction = await replicate.deployments.predictions.create(
        "jeetch",
        "image-generator",
        {
          input: {
            prompt: input_prompt
          }
        }
      )
      
      prediction = await replicate.wait(prediction);
      
        return prediction.output;

    }


  catch (error: any){
    return "Error!" 
  }
};