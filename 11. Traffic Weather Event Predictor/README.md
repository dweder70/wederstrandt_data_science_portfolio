# San Antonio Traffic, Weather, and Event Prediction

![Track](https://img.shields.io/badge/Track-Traffic%20Prediction-0A9396)
![Artifacts](https://img.shields.io/badge/Artifacts-Notebook%20%7C%20API%20Data-005F73)
![Purpose](https://img.shields.io/badge/Purpose-Contextual%20Forecasting-94D2BD)

## Scope

This project evaluates whether San Antonio traffic demand can be explained by a combination of historical roadway activity, weather conditions, and event-driven travel surges. The analysis uses publicly available transportation, climate, and event datasets to build a practical context-aware prediction workflow.

## At A Glance

| Category | Details |
| --- | --- |
| Primary notebook | `traffic_weather_event_predictor.ipynb` |
| Traffic source | TxDOT AADT public feature service |
| Weather source | NOAA climate observations |
| Event source | Ticketmaster event API |
| Focus | Daily demand explanation and contextual prediction signals |

## Objective

Assess whether external variables such as precipitation and event density improve the interpretation of traffic demand beyond routine commuting patterns. The project emphasizes data acquisition, feature preparation, and interpretable model evaluation rather than a purely black-box forecasting approach.

## Contents

- `traffic_weather_event_predictor.ipynb`: End-to-end project notebook covering traffic acquisition, weather preparation, event aggregation, and prediction analysis.
- `data/`: Local working directory generated during execution for cleaned and intermediate data artifacts.

## Technical Focus

- Traffic baseline creation using TxDOT annual average daily traffic records
- Weather feature construction from NOAA daily station observations
- Ticketmaster event aggregation to identify activity spikes by date
- Merge-ready dataset preparation for contextual traffic analysis
- Visual and metric-based model interpretation to evaluate feature relevance

## Data Sources

- TxDOT AADT: roadway traffic volumes for San Antonio stations
- NOAA climate records: daily precipitation and temperature observations for a station in the San Antonio area
- Ticketmaster API: event listings and venue metadata used as a proxy for public demand surges

## Environment Requirements

Before running the notebook, set the following environment variables or store them in a local `.env` file:

- `NOAA_TOKEN`
- `TICKETMASTER_API_KEY`

The notebook attempts to load these automatically from the working directory or parent directories if they are stored in a `.env` file.

## Workflow Overview

1. Download and clean the TxDOT traffic dataset to create a reliable baseline target variable.
2. Pull daily weather data and convert it into a merge-ready table with precipitation and temperature features.
3. Retrieve San Antonio event data from Ticketmaster and aggregate it by date.
4. Combine the traffic, weather, and event inputs to evaluate whether external contextual features explain traffic variation.
5. Review model metrics and visualizations to interpret the strength of the signals.

## Reproducibility Notes

- Run the notebook top-to-bottom to preserve the intended data preparation sequence.
- Ensure a valid internet connection is available for the public APIs.
- Confirm that the notebook is running from a working directory where the `data` folder can be created.
- The analysis uses common Python packages such as `pandas`, `numpy`, `matplotlib`, `seaborn`, and `requests`.

## Portfolio Highlight

This project demonstrates a realistic transportation analytics workflow using publicly available datasets and context signals that are frequently missing in purely route-based traffic models. It is a strong example of building an interpretable, data-driven project around real-world operational questions in urban mobility analysis.
