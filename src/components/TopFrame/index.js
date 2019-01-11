import React from 'react';
import Link from 'next/link';
import './index.scss';
import Button from '../Button';
import SvgButton from '../SvgButton';
import { isConnected } from '../../helpers/commonValues';
import AgendaImage from '../../assets/images/calendar-alt-regular.svg';
import MessageImage from '../../assets/images/envelope-regular.svg';
import ProfileImage from '../../assets/images/user-regular.svg';

export default class TopFrameCo extends React.Component {
  iconList = [
    {
      svg: AgendaImage,
      link: '/agendaPage',
    },
    {
      svg: MessageImage,
      link: '/chatPage',
    },
    {
      svg: ProfileImage,
      link: '/profilePage',
    },
  ]

  render() {
    return (
      <div className="TopFrame">
        <div className="left-side">
          <Link href="/">
            <button type="button" className="logo">
              WeMe
            </button>
          </Link>
          {!isConnected && (
            <div className="event-button-wrapper">
              <Link href="/allEventPage">
                <button type="button" className="event-button">
                  Evenements
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="right-side">
          {!isConnected ? (
            <React.Fragment>
              <div className="button-icons">
                {this.iconList.map(({ svg, link }) => (
                  <Link key={link} href={link}>
                    <SvgButton Svg={svg} />
                  </Link>
                ))}
              </div>
              <div className="deco-button">
                <Button content="Deconnexion" route="/deconnexion" />
              </div>
            </React.Fragment>
          )
            : (
              <div className="connexion">
                <Button content="Connexion" route="/connexion" />
                <Button content="Inscription" route="/inscription" />
              </div>
            )}
        </div>
      </div>
    );
  }
}
