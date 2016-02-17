(function( $ ){

	$.staticMap = function( options ){

		var defaults = {
			zoom : 3,
			width: 300,//image width
			height: 300,//image height
			address: 'USA', //could be string address or lat,lon("-3.444,3.222")
			markerIcon: '', //url to custom icon
			key: '',// google map key
			sensor: false,
			mapType: 'roadmap',//map type []
			scale: 1 // helps when need map on mobile, need change scale to 2
		};

		var settings = $.extend( {}, defaults, options );

		var url = '//maps.googleapis.com/maps/api/staticmap?';
		if(settings.key != ''){
			url += 'key='+settings.key+'&';
		}//if
		url += 'center='+settings.address+'&';
		url += 'zoom='+settings.zoom+'&';
		url += 'size='+settings.width+'x'+settings.height+'&';
		url += 'markers=';
		if(settings.markerIcon != ''){
			url +='icon:'+settings.markerIcon+'|';
		}
		url += settings.address+'&';
		url += 'maptype='+settings.mapType+'&';
		url += 'scale='+settings.scale+'&';
		url += 'sensor='+settings.sensor;

		return url;

	}//map
	
	$.fn.staticMap = function( options ) {
		if (options.geoloc) {
			if (navigator.geolocation) {
				var img = this;
				navigator.geolocation.getCurrentPosition(function(position) {
					options.address = ''+[position.coords.latitude,position.coords.longitude];
					img.attr('src', $.staticMap(options));
				}, function(error) {
					img.attr('src', $.staticMap(options));
					logError(error);
				});
			} else {
				console.log("Geolocation is not supported by this browser.");
			}
		} else {
			this.attr('src', $.staticMap(options));
		}
		return this;
	}

	$.liveMapLink = function( options ){

		var defaults = {
			address: '',
			origin: null,
			geoloc: false
			// zoom: 5 -- does not work in new google maps
		};

		var settings = $.extend( {}, defaults, options );

		var url = '//www.google.com/maps/'+(settings.origin !== null || settings.geoloc ? 'dir/'+settings.origin : 'place') +'/'+settings.address+'/';
		return url;

	}//map

	$.fn.liveMapLink = function ( options ) {
		if (options.geoloc == 'origin' || options.geoloc == 'address') {
			if (navigator.geolocation) {
				var link = this;
				navigator.geolocation.getCurrentPosition(function(position) {
					if (options.geoloc == 'origin')
						options.origin = ''+[position.coords.latitude,position.coords.longitude];
					else
						options.address = ''+[position.coords.latitude,position.coords.longitude];
					link.attr('href', $.liveMapLink(options));
				}, function(error) {
					if (options.geoloc == 'origin' && !options.origin)
						options.origin = '';
					else if (!options.address)
						options.address = '';
					link.attr('href', $.liveMapLink(options));
					logError(error);
				});
			} else {
				console.log("Geolocation is not supported by this browser.");
			}
		} else {
			this.attr('href', $.liveMapLink(options));
		}
		return this;
	}
	
	function logError(error) {
		switch(error.code) {
			case error.PERMISSION_DENIED:
				console.log("User denied the request for Geolocation.");
				break;
			case error.POSITION_UNAVAILABLE:
				console.log("The network is down or the positioning service can't be reached.");
				break;
			case error.TIMEOUT:
				console.log("The request to get user location timed out.");
				break;
			case error.UNKNOWN_ERROR:
				console.log("An unknown error occurred.");
				break;
		}
	}

})( jQuery );
