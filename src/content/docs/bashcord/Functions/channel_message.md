---
title: channel_message
---
# channel_message 
Retrieves a specific message in the channel. Returns a message object on success.

If operating on a guild channel, this endpoint requires the current user to have the VIEW_CHANNEL and READ_MESSAGE_HISTORY permissions. If the channel is a voice channel, they must also have the CONNECT permission

Count | Name | Type | Required        
----|----|----|----  
1 | channel_id | Snowflake
2 | message_id | Snowflake