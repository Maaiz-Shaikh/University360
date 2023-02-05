import React, { useEffect, useState } from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../components/MainScreen'
// import notes from '../../data/notes'
import axios from 'axios';

const MyNotes = () => {

    const [notes, setNotes] = useState([]);

    const deleteHandler = (id) => {
        if (window.confirm("Are you Sure?")) {

        }
    };

    const fetchNotes = async () => {
        const { data } = await axios.get('http://localhost:5000/api/notes');
        setNotes(data);
    }

    useEffect(() => {
        fetchNotes();
    }, [])

    return (
        <div>
            <MainScreen title="Welcome back Ravi Patel...">
                <Link to="/createnode">
                    <Button style={{ margin: 10, marginBottom: 10 }} size="lg">
                        Create New Node
                    </Button>
                </Link>

                {
                    notes.map(note => {
                        return <Card key={note._id}>
                            <Card.Header style={{ display: "flex" }}>
                                <Link to={`/note/${note._id}`} style={{
                                    flex: 1,
                                    cursor: "pointer",
                                    alignSelf: "center",
                                }}>
                                    <span
                                        style={{
                                            color: "black",
                                            textDecoration: "none",
                                            flex: 1,
                                            cursor: "pointer",
                                            alignSelf: "center",
                                            fontSize: 20,
                                        }}
                                    >{note.title}</span></Link>
                                <div>
                                    <Button href={`/note/${note._id}`}>Edit</Button>
                                    <Button variant='danger' className='mx-2'
                                        onClick={() => deleteHandler(note._id)}
                                    >Delete</Button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Badge bg='info'>{note.category}</Badge>
                                <Card.Title>{note.title}</Card.Title>
                                <Card.Text>
                                    {note.content}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    })
                }



            </MainScreen>
        </div >
    )
}

export default MyNotes
