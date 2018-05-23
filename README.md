<h1 align="center">
  Tronscan Client
  <br>
</h1>

<h4 align="center">
  Node Client for the <a href="https://api.tronscan.org">Tronscan.org API</a>
</h4>

<p align="center">
  <a href="#how-to-use">How to Use</a>
</p>

# How to use

## Requirements

* Node v9.8.0

## Running tests

```bash
> npm test
```

## Usage

Install the package

```bash
> npm install @tronscan/client
```

Use the HTTP Client

```javascript
import {Client} from "@tronscan/client";

const client = new Client();

let recentBlocks = await client.getBlocks({
  sort: '-number',
  limit: 10,
});
```
