# Advanced Data Science

![Track](https://img.shields.io/badge/Track-Advanced%20Data%20Science-0A9396)
![Artifacts](https://img.shields.io/badge/Artifacts-Notebook%20%7C%20Metadata%20%7C%20Dataset-005F73)
![Purpose](https://img.shields.io/badge/Purpose-Time%20Series%20Forecasting-94D2BD)

## Scope
This folder contains an advanced time-series analysis project focused on Texas electricity demand forecasting using ERCOT hourly load data.

## At A Glance
| Category | Details |
|---|---|
| Primary notebook | `texas_energy_demand_forecasting_with_ERCOT_hourly_load.ipynb` |
| Metadata reference | `ercot_metadata.txt` |
| Source dataset | `datasets/ercot_total_load_2020-2026.xlsx` |
| Focus | Hourly demand profiling, regional load structure, and one-hour-ahead benchmark forecasting |

## Objective
Build a practical, leakage-safe forecasting workflow that profiles ERCOT hourly load behavior, validates source structure, and benchmarks short-horizon prediction performance.

## Contents
- `texas_energy_demand_forecasting_with_ERCOT_hourly_load.ipynb`: End-to-end analysis notebook covering data validation, EDA, and baseline forecasting.
- `ercot_metadata.txt`: Column-level metadata notes used for schema reconciliation and data dictionary construction.
- `datasets/ercot_total_load_2020-2026.xlsx`: Consolidated hourly ERCOT load workbook (2020-2026 coverage).

## Technical Focus
- Metadata-to-source reconciliation (including `DayEnding`/`HourEnding` alignment and `NCENT` column inclusion).
- Hourly time normalization, quality checks, and feature engineering for lag-based forecasting.
- Regional demand analysis and benchmark comparison across naive and linear-regression baselines.
- Performance evaluation using MAE, RMSE, and MAPE on a holdout window.

## Notes
This directory is notebook-centric. The analytical narrative, code, visualizations, and model results are maintained primarily within the `.ipynb` artifact.

## Artifact Roles
- `.ipynb`: Full reproducible workflow from data ingestion to forecast interpretation.
- `.txt`: Human-readable metadata source used to validate and document schema assumptions.
- `.xlsx`: Core hourly load dataset used for all analysis steps.

## Review Guidance
1. Start with the notebook introduction and workflow summary.
2. Review the metadata reconciliation section before interpreting downstream visuals and forecasts.
3. Compare benchmark model outputs and read the conclusion/limitations sections for production caveats.

## Reproducibility Notes
- Run the notebook top-to-bottom to preserve feature generation order and benchmark integrity.
- Confirm the workbook path `datasets/ercot_total_load_2020-2026.xlsx` is available relative to the notebook.
- The workflow relies on common Python data packages (`pandas`, `numpy`, `matplotlib`, `openpyxl`) and avoids heavy modeling dependencies.

## Portfolio Highlight
This project demonstrates advanced data science execution across data validation, temporal feature engineering, and interpretable forecasting benchmarks for a real-world power demand use case.
