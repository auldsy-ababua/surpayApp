var connect = require('react-redux').connect;
import React, { Component } from 'react';
import store from '../store';
import actions from '../actions';
import {  } from 'react-bootstrap';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';


export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { address: 'San Francisco, CA' };
    this.onChange = (address) => this.setState({ address });
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  componentDidMount() {
    var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13
        });
        var input = /** @type {!HTMLInputElement} */(
            document.getElementById('pac-input'));

        var types = document.getElementById('type-selector');
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)
        });

        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }
          marker.setIcon(/** @type {google.maps.Icon} */({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
          }));
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }
          var content = `<div><strong> ${place.name} </strong><br> ${address}
                         <br><a href="#/survey/${place.place_id}">Take Survey</a>
                        `;
                        console.log(place);
          infowindow.setContent(content);
          infowindow.open(map, marker);
        });

        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        function setupClickListener(id, types) {
          var radioButton = document.getElementById(id);
          radioButton.addEventListener('click', function() {
            autocomplete.setTypes(types);
          });
        }

        setupClickListener('changetype-all', []);
        setupClickListener('changetype-establishment', ['establishment']);
  }
  handleFormSubmit(event) {
    event.preventDefault()
    const { address } = this.state

    geocodeByAddress(address,  (err, data) => {
      console.log(data);
      if (err) {
        console.log('Oh no!', err);
      }

      console.log(`Yay! got latitude and longitude for ${address}`, data)
    });
  }

  render() {
    return (
      <div>
        <input id="pac-input" className="controls" type="text"
        placeholder="Enter a location" />
        <div id="type-selector" className="controls">

          <input type="radio" name="type" id="changetype-all" />
          <label >All</label>

          <input type="radio" name="type" id="changetype-establishment" />
          <label >Establishments</label>

        </div>

        <div id="map"></div>

      </div>
    )
  }
};

var mapStateToProps = function(state, props) {
    return {
        error: state.error
    };
};

var Container = connect(mapStateToProps)(Search);

export default Container;
