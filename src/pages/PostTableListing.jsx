import React from 'react'
import { Pagination, Table } from 'react-bootstrap'
import { CONSTANTS } from '../components/constants'
import { maxChar } from '../components/utils'

const PostTableListing = (props) => {
  const {posts, colorCode, pickColor} = props
  let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
  return (
    <div>
        <Pagination>{items}</Pagination>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>User ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {posts && colorCode && posts.map((data)=>{
                    return(
                        <tr style={{backgroundColor: pickColor(data.userId) || "white"}}>
                            <td>{data.id}</td>
                            <td>{data.userId}</td>
                            <td>{maxChar(data.title, CONSTANTS.cardMaxDataCount.TITLE)}</td>
                            <td>{maxChar(data.body, CONSTANTS.cardMaxDataCount.BODY)}</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </Table>
    </div>
  )
}

export default PostTableListing