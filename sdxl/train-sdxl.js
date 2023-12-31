const Replicate = require("replicate");
const dotenv = require('dotenv');

dotenv.config();

const replicate = new Replicate({
  auth: 'r8_Tp5tbTxyqKj6Ya3WRwRDqcMmWM4P6u74GMMaB',
});

async function main() {
  const training = await replicate.trainings.create(
    'stability-ai',
    'sdxl',
    '39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b',
    {
      destination: 'jeetch/vocabverse-wordlings',
      input: {
        input_images: 'https://github.com/jeetch/vocabverse/raw/main/sdxl/wordlings_dataset_v1.zip'
      }
    });
  // console.log(`URL: https://replicate.com/p/${training.id}`);
}

main();
