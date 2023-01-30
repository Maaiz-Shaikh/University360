import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../components/MainScreen'

const MyNotes = () => {
    return (
        <div>
            <MainScreen title="Welcome back Ravi Patel...">
                <Link to="/createnode">
                    <Button style={{ margin: 10, marginBottom: 6 }} size="lg">
                        Create New Node
                    </Button>
                </Link>
            </MainScreen>
        </div>
    )
}

export default MyNotes
