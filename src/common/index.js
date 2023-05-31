


export const writeCookie = (key,value,days) => {
    // key = the name of the cookie
    // value = jwt_token
    // days = how long until the cookie expires

    let date = new Date()
    days = days || 365

    // setting the date plus the number of days we want the cookie to last for 
    date.setDate(date.getDate() + days)

    document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/"
    }

    export const getCookie = (cookieName) => {
    const re = new RegExp(`(?<=${cookieName}=)[^;]*`) // pattern to find a cookie
    // using the name of the cookie want to find

   try {
        let cookie = document.cookie.match(re)[0] // try and find a cookie matching the pattern 
        //in the regular expression, in this case the cookie name.
        // if cookie isnt found, this will raise an error and throw it to the catch block
        return cookie 
        // if cookie is found return the value of that cookie
   } catch (error) {
        return false // return false if the cookie isnt found.
      }
}