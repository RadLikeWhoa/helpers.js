###
Count the words inside a given element. The output can be formatted using the
`{{count}}` placeholder.

@example  'Hello, world!'.words()
          2

@return   {Number} Returns the number of words in the given string.
###

String::words = String::words or ->
  @replace(/\s+/g, ' ').split(' ').length