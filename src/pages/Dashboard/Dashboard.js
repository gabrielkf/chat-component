import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdFace } from 'react-icons/md';

import api from '../../services/apiCall';
import './Dashboard.css';

class Dashboard extends Component {
  state = {
    sellers: [],
  };

  async componentDidMount() {
    const response = await api.get('/sellers');

    const recommendedSellers = response.data;
    console.log(response);

    this.setState({
      sellers: recommendedSellers,
    });
  }

  render() {
    const { sellers } = this.state;

    return (
      <ul>
        {sellers.map(seller => (
          <li key={seller.id}>
            <div className="head">
              <img src={seller.avatar_url} alt="Vendedor" />
              <strong>{seller.name}</strong>
            </div>

            <Link
              to={`/chat?name=Comprador&room=${seller.name}`}
            >
              <button type="submit">
                <div>
                  <MdFace size={20} />
                </div>
                <span>Conversar com vendedor</span>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Dashboard;
