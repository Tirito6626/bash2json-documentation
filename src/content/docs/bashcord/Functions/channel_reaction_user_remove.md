# channel_reaction_user_remove
Deletes another user's reaction. This endpoint requires the MANAGE_MESSAGES permission to be present on the current user. Returns a 204 empty response on success. Fires a Message Reaction Remove Gateway event. The emoji must be URL Encoded or the request will fail with 10014: Unknown Emoji. To use custom emoji, you must encode it in the format name:id with the emoji name and emoji id

Count | Name | Type | Required        
----|----|----|----  
1 | channel_id | Snowflake | True
2 | message_id | Snowflake | True
3 | emoji | Snowflake | True
4 | user_id | Snowflake | True
