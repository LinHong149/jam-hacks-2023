import cohere from 'cohere-ai';

cohere.init('AWG57MeFwJeVrRkSjIJBLLqhvh1vq9TkDTFvPL2j'); // Replace with your API key

export async function generateFact() {
  const response = await cohere.generate({
    model: 'command',
    prompt: 'Generate an interesting fact about human well-being, encompassing hygiene, eating, sleeping, studying, and exercising.',
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  });

  return response.body.generations[0].text;
}