# Conversational AI Platform

This repository contains a simple modular platform that connects a voice channel (e.g., Genesys) to a Dialogflow CX agent with analytics and a dashboard.

## Structure
- **backend** – Express + TypeScript API exposing NLU and analytics endpoints.
- **frontend** – React dashboard with Recharts.
- **dialogflow-agent-sample** – Importable Dialogflow CX agent JSON.
- **architect-flow-sample** – Example Genesys Architect flow YAML.

## Quick start

```bash
npm install --prefix backend
npm test --prefix backend
npm install --prefix frontend
npm run build --prefix frontend
```

Use `docker-compose up --build` to run the stack with PostgreSQL.
