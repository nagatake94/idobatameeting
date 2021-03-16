import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List } from '@material-ui/core';

import MessageItem from "./MessageItem";
import { messagesRef } from "../firebase";

const useStyles = makeStyles({
    root: {
        gridRow: 1,
        overflow: 'auto',
        width: '100%',
    },
});


const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        messagesRef
        .orderByKey()
        .limitToLast(15)
        .on("value", (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
            const [key, nameAndText] = entry;
            return { key, ...nameAndText};
        });
        setMessages(newMessages);
    });
   
    }, []);
    
    return (<List className={classes.root}>
            {
                messages.map(({key, name, text}) => {
                    return <MessageItem key={key} name={name} text={text}>
                            item
                            </MessageItem>
                })
            }
            </List>);
};

export default MessageList;