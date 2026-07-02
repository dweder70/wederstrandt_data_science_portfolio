# Portfolio Repository Audit

Date: 2026-07-01

## What Was Reviewed

- Top-level README and all folder-level README files
- Folder/file naming conventions
- Visible project artifacts and obvious repository clutter

## Issues Found

1. Broken or stale references in README files:
- Root README referenced non-existent folders such as Programming_Python and Data_Mining.
- Fraud project README referenced files that do not exist in the folder.
- Childcare and Generative AI READMEs listed files from other projects.

2. Naming consistency issues:
- Several items used legacy course-coded naming (for example, dsc540_*).
- Folder naming contains typographical issues (Energey, Diease).

3. Repository clutter:
- History/cache artifacts were committed (.Rhistory, __pycache__, .DS_Store).

## Changes Applied

- Rewrote root README with accurate links to current project folders.
- Rewrote README files in:
  - 05. Service Members PTSD
  - 06. Credit Card Fraud Detection Analysis
  - 08. The Real Cost of Childcare
  - 09. Email Triage Using Generative_AI
- Corrected documentation typos in:
  - 01. Energey Drink Analysis
  - 03. Housing Market Analysis
  - 04. Heart Diease Analysis
- Removed two .Rhistory files from version control.

## Remaining Cleanup Recommended

1. Rename typo-containing folders for professionalism:
- 01. Energey Drink Analysis -> 01. Energy Drink Analysis
- 04. Heart Diease Analysis -> 04. Heart Disease Analysis
- 09. Email Triage Using Generative_AI -> 09. Email Triage Using Generative AI

2. Rename legacy notebook files in 05. Service Members PTSD to method-based names.

3. Remove remaining generated artifacts:
- .DS_Store files
- __pycache__ and .pyc files

## Working/Not Working Snapshot

Working:
- Python weather application source files are present.
- Notebook and R Markdown source files for major projects are present.
- READMEs now better match actual folder contents.

Not fully working yet:
- Some folder/file names still carry typos or legacy course naming.
- Generated clutter files still remain and should be removed.

## Conclusion

The repository is now substantially closer to portfolio-ready, with major documentation breakages corrected. Final naming cleanup and generated-file removal will complete the polish pass.
