const Account = require('../model/account');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateTokens = (payload) => {
  const { _id } = payload;

  const accessToken = jwt.sign({ userId: _id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10h' });
  const refreshToken = jwt.sign({ userId: _id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '10h' });

  return { accessToken, refreshToken };
};

const updateRefreshToken = async (user, refreshToken) => {
  const { email, password } = user;
  try {
    let updatedRefreshToken = {
      email,
      password,
      refreshToken: refreshToken,
    };

    const userUpdateCondition = { _id: user._id };

    updatedRefreshToken = await Account.findByIdAndUpdate(userUpdateCondition, updatedRefreshToken, { new: true });

    if (!updatedRefreshToken) console.log('can not update refreshToken');
  } catch (error) {
    console.log(error);
  }
};

const authController = {
  register: async (req, res) => {
    const {
      email, password, confirmPassword
    } = req.body;
    //simple validation
    if (!email || !password) return res.status(400).json({ success: false, message: 'Missing email or password' });

    try {
      const account = await Account.findOne({ email: email });
      if (account) return res.status(400).json({ success: false, message: 'email already taken' });

      if (password !== confirmPassword)
        return res.status(400).json({ success: false, message: 'Password does not match' });

      // all good
      const hashedPassword = await bcrypt.hash(password, 12);

      const newAccount = new Account({
        email: email,
        password: hashedPassword,
      });
      const tokens = generateTokens(newAccount);

      await newAccount.save();

      res.json({
        success: true,
        message: 'user created successfully!',
        // tokens,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ success: false, message: 'Missing email ' });

    try {
      // check user existing
      const account = await Account.findOne({ email })
      if (!account) return res.status(400).json({ success: false, message: 'Incorrect email' });

      const passwordValid = await bcrypt.compare(password, account.password);

      if (!passwordValid) return res.status(400).json({ success: false, message: 'Incorrect  password' });

      // all  good
      // return token
      const tokens = generateTokens(account);

      //update refressh token
      //updateRefreshToken(user, tokens.refreshToken)

      res.json({
        success: true,
        currentUser: account,
        message: 'User logged in successfully',
        tokens,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Interal server error' });
    }
  },
  token: async (req, res) => {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) return res.status(401).json({ success: false, message: 'Missing refreshToken' });

    try {
      const account = await Account.findOne({ refreshToken });
      if (!account) return res.status(403).json({ success: false, message: 'Not found user' });

      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      const tokens = generateTokens(account);
      updateRefreshToken(account, tokens.refreshToken);
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },
  logout: async (req, res) => {
    if (req.userId) {
      return res.status(200).json('Logged out!');
    } else {
      return res.status(500).json('Internal server error!');
    }
  },
};

module.exports = authController;