import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdFace } from 'react-icons/md';

import api from '../../services/apiCall';

import { Container, SellersList } from './styles';

class ClientHome extends Component {
  state = {
    sellers: [],
    clients: [],
    sessionClient: '',
  };

  async componentDidMount() {
    const [allSellers, allClients] = await Promise.all([
      api.get('/sellers'),
      api.get('/clients'),
    ]);

    const clientsWithFirstName = allClients.data.map(
      client => {
        return {
          ...client,
          firstName: client.name.split(' ')[0],
        };
      }
    );
    const sellersWithFirstName = allSellers.data.map(
      seller => {
        return {
          ...seller,
          firstName: seller.name.split(' ')[0],
        };
      }
    );

    this.setState({
      sellers: clientsWithFirstName,
      clients: sellersWithFirstName,
      sessionClient: clientsWithFirstName[0].firstName,
    });
  }

  handleChangeUser = e => {
    e.preventDefault();

    this.setState({
      sessionClient: e.target.value,
    });
  };

  render() {
    const { sellers, clients, sessionClient } = this.state;

    return (
      <Container>
        <div>
          <strong>Cliente para teste</strong>
          <select
            value={sessionClient}
            onChange={this.handleChangeUser}
          >
            {clients.map(client => (
              <option
                key={client.id}
                value={client.firstName}
              >
                {client.name}
              </option>
            ))}
          </select>
        </div>

        <SellersList>
          {sellers.map(seller => (
            <li key={seller.id}>
              <div className="head">
                <img
                  src={seller.avatar_url}
                  alt="Vendedor"
                />
                <strong>{seller.name}</strong>
              </div>

              <Link
                to={`/chat/client?name=${sessionClient}&room=${seller.firstName}`}
              >
                <button
                  type="submit"
                  onClick={this.openNewTab}
                >
                  <div>
                    <MdFace size={20} />
                  </div>
                  <span>Conversar com vendedor</span>
                </button>
              </Link>
            </li>
          ))}
        </SellersList>
      </Container>
    );
  }
}

export default ClientHome;
