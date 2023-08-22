const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy());

// - Creates Express application
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT);
