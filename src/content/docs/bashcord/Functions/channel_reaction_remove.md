---
title: channel_reaction_remove
---
# channel_reaction_remove
Delete a reaction the current user has made for the message. Returns a 204 empty response on success. Fires a Message Reaction Remove Gateway event. The emoji must be URL Encoded or the request will fail with 10014: Unknown Emoji. To use custom emoji, you must encode it in the format name:id with the emoji name and emoji id

Count | Name | Type | Required        
----|----|----|----  
1 | channel_id | Snowflake | True
2 | message_id | Snowflake | True
3 | emoji | Snowflake | True
4 | user_id | Snowflake or @me | True