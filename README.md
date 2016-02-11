Static-google-Maps
==================

Very Simple jQuery plugin for generating url for static google map and url for live map

##Usage:

####[Demo](//rawgit.com/erich-roncarolo/Static-google-Maps/master/index.html)
###Description

- "$staticMap" plugin, generate a link to static google map.
- "$liveMapLink" plugin, generate a link to live google map.

###Html example

```
<a class="liveMap" target="_blank" href="#"><img id="staticMap" src="" alt=""/></a>
```

###JS

####Example 1
```
//Static map image link
var url = $.staticMap({
  markerIcon: 'http://tinyurl.com/2ftvtt6',
  address: '1600 Amphitheatre Parkway, Mountain View, CA 94043, United States',
  width: 500,
  height:400,
  zoom: 13
});
$('#staticMap').attr('src', url);

//live map link
var urlLive = $.liveMapLink({
  address: "1600 Amphitheatre Parkway, Mountain View, CA 94043, United States",
  origin: "San Francisco, United States"
});
$('.liveMap').attr('href', urlLive);
```

####Example 2
```
//Static map image link
$('#staticMap').staticMap({
  markerIcon: 'http://tinyurl.com/2ftvtt6',
  address: '1600 Amphitheatre Parkway, Mountain View, CA 94043, United States',
  width: 500,
  height:400,
  zoom: 13,
  geoloc: true
});

//live map link
$('.liveMap').liveMapLink({
  address: "1600 Amphitheatre Parkway, Mountain View, CA 94043, United States",
  geoloc: 'origin'
});
```

###Options for Static maps

- **key** - The Static Maps API uses an API key to identify your application. Not required. 25 000 free static map requests per application per 24 hour period.
- **zoom** - Number: defines the zoom level of the map, which determines the magnification level of the map.
- **width** - Width of returned image
- **height** - Height of returned image
- **address** - Location address. Could be latitude, longitude ("123.34, 5.0453") or address. If **geoloc** is true, this is the fallback on error.
- **markerIcon** - Url for custom marker icon
- **sensor** - Boolean: (required) specifies whether the application requesting the static map is using a sensor to determine the user's location.
- **mapType** - Defines the type of map to construct. There are several possible maptype values, including "roadmap", "satellite", "hybrid", and "terrain".
- **scale** - Number: affects the number of pixels that are returned. "scale":2 returns twice as many pixels as "scale":1 while retaining the same coverage area and level of detail
- **geoloc** - Boolean: if true, try to find location using browser's geolocation API. Use **address** as fallback on error.

###Options for Live maps url
- **address** - Location address. Could be latitude, longitude ("123.34, 5.0453") or address.
- **origin** - Origin address for directions. Could be latitude, longitude ("123.34, 5.0453") or address.
- **geoloc** - 'address' or 'origin': if present, try to find address or origin location using browser's geolocation API. Use **address** or **origin** as fallback on error.
