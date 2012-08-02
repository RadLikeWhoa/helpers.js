/*
    Name:              convertColor
    Description:       Convert a color value between HEX and RGB(a). When converting from HEX, a parameter controlling the opacity (alpha) can be set.
    Example Usage:     convertColor('#fff', 50)
    Arguments:         color (string), opacity (integer)
*/

var convertColor = function(color, opacity) {
    var _color = color.replace(/(rgba?\()?#?/, '').replace(/\)?/, '').split(','),
        hex = {},
        converted;

    if (_color.length > 1) {
        // Convert RGB to HEX
        converted = '#' + parseInt(_color[0], 10).toString(16) + parseInt(_color[1], 10).toString(16) + parseInt(_color[2], 10).toString(16);
        if (converted.substr(1,3) == converted.substr(4,3)) {
            // Make shorthand HEX values for colors like #abcabc.
            converted = converted.substr(0,4);
        } else if (converted[1] + converted[3] + converted[5] == converted[2] + converted[4] + converted[6]) {
            // Make shorthand HEX values for colors like #aabbcc.
            converted = "#" + converted[1] + converted[3] + converted[5];
        }
    } else {
        // Convert HEX to RGB
        if (_color[0].length == 3) {
            // Shorthand values need to be doubled
            hex = {
                r1: _color[0].substr(0,1),
                g1: _color[0].substr(1,1),
                b1: _color[0].substr(2)
            };
            hex.r = parseInt(hex.r1 + hex.r1, 16);
            hex.g = parseInt(hex.g1 + hex.g1, 16);
            hex.b = parseInt(hex.b1 + hex.b1, 16);
        } else {
            hex = {
                r: parseInt(_color[0].substr(0,2), 16),
                g: parseInt(_color[0].substr(2,2), 16),
                b: parseInt(_color[0].substr(4), 16)
            };
        }
        
        converted = '(' + hex.r + ', ' + hex.g + ', ' + hex.b;
        
        // If opacity is given, apply it and change the output format to rgba().
        if (opacity) {
            converted = 'rgba' + converted + ', ' + opacity / 100 + ')';
        } else {
            converted = 'rgb' + converted + ')';
        }
    }
    
    return converted;
};