require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json({ limit: '20kb' }));

app.get('/', (req, res) => {
  res.json({ message: 'Personal Portfolio API is running.' });
});

app.get('/api/projects', async (req, res) => {
  try {
    res.json(await prisma.project.findMany({ orderBy: { createdAt: 'desc' } }));
  } catch (error) {
    res.status(500).json({ error: 'Could not load projects.' });
  }
});

app.get('/api/skills', async (req, res) => {
  try {
    res.json(await prisma.skill.findMany({ orderBy: { name: 'asc' } }));
  } catch (error) {
    res.status(500).json({ error: 'Could not load skills.' });
  }
});

app.get('/api/certificates', async (req, res) => {
  try {
    res.json(await prisma.certificate.findMany({ orderBy: { id: 'desc' } }));
  } catch (error) {
    res.status(500).json({ error: 'Could not load certificates.' });
  }
});

app.post('/api/messages', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (![name, email, message].every(value => typeof value === 'string' && value.trim())) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  if (name.length > 100 || email.length > 254 || message.length > 3000) {
    return res.status(400).json({ error: 'One or more fields are too long.' });
  }
  try {
    const savedMessage = await prisma.message.create({
      data: { name: name.trim(), email: email.trim(), message: message.trim() }
    });
    res.status(201).json({ success: true, id: savedMessage.id });
  } catch (error) {
    res.status(500).json({ error: 'Could not save your message.' });
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio API running at http://localhost:${PORT}`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
