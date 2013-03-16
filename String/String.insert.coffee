###
Insert a string into another one at a given numerical index or a keyword.

@example  'I am here.'.insert 'in between ', 5
          'I am in between here.'

@param    value {String} The string to be inserted into the other one.
@param    position {String, Number} Can either be a numerical keyword or 'start' / 'end'.

@return   {String} Returns the new string.
###

String::insert = String::insert or (value, position) ->
  position = if position is 'end' then @length else if position is 'start' then 0 else position
  @slice(0, position) + value + @slice(position)