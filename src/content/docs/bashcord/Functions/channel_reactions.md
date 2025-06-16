# channel_reactions
Get a list of users that reacted with this emoji. Returns an array of user objects on success. The emoji must be URL Encoded or the request will fail with 10014: Unknown Emoji. To use custom emoji, you must encode it in the format name:id with the emoji name and emoji id

Count | Name | Type | Required        
----|----|----|----  
1 | channel_id | Snowflake | True
2 | message_id | Snowflake | True
3 | emoji | Snowflake | True
4 | after | Snowflake | False
5 | limit | Integer | False
