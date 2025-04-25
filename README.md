# Yam Discord Gateway
> When you just wanna be a little lazier connecting to Discord's Gatway API, use this. 

[![GitHub License](https://img.shields.io/github/license/tstepanski/yam-discord-gateway)](https://github.com/tstepanski/yam-discord-gateway/blob/main/LICENSE)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/tstepanski/yam-discord-gateway/common.build.yml?logo=githubactions&logoColor=2088FF)](https://github.com/tstepanski/yam-discord-gateway/actions)
[![NPM Version](https://img.shields.io/npm/v/yam-discord-gateway?color=CB3837&logo=npm&logoColor=CB3837)](https://www.npmjs.com/package/yam-discord-gateway)

```typescript
import {ConnectionBuilder, OpCodes} from "yam-discord-gateway";

await ConnectionBuilder
    .new({
        applicationId: process.env.APPLICATION_ID,
        discordToken: process.env.DISCORD_TOKEN,
        publicKey: process.env.PUBLIC_KEY
    })
    .addDispatchEventHandler(EventName.Ready, payload => {
        console.log(`${payload.d?.user.id} sent a payload`);
    })
    .build()
    .startAsync();
```