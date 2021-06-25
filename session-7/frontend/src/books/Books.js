import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = (theme) => ({
  root: {
    
  },
  table: {
    minWidth: 650,
  },
});


class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],            
            loading: false
        };
        
    }
    componentDidMount(){
        this.getBooks();
    }

    getBooks(){
        this.setState({            
            loading: true,
        })
        axios.get(`http://localhost:3001/books`, {            
        }).then((response) => {            
            console.log("response.data", response.data);
            this.setState({
                books: response.data,
                loading: false
            })
        });
    }

    handleClick = (e, book) => {
        console.log("book1", book);
        if(this.props.handleClick){
            this.props.handleClick(book);
        }
    }

    render(){
        const { classes } = this.props;
        const { books, loading } = this.state;        
        let content;
        let loadingIndicator = "";
        if(loading){
            loadingIndicator = <CircularProgress />;
        }

        if(books && books.length){
            content = 
            <TableContainer component={Paper}>
                <Table stickyHeader className={classes.table} aria-label="ScanList">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Description</TableCell>                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell ><img src={row.image} height="50px" /></TableCell>
                            <TableCell ><a href="#" onClick={((e) => this.handleClick(e, row))} >{row.title}</a></TableCell>
                            <TableCell >{row.description}</TableCell>                            
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        }

        return (
            <div className={classes.root}>  
                {loadingIndicator}
                {content}                        
            </div>
        );
    }
}

export default withStyles(useStyles)(Books)