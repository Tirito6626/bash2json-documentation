# channel_permissions_edit 
Edit the channel permission overwrites for a user or role in a channel. Only usable for guild channels. Requires the MANAGE_ROLES permission. Only permissions your bot has in the guild or parent channel (if applicable) can be allowed/denied (unless your bot has a MANAGE_ROLES overwrite in the channel). Returns a 204 empty response on success

Count | Name | Type | Required        
----|----|----|----  
1 | channel_id | Snowflake | True
2 | overwrite_id | Snowflake | True
3 | allow | String | False
4 | deny | String | False
5 | type | Integer | False
