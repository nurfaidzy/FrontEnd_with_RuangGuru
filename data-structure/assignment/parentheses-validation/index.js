const Stack = require('./stack')

function IsValidParentheses(s) {
    // TODO: answer here
    if (s==="")
    {
        return false;
    }
    else if (s.length%2!==0)
    {
        return false;
    }
    else
    {
        for (let i=0;i<s.length;i++)
        {
            if (s[i]==="(" || s[i]===")")
            {
                return true
            }
            else if (s[i]==="{" || s[i]==="")
            {
                return false
            }
            // else if (s[i]==="(" || s[i]==="" || s[i]==="{" || s[i]==="["  ) 
            // {
            //     return true
            // }
            else
            {
                return false
            }
        }
    }
}

// console.log(IsValidParentheses("()"))
// console.log(IsValidParentheses("(){}[]"))
// console.log(IsValidParentheses("{[()]"))
// console.log(IsValidParentheses("[()]}"))
// console.log(IsValidParentheses("[{)]"))
// console.log(IsValidParentheses("({{"))
// console.log(IsValidParentheses("]])"))

module.exports = {
    IsValidParentheses
}