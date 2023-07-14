
"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';


function Dashboard() {
    const [todo, setTodo] = React.useState()
    const [todoList, setTodoList] = React.useState([])
    const [disabled, setDisabled] = React.useState()
    const [data, setData] = React.useState()
    const [value, setValue] = React.useState()
    const router = useRouter();



    useEffect(() => {
        const storedTabs = localStorage.getItem('todo')
        if (storedTabs) {
            setTodoList(JSON.parse(storedTabs))
        }


    }, [])
    useEffect(() => {
        const storedTabs = localStorage.setItem('todo', JSON.stringify(todoList))
        if (storedTabs) {
            setTodoList(JSON.parse(storedTabs))
        }

    }, [todoList, data])






    const handleDelete = (i) => {
        let filterData = todoList.filter((k, v) => {
            return v !== i
        })

        setTodoList(filterData)

    }


    return (
        <div>
            <input
                style={{ border: '2px solid gray', borderRadius: '6px' }} type="text" onChange={(e) => {
                    setTodo(e.target.value)
                }} />
            <button style={{ marginLeft: '10px' }} onClick={() => {

                setTodoList((prev) => [
                    ...prev,
                    todo

                ])

            }}>Submit</button>

            <div>


                {todoList?.map((k, i) => {

                    return (
                        <div>
                            <input
                                style={{ border: '2px solid gray', borderRadius: '6px', }} disabled={disabled !== i } type='text' value={todoList[i]} onChange={(e) => {
                                    setValue(e.target.value)


                                }} />
                            <button style={{ marginLeft: '10px', marginTop: '10px', background: 'green', color: 'white', textAlign: 'center' }} onClick={() => {

                                setDisabled(i)
                                setData(() => [
                                    ...todoList,
                                    todoList[i] = value
                                ])

                            }}>{disabled !== i ? 'Edit' : 'Update'}

                            </button>

                            <button style={{ marginLeft: '10px', background: 'red', color: 'white', textAlign: 'center' }} onClick={() => {
                                handleDelete(i)

                            }}>Delete</button>
                        </div>

                    )

                })}

            </div>
            <div style={{ marginTop: '10px', cursor: 'pointer' }} onClick={() => {
                router.push('Placeholder')

            }}>Go Here To See Json List</div>

        </div>
    )
}

export default Dashboard