---
title: channel_typing
---
# channel_typing 
Post a typing indicator for the specified channel, which expires after 10 seconds. Returns a 204 empty response on success. Fires a Typing Start Gateway event.

Generally bots should not use this route. However, if a bot is responding to a command and expects the computation to take a few seconds, this endpoint may be called to let the user know that the bot is processing their message

Count | Name | Type | Required        
----|----|----|----
1 | channel_id | Snowflake | True
