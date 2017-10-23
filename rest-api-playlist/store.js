const crypto = require('crypto');
const knex = require('knex')(require('./knexfile'));

module.exports = {
	saltHashPassword,
	createUser ({ username, password }) {
		console.log(`Add user ${username}`);

		// call saltHashPassword function ---
		const { salt, hash } = saltHashPassword(password);
		// return the data inputted into the form and store and in DB
		return knex('user').insert({
			salt,
			encrypted_password: hash,
			username
		})
	}
}

// saltHashPassword Function -
function saltHashPassword (password) {
	// call randomString function -
	const salt = randomString()
	const hash = crypto
	.createHmac('sha512', salt)
	.update(password)
	return {
		salt,
		hash: hash.digest('hex')
	}
}

// randomString Function -
function randomString () {
	return crypto.randomBytes(4).toString('hex');
}