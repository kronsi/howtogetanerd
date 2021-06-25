import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


class BookDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            book: null,            
            loading: false
        };
        
    }
    componentDidMount(){
        
    }


    onBackPressed = (e) => {
        if(this.props.onBackPressed){
            this.props.onBackPressed();
        }
    }
    

    render(){
        const { classes, book } = this.props;
        const {  } = this.state;        
        

        return (
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} onClick={this.onBackPressed}>
                        Back
                    </Avatar>
                    }                    
                    title={book.title}
                    subheader={book.isbn}
                />
                <img src={book.image} />
                <CardMedia
                    className={classes.media}
                    image={book.image}
                    title={book.title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {book.description}
                    </Typography>
                </CardContent>           
            </Card>
        );
    }
}

export default withStyles(useStyles)(BookDetails)