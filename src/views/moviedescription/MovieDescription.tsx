import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
const useStyles = makeStyles({
    movie: {
        width: '50%',
        border: '3px solid',
        margin: 'auto auto 60px',
        textAlign: 'center',
        backgroundColor: 'grey'
    },
    button: {
        backgroundColor: '#4CAF50',
        border: '1px solid',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        display: 'inline-block',
        fontSize: '16px',
    }
});

const MovieDescription = (props: any) => {
    const history = useHistory();
    const redirectTo = (path: string, name: string) => <div onClick={() => history.push(path)}>{name}</div>;
    const classes = useStyles();
    return (
        <div>
            <NavPanel />
              <div className={classes.movie}>
                <h3>{props.match.params.title}</h3>
                <button className={classes.button}>{redirectTo('/search', 'Powrót')}</button>
            </div>)
        </div>
    );
};

export default MovieDescription;