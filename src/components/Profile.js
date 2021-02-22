import React, { useState } from 'react';
import DetailsTable from './DetailsTable'
const Profile=()=>{
    const [data,setData] =useState({});
    const [username,setUsername]=useState("");
    const [repositories,setRepositories]=useState([]);

    const OnUsernameGiven=e=>{
        setUsername(e.target.value);
    }

    const OnSubmit=async e=>{
        e.preventDefault();
        const githubProfile=await fetch(`https://api.github.com/users/${username}`);
        const JsonProfile=await githubProfile.json();
        //console.log(JsonProfile);

        const repos=await fetch(JsonProfile.repos_url);
        const repoJson=await repos.json();
        //console.log(repoJson);

        if(JsonProfile){
            setData(JsonProfile);
            setRepositories(repoJson);
        }
    }

    return(
        <div className="container">
            
            <form className="form-inline">  

            <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" value={username} onChange={OnUsernameGiven}/>
            </div>

            <button type="submit" className="btn btn-success" onClick={OnSubmit}>Search</button>
            
            </form>

            <DetailsTable data={data} repo={repositories}/>
        </div>
    )
}

export default Profile;