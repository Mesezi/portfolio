# Design Document: Sanity Schema Setup

## Overview

This design establishes the Sanity CMS schema structure for a portfolio website. The schema defines two content types: "about" for personal information and "project" for portfolio projects. The schema will be implemented using Sanity's schema definition format in TypeScript.

## Architecture

The schema will be organized in the `src/sanity` directory with the following structure:

```
src/sanity/
├── client.ts          (existing - Sanity client configuration)
├── query.ts           (existing - query functions)
├── schemas/
│   ├── about.ts       (about content type schema)
│   ├── project.ts     (project content type schema)
│   └── index.ts       (schema exports)
```

## Components and Interfaces

### About Schema

The "about" schema defines personal information with the following fields:

- **desc** (text): Multi-line description text
- **email** (string): Contact email address
- **githubLink** (url): GitHub profile URL
- **twitterLink** (url): Twitter profile URL
- **linkedinLink** (url): LinkedIn profile URL
- **image** (image): Profile photo with asset reference

### Project Schema

The "project" schema defines portfolio projects with the following fields:

- **title** (string): Project name
- **desc** (text): Multi-line project description
- **githubLink** (url): Repository URL
- **liveLink** (url): Live demo URL
- **stack** (array of strings): Technology stack list
- **image** (image): Project screenshot with asset reference

## Data Models

### About Document Type

```typescript
{
  _type: 'about',
  _id: string,
  desc: string,
  email: string,
  githubLink: string,
  twitterLink: string,
  linkedinLink: string,
  image: {
    _type: 'image',
    asset: {
      _ref: string,
      _type: 'reference'
    }
  }
}
```

### Project Document Type

```typescript
{
  _type: 'project',
  _id: string,
  title: string,
  desc: string,
  githubLink: string,
  liveLink: string,
  stack: string[],
  image: {
    _type: 'image',
    asset: {
      _ref: string,
      _type: 'reference'
    }
  }
}
```


## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

For this schema setup, most requirements are structural validations that can be tested with specific examples rather than universal properties. The following examples verify the schema structure:

**Example 1: About schema contains required fields**
The "about" schema definition should include fields for desc, email, githubLink, twitterLink, linkedinLink, and image.
**Validates: Requirements 1.1, 1.2, 1.3**

**Example 2: Project schema contains required fields**
The "project" schema definition should include fields for title, desc, githubLink, liveLink, stack, and image.
**Validates: Requirements 2.1, 2.2, 2.3, 2.4**

**Example 3: Schema files are properly located**
Schema definition files should exist in the src/sanity directory structure.
**Validates: Requirements 3.1**

**Example 4: Schema exports conform to Sanity format**
Each schema export should have required properties: name (string), type ('document'), title (string), and fields (array).
**Validates: Requirements 3.2**

## Error Handling

Schema validation errors will be caught by Sanity Studio at build time. The schema definitions should:

- Use TypeScript types to ensure type safety
- Include validation rules where appropriate (e.g., URL validation for link fields)
- Provide clear field titles and descriptions for content editors

## Testing Strategy

### Unit Tests

Unit tests will verify:
- Schema structure contains all required fields
- Field types are correctly specified
- Schema exports are valid JavaScript objects
- File organization matches expected structure

### Property-Based Tests

Property-based testing is not applicable for this feature as we are defining static schema structures rather than implementing algorithms or data transformations. The requirements are structural validations best tested with specific examples.

### Testing Framework

- **Jest** for unit testing TypeScript schema definitions
- Tests will import schema definitions and verify structure
- Minimum test coverage for all schema fields and types
