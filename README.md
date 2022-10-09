<!--
 * @Author: Richard codewellliu@gmail.com
 * @Date: 2022-09-29 11:23:07
 * @LastEditors: Richard codewellliu@gmail.com
 * @LastEditTime: 2022-10-09 10:17:23
 * @FilePath: /tronnpm/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<h1 align="center">
  Tronscan Client
  <br>
</h1>

<h4 align="center">
  Node Client for the <a href="https://github.com/tronscan/tronscan-frontend/blob/dev2019/document/api.md">Tronscan.org API</a>
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
> npm install @tronscanteam/apiclients
```

Use the HTTP Client

```javascript
import {Client} from "@tronscanteam/apiclients";

const client = new Client();

let recentBlocks = await client.getBlocks({
  sort: '-number',
  limit: 10,
});
```
