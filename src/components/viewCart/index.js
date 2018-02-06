import React from 'react';
import Flexbox from 'flexbox-react';
import './index.css'
import ShareIconBlack from "../../resources/icons/share - black.svg"; // Path to your icons.svg
import CloseIconsBlack from "../../resources/icons/close - black.svg"; // Path to your icons.svg
import MapMarker from "../../resources/icons/mapMarker.svg"; // Path to your icons.svg
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types'

import OrderedList from "../orderedList";
import EachItem from "../eachItem";
import PreventDoubleTapZoomButton from "../preventDoubleTapZoomButton";


const ViewCart = ({ onOrderItemSelected, onViewChart, onHeaderClose, onItemClick, address, latLang, deliveryTime, recomendedItem }) => (
  <Flexbox flexDirection="column" className="AllContainer">
    <HeaderBlack onHeaderClose={onHeaderClose}/>
    <Flexbox  flexDirection="column" className="ViewCartItemContainer">
      <DeliveryAddress address={address} latLang = {latLang}/>
      <DeliveryTime deliveryTime={deliveryTime}/>
      <Recomendation items={recomendedItem}/>
      <OrderedList onOrderItemSelected={onOrderItemSelected}/>
      <Flexbox className="spacer">
      </Flexbox>
    </Flexbox>
    <Footer onViewChart={onViewChart}/>
  </Flexbox>
)

ViewCart.propTypes = {
  onOrderItemSelected: PropTypes.func.isRequired,
  onViewChart: PropTypes.func.isRequired,
  onHeaderClose: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired,
  latLang: PropTypes.object.isRequired,
  deliveryTime: PropTypes.string.isRequired,
  recomendedItem: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}


const HeaderBlack = ({ onHeaderClose }) => (
  <Flexbox className="ViewCartHeader" justifyContent="space-between">
    <Flexbox onClick={() => onHeaderClose()} className="CloseButton" alignSelf="center">
      <img src={CloseIconsBlack} className="close-logo" alt="close"  width={16} height={16}/>
    </Flexbox>
    <Flexbox className="ShareButton" alignSelf="center">
      <img src={ShareIconBlack} className="share-logo" alt="share"  width={20} height={20}/>
    </Flexbox>
  </Flexbox>
)

HeaderBlack.propTypes = {
  onHeaderClose: PropTypes.func.isRequired,
}


const MapMarkerComponent = () => (<Flexbox className="mapMarker"><img src={MapMarker} className="marker-logo" alt="map"  width={36} height={36}/></Flexbox>)

const createMapOptions = maps => {
    return {
        fullscreenControl: false
    }
}

const DeliveryMap = ({ latLang, zoom }) => (
  <GoogleMapReact
    center={{lat: latLang.lat, lng: latLang.lng}}
    defaultZoom={zoom}
    options={createMapOptions}
    bootstrapURLKeys={{
      key: "AIzaSyCLxT8SuuoiOq5lz3oEj_Vr9115Bwg5TrQ",
      language: 'en',
      region: 'en',
    }}
  >
  <MapMarkerComponent
      lat={latLang.lat}
      lng={latLang.lng}
    />
  </GoogleMapReact>
)

DeliveryMap.propTypes = {
  latLang: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired,
          }).isRequired,
  zoom: PropTypes.number.isRequired,
}

const DeliveryAddress = ({ latLang, address }) => (
  <Flexbox className="deliveryAdressContainer" flexGrow={1}>
    <Flexbox className="mapContainer" width="50%">
      <DeliveryMap latLang = {latLang} zoom = {15}/>
    </Flexbox>
    <Flexbox className="addressContainer" width="50%" flexDirection="column">
      <Flexbox className="addressText addressTextHeader">DELIVERY TO:</Flexbox>
      <Flexbox className="addressText">{address.roadNumber}{" "+address.roadName+" #"}{address.level < 10 ? "0" : null}{address.level}{"-"}{address.unitNumber < 10? "0" : null}{address.unitNumber}</Flexbox>
      <Flexbox className="addressText">{address.country}{" "+address.postalCode}</Flexbox>
    </Flexbox>
  </Flexbox>
)

DeliveryAddress.propTypes = {
  latLang: PropTypes.object.isRequired,
  address: PropTypes.shape({
            roadNumber: PropTypes.number.isRequired,
            roadName: PropTypes.string.isRequired,
            unitNumber: PropTypes.number.isRequired,
            level: PropTypes.number.isRequired,
            country: PropTypes.string.isRequired,
            postalCode: PropTypes.number.isRequired,
          }).isRequired,
}

const DeliveryTime = ({ deliveryTime }) => (
  <Flexbox className="deliveryTimeContainer" flexGrow={1} justifyContent="center">{deliveryTime}
  </Flexbox>
)

DeliveryTime.propTypes = {
  deliveryTime: PropTypes.string.isRequired,
}

const Recomendation = ({ items }) => (
  <Flexbox  flexDirection="column" className="RecommendationContainer">
    <Flexbox className="RecommendationText">People who ordered these items also ordered
    </Flexbox>
    <Flexbox flexGrow={1} flexWrap="wrap">
      {
        items.map((item, index) => (<EachItem name={item.name} uuid={item.uuid}  price={item.price} image={item.image} orderQty={item.orderQty} key={index }/>))
      }
    </Flexbox>
  </Flexbox>
)

Recomendation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    orderQty: PropTypes.number,
  }).isRequired).isRequired,
}


const Footer = ({ onViewChart }) => (
  <PreventDoubleTapZoomButton>
    <Flexbox className="viewChartFooter" justifyContent="center" flexGrow={1}>
      <Flexbox onClick={() => onViewChart()}  className="viewChart" justifyContent="center" flexGrow={1}>
        <Flexbox className="viewChartText" alignSelf="center">
          PLACE ORDER
        </Flexbox>
      </Flexbox>
    </Flexbox>
  </PreventDoubleTapZoomButton>
)

Footer.propTypes = {
  onViewChart: PropTypes.func.isRequired,
}

export default ViewCart;
