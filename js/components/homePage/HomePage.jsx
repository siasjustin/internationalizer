import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import actions from '../../actions';
// import map from '../../svgs/maps/usa.svg';




class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {styles:{}};
    }
    componentDidMount(){
        console.log("props: ", this.props)
        globals.mountComponent();
        
    }
    componentWillUnmount(){
        globals.unmountComponent();
    }
    render() {
        let styles = {

            hero: {
                background: this.props.country.colors.one,
                padding: `5rem 2rem`,
                color: this.props.country.colors.three,
                flag: {
                    border: `1px solid ${this.props.country.colors.three}`
                }
            },
            about: {
               color: this.props.country.colors.two,
               background: this.props.country.colors.three
            },
            leader: {
                background: this.props.country.colors.two,
                color: this.props.country.colors.three
            },
            main: {
                fontFamily:'Impact',
                fontSpacing: '1.2px'

            }
        }

        let country = this.props.country;
        return (
            <div id="homePage" style={styles.main}>
                <DocumentMeta {...meta.homePage} />
                <div className="app" >
                    <header className="hero" style={styles.hero}>
                        <h1>{country.title}</h1>
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
        country: state.country,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
