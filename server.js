require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('public'))

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, { priceInCents: 1300, name: "Netflix One-Time Payment"}],
    [2, { priceInCents: 1300, name: "Netflix Monthly Subscription"}],
])

app.listen(33)