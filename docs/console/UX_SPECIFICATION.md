# Core Console UX Specification

## Purpose

Core Console is the Control Plane interface of Core Platform.

It is not an administration dashboard. It provides operators and technical users with a unified experience for observing, configuring, and operating connected infrastructure.

## Architecture Context

```
Core Platform

├── Core Link
│   Connectivity, devices, protocols, integrations
│
├── Core Signal
│   Analytics, evaluation, rules, decisions
│
└── Core Console
    Control Plane and operations interface
```

## Design Principles

### Platform First

Expose platform capabilities instead of implementation details.

Use:
- Devices
- Connectors
- Providers
- Streams
- Signals
- Decisions

Avoid exposing internal vendor or infrastructure names as primary concepts.

### Operational Awareness

Every screen should answer:

- What is running?
- What changed?
- What needs attention?

### Progressive Complexity

Simple operational view by default. Advanced technical information available when required.

## Information Architecture

```
Overview

Resources
├── Devices
├── Gateways
├── Connectors
├── Providers
└── Integrations

Data
├── Streams
├── Events
└── Telemetry

Intelligence
├── Signals
├── Rules
├── Evaluations
└── Decisions

Operations
├── Monitoring
├── Logs
├── Alerts
└── Audit

Administration
├── Organizations
├── Users
├── Roles
└── Settings
```

## Resource Pattern

Every resource follows the same experience:

- Summary
- Status
- Configuration
- Activity
- Events
- Logs
- Actions

## Product Goal

Core Console should feel like an operating system control center for connected physical and digital infrastructure, not a CRUD administration panel.
