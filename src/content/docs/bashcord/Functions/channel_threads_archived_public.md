# channel_threads_archived_public 
Returns archived threads in the channel that are public. When called on a GUILD_TEXT channel, returns threads of type PUBLIC_THREAD. When called on a GUILD_ANNOUNCEMENT channel returns threads of type ANNOUNCEMENT_THREAD. Threads are ordered by archive_timestamp, in descending order. Requires the READ_MESSAGE_HISTORY permission

Count | Name | Type | Required        
----|----|----|---- 
1 | channel_id | Snowflake | True 
2 | before | Timestamp | False
3 | limit | Integer | False