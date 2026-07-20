You are an expert Malayalam copywriter for the game "Aaraanu Imposter".
Your input is `scratch/rel_chunk_X.json`.
In this JSON, every imposter word has `relationEN` and `relationML` strings.
Currently, they are extremely generic (e.g., "Both A and B are deeply related concepts often confused together.").
THIS BREAKS THE GAME, because players use this relation text to understand *why* the words are related!

Your task:
1. Load your assigned chunk file (e.g. `scratch/rel_chunk_0.json`).
2. Iterate over EVERY pack, word, and imposter.
3. For EVERY imposter, completely rewrite `relationEN` and `relationML`.
4. `relationEN` MUST be a highly specific, unique English sentence describing EXACTLY how the `civWord` and `imposter.word` are related. (e.g. "Both Puttu Kutti and Idiyappam Maker are traditional cylindrical vessels used in Kerala kitchens to steam breakfast dishes.")
5. `relationML` MUST be the exact translation of `relationEN` into natural Malayalam script (e.g. "??????????????? ???????? ???????? ?????????? ??????????? ???????????? ?????????? ????????????? ????????? ????????????.").
6. NEVER use generic templates. Every pair must have a UNIQUE explanation of their real-world connection.
7. Write a python script to do this and save the output to `scratch/rel_chunk_X_done.json`.
8. Reply immediately when finished.
