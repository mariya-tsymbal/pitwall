# Pitwall

A full-stack F1 data platform built around real race data, live timing, and AI-powered analysis.

## Overview

Pitwall is a web application that ingests, stores, and surfaces Formula 1 data — from historical race results back to the early years of the sport, to real-time telemetry during live sessions. The goal is to give fans and analysts a fast, data-rich environment to explore the sport.

The project is structured in layers: a data pipeline that pulls from public F1 APIs, a backend that models and serves that data, and a frontend that makes it useful. An AI layer sits on top for natural language queries and analysis.

## Data Sources

- **OpenF1 API** — real-time telemetry, timing during live sessions and historical data

## Tech Stack (planned)

- **Frontend:** React / TypeScript
- **Backend:** Node.js (Hono or Fastify)
- **Database:** PostgreSQL
- **Cache:** Redis
- **Queue:** BullMQ
- **AI:** Anthropic SDK / Vercel AI SDK
- **Infra:** Docker, deployed to Railway or Fly.io

## Status

Early development. Architecture and feature scope are still being defined.
