//Setting up stripe and express
const stripe = require('stripe')('sk_test_51NcemyKzYDf7PDEC4o1GUStzK6c0iuKu7LO7t42ytIYLyKYR2e5vcrggK6gntQUdOFiZyJiBnzQtv30qGUI5O8q4001Cb3G6it');
const express = require('express');
const app = express();
app.use(express.static('public'));

const LOCAL_DOMAIN = 'https://localhost:4242';

app.post('/', (req,res) => {
	console.log("here")
})
app.post('/create-checkout-session',async (req,res) => {
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				// Exact price id of items
				price: 'price_1Nnq1rKzYDf7PDECfiB805DT',
				quantity: 1,
				name: 'Test Shirt 2',
			}
		],
		mode: 'payment',
		success_url: `${LOCAL_DOMAIN}?success=true`,
		cancel_url: `${LOCAL_DOMAIN}?canceled=true`,
		automatic_tax: {enabled: true}
	});

	res.redirect(303,session.url)
});

app.listen(4242, () => console.log('Running on port 3000'))
