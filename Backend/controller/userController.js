const pool = require("../data/dbConnection")
const bcrypt = require("bcrypt")

const loginUser = async (req, res) => {
  const query = "SELECT id, name, email, password_hash FROM users"
  const { email, password } = req.body

  try {
    const [rows] = await pool.execute(query);
    const user = rows.find((user) => user.email === email)

    console.log(user);

    if (user) {
      if (await bcrypt.compare(password, user.password_hash)) {
        req.session.user = user;
        res.json(user)
      } else {
        res.json({ "err": "password incorrect" })
      }
    } else {
      res.json({ "err": "user does not exist" })
    }
  } catch (err) {
    res.status(400).json({ "err": err.message })
  }
}

const signupUser = async (req, res) => {

  const query = "SELECT email FROM users"
  const { name, email, password } = req.body
  try {
    const [rows] = await pool.execute(query);
    if (rows.some(user => user.email === email)) {
      res.status(400).json({ "err": "Email already in use" })
      return
    }
  } catch (err) {
    res.json({ "err": err.message })
    return
  }
  console.log(req.body);
  const password_hash = await bcrypt.hash(password, 10)

  try {
    const [row] = await pool.execute("INSERT INTO users (name, email, password_hash) VALUES ( ?, ?, ?)",
      [name, email, password_hash])

    req.session.user = { name: name, email: email }

    res.status(201).json({
      id: row.insertId,
      name,
      email,
    });
  } catch (err) {
    res.json({ "err": err.message })
  }
}

const getUser = (req, res) => {

  if (req.session.user) {
    res.json(req.session.user)
  }
}

const logout = async (req, res) => {
  console.log("here");
  
  req.session.destroy((err) => {
    if (err) {
      res.json({ err: "could not log out at the moment" })
    }
    res.clearCookie("connect.sid")
    res.json({mssg : "logout successful"})
  })
}

module.exports = {
  loginUser,
  signupUser,
  getUser,
  logout
}