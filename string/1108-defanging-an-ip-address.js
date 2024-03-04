// given a valid (IPV4) address , => defanged version of that IP address
// A defanged IP address replaces every period "." with "[.]"
// example Input : "1.1.1.1" => std Ouput "1[.]1[.]1[.]1"
// solution 1 : using a loop to iterate over each character of the string
// Time complexity : O(n)
// solution 2 : using method built in replaceALl() of javascript
// Time complexity : O(n)
var defangIPaddr = function (address) {
  return address.replaceAll('.', '[.]')
}

console.log(defangIPaddr('1.1.1.1'))
