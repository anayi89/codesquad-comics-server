const express = require("express")
const { register, login, logout, localLogin } = require("../controllers/authController")
const router = express.Router()

router.get("/login", login)

router.get("/login/local", localLogin)

router.get("/login/error", (req, res, next) => {
    res.status(401).json({
        error: { message: "Login error." }
    })
})

router.get("/unauthenticated", async (req, res) => {
    console.log("Returning to the homepage...")
    res.redirect("/")
})

router.post("/register", register)

router.get("/logout", logout)

module.exports = router