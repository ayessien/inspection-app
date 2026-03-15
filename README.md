# DCEO Commissioning Inspection App

A full-stack web application for tracking data center equipment commissioning inspections at BAH cluster sites (BAH52, BAH53, BAH54).

## 🚀 Features

- ✅ **User Authentication** — Email-based login with AWS Cognito
- ✅ **Inspection Submission Form** — Structured data entry with validation
- ✅ **Records Dashboard** — View and filter past inspections by Site, Phase, and Status
- ✅ **CSV Export** — Download filtered inspection records for reporting
- ✅ **Dark Professional Theme** — Optimized for data center operations
- ✅ **Real-time Data Sync** — Powered by AWS Amplify GraphQL API and DynamoDB

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Backend**: AWS Amplify (GraphQL API, DynamoDB, Cognito Authentication)
- **Styling**: Custom CSS (dark theme)
- **Hosting**: AWS Amplify Hosting

## 📋 Prerequisites

- Node.js 18+ and npm
- AWS Account
- Amplify CLI installed globally: `npm install -g @aws-amplify/cli`

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ayessien/inspection-app.git
cd inspection-app
