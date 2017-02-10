function calculateFrequency() {
    if(window.bandwith) {
        // Check range between 1 - 100000 kbps, beyond 1gbit connections we don't care
        // Frequency ranges from every minute (60000 MS) on 1 kbps, to every second (6000 MS) 
        // on 1gbit connections 

        frequency = window.bandwith / ;
        return frequency; 
    } else {
        // check instantly if we haven't checked before
        return 0;
    }
}

function updateBandwidth(frequency) {
    window.setTimeout(function() {
        TBC.get('http://measure.bandwidth.com').then(function(res) {

            // Expose the bandwith
            window.bandwith = res;

            // Get frequency based on our new bandwith
            frequency = calculateFrequency();

            // Check bandwith at the next interval
            updateBandwidth(frequency);
        });
    }, frequency);
}

// Start!
updateBandwidth(0);