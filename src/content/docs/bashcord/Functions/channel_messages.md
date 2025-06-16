---
title: channel_messages
---
# channel_messages 
Retrieves the messages in a channel. Returns an array of message objects on success.

If operating on a guild channel, this endpoint requires the current user to have the VIEW_CHANNEL permission. If the channel is a voice channel, they must also have the CONNECT permission.

If the current user is missing the READ_MESSAGE_HISTORY permission in the channel, then no messages will be returned

Count | Name | Type | Required        
----|----|----|----  
1 | channel_id | Snowflake | True
2 | json | JSON-Object | False

https://discord.com/developers/docs/resources/channel#get-channel-messages