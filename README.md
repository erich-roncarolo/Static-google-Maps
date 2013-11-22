Static-google-Maps
==================

Very Simple jQuery plugin for generating url for static google map and url for live map

##Usage:

####[Demo](http://rubiklabs.com/shved/github/Static-google-Maps/)
###Description

- "$staticMap" plugin, generate a link to static google map.
- "$liveMapLink" plugin, generate a link to live google map.

###Html example

```
<a class="liveMap" target="_blank" href="#"><img id="staticMap" src="" alt=""/></a>
```

###JS

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
  zoom: 12
});
$('.liveMap').attr('href', urlLive);
```

###Options for Static maps

- **key** - The Static Maps API uses an API key to identify your application. Not required. 25 000 free static map requests per application per 24 hour period.
- **zoom** - Number: defines the zoom level of the map, which determines the magnification level of the map.
- **width** - Width of returned image
- **height** - Height of returned image
- **address** - Location address. Could be latitude, longitude ("123.34, 5.0453") or address.
- **markerIcon** - Url for custom marker icon
- **sensor** - true/false. (required) specifies whether the application requesting the static map is using a sensor to determine the user's location.
- **mapType** - defines the type of map to construct. There are several possible maptype values, including "roadmap", "satellite", "hybrid", and "terrain".
- **scale** - affects the number of pixels that are returned. "scale":2 returns twice as many pixels as "scale":1 while retaining the same coverage area and level of detail

###Options for Live maps url
- **address** - Location address. Could be latitude, longitude ("123.34, 5.0453") or address.
- **zoom** - Number: defines the zoom level of the map, which determines the magnification level of the map.
