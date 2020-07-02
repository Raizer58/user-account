import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setLogin,
} from '../redux';

import StyleUserAccount from './style.UserAccount';

import ModalWindowSearch from './ModalWindowSearch';

export default () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const historyContactList = JSON.parse(localStorage.getItem(user));
  const [contactList, setcontactList] = useState(historyContactList || {});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contactEditing, setContactEditing] = useState(false);
  const [searchContact, setSearchContact] = useState('');
  const [viewSearch, setViewSearch] = useState(false);

  const submitHandlerContactForm = useCallback((event) => {
    event.preventDefault();

    const contact = {
      firstName,
      lastName,
      organization,
      email,
      phone,
    };

    const allContacts = {
      ...contactList,
    };

    Object.defineProperty(allContacts, phone, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: contact,
    });

    const json = JSON.stringify(allContacts);

    localStorage.setItem(user, json);
    setcontactList(allContacts);
    setContactEditing(false);
    setFirstName('');
    setLastName('');
    setOrganization('');
    setEmail('');
    setPhone('');
  }, [
    contactList,
    email,
    firstName,
    lastName,
    organization,
    phone,
    user,
  ]);

  const submitHandlerSearchForm = useCallback((event) => {
    event.preventDefault();
    setViewSearch(true);
  }, [viewSearch]);

  const handlerButtonEdit = useCallback((userIdentificator) => {
    setContactEditing(true);
    const {
      firstName: firstNameContact,
      lastName: lastNameContact,
      organization: organizationContact,
      email: emailContact,
      phone: phoneContact,
    } = contactList[String(userIdentificator)];

    setFirstName(firstNameContact);
    setLastName(lastNameContact);
    setOrganization(organizationContact);
    setEmail(emailContact);
    setPhone(phoneContact);
  }, [contactList]);

  const handlerButtonRemove = useCallback((userIdentificator) => {
    const allContacts = {
      ...contactList,
    };

    delete allContacts[String(userIdentificator)];

    const json = JSON.stringify(allContacts);

    localStorage.setItem(user, json);
    setcontactList(allContacts);
    setContactEditing(false);
  }, [contactList, user]);

  return (
    <StyleUserAccount>
      {viewSearch
        ? (
          <ModalWindowSearch
            dataSearch={contactList[String(searchContact)]}
            handlerClick={() => setViewSearch(false)}
          />
        )
        : null}
      <p className="user-info">
        <span>{`User ID - ${user}`}</span>
        <button
          type="button"
          onClick={() => {
            dispatch(setLogin(false));
          }}
        >
          Logout
        </button>
      </p>
      <form className="contact-from" onSubmit={submitHandlerContactForm}>
        <p>
          <span>First Name:</span>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </p>
        <p>
          <span>Last Name:</span>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </p>
        <p>
          <span>Organization:</span>
          <input
            type="text"
            value={organization}
            onChange={(event) => setOrganization(event.target.value)}
          />
        </p>
        <p>
          <span>Email:</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </p>
        <p>
          <span>Phone:</span>
          <input
            type="tel"
            value={phone}
            onChange={(event) => {
              const { value } = event.target;
              const phoneNumber = parseFloat(value);
              if (phoneNumber) setPhone(phoneNumber);
              else setPhone('');
            }}
            required
          />
        </p>
        <button type="submit">
          {contactEditing ? 'Confirm' : 'Add contact'}
        </button>
      </form>
      <form className="search-form" onSubmit={submitHandlerSearchForm}>
        <p>
          <span>Search</span>
          <input
            type="text"
            value={searchContact}
            onChange={(event) => {
              const { value } = event.target;
              const searchPhoneNumber = parseFloat(value);
              if (searchPhoneNumber) setSearchContact(searchPhoneNumber);
              else setSearchContact('');
            }}
            required
            placeholder="Enter phone"
          />
          <button type="submit">
          search
          </button>
        </p>
      </form>
      <ul>
        {contactList ? Object.entries(contactList).map((element) => {
          const {
            firstName: firstNameList,
            lastName: lastNameList,
            organization: organizationList,
            email: emailList,
            phone: phoneList,
          } = element[1];
          return (
            <li key={phoneList}>
              <p>
                <span className="name">Name:</span>
                <span className="value">
                  {`${firstNameList} ${lastNameList}`}
                </span>
              </p>
              <p>
                <span className="name">Organization:</span>
                <span className="value">{organizationList}</span>
              </p>
              <p>
                <span className="name">Email:</span>
                <span className="value">{emailList}</span>
              </p>
              <p>
                <span className="name">Pnohe:</span>
                <span className="value">{phoneList}</span>
              </p>
              <button
                type="button"
                onClick={() => handlerButtonEdit(phoneList)}
              >
                Edit contact
              </button>
              <button
                type="button"
                onClick={() => handlerButtonRemove(phoneList)}
              >
                Remove contact
              </button>
            </li>
          );
        })
          : null}
      </ul>
    </StyleUserAccount>
  );
};
