import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function TodoList(){
    return(
        <List>
            <ListItem>
                <ListItemText primary="プログラミング"></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary="お買い物"></ListItemText>
            </ListItem>
        </List>
    )
};

export default TodoList;