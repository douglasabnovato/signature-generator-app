import React from 'react';

import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';  

export default class Form extends React.Component {
    
    constructor(props) {
        super(props)
    }

    handleChange = (e) => {
        // Quando ele executa essa funcao, ele pega o contexto (this) que eu passei via props e muda o estado dele
        // Quando esse camarada muda o estado, ele esta mudando o estado do contexto que passei via props (contexto pai).
        this.props.context.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        
        let context = this.props.context; 

        return (
            
            <Card className={useStyles.cardForm}>
                
                <CardContent>
                    
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        SIGNATURE INFORMATION
                    </Typography>  
                    
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Full Name" value={props.fullname} onChange={handleChange}/>
                        <TextField id="standard-basic" label="Office" value={props.office} onChange={handleChange}/>
                        <TextField id="standard-basic" label="Site" value={props.site} onChange={handleChange}/>
                        <TextField id="standard-basic" label="Phone" value={props.phone} onChange={handleChange}/>

                        <TextField id="standard-basic" label="Instagram"/> 
                        <TextField id="standard-basic" label="Github" />
                        <TextField id="standard-basic" label="Linkedin"/>                   
                        <TextField id="standard-basic" label="Twitter" /> 
                    </form>
                
                </CardContent>
            
            </Card>                                     
        ); 
    }
}  

const useStyles = makeStyles(theme => ({
    
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 250,
        },
    },
    title: {
        fontSize: 14,
    },
    cardForm: {
        minWidth: 225,
        maxWidth: 1200,
        margin: '20px 5% 20px 5%',//top right bottom left
    }, 

}));