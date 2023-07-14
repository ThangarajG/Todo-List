

import axios from 'axios';
import React from 'react'


function PlaceholderData() {
    const [post, setPost] = React.useState()

    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
            console.log('response', response)
            setPost(response.data);
        }).catch((err) => {
            console.log("err")

        })

    })
    return (
        <div style={{
            display: 'grid',
            height: '100px',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
            gridGap: '20px'

        }}>
            {post?.map((d) => {
                return (
                    <div style={{ padding: '5px' }}>
                        <div>{d.title}</div>
                    </div>
                )

            })}
        </div>
    )

}

export default PlaceholderData