export const validateUser = (user: string) : Boolean => {
    const Regex = new RegExp('(\\w){6,}')
    const isUserValid = Regex.test(user)
    if(user && !isUserValid)
        return false
    else
        return true
} 

export const validatePassword = (password: string) : Boolean => {
    const Regex = new RegExp(/(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/)
    const isPasswordValid = Regex.test(password)
    if(password && isPasswordValid === false)
        return false
    else
        return true
}