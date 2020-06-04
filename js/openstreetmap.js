/**
 * @module OpenStreetMap
 * This class process OpenStreetMap iframe from a latitude and longitude.
 * 
 * @author Leonardo Mauro <leo.mauro.desenv@gmail.com> (http://leonardomauro.com/)
 * @link https://github.com/leomaurodesenv/geohash-neighbour GitHub
 * @copyright 2020 Leonardo Mauro
 * @package geohash-neighbour
 * @access public
 */
class OpenStreetMap {

	/**
     * @method module:OpenStreetMap
     * Constructor of class
     * @instance
     * @access public
     * @return {this}
     */
	constructor() {
		this.baseUrl = "https://www.openstreetmap.org/export/embed.html";
		this.baseFixed = 14;
	}

	 /**
     * @method module:OpenStreetMap::getMapSource
     * Return the map source
     * @arg {Float} latitude 		Latitude center
     * @arg {Float} longitude		Longitude center
     * @arg {Float} latDistance    	Distance from center for latitude
     * @arg {Float} longDistance    Distance from center for longitude
     * @access public
     * @return {String}
     */
	getMapSource(latitude, longitude, latDistance, longDistance) {
		return this.baseUrl + "?bbox="
			+ (longitude + longDistance).toFixed(this.baseFixed) + "%2C"
			+ (latitude + latDistance).toFixed(this.baseFixed) + "%2C" 
			+ (longitude - longDistance).toFixed(this.baseFixed) + "%2C"
			+ (latitude - latDistance).toFixed(this.baseFixed) + "&amp;layer=mapnik";
	}

	/**
     * @method module:OpenStreetMap::getIframe
     * Return the map iframe
     * @arg {String} mapSource 		Map source
     * @access public
     * @return {String}
     */
	getIframe(width, height, id, mapSource) {
		/* creating element */
		var elem = document.createElement("iframe");
		elem.setAttribute("width", width);
		elem.setAttribute("height", height);
		elem.setAttribute("id", id);
		elem.setAttribute("src", mapSource);
		/* default settings */
		elem.setAttribute("frameborder", "0");
		elem.setAttribute("scrolling", "no");
		elem.setAttribute("marginheight", "0");
		elem.setAttribute("marginwidth", "0");
		return elem;
	}
}

/* 
 * if is Node.js ~ 
 * module.exports 
 */
try {
    module.exports = OpenStreetMap;
} catch(err) {}