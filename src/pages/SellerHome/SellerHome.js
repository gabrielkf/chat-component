import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

import api from '../../services/apiCall';
import './SellerHome.css';

const socket = io('https://team13server.herokuapp.com/');

class SellerHome extends Component {
  state = {
    sellers: [],
    currentSeller: '',
    clientOnDemand: false,
  };

  async componentDidMount() {
    const allSellers = await api.get('/sellers');

    const sellersWithFirstName = allSellers.data.map(
      seller => {
        return {
          ...seller,
          firstName: seller.name.split(' ')[0],
        };
      }
    );

    this.setState({
      sellers: sellersWithFirstName,
      currentSeller: sellersWithFirstName[0].firstName,
    });

    this.sellerOnline(sellersWithFirstName[0].firstName);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { currentSeller } = this.state;

  //   if (currentSeller === prevState.currentSeller) {
  //     this.sellerOnline(currentSeller);
  //   }
  // }

  sellerOnline = sellerRoom => {
    socket.emit(
      'join',
      { name: sellerRoom, room: sellerRoom },
      error => {
        if (error) {
          console.error();
        }
      }
    );
  };

  handleChangeSeller = e => {
    e.preventDefault();
    const { value: currentSeller } = e.target.value;

    socket.emit('disconnect');

    this.sellerOnline(currentSeller);

    this.setState({
      currentSeller,
    });
  };

  render() {
    const {
      sellers,
      currentSeller,
      clientOnDemand,
    } = this.state;

    return (
      <div className="outerContainer">
        <select
          value={currentSeller}
          onChange={this.handleChangeSeller}
        >
          {sellers.map(seller => (
            <option
              key={seller.id}
              value={seller.firstName}
            >
              {seller.firstName}
            </option>
          ))}
        </select>
        <div className="innerContainer">
          {clientOnDemand ? (
            <Link
              to={`/chat?name=${currentSeller}&room=${currentSeller}`}
            >
              <button type="submit">
                <span>Atender cliente</span>
              </button>
            </Link>
          ) : (
            <p>Sem clientes no momento</p>
          )}
        </div>
      </div>
    );
  }
}

export default SellerHome;
