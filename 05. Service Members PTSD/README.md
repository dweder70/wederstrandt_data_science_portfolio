# Service Members PTSD Data Preparation

## Overview

This project focuses on data preparation for PTSD-related analysis using multiple source types.

## Objective

Build repeatable data pipelines that standardize API, HTML, and flat-file inputs into analysis-ready datasets.

## Files

- dsc540_api_wederstrandt_d_final_project.ipynb: API ingestion and transformation workflow.
- dsc540_html_wederstrandt_d_final_project.ipynb: HTML table extraction and cleaning workflow.
- dsc540_flatfile_wederstrandt_d_final_project.ipynb: Flat-file ingestion and normalization workflow.
- dsc540_final_project_wederstrandt_d.ipynb: Integrated end-to-end workflow.
- README.md: Project synopsis and reproducibility notes.

## Naming Improvement Plan

The current notebook filenames are legacy course-submission names. A future cleanup pass should rename these to method-based names such as:

- api_data_preparation_pipeline.ipynb
- html_data_preparation_pipeline.ipynb
- flatfile_data_preparation_pipeline.ipynb
- integrated_data_preparation_workflow.ipynb

## Methods

- Multi-source data extraction.
- Schema alignment across heterogeneous inputs.
- Cleaning, typing, and transformation.
- Integration into a unified analytical dataset.

## Tools

- Python
- Jupyter Notebook
- pandas, numpy, requests, parsing libraries

## How To Reproduce

1. Open each notebook in Jupyter or VS Code.
2. Install required packages.
3. Run notebooks from top to bottom in this order: API, HTML, flat file, integrated workflow.

## Outcome

The project demonstrates practical ETL-style preparation skills that support downstream modeling and analytics.
