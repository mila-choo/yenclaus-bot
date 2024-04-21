import 'dotenv/config';

import main from './main.js';

// Require the necessary discord.js classes
import { Client, GatewayIntentBits } from 'discord.js';

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

main(client)
  .then(() => {
    // Log in to Discord with your client's token
    client.login(process.env.DISCORD_TOKEN);
  })
  .catch(console.log);
