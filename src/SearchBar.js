import React, { Component,useState } from 'react'
import {store} from './Store'
import {SearchBarContainer} from './Store'
import country from 'i18n-iso-countries';
import { Link, useHistory } from "react-router-dom";




const SearchBar = (props) => {
    let history= useHistory();
    
      
        const [valid, setValid] = useState(true);
        var countries = require("i18n-iso-countries");
        const Search = (con) =>{
            countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
            var countryCon=countries.getAlpha2Code(con, "en");
            
           const apiKey= 'dce13bc676f549fda34d966142cd06c7';
         fetch(`https://newsapi.org/v2/top-headlines?country=${countryCon}&apiKey=${apiKey}`)
         .then( res => res.json()).then(
         (result) => {
           props.refeed([...result.articles]);
           
         }).then(res =>{
            history.push( `/country/${props.location.toLowerCase()}`);
         });
        }
        const checkV= () =>{
            if(!valid){
                return (<div class="alert alert-danger" style={{'width':'200px', 'alignSelf':'center','margin':'auto','marginTop':'1em'}} role="alert">
                The country name you have entered is invalid or unrecognized
              </div>);
            }
            return <div></div>
        }
        
        return (
            <div className="form-group" style={{'margin':'0','width':'100%'}}>
                <form onSubmit={ e =>{
                    e.preventDefault();
                   
                        countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
                        if(countries.getAlpha2Code(props.location, "en") == undefined || countries.getAlpha2Code(props.location, "en") === "" ){
                            setValid(false);
                        
                        }
                        else{
                            setValid(true);
                         Search(props.location);
                        }
                         
                    


                }}
                className="eForm"
                >
                <label className="h4"> <br/>
                    
                </label>
                <input value={props.location}
                    placeholder="Enter country name..."
                    onChange={e=> props.relocation(e.target.value)}
                    
                    className="form-control-lg"
                    style={{'borderRadius':'0.2em','backgroundColor':'white', 'color':'grey','width':'120vm', 'padding-right':'1em','padding-left':'1em'}}
                    
                    
                    
                    />
                <br/>
                
                <button style={{'borderRadius':'0.5em'}} className="btn btn-primary" href={`/country/${props.location}`} id="theB">
                    Search
                </button>
                

                </form>
                {checkV()}
                
            </div>
        );
    
}

export default SearchBar;
