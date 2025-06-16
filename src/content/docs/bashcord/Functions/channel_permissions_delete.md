# channel_permissions_delete
Delete a channel permission overwrite for a user or role in a channel. Only usable for guild channels. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success

Count | Name | Type | Required        
----|----|----|----  
1 | channel_id | Snowflake | True
2 | overwrite_id | Snowflake | True
