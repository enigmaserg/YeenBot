// Discord.js
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds]})

// DotEnv
import dotenv from 'dotenv';
dotenv.config({ path: ".env"})

//Packages
import fs from "fs";