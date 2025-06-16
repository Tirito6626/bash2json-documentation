# channel_thread_start 
Creates a new thread that is not connected to an existing message. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters

Count | Name | Type | Required        
----|----|----|---- 
1 | channel_id | Snowflake | True
2 | name | String | True
3 | auto_archive_duration | Integer | False
4 | type | Integer | False
5 | invitable | Boolean | False 
4 | rate_limit_per_user | Integer | False
