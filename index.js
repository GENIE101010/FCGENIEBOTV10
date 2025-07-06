require('dotenv').config();
const { Client, LocalAuth } = require('whatsapp-web.js');
const puppeteer = require('puppeteer');
const Tesseract = require('tesseract.js');
const axios = require('axios');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

// Exemple simplifié de commande
client.on('message', async msg => {
    if(msg.body === '!ping') {
        msg.reply('Pong!');
    }
});

client.initialize();
