import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import Books from '../books/Books';
import BookDetails from '../books/BookDetails';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  containerWrapper: {
      height: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});



class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            book: null,            
        };
    }

    componentDidMount(){
        
      
    }

    handleBookClick = (book) => {
        console.log("book2", book);
        this.setState({
            book: book
        })
    }

    handleBackPressed = () => {
        this.setState({
            book: null
        })
    }
    

    render(){
        const {book} = this.state;

        let page = <Books handleClick={this.handleBookClick} />
        
        if(book){
            page = <BookDetails book={book} onBackPressed={this.handleBackPressed} />
        }
        
        return (
           <div>
            {page}
           </div>
        );
    }
}

export default withStyles(useStyles)(Layout)

