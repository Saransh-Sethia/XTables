import React from 'react'

const Table = ({articleList}) => {
  return (
    <table>
    <thead>
<tr>
    <th>Date</th>
    <th>Views</th>
    <th>Article</th>
</tr>
    </thead>  
    <tbody>
        {
            articleList.map((article,id)=>(
                <tr key={id}>
                    <td>{article.date}</td>
                    <td>{article.views}</td>
                    <td>{article.article}</td>
                </tr>
            ))
        }
    </tbody>
    </table>
  )
}

export default Table
