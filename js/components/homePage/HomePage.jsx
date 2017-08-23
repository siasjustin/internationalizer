import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import actions from '../../actions';
// import map from '../../svgs/maps/usa.svg';
import T from 'i18n-react';
import enUS from "../../locales/en-US";
import esUS from "../../locales/es-US";

import Cookie from 'js-cookie';

// this is where we need to use a reducer I believe
const allData = {
    "en-US": enUS,
    "es-US": esUS,
}
console.log("EN US DATA: ", allData["en-US"]);
console.log("ES US DATA: ", allData["es-US"]);


T.setTexts({
    welcome: "Bienvenido {username}!",
    buttons: {
        exit: "Salir",
        start: "Iniciar"
    }
});

class HomePage extends React.Component {
    constructor(props){
        super(props);
     //   
        this.state = {
            styles:{},
            country:{
                title: `United States of America`,
                description: `The United States of America (USA), commonly known as the United States (U.S.) or America, is a federal republic[19][20] composed of 50 states, a federal district, five major self-governing territories, and various possessions.[fn 6] Forty-eight of the fifty states and the federal district are contiguous and located in North America between Canada and Mexico. The state of Alaska is in the northwest corner of North America, bordered by Canada to the east and across the Bering Strait from Russia to the west. The state of Hawaii is an archipelago in the mid-Pacific Ocean. The U.S. territories are scattered about the Pacific Ocean and the Caribbean Sea, stretching across nine time zones. The extremely diverse geography, climate and wildlife of the United States make it one of the world's 17 megadiverse countries.`,
                leader: {
                  title: `President`,
                  name: `Donald Trump`,
                  description:`President Trump is notoriously the worst leader in American history. The people of USA are sadly experiencing a humiliating time as being the laughingstock of the entire world. While the world is laghing they are also worrying their little asses of because while Trump is a moron, he still has a gigantic military force at his disposal making him the most dangerous person currently on planet earth. `,
                },
                colors: {
                  one: `#2b2a5d`, /* blue */
                  two: `#9e0525`, /* red */
                  three: `#ffffff`  /* white */
                }
            }
        };
        this.props.dispatch(actions.loadHomePageData());
    }
    componentDidMount(){
        console.log("props: ", this.props)
        console.log("COmponent Mounted")
        globals.mountComponent();
     //   this.getData(locale);
        
    }
    componentDidUpdate() {
     //   this.getData();
        console.log("updated");
    }
    componentWillUnmount(){
        globals.unmountComponent();
    }
    getData = (locale) => {
        Cookie.set('locale', locale, { maxAge: (new Date() * 0.001) + (365 * 24 * 3600) });
        console.log("Cookie: ", Cookie.get('locale'));

     //   history.push(myString)

    }
    render() {
        const{country} = this.state;
        let styles = {
            hero: {
                background: country.colors.one,
                padding: `5rem 2rem`,
                color: country.colors.three,
                flag: {
                    border: `1px solid ${country.colors.three}`
                }
            },
            about: {
               color: country.colors.two,
               background: country.colors.three
            },
            leader: {
                background: country.colors.two,
                color: country.colors.three
            },
            main: {
                fontFamily:'Impact',
                fontSpacing: '1.2px'

            }
        }

     //   let country = this.props.country;
        console.log("this.props: ", this.props);

        
        return (
            <div id="homePage" style={styles.main}>
                <DocumentMeta {...meta.homePage} />
                <div className="app" >


                <Link to="/es-US" onClick={this.getData("/es-US")}>Español</Link> 
                <Link to="/en-US" onClick={this.getData("/en-US")}>English</Link>
                <T.a text="buttons.exit" href={`/es-EN/`} />
                    <header className="hero" style={styles.hero}>
                    <h1>{country.title}</h1>
                        {/* <h1>{this.props.intl.formatMessage(messages.header.title)}</h1> */ }
                      <img src='/images/flags/usa.png' className="country-flag" alt="flag" style={styles.hero.flag} />
                    </header>
                      <section className="about container" style={styles.about}>
                        <p>{country.description}</p>
                        <img src={`/images/maps/usa.svg`} className="country-map" alt="map of the united states of america" />
                    </section>
                    <section className="leader" style={styles.leader}>
                        <h2 className="container">{country.leader.title} {country.leader.name}</h2>
                        <div className="container">
                            <img src={"/images/leaders/usa.jpg"} />
                            <p>{country.leader.description} </p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        homePageData: state.homePageData,
        country: state.country,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({actions}, dispatch)
    };
}


export default connect(null, mapStateToProps)(HomePage)
