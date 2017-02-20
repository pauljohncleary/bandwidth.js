function calculateFrequency() {
    if(window.bandwith) {
        // Check range between 1 - 100000 kbps, beyond 1gbit connections we don't care
        // Frequency ranges from every minute (60000 MS) on 1 kbps, to every second (6000 MS) 
        // on 1gbit connections

        frequency = 1000 - (window.bandwith * 5000) / 100000;
        return frequency; 
    } else {
        // check instantly if we haven't checked before
        window.bandwith = 0;
        return 0;
    }
}

function updateBandwidth(frequency, baseFileSize) {
    window.setTimeout(function() {

        var request = new XMLHttpRequest();
        request.open('GET', 'https://bandwithapi.com', true);

        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                // Expose the bandwith
                window.bandwith = this.response;

                // Get frequency based on our new bandwith
                frequency = calculateFrequency();

                // Check bandwith at the next interval
                updateBandwidth(frequency);

            } else {
                // We reached our target server, but it returned an error
                window.bandwith = null;
            }
        };

        request.onerror = function() {
            // There was a connection error of some sort
            window.bandwith = null;
        };

        request.send();
     }, frequency);
}

// Start!
updateBandwidth(0);