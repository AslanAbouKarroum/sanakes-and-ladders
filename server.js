const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const PORT = 2024;

const app = express();

// Middleware
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use('/public', express.static('public'));


