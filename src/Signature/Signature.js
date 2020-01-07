import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';  

import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default class Signature extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        // Nesse caso, como estamos pegando o contexto do elemento Pai (Main, this) 
        // é possível manipular um e pegar no outro.
        // Só se imaginar que estão compartilhando o mesmo contexto (this), sendo assim 
        // o mesmo state. Se compartilham o mesmo State, logicamente, é possível 
        // manipular em um e jogar para o outro.
       
        let context = this.props.context;
        return (

            <Card className={classes.cardSignature}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        SIGNATURE EXAMPLE
                    </Typography>
                    <Typography variant="h5" component="h2" >
                        {context.state.fullname}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {context.state.office}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {context.state.phone}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {context.state.site}
                    </Typography>
                    <LinkedInIcon /> <TwitterIcon /> <InstagramIcon /> <GitHubIcon />
                </CardContent>
            </Card>

        );
    }
}

const classes =  {
    root: {
        width: 300,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    bullet: {
        display: 'inline-block !important',
        margin: '0 2px !important',
        transform: 'scale(0.8) !important',
    },
    cardSignature: {

        width: 400,
        minHeight: 170,
        margin: '100px 20px 22px 30% !important', //top right bottom left 
    },
};
