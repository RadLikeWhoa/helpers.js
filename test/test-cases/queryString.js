test("Query String Extraction - Extract query string from URL with no query strings", function() {
    var url = "http://www.example.com";
    var field = "id";
    var expectedValue = null;
    var actualValue = queryString(field, url);
    equal(expectedValue, actualValue, "Expect NULL value when no query strings exist");
});

test("Query String Extraction - Extract query string from URL with 1 query string", function() {
    var url = "http://www.example.com?id=1000";
    var field = "id";
    var expectedValue = 1000;
    var actualValue = queryString(field, url);
    equal(expectedValue, actualValue, "Extraction of first field from query string failed. Expected value is 1000");
});

test("Query String Extraction - Extract first field from URL with 2 query strings", function() {
    var url = "http://www.example.com?id=1000&orderId=58892";
    var field = "id";
    var expectedValue = 1000;
    var actualValue = queryString(field, url);
    equal(expectedValue, actualValue, "Extraction of first field from query string failed. Expected value is 1000");
});

test("Query String Extraction - Extract second field from URL with 2 query strings", function() {
    var url = "http://www.example.com?id=1000&orderId=58892";
    var field = "orderId";
    var expectedValue = 58892;
    var actualValue = queryString(field, url);
    equal(expectedValue, actualValue, "Extraction of second field from query string failed. Expected value is 58892");
});

test("Query String Extraction - Extract first field from URL with 3 query strings", function() {
    var url = "http://www.example.com?id=1000&orderId=58892&timestamp=1000465738";
    var field = "id";
    var expectedValue = 1000;
    var actualValue = queryString(field, url);
    equal(expectedValue, actualValue, "Extraction of first field from query string failed. Expected value is 1000");
});

test("Query String Extraction - Extract second field from URL with 3 query strings", function() {
    var url = "http://www.example.com?id=1000&orderId=58892&timestamp=1000465738";
    var field = "orderId";
    var expectedValue = 58892;
    var actualValue = queryString(field, url);
    equal(expectedValue, actualValue, "Extraction of second field from query string failed. Expected value is 58892");
});

test("Query String Extraction - Extract second field from URL with 3 query strings", function() {
    var url = "http://www.example.com?id=1000&orderId=58892&timestamp=1000465738";
    var field = "timestamp";
    var expectedValue = 1000465738;
    var actualValue = queryString(field, url);
    equal(expectedValue, actualValue, "Extraction of third field from query string failed. Expected value is 1000465738");
});