# Overview
A tiny JavaScript library to measure and expose a user's connection speed

# Why
This is useful for client side rendered applications which want to offer high-bandwith features (e.g. large images, auto-playing videos) to users on fast connections and provide alternative low-bandwith features to users on slower connections.

 # Features

- Exposes a single variable on the `window` object to check user speed
- Bandwidth variable is updated continuously (more often on faster connections, rarely on slow connections) 
- ~0.5kb footprint
- No dependencies
- Supports all modern browsers

# Installation

Add this snippet to the bottom of your `<body>` :

````html
<script>
    //TODO copy in from script.js, ensure script tags are correct
</script>

````


# Usage

Now you can do this in your client side code:

````javascript
if (window.bandwith > 10000) { //greater than 10 mbps
    // render high-bandwith content
} else {
    // render something smaller for low-bandwith users
}
````

`window.bandwith` is updated continuously (more often on fast connections, much less often on slow connections), so if you put this inside a reactive block of some sort you can adapt your content if the connection speed changes. 


# TODO
In order of priority:
- Find/build API
- Add cross-browser GET request
- Reduce frequency of testing on slower connections
- Make the script even smaller
- Speedtest locations should be relative to your server location
- Integrations with common view libraries (react, vue, angular etc.)
- Find a solution to measure low CPU/RAM clients
- Test CDN vs inline script impacts
- Implement user tracking to avoid measuring the same user's connection twice

# Inspiration
HN link/post

# License
MIT