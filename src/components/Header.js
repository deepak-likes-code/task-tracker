import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'


const Header = ({ title, toggleAddTask, showAddTask }) => {

    const location = useLocation()


    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    text={!showAddTask ? "Add" : 'Close'}
                    color={!showAddTask ? "green" : 'red'}
                    onClick={toggleAddTask}
                />
            )

            }

        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
