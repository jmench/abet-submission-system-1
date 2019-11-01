const User = require('../models/User')

const is_whitelisted = async (linkblue_username) => {
    // try to pull the user from the table
    const user = await User.query()
        .findById(linkblue_username)
    // if we got a user back return true
    if (user) {
        return true
    } else {
        return false
    }
    // else return false
}
