// Sets url to the link the json file
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Fetch the JSON data and console log it
d3.json(url, function (earthquake_data) {
    // Call function that is declared below
    create_features(earthquake_data.features);
});

// Initialize Function
function create_features(earthquake_data) {

    // Function to hold switch statement
    function eachFeature(feature, layer) {
        // Initializing Variable
        var earthquake_day_of_week;
        // Switch statement to read in data
        switch (new Date(feature.properties.time).getDay()) {
            case 0:
                earthquake_day_of_week = 'Sunday';
                break;
            case 1: 
                earthquake_day_of_week = 'Monday';
                break;
            case 2:
                earthquake_day_of_week = 'Tuesday';
                break;
            case 3:
                earthquake_day_of_week = 'Wednesday';
                break;
            case 4:
                earthquake_day_of_week = 'Thursday';
                break;
            case 5:
                earthquake_day_of_week = 'Friday';
                break;
            default:
                earthquake_day_of_week = 'Saturday';
                break;
        }
    }
};