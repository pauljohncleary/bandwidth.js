# Overview
A tiny JavaScript library to measure and expose a user's connection speed

# Why
This is useful for **client side rendered** applications which want to offer high-bandwith features (e.g. large images, auto-playing videos) to users on fast connections and provide alternative low-bandwith features to users on slower connections

By using this you can gracefully make your site more accessible to users in locations with limited network access, without compromising on user experience

# Features

- Exposes a single variable on the `window` object to check estimated speed
- Bandwidth variable is updated continuously (more often on faster connections, rarely on slow connections) 
- ~0.5kb footprint
- No dependencies
- Supports all modern browsers (IE 8+)

Factors / weights:
- Connectiontype available (2g = slow connection, 3g = medium, 4g = no impact)
- Initial page load from performance timing API <- we should supply some details about the weight of the page (or expected timing) to work this out?
- Speed of get requests to some resource
- useragent (mobile useragents are a lower bandwidth weight)

# Installation

Add this snippet to the bottom of your `<body>`, optionally replace the first param with the size of your intial page load to enable the performance timing data source (you can also use this snippet if you would prefer to keep the script size down and don't want to use the performance API)

````html
<script>
    //TODO copy in from script.js, ensure script tags are correct
</script>

````


# Usage

Now you can do this in your client side code:

````javascript
if (window.bandwith > 10000) { // This user has a connection that is at least 10 mbps
    // Render high-bandwith content
} else {
    // Render something smaller for low-bandwith users
}
````

`window.bandwith` is updated continuously (more often on fast connections, much less often on slow connections), so if you put this inside a reactive block of some sort you can adapt your content if the connection speed changes. 


# TODO
In order of priority:
- Figure out which resource to run get requests to (should be an IP to remove DNS overhead, or ???)
- Reduce frequency of testing on slower connections
- Make the script even smaller
- Speedtest locations should be relative to your server location
- Integrations with common view libraries (react, vue, angular etc.)
- Options
- Find a solution to measure low CPU/RAM clients
- Test CDN vs inline script impacts
- Implement user tracking to avoid measuring the same user's connection twice

# Inspiration
HN link/post

# License
MIT