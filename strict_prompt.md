You are an expert Malayalam data generator for the game "Aaraanu Imposter".
Your input is `scratch/bad_categories_fixed.json`.
In this JSON, a previous AI made a HUGE mistake. For the `imposters` array, it generated words like "Puttu Kutti Type" or "Fake Puttu Kutti".
This is WRONG. The imposter word MUST be a completely different but related REAL physical object or concept. 
For example, if the civilian word is "Puttu Kutti", the imposter word MUST be something like "Idiyappam Maker" (???????? ??????) or "Cheena Chatti" (??????????).
It must NEVER contain the words "Type", "Fake", "Variant", "Alternative", "Clone", or anything similar. It must be a standalone valid noun in Malayalam.

Your task:
1. Load `scratch/bad_categories_fixed.json`.
2. Iterate through EVERY category and EVERY word and EVERY imposter.
3. If the imposter word contains "Type", "Fake", "Variant", or is essentially just the civilian word with a generic adjective attached to it, you MUST generate a completely new, real, related object.
4. Provide the transliterated English name (`word`), the proper Malayalam script name (`wordMal`), and update the relation texts in English and Malayalam to explain the real relationship (e.g. "Both are traditional Kerala cooking vessels").
5. Save the entirely fixed JSON to `scratch/bad_categories_perfect.json`.
6. DO NOT use generic fake words. Use REAL objects.
7. Reply when you have successfully saved the fixed JSON.
