const register = async (req, res) => {
    const { firstName, lastName, username, password } = req.body
    console.log(req.body)

    try {
        const newUser = { firstName, lastName, username, password }
        return res.status(201).json({
            success: { message: "A new user is created." },
            data: newUser,
            statusCode: 201
        })
    }
    catch (error) {
        return res.status(500).json({
            error: { message: "Internal server error!" }
        })
    }
}

const login = async (req, res) => {
    res.status(200).json({
        success: { message: "User logged in." },
        statusCode: 200
    })
}

const logout = async (req, res) => {
    console.log("Initializing logout controller logic...")
    res.clearCookie("connect.sid")

    res.status(200).json({
        success: { message: "User logging out." },
        statusCode: 200
    })

    function sessionDestruction(err) {
        if (err) {
          return next(err)
        }
    }
    sessionDestruction()

    console.log("Logout function activated. Logging out...")
}

const localLogin = async (req, res) => {
    let result = true
    function mockPassport(err, user) {
        if (err) {
          return next(err)
         }
    }
    mockPassport()

    res.status(200).json({
        success: { message: "Login successful." },
        result,
        statusCode: 200
    })
}

module.exports = { register, login, logout, localLogin }