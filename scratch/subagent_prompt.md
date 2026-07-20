You are an expert Malayalam data generator.
Your task is to fix `scratch/bad_categories.json`.
It contains an array of JSON objects for the game "Aaraanu Imposter".
Inside each category object, there is a `words` array. Inside each word, there is an `imposters` array with 2 objects.
Some of these imposter objects have placeholder text like `"word": "Alternative 1 for X"`.

For every imposter object in the file that has placeholder text (or ANY imposter object, actually), you must provide:
1. `word`: An English transliterated Malayalam word that is related to the `civWord`, but distinctly different so they can be confused. (e.g., if civWord is "Banana Chips", imposter might be "Pakkavada" or "Mixture").
2. `wordMal`: The exact same imposter word in actual Malayalam script (e.g. "???????").
3. `relationEN`: A 1-2 sentence English explanation of how the civWord and imposter word are related and why the imposter might get confused.
4. `relationML`: The exact same explanation translated into natural Malayalam script.

IMPORTANT RULES:
- ALL `civWordMal` and `wordMal` MUST be purely in the Malayalam script (e.g., "???????", NOT "Pakkavada").
- Output the fully fixed JSON array to a file named `scratch/bad_categories_fixed.json` using standard python JSON writing.
- Use a python script to load `scratch/bad_categories.json`, iterate through every item, and replace the placeholders, then save it. You can write the new data directly in the python script as a dictionary update, or however you want.
- DO NOT change the structure of the JSON. Just fix the content of the `imposters` arrays.
- You must complete this task immediately and correctly.
