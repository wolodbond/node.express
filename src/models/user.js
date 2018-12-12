/**
 * module for user model
 * @module models/user
 *
 * @requires initilizers/database_drivers/mongoose
 */
const mongoDb = require("../initilizers/database_drivers/mongoose");
const mongooseClient = mongoDb.getDbConnect();

const userSchema = mongooseClient.Schema({
	_id: mongooseClient.Schema.Types.ObjectId,
	username: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		required: false
	},
	userStatus: {
		type: Number,
		required: true
	} /*,
	dates: {
		type: [Date], 
		required: true
	},
	friends: {
		type: [String], 
		required: false
	}*/
});

module.exports = mongooseClient.model("User", userSchema);
/*
UserSchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!',
});

UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
   this.password = this._hashPassword(this.password);
   return next();
  }
  return next();
});*/
/*
validate: {
	validator(email) {
	  const emailRegex = /^[-a-z0-9%S_+]+(\.[-a-z0-9%S_+]+)*@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/i;
	  return emailRegex.test(email);
	},
	message: '{VALUE} is not a valid email!',
  }
 },
 password: {
	type: String,
	required: [true, 'Password is required!'],
	trim: true,
	minlength: [6, 'Password need to be longer!'],
	validate: {
	  validator(password) {
	  return password.length >= 6 && password.match(/\d+/g);
	  },
	},
}*/
