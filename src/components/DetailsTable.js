import React from 'react';

export default function DetailsTable({data,repo}){
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Avatar</th>
                        <th>Location</th>
                        <th>Bio</th>
                        <th>Repositories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.name}</td>
                        <td>{!data.avatar_url?" ":
                        <img className='img-circle' src={data.avatar_url} alt={data.avatar_url}/>}</td>
                        <td>{data.location}</td>
                        <td>{data.bio}</td>
                        <td>{repo.map(repo=>
                            <div key={repo.name}>
                                <a href={repo.html_url}>{repo.name}</a>
                            </div>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

